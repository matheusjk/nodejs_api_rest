import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";



const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.error("Error de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express();
routes(app);

// adicionando os livros 
// app.post("/livros", (req, res) => {
//     livros.push(req.body);
//     res.status(201).send("Livros cadastrado com sucesso!");
// });


// pesquisando um livro por ID
// app.get("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id)
//     res.status(200).json(livros[index])
// });


// pesquisando um livro por ID e alterando o titulo
// app.put("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id)
//     livros[index].titulo = req.body.titulo;

//     res.status(200).json(livros);
// });

// app.delete("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id)
//     livros.splice(index, 1);
//     res.status(200).send("Livro deletado com sucesso!")
// });

export default app;
