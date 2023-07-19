import mongoose from "mongoose";

const Authors = new mongoose.Schema(
    {
        name: {type: String},
        nationality: {type: String}
    },
    {timestamps: true}
)

const authors = mongoose.model('authors', Authors);
export default authors;