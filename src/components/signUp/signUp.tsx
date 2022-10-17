import '../../components/Login/login.css';
import '../../components/signUp/signUp.css';
import { useState } from 'react';

const SignUp = () => {
  type usersType = { mobileNo: number; mPin: number };
  const [togglePass, setTogglePass] = useState(false);

  const togglePassword = () => {
    setTogglePass(!togglePass);
  };

  const signUpHandler = (e: any) => {
    e.preventDefault();

    const mobileNo: number = e.target.mobileNo.value;
    const newMPin: number = e.target.newMPin.value;
    const confirmMpin: number = e.target.confirmMPin.value;

    const userData = { mobileNo, mPin: newMPin };

    const previousData: usersType[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );

    console.log('userData', previousData);

    if (previousData.length > 0 && userData.mobileNo) {
      for (let i = 0; i < previousData.length; i++) {
        if (previousData[i].mobileNo === userData.mobileNo) {
          break;
        } else {
          console.log(previousData[i].mobileNo, mobileNo);
          previousData.push(userData);
          break;
        }
      }
      localStorage.setItem('users', JSON.stringify(previousData));
    } else {
      localStorage.setItem(
        'users',
        JSON.stringify([{ mobileNo: '9945810342', mPin: '9945' }])
      );
    }
  };

  return (
    <div className="loginPage">
      <div className="signUpFormTitle">SIGN UP</div>
      <div className="loginFormBody">
        <form onSubmit={signUpHandler}>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="Enter Mobile Number"
              name="mobileNo"
            />
            <div className="loginPW">
              <input
                type="text"
                className="input"
                placeholder="Enter 4 Digit MPin"
                minLength={4}
                maxLength={4}
                name="newMPin"
              />
            </div>
            <div className="loginPW">
              <input
                type={togglePass ? 'text' : 'password'}
                className="input"
                placeholder="MPin"
                minLength={4}
                maxLength={4}
                name="confirmMPin"
              />
              <img
                src={require('../../assets/icons/eye_on.png')}
                alt="Password Eye"
                className="eyeIcon"
                onClick={togglePassword}
              />
            </div>
          </div>

          <div className="signUnButton">
            <button>SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
