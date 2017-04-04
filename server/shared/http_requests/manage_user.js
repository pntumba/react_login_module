
import commonValidations from '../validations/signup';
import isEmpty from 'lodash/isEmpty';


const knex = require('../../db/knex');

function validateInput(table, data, otherValidations) {
    let { errors} = otherValidations(data);
    var query = knex(table).select();
    return query.where('email', data.email)
        .first()
        .then(user => {
            if (user) {
                if (user.email === data.email) {
                    errors.email = 'There is user with such email';
                }
            }
            return {
                errors,
                isValid: isEmpty(errors)
            };
        });
}



export function get_user_from_email(table, email){
    knex(table)
        .where('email',email)
        .first()
        .then(user =>{
            if(user){
                res.json({
                    user
                });
            }
            else{
                res.status(400).json(errors);
            }
        }).catch(
            res.status(400).json(errors)
            );
}

export function post_user(table, user){
    validateInput(table, req.body, commonValidations).then(({errors,isValid}) => {
        if (isValid) {
            knex(table).insert(user, 'name')
                .then(names => {
                    const name = names[0];
                    res.json({
                        success: true,
                        name: name,
                        authenticated: true
                    });
                })
                .catch(err => {
                        console.log(err);
                        res.status(500).json(err);
                }) ;
        }
        else {
            res.status(400).json(errors);
        }
    });
}