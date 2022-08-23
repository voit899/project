const mongoose = require('mongoose')

const productShelma = new mongoose.Schema({
    name: {
        type: String,
        requre: [true,"name is requred!"],
        trim: true,
        unique: true,
        maxlength: 50
    },
    price: {
        type: Number,
        requre: true,
       
        min: 1
    },
    category: {
        type: String,
        enum:["Art Punk",
            "Alternative Rock",
           "Britpunk",
            "College Rock",
           "Crossover Thrash",
            "Crust Punk (thx Haug)",
            "Emotional Hardcore (emo / emocore)",
           "Experimental Rock",
            "Folk Punk",
            "Goth / Gothic Rock",
            "Grunge",
           "Hardcore Punk",
            "Hard Rock",
            "Indie Rock",
            "Lo-fi",
            "Musique Concrète",
            "New Wave",
           "Progressive Rock",
           "Punk",
            "Shoegaze",
            "Steampunk"],
            require: true,
    },
    size: {
        type: String,
        enum:["small","medium","large"],
        require: true,
        default: "medium"
    },
    image: [String]
});

const Product = mongoose.model('product', productShelma);

module.exports = Product;