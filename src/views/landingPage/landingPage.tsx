import Login from '../../components/Login/login';
import SignUp from '../../components/signUp/signUp';
import './landingPage.css';
import { Routes, Route } from 'react-router-dom';
import SnackBar from '../../components/snackBar/snackBar';
import { useEffect, useState } from 'react';

const LandingPage = (child: any) => {
  const [displaySnackBar, setDisplaySnackBar] = useState(false);

  useEffect(() => {
    setDisplaySnackBar(Boolean(sessionStorage.getItem('signUpSuccess')));
    sessionStorage.removeItem('signUpSuccess');
  }, []);

  setInterval(() => {
    setDisplaySnackBar(false);
  }, 2000);

  return (
    <div className="login">
      {displaySnackBar ? (
        <SnackBar message="Congrats!!! Success, Signin to access the vault" />
      ) : (
        ''
      )}

      <div className="loginContainer">
        <div className="loginLogoContainer">
          <div className="loginLogo">
            <img
              src={require('../../assets/images/logo.png')}
              alt="Login Logo"
            />
          </div>
          <div className="loginLogoBody">
            Protect & Manage every password in your business
          </div>
        </div>
        <div className="loginForm">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
          {child !== '{}' ? child.props : ''}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
