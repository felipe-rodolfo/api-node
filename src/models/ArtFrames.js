import mongoose from "mongoose";

const ArtFrameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors' },
        description: {type: String, required: true}
    },
    {timestamps: true, collection: 'arts'}
)

const artFrames = mongoose.model('arts', ArtFrameSchema);
export default artFrames;