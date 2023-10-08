const PostModel = require("../models/postModel");

exports.createPost = async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }

    const post = new PostModel({ title, description })
    post.save()

    if (post) {
        return res.status(200).json({ message: 'Post created successfully', post });
    }
    else {
        return res.status(400).json({ message: "Error happen while creating new post!!try again" });
    }
}

exports.getPost = async (req, res) => {
    const post = await PostModel.findById(req?.params?.id)
    if (!post) {
        return res.status(400).json({ message: 'Invalid post id !!' })
    }
    res.status(200).json({ message: "Post returned successfully !", post });
}

exports.updatePost = async (req, res) => {
    const post = await PostModel.findById(req?.params?.id)
    if (!post) {
        return res.status(400).json({ message: 'Invalid post id !!' })
    }

    const { title, description } = req.body
    if (!title && !description) {
        return res.status(400).json({ message: 'Cannot update post without given title or description' })
    }
    const updatedPost = await PostModel.findByIdAndUpdate(req?.params?.id, { title, description }, { new: true });
    res.status(200).json({ message: "Post updated successfully !", updatedPost });
}

exports.deletePost = async (req, res) => {
    const post = await PostModel.findById(req?.params?.id)
    if (!post) {
        return res.status(400).json({ message: 'Invalid post id !!' })
    }
    const deletedPost = await PostModel.deleteOne({ _id: req?.params?.id })
    if (deletedPost) {
        res.status(200).json({ message: "post deleted successfully!" });
    }
    else {
        res.status(400).json({ message: 'Error happened while deleting post !!try again' })
    }
}