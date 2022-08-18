import { Router } from "express";
import { ListarTodasAlternativas, ListarAlternativas, BuscarUmaAlternativa, CriarAlternativa, EdicaoAlternativa, RemoverAlternativa } from "./controller/AlternativaController";
import PerguntaController from "./controller/PerguntaController";
import QuemPerguntaController from "./controller/QuemPerguntaController";
import { QuemRespondeController } from "./controller/QuemRespondeController";
import QuestionarioController from "./controller/QuestionarioController";

const routes = Router();

routes.get("/alternativa", ListarTodasAlternativas);
routes.get("/:quem_pergunta_id/alternativa", ListarAlternativas);
routes.get("/alternativa/:id", BuscarUmaAlternativa);
routes.post("/alternativa", CriarAlternativa);
routes.put("/alternativa/:id", EdicaoAlternativa);
routes.delete("/alternativa/:id", RemoverAlternativa);

const pergunta = new PerguntaController();
routes.get("/pergunta", pergunta.ListarTodas);
routes.get("/:quem_pergunta_id/pergunta", pergunta.ListarUsandoId);
routes.get("/pergunta/:id", pergunta.BuscarUma);
routes.post("/pergunta", pergunta.Criar);
routes.put("/pergunta/:id", pergunta.Edicao);
routes.delete("/pergunta/:id", pergunta.Remover);

const questionario = new QuestionarioController();
routes.get("/questionario", questionario.ListarTodas);
routes.get("/:quem_pergunta_id/questionario", questionario.ListarUsandoId);
routes.get("/questionario/:id", questionario.BuscarUma);
routes.post("/questionario", questionario.Criar);
routes.put("/questionario/:id", questionario.Edicao);
routes.delete("/questionario/:id", questionario.Remover);

const quemPergunta = new QuemPerguntaController();
routes.get("/quem_pergunta", quemPergunta.ListarTodas);
routes.get("/quem_pergunta/login", quemPergunta.Login);
routes.get("/quem_pergunta/:id", quemPergunta.BuscarUma);
routes.post("/quem_pergunta", quemPergunta.Criar);
routes.put("/quem_pergunta/:id", quemPergunta.Edicao);
routes.delete("/quem_pergunta/:id", quemPergunta.Remover);

const quemResponde = new QuemRespondeController();
routes.get("/quem_responde", quemResponde.ListarTodas);
routes.get("/quem_responde/login", quemResponde.Login);
routes.get("/quem_responde/:id", quemResponde.BuscarUma);
routes.post("/quem_responde", quemResponde.Criar);
routes.put("/quem_responde/:id", quemResponde.Edicao);
routes.delete("/quem_responde/:id", quemResponde.Remover);

export default routes;
