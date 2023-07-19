import Author from "../models/Authors.js";

class AuthorController {

    static listAuthors = async (req, res) => {
        try {
            const allAuthors = await Author.find();
            res.status(200).send(allAuthors);
        } catch (err) {
            res.status(404).send({message: `List authors error: ${err.message}`})
        }
    }

    static registerAuthor = async (req, res) => {
        const newAuthor = new Author(req.body);
        
        try {
            const saveAuthor = await newAuthor.save();
            res.status(200).send(saveAuthor);
        } catch (err) {
            res.status(500).send({message: `Registor Author ${err.message}`});
        }
    }   

}

export default AuthorController;