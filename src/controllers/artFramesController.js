import artFrame from "../models/ArtFrames.js"

class ArtFramesController {

    static listArtFrames = async (req, res) => {
        try {
            const frames = await artFrame.find({}).populate('author');
            res.status(200).json(frames);
        } catch (err) {
            res.status(500).send({ message: `error find arts - ${err.message}.` });
        }
    }

    static registerArt = async (req, res) => {
        const art = new artFrame(req.body);

        try {
            const newArt = await art.save()
            res.status(201).send(newArt.toJSON());            
        } catch (err) {
            res.status(500).send({message: `Register art error: ${err.message}`})
        }
    }

    static updateArt = async (req, res) => {
        const id = req.params.id;

        try {
            const artUpdated = await artFrame.findByIdAndUpdate(id, {$set: req.body}, {new: true})
            res.status(200).send(artUpdated.toJSON());
        } catch(err) {
            res.status(500).send({message: `Update art error - ${err.message}`})
        }
    }

    static deleteArt = async (req, res) => {
        const id = req.params.id;

        try {
            const artDeleted = await artFrame.findByIdAndDelete(id)
            res.status(200).send(artDeleted.toJSON());
        } catch(err) {
            res.status(500).send({message: `Delete art error - ${err.message}`})
        }
    }

}

export default ArtFramesController;