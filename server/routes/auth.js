import express from 'express';
//import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();
const knex = require('../db/knex');

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  var query = knex('users').select().where('email', identifier).first();
  query.asCallback(function(err, user){
      
      if(err != null){
        console.log(err);
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
      if(user){
          if (password === user.password) {
              const token = jwt.sign({
                  id: user.student_id,
                  username: user.name
              }, config.jwtSecret);
              res.json({ token });
          } else {
              res.status(401).json({ errors: { form: 'Invalid Credentials' } });
          }
      }
      else{
              res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
  });
});

export default router;
