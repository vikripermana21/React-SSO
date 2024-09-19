import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const handleLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:5173/auth/google/callback",
  });
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
