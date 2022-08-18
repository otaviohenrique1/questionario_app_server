import { Router } from "express";
import { ListarTodasAlternativas, ListarAlternativas, BuscarUmaAlternativa, CriarAlternativa, EdicaoAlternativa, RemoverAlternativa } from "./controller/AlternativaController";
import PerguntaController from "./controller/PerguntaController";

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

routes.get("/questionario", );
routes.get("/:quem_pergunta_id/questionario", );
routes.get("/questionario/:id", );
routes.post("/questionario", );
routes.put("/questionario/:id", );
routes.delete("/questionario/:id", );

routes.get("/quem_pergunta", );
routes.get("/quem_pergunta/login", );
routes.get("/quem_pergunta/:id", );
routes.post("/quem_pergunta", );
routes.put("/quem_pergunta/:id", );
routes.delete("/quem_pergunta/:id", );

routes.get("/quem_responde", );
routes.get("/quem_responde/login", );
routes.get("/quem_responde/:id", );
routes.post("/quem_responde", );
routes.put("/quem_responde/:id", );
routes.delete("/quem_responde/:id", );

export default routes;
