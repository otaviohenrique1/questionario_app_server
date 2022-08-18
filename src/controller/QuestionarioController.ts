import { NextFunction, Request, Response } from "express";
import { valida_codigo, valida_data_cadastro, valida_data_modificacao_cadastro, valida_quem_pergunta_id, valida_titulo } from "../../utils/schemasValidacao";
import { AppDataSource } from "../data-source";
import { Questionario } from "../entity/Questionario";
import * as Yup from "yup";

export default class QuestionarioController {
  private repository = AppDataSource.getRepository(Questionario);

  /**
   * Listar todas as perguntas nao usando o quem_pergunta_id
   */
  async ListarTodas(request: Request, response: Response, next: NextFunction) {
    const perguntas = await this.repository.find();
    return response.json(perguntas);
  }

  /**
   * Listar todas os questionarios usando o quem_pergunta_id
   */
  async ListarUsandoId(request: Request, response: Response, next: NextFunction) {
    const { quem_pergunta_id } = request.params;
    const perguntas = await this.repository
      .find({ where: { quem_pergunta_id: parseInt(quem_pergunta_id) } });
    return response.status(201).json(perguntas);
  };

  /**
   * Busca uma pergunta usando o id da mesma
   */
  async BuscarUma(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const result = await this.repository.findOneBy({ id: parseInt(id) });
    return response.status(201).send(result);
  }

  /**
   * Criar uma pergunta
   */
  async Criar(request: Request, response: Response, next: NextFunction) {
    const {
      titulo, codigo, data_cadastro, 
      data_modificacao_cadastro, perguntas, quem_pergunta_id
    } = request.body;

    const perguntas_lista = JSON.parse(perguntas);

    const data = {
      titulo, codigo, data_cadastro, data_modificacao_cadastro,
      perguntas: perguntas_lista, quem_pergunta_id
    };

    const valida_criacao_pergunta = Yup
      .object()
      .shape({
        titulo: valida_titulo,
        codigo: valida_codigo,
        valida_quem_pergunta_id: valida_quem_pergunta_id,
        data_cadastro: valida_data_cadastro,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await valida_criacao_pergunta.validate(data, { abortEarly: false })

    const questionario = await this.repository.create(data);

    const result = await this.repository.save(questionario);

    return response.status(201).send(result);
  };

  /**
   * Editar uma pergunta
   */
  async Edicao(request: Request, response: Response, next: NextFunction) {
    // const { id } = request.params;

    const {
      id, titulo, codigo, data_modificacao_cadastro,
      perguntas, quem_pergunta_id
    } = request.body;

    const perguntas_lista = JSON.parse(perguntas);

    const data = {
      titulo, codigo, data_modificacao_cadastro,
      perguntas: perguntas_lista, quem_pergunta_id
    };

    const valida_criacao_pergunta = Yup
      .object()
      .shape({
        titulo: valida_titulo,
        codigo: valida_codigo,
        valida_quem_pergunta_id: valida_quem_pergunta_id,
        data_cadastro: valida_data_cadastro,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await valida_criacao_pergunta.validate(data, { abortEarly: false })

    const user = await this.repository.findOneBy({ id: parseInt(id) });

    this.repository.merge(user, data);

    const results = await this.repository.save(user);

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
