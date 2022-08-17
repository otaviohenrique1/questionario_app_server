import { AppDataSource } from "./data-source";
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

AppDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

const app = express();
app.use(express.json());
app.use(cors);
app.use(routes);

// app.get("/users", async function (req: Request, res: Response) {
//   const users = await AppDataSource.getRepository(User).find()
//   res.json(users)
// })

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

app.listen(3000);
