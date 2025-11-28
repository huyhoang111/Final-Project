// Function Name : Auth Service


import ApiClientWithToken, { LoginClient } from "../api";

export default {
  login(requestBody) {
    return LoginClient.post("/user/login", { ...requestBody });
  },
  forgotPassword(requestBody) {
    return LoginClient.post("/user/forgot-password", { ...requestBody });
  },

  logout() {
    return ApiClientWithToken.post("/logout");
  },
};
