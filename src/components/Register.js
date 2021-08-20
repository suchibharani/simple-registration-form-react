import React from 'react';
import './register.css'

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isValid : {
                isUserNameValid : false,
                isPswValid : false,
                isCPswValid : false 
            },
            username : "",
            password : "",
            confirmPassword : "",
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
    }
    isValidForm(){

    }
    handleChange(e){
            console.log(e);
            var states = this.state
            if(e.target.name == "username"){
                let uname = e.target.value;
                this.setState({username : uname})
                this.setState(prevState => {
                    let validObj = Object.assign({},prevState.isValid )
                    validObj.isUserNameValid = (uname && uname.length <= 8);
                    return validObj;
                })
            }
            if(e.target.name == "password"){
                let psw = e.target.value;
                this.setState({password : e.target.value})
                this.setState(prevState => {
                    let validObj = Object.assign({},prevState.isValid )
                    validObj.isPswValid = (psw && psw.length <= 8);
                    return validObj;
                })
            }
            if(e.target.name == "confirmPassword"){
                var cPsw = e.target.value;

                this.setState({confirmPassword : e.target.value})
                this.setState(prevState => {
                    let validObj = Object.assign({},prevState.isValid )
                    validObj.isPswValid = (cPsw && cPsw === states.confirmPassword);
                    return validObj;
                })
            }
                
    }

    render(){
        var {username,password,confirmPassword,isValid} = this.state;
        return (
            <div className="RegisterComponent">
                <h1>
                    Please Register here
                </h1>
                <div className="mtb">
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                    {username}
                    <div className="error"> </div>
                </div>
                <div className="mtb"> 
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                    {password}
                </div>
                <div className="mtb">
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                    {confirmPassword}
                </div>
                <div>
                    <button value="submit" disabled="disabled"> Submit </button>
                </div>
            </div>
          );

    }
}

export default Register;
