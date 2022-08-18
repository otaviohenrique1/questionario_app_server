import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Alternativa } from "../entity/Alternativa";

export const ListarTodasAlternativas = async function (request: Request, response: Response, next: NextFunction) {
  const alternativas = await AppDataSource
    .getRepository(Alternativa)
    .find();

  response.json(alternativas);
};

export const ListarAlternativas = async function (request: Request, response: Response, next: NextFunction) {
  const { quem_pergunta_id } = request.params;

  const alternativas = await AppDataSource
    .getRepository(Alternativa)
    .find({ where: { quem_pergunta_id: parseInt(quem_pergunta_id) } });

  response.json(alternativas);
};

export const BuscarUmaAlternativa = async function (request: Request, response: Response, next: NextFunction) {
  const { id } = request.params;

  const result = await AppDataSource
    .getRepository(Alternativa)
    .findOneBy({ id: parseInt(id) });

  return response.send(result)
};

export const CriarAlternativa = async function (request: Request, response: Response, next: NextFunction) {
  const alternativas = await AppDataSource
    .getRepository(Alternativa)
    .create(request.body);

  const results = await AppDataSource
    .getRepository(Alternativa)
    .save(alternativas);

  return response.send(results)
};

export const EdicaoAlternativa = async function (request: Request, response: Response, next: NextFunction) {
  const { id } = request.params;

  const alternativas = await AppDataSource
    .getRepository(Alternativa)
    .findOneBy({ id: parseInt(id) });

  AppDataSource
    .getRepository(Alternativa)
    .merge(alternativas, request.body);

  const results = await AppDataSource
    .getRepository(Alternativa)
    .save(alternativas);

  return response.send(results);
};

export const RemoverAlternativa = async function (request: Request, response: Response, next: NextFunction) {
  const { id } = request.params;

  const results = await AppDataSource
    .getRepository(Alternativa)
    .delete(id);

  return response.send(results);
};