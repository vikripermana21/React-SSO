/* eslint-disable no-undef */
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const handleLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: process.env.REDIRECT_URI,
  });
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
