import { autor } from "../model/Autor.js";
import livro from "../model/Livro.js";


class LivroController {

    static async listarLivros(req, res) {
        try {
            // const listaLivros = await livro.find({});
            const listaLivros = await livro.find({}).populate("autor").exec();
            res.status(200).send(listaLivros);
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na requisição`});
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).send(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na requisição`});
        }
    };


    static async cadastraLivro (req, res) {
        const novoLivro = req.body;

        try {   
            const autorEncontrado = await autor.findById(novoLivro.autor); // trazendo o ID de autor para fazer a busca do autor encontrado
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }; // spreadOperator do JS ...
            const livroCriado = await livro.create(livroCompleto); 
            res.status(201).json({ message: "Criado com sucesso", livro: livroCriado});
    
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar o livro` });
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).send({ message: "Livro atualizado!" });
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na atualização`});
        }
    };


    static async deletaLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).send({ message: "Livro deletado!", livro: id});
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na hora de deletar o livro`});
        }
    };

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora)    
        }catch (erro) {
            res.status(500).json({ message:  `${erro.message} - falha ao buscar por editora`});
        }
    };
};



export default LivroController;