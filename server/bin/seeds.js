const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/worky')
.then(console.log('We are ready to import data to our Database =)'))
const Item = require("../models/Item");

const items = [
    {
        title: "iMac Apple",
        body: "¡Una experiencia cada vez mejor! La nueva iMac viene con nuevos procesadores" 
    },
    {
        title: "Dell XPS 13",
        body: "Predomina como el mejor portátil que puedes comprar hoy en día." 
    },
    {
        title: "Razer Blade",
        body: "Limitado sólo en tratar de ser un portátil de juego competente." 
    },
    {
        title: "Asus Chrome",
        body: "Comercializado como un Chromebook para competir con Chromebook Pixel." 
    },
    {
        title: "HP Specter x360",
        body: "La versión de 13,3 pulgadas no tiene la ranura para tarjetas SD." 
    }
    ];

Item.collection.drop();
Item.create(items)
.then(()=> {
    console.log("Items Created!!!")
    mongoose.connection.close();
})

    