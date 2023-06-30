import responder from './../util/responder';

export const getHealth = (req, res) => {
  responder(res, null, 'Email already exists', false);
};
