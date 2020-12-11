const express = require('express');
const multer = require("multer");
const cors = require("cors");
const path = require('path');
const app = express();


app.use(cors())
app.get('/api/collage', (req, res) => {
    const collage = [
        {id: 1, img: 'Banana Cake.jpg'},
        {id: 2, img: 'Chocolate Cake.jpg'},
        {id: 3, img: 'Melted Lava.jpg'},
        {id: 4, img: 'Cuppachino Cake.jpg'},
        {id: 5, img: 'Crusty Tart.jpg'},
    ];
    res.json(collage);
    
    }); 

    const fileFilter = (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        if(!allowedTypes.includes(file.mimetype)){
            const error = new Error("incorrect file");
            error.code = "INCORRECT_FILETYPE";
    
            return cd(error, false)
        }
        cb(null, true);
    }

    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'images')
        },
        filename: function(req, file, cb) {
            let ext = path.extname(file.originalname);
            cb(null, Date.now() + ext)
        }
    })
    const images = multer({
        storage: storage,
        fileFilter,
        limits:{
            filedSize:500000
        }
    });


const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}!`));


