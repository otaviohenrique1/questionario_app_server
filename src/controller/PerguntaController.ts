import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Pergunta } from "../entity/Pergunta";
import * as Yup from "yup";
import { valida_texto, valida_tipo, valida_resposta, valida_codigo, valida_data_cadastro, valida_data_modificacao_cadastro } from "../../utils/schemasValidacao";

export default class PerguntaController {
  private repository = AppDataSource.getRepository(Pergunta);

  /**
   * Listar todas as perguntas nao usando o quem_pergunta_id
   */
  async ListarTodas(request: Request, response: Response, next: NextFunction) {
    const perguntas = await this.repository.find();
    return response.json(perguntas);
  }

  /**
   * Listar todas as perguntas usando o quem_pergunta_id
   */
  async ListarUsandoId(request: Request, response: Response, next: NextFunction) {
    const { quem_pergunta_id } = request.params;
    const perguntas = await this.repository
      .find({ where: { quem_pergunta_id: parseInt(quem_pergunta_id) } });
    return response.json(perguntas);
  };

  /**
   * Busca uma pergunta usando o id da mesma
   */
  async BuscarUma(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const result = await this.repository.findOneBy({ id: parseInt(id) });
    return response.send(result);
  }

  /**
   * Criar uma pergunta
   */
  async Criar(request: Request, response: Response, next: NextFunction) {
    const {
      texto,
      tipo,
      resposta,
      codigo,
      data_cadastro,
      data_modificacao_cadastro,
      alternativas,
      quem_pergunta_id,
      questionario_id
    } = request.body;

    const alternativas_lista = JSON.parse(alternativas);

    const data = {
      texto,
      tipo,
      resposta,
      codigo,
      data_cadastro,
      data_modificacao_cadastro,
      alternativas: alternativas_lista,
      quem_pergunta_id,
      questionario_id
    };

    const valida_criacao_pergunta = Yup
      .object()
      .shape({
        texto: valida_texto,
        tipo: valida_tipo,
        resposta: valida_resposta,
        codigo: valida_codigo,
        data_cadastro: valida_data_cadastro,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await valida_criacao_pergunta.validate(data, { abortEarly: false })

    const user = await this.repository.create(data);
    const results = await this.repository.save(user);
    return response.status(201).send(results);
  };

  /**
   * Editar uma pergunta
   */
  async Edicao(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const user = await this.repository.findOneBy({ id: parseInt(id) });
    this.repository.merge(user, request.body);
    const results = await this.repository.save(user);
    return response.send(results);
  };

  /**
   * Remover uma pergunta
   */
  async Remover(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const results = await this.repository.delete(id);
    return response.send(results);
  };
}
