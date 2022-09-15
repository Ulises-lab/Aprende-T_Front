import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import RecoverPasswd from "../pages/RecoverPass";
import FormVideo from '../pages/FormVideo';
import UserProfile from "../pages/UserProfile";


const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.RECOVERPASSWORD,
      element:<RecoverPasswd/>
    },
    {},
    {
      path: PATHS.FORMVIDEO,
      element:<FormVideo/>
    },
    {
      path: PATHS.USERPROFILE,
      element:<UserProfile user={user}/>
    },
    {}
  ];
};

export default routes;
