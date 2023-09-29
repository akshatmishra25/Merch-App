import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name : { type: String, required: true},
    product : { type: String, required: true},
    price : { type: String, required: true},
})

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;