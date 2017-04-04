import { get_user_from_email, save_user } from '../shared/http_requests/manage_user';

let router = express.Router();
import express from 'express';
const table = 'teachers';

router.get('/:identifier', (req, res) => {
    get_user_from_email(table, req.params.identifier);
});

router.post('/', (req, res) => {
    const user = {
        name : req.body.name,
        password : req.body.password,
        email : req.body.email, 
        sex : req.body.sex, 
        age :  req.body.age
    };
    save_user(table,user);
});

export default router;