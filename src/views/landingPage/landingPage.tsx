import Login from '../../components/Login/login';
import SignUp from '../../components/signUp/signUp';
import './landingPage.css';
import { Routes, Route } from 'react-router-dom';

const LandingPage = (child: any) => {
  console.log('child', child);
  return (
    <div className="login">
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
          {child !== '{}' ? child.props : 'hi'}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
