/* eslint-disable no-undef */
import axios from "axios";

const exchangeCodeForTokens = async (code) => {
  try {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: "YOUR_REDIRECT_URI", // The same redirect URI as used in the frontend
      grant_type: "authorization_code",
    });

    const { access_token, refresh_token, id_token } = response.data;

    // You now have the access token, refresh token, and ID token.
    console.log("Access Token:", access_token);
    console.log("Refresh Token:", refresh_token);
    console.log("ID Token:", id_token);

    // Store tokens securely and use the access token to make API calls on behalf of the user.
  } catch (error) {
    console.error("Error exchanging code for tokens:", error);
  }
};
