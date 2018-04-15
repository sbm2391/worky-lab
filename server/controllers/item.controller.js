const Item = require("../models/Item");

exports.getItems = function(req, res, next) {
    Item.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }
  
exports.postItem = (req, res, next)=>{
    Item.find()
        .then(ItemList => {
            const newItem = new Item({
                title: req.body.title,
                body: req.body.body,
            });
            
            newItem.save()
            .then(item=>res.status(201).json(item))
            .catch(e=>res.status(500).send(e));
        })

}

exports.getItem = (req,res,next)=>{
    Item.findById(req.params.id)
.then(item=>res.status(200).json(item))
.catch(e=>res.status(500).send(e));
}

exports.patchItem = (req,res,next)=>{
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true})
.then(item=>res.status(200).json(item))
.catch(e=>res.status(500).send(e));
}

exports.deleteItem = (req,res,next)=>{
    Item.findByIdAndRemove(req.params.id)
.then(item=>res.status(200).json(item))
.catch(e=>res.status(500).send(e));
}