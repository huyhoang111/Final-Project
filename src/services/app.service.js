// Function Name : App Service


import ApiClientWithToken from "../api";

export default {
  getListUnit() {
    return ApiClientWithToken.get("/v1/cms/units");
  },
  getListCancelType() {
    return ApiClientWithToken.get("/v1/cms/cancel-types");
  },
  getListPermissions() {
    return ApiClientWithToken.get("/v1/cms/permissions");
  },
};
