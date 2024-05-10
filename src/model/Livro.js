import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {type: mongoose.Schema.Types.String, require: true },
    editora: {type: String },
    preco: {type: Number },
    paginas: {type: Number },
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    // autor: autorSchema

}, { versionKey: false});

const livro = mongoose.model("livros", livroSchema);


export default livro;


