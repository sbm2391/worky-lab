const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/worky')
.then(console.log('We are ready to import data to our Database =)'))
const Item = require("../models/Item");

const items = [
    {
        title: "iMac Apple de 21.5",
        body: "¡Una experiencia cada vez más brillante! La nueva iMac viene con nuevos procesadores, lo último en tecnología gráfica, almacenamiento innovador y conectividad con mayor ancho de banda" 
    },
    {
        title: "Dell XPS 13",
        body: "El Dell XPS 13 predomina como el mejor portátil que puedes comprar hoy en día." 
    },
    {
        title: "Razer Blade Stealth",
        body: "El Razer Blade Stealth es un Ultrabook excepcional, limitado sólo en tratar de ser un portátil de juego competente. " 
    },
    {
        title: "Asus Chromebook Flip",
        body: "Originalmente comercializado como un Chromebook para competir con los gustos del Chromebook Pixel, no es difícil ver por qué estábamos escépticos respecto al primer Asus Chromebook Flip que revisamos." 
    },
    {
        title: "HP Specter x360",
        body: "La versión de 13,3 pulgadas de la HP Specter x360 puede no tener la ranura para tarjetas SD de su hermana de 15,6 pulgadas." 
    }
    ];
Item.collection.drop();
Item.create(items)
.then(()=> {
    console.log("Items Created!!!")
    mongoose.connection.close();
})

    