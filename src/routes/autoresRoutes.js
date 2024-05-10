import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", autorController.listarAutores);
routes.get("/autor/:id", autorController.listarAutorPorId);
routes.post("/autor", autorController.cadastraAutor);
routes.put("/autor/:id", autorController.atualizarAutor);
routes.delete("/autor/:id", autorController.deletaAutor);

export default routes;