const responder=require("./../util/responder")
const getHealth = (req, res) => {
  responder(res, null, 'Email already exists', false);
};

module.exports=getHealth
