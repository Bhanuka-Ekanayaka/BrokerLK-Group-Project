// authUtils.js (or any appropriate name)
import { jwtDecode } from 'jwt-decode';

export const Usertoken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token);
    return {
      userid : decodedToken.userid,
      username: decodedToken.username,
      email: decodedToken.email,
      jobrole: decodedToken.jobrole,
      loginflag: decodedToken.loginflag
    };
  }
  return null;
};

export default Usertoken;