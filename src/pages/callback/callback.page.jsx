import { useEffect } from "react";

const Callback = () => {
  useEffect(() => {
    // Check for redirect response (code or token) in the URL
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code"); // OAuth response code
    if (code) {
      console.log("Received OAuth code: ", code);
      // Exchange code for tokens (if needed)
    }
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      Loging you in ...
    </div>
  );
};

export default Callback;
