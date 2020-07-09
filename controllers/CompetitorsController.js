const Competitors = require('../models/Competitors')

exports.registerCompetitor = async function (req, res, next) {
  const data = { ...req.body };

  if(data.random!=='secret'|| data.empty!==""){
    return next({ type: "custom", title:'spam',message:'Somthing went wrong!' });

  }
  
  const user = new Competitors(data);

  try {
    const reuslt = await user.save();

    return res.status(200).json({ reuslt });
  } catch (err) {
    return next({ type: "mongoose", err });
  }
};
