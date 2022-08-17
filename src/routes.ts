import { Router } from "express";
import { ListarTodasPerguntas, ListarPerguntas, BuscarUmaAlternativa, CriarAlternativa, EdicaoAlternativa, RemoverAlternativa } from "./controller/AlternativaController";

const routes = Router();

routes.get("/alternativa", ListarTodasPerguntas);
routes.get("/:quem_pergunta_id/alternativa", ListarPerguntas);
routes.get("/alternativa/:id", BuscarUmaAlternativa);
routes.post("/alternativa", CriarAlternativa);
routes.put("/alternativa/:id", EdicaoAlternativa);
routes.delete("/alternativa/:id", RemoverAlternativa);

routes.get("/pergunta", );
routes.get("/:quem_pergunta_id/pergunta", );
routes.get("/pergunta/:id", );
routes.post("/pergunta", );
routes.put("/pergunta/:id", );
routes.delete("/pergunta/:id", );

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
