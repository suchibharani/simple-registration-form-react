import React from 'react';
import './register.css'

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            errors: {},
            username : "",
            password : "",
            confirmPassword : "",
            enableSubmit : true
        }

        this.handleChange = this.handleChange.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
    }
    isValidForm(){
        var {username,password,confirmPassword } = this.state;
        let errors = {};
        if(username == "" || (username.length == 0 || username.length < 8)){
            errors["name"] = true
        }else{
            errors["name"] = false
        }
        if(password  == "" ||  ( password.length == 0 || password.length < 8)){
            errors["password"] = true
        }else{
            errors["password"] = false
        }
        if(confirmPassword  == "" || ( confirmPassword.length == 0 || confirmPassword != password)){
            errors["confirmPassword"] = true
        }else{
            errors["confirmPassword"] = false
        }
        var formIsValid = Object.keys(errors).every(function(k){ return errors[k] === false });
        
        this.setState({errors : errors})
        this.setState({enableSubmit : !formIsValid})
    }
    
    handleChange(e){
            var states = this.state
            if(e.target.name == "username"){
                this.setState({username : e.target.value})
            }
            if(e.target.name == "password"){
                this.setState({password : e.target.value})
            }
            if(e.target.name == "confirmPassword"){
                this.setState({confirmPassword : e.target.value})
            }
            setTimeout(
                function() {
                    this.isValidForm();
                }
                .bind(this),
                1000
            );
            
                
    }

    render(){
        var {username,password,confirmPassword,errors,enableSubmit} = this.state;
    
        return (
            <div className="RegisterComponent">
                <h1>
                    Please Register here
                </h1>
                <div className={`error ${errors && errors.confirmPassword ? "" : "hide"}`} > confirm password should be equal to the password
</div>
                <div className={`error ${errors && errors.password  ? "" : "hide"}`} >password should be 8 characters and above</div>
                <div className={`error ${errors && errors.name ? "" : "hide"}`} > username must be 8 characters and above</div>
               
                <div className="mtb">
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                    
                 </div>
                <div className="mtb"> 
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                    
                </div>
                <div className="mtb">
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                   
                </div>
                <div>
                    <button value="submit" disabled={enableSubmit}> Submit </button>
                </div>
            </div>
          );

    }
}

export default Register;
