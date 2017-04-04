import React, {Component} from 'react';
import timezone from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import {browserHistory} from 'react-router';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "", 
            email : "",
            password: "", 
            passwordConfirmation: "", 
            sex : "",
            age : "",
            timezone: "",
            isLoading : false,
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if(this.isValid()){
            this.props.userSignupRequest(this.state).then(
            () => {
                this.props.addFlashMessageAction({
                    type: 'success',
                    text : 'You have signed up successfully. Welcome'
                });
                this.props.showSignup(false);
                this.context.router.push('/');
            }).catch(error => {
                            this.setState({errors: error.data, isLoading :false});} );
            /*this.context.router.push('/');
            if (this.isValid()) {
                this.setState({ errors: {}, isLoading: true });
                this.props.login(this.state).then(
                    (res) => this.context.router.push('/'),
                    (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
                );
            }*/
            }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
  
    render() {
        const {errors} = this.state;
        const options =map(timezone, (value,key) => 
                <option key={value} value={value}>{key}</option>);
        return (
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.username}
                    field="username"
                    />

                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.email}
                    field="email"
                    />

                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                    />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Password Confirmation"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                    />
                    
                <TextFieldGroup
                    error={errors.sex}
                    label="Sex"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.sex}
                    field="sex"
                    />
                    
                <TextFieldGroup
                    error={errors.age}
                    label="Age"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.age}
                    field="age"
                    />

                <div className={classnames("form-group", { 'has-error': errors.timezone })}>
                    <label className="control-label">Timezone</label>
                    <select
                        className="form-control"
                        name="timezone"
                        onChange={this.onChange}
                        value={this.state.timezone}
                        >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>
                
                <div className="form-group"><input type="submit" disabled={this.state.isLoading}  className="form-control btn btn-primary btn-lg" value="Sign Up" readOnly="true"/></div>
            </form>
        );
    }
}


SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessageAction: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default SignupForm;