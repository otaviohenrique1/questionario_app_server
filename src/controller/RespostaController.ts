import { NextFunction, Request, Response } from "express";
import { valida_nome, valida_email, valida_senha, valida_usuario, valida_quem_responde_id, valida_questionario_id } from "../../utils/schemasValidacao";
import { AppDataSource } from "../data-source";
import * as Yup from "yup";
import { Resposta } from "../entity/Resposta";

export class RespostaController {
  private repository = AppDataSource.getRepository(Resposta);

  /**
   * Listar todas as respostas
   */
   async ListarTodas(request: Request, response: Response, next: NextFunction) {
    const respostaLista = await this.repository.find();
    return response.json(respostaLista);
  }

  /**
   * Listar todas as respostas usando o quem_responde_id e o questionario_id
   */
  async ListarTodasPorQuemRespondeId(request: Request, response: Response, next: NextFunction) {
    const { quem_responde_id, questionario_id } = request.params;
    const respostaLista = await this.repository.find({
      where: {
        quem_responde_id: Number(quem_responde_id),
        questionario_id: Number(questionario_id),
      }
    });
    return response.json(respostaLista);
  }

  /**
   * Busca uma resposta usando o id da mesma
   */
  async BuscarUma(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const result = await this.repository.findOneBy({ id: parseInt(id) });
    return response.status(201).send(result);
  }

  /**
   * Criar uma resposta
   */
  async Criar(request: Request, response: Response, next: NextFunction) {
    const { quem_responde_id, questionario_id, questionario_respostas } = request.body;

    const data = { quem_responde_id, questionario_id, questionario_respostas };

    const validaResposta = Yup
      .object()
      .shape({
        quem_responde_id: valida_quem_responde_id,
        questionario_id: valida_questionario_id,
      });

    await validaResposta.validate(data, { abortEarly: false })

    const resposta = await this.repository.create(data);

    const result = await this.repository.save(resposta);

    return response.status(201).send(result);
  };

  /**
   * Editar uma pergunta
   */
  async Edicao(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const { quem_responde_id, questionario_id, questionario_respostas } = request.body;

    const data = { quem_responde_id, questionario_id, questionario_respostas };

    const validaResposta = Yup
      .object()
      .shape({
        quem_responde_id: valida_quem_responde_id,
        questionario_id: valida_questionario_id,
      });

    await validaResposta.validate(data, { abortEarly: false })

    const resposta = await this.repository.findOneBy({ id: parseInt(id) });

    this.repository.merge(resposta, data);

    const results = await this.repository.save(resposta);

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
