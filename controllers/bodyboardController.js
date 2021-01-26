const Bodyboard = require("../models/bodyboard");

// bodyboard_index, bodyboard_details, bodyboard_create_get, bodyboard_create_post, bodyboard_delete

const bodyboard_index = async (req, res) => {
  const bodyboards = await Bodyboard.find({});
  res.render("articles/bodyboard", { bodyboards: bodyboards });
};

const bodyboard_create_post = (req, res) => {
  const newBodyboard = new Bodyboard({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
  });

  newBodyboard.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log(err);
  });
};

module.exports = {
  bodyboard_index,
  bodyboard_create_post,
};
