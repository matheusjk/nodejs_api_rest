import { autor } from "../model/Autor.js"; // exportação de uma lista de modulo temos que referenciar isso usando o { }



class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).send(listaAutores);
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na requisição`});
        }
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).send(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na requisição`});
        }
    };


    static async cadastraAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor});
    
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar o autor` });
        }
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).send({ message: "Autor atualizado!" });
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na atualização`});
        }
    };


    static async deletaAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).send({ message: "Autor deletado!", autor: id});
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha na hora de deletar autor`});
        }
    };
};



export default AutorController;