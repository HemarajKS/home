import './login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [togglePass, setTogglePass] = useState(false);

  const togglePassword = () => {
    setTogglePass(!togglePass);
  };

  return (
    <div className="loginPage">
      <div className="loginFormTitle">SIGN IN TO YOUR ACCOUNT</div>
      <div className="loginFormBody">
        <form>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="Mobile Number" />
            <div className="loginPW">
              <input
                type={togglePass ? 'text' : 'password'}
                className="input"
                placeholder="MPin"
              />
              <img
                src={require('../../assets/icons/eye_on.png')}
                alt="Password Eye"
                className="eyeIcon"
                onClick={togglePassword}
              />
            </div>
          </div>
          <div className="forgotPassword">
            <div>Forgot your password?</div>
          </div>
          <div className="signInButton">
            <button>SIGN IN</button>
          </div>
        </form>
      </div>
      <div className="signUpLink">
        <div>
          {' '}
          Don’t have a Account? <Link to="/signUp"> SIGNUP</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
