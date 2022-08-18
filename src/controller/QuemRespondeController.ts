import { NextFunction, Request, Response } from "express";
import { valida_nome, valida_email, valida_senha, valida_usuario } from "../../utils/schemasValidacao";
import { AppDataSource } from "../data-source";
import { QuemResponde } from "../entity/QuemResponde";
import * as Yup from "yup";

export class QuemRespondeController {
  private repository = AppDataSource.getRepository(QuemResponde);

  /**
   * Listar todas as perguntas nao usando o quem_pergunta_id
   */
  async ListarTodas(request: Request, response: Response, next: NextFunction) {
    const quemRespondeLista = await this.repository.find();
    return response.json(quemRespondeLista);
  }

  /**
   * Busca uma pergunta usando o id da mesma
   */
  async BuscarUma(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const result = await this.repository.findOneBy({ id: parseInt(id) });
    return response.status(201).send(result);
  }

  /**
   * Login
   */
  /* Arrumar */
  async Login(request: Request, response: Response, next: NextFunction) {
    const { email, senha } = request.body;
    const quemPerguntaLista = await this.repository.findOneOrFail({
      where: { email, senha }
    }).then((item) => {
      return response.status(201).json(item);
    }).catch((error) => {
      return response.status(404).json({ message: "nao encontrado", error })
    });
    return quemPerguntaLista;
  }

  /**
   * Criar uma pergunta
   */
  async Criar(request: Request, response: Response, next: NextFunction) {
    const { nome, email, senha, usuario, codigo } = request.body;

    const data = { nome, email, senha, usuario, codigo };

    const validaCriacaoQuemPergunta = Yup
      .object()
      .shape({
        nome: valida_nome,
        email: valida_email,
        senha: valida_senha,
        usuario: valida_usuario,
      });

    await validaCriacaoQuemPergunta.validate(data, { abortEarly: false })

    const quemPergunta = await this.repository.create(data);

    const result = await this.repository.save(quemPergunta);

    return response.status(201).send(result);
  };

  /**
   * Editar uma pergunta
   */
  async Edicao(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const { /* id, */ nome, email, senha, usuario } = request.body;

    const data = { nome, email, senha, usuario };

    const validaEdicaoQuemPergunta = Yup
      .object()
      .shape({
        nome: valida_nome,
        email: valida_email,
        senha: valida_senha,
        usuario: valida_usuario,
      });

    await validaEdicaoQuemPergunta.validate(data, { abortEarly: false })

    const quemPergunta = await this.repository.findOneBy({ id: parseInt(id) });

    this.repository.merge(quemPergunta, data);

    const results = await this.repository.save(quemPergunta);

    return response.status(201).send(results);
  };

  /**
   * Remover uma pergunta
   */
  async Remover(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const results = await this.repository.delete(id);
    return response.status(201).send(results);
  };
}
