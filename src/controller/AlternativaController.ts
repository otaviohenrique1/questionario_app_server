import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Alternativa } from "../entity/Alternativa";

const ListarPerguntas = async function (request: Request, response: Response) {
  const { quem_pergunta_id } = request.params;
  const alternativas = await AppDataSource
    .getRepository(Alternativa)
    .find({
      where: {
        quem_pergunta_id: parseInt(quem_pergunta_id)
      }
    })
  response.json(alternativas)
}

// app.get("/users/:id", async function (req: Request, res: Response) {
//   const results = await AppDataSource.getRepository(User).findOneBy({
//       id: parseInt(req.params.id),
//   })
//   return res.send(results)
// })

// app.post("/users", async function (req: Request, res: Response) {
//   const user = await AppDataSource.getRepository(User).create(req.body)
//   const results = await AppDataSource.getRepository(User).save(user)
//   return res.send(results)
// })

// app.put("/users/:id", async function (req: Request, res: Response) {
//   const user = await AppDataSource.getRepository(User).findOneBy({
//       id: parseInt(req.params.id),
//   })
//   AppDataSource.getRepository(User).merge(user, req.body)
//   const results = await AppDataSource.getRepository(User).save(user)
//   return res.send(results)
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//   const results = await AppDataSource.getRepository(User).delete(req.params.id)
//   return res.send(results)
// })