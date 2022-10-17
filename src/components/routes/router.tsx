import { Routes, Route } from 'react-router-dom';
import Home from '../../views/home/home';
import LandingPage from '../../views/landingPage/landingPage';
import Login from '../Login/login';
import SignUp from '../signUp/signUp';

const Router = () => {
  let auth = true;
  const protectedRouting = (path: string, component: JSX.Element) => {
    return (
      <Route
        path={path}
        element={auth && auth ? component : <LandingPage props={<Login />} />}
      />
    );
  };
  return (
    <Routes>
      <Route path="/landing/*" element={<LandingPage />}>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
      {protectedRouting('*', <Home />)}
    </Routes>
  );
};

export default Router;
