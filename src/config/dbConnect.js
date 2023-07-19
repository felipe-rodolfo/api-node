import mongoose from "mongoose";

mongoose.connect('mongodb+srv://feliperold:hpXt5iNU74ADNpJm@artframes.gpmjnip.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
export default db;