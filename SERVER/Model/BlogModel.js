const mongoose = require("mongoose");

// Defining Blog Post Schema
const BlogSchema = new mongoose.Schema({
    authorEmail: {
        type: String,
        required: [true, "Email of author is requried"],
        trim: true,
    },
    authorName: {
        type: String,
        required: [true, "Author's Name is required"],
        trim: true,
    },
    title: {
        type: String,
        required: [true, "Blog must have a title"],
        unique: [true, "Blog title must be unique"],
        trim: true,
        minLenght: [20, "Blog title is two short"],
        maxLength: [300, "Blog title is too long"],
    },
    description: {
        type: String,
        required: [true, "description must have a description"],
    },
    blogBG: {
        type: file, // see later
    },
    tags: {},
});