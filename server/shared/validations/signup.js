
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};

    if (Validator.isNull(data.email)){
        errors.email = 'This field is required';
    }
    if (Validator.isNull(data.username)){
        errors.username = 'Name is required';
    }
    if (!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if (Validator.isNull(data.password)){
        errors.password = 'This field is required';
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)){
        errors.password = 'Pawword must match';
    }
    if (Validator.isNull(data.timezone)){
        errors.timezone = 'This field is required';
    }
    return {
        errors, 
        isValid: isEmpty(errors)
    }
}