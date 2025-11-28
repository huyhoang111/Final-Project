// Function Name : Source Service

import ApiClientWithToken, { formDataClientWithToken } from "../api";
import { getParamsHelp } from "../hook/useApp";

export default {
  getListSource(params = {}) {
    return ApiClientWithToken.get(
      `/v1/cms/sources?${getParamsHelp(params)}`
    );
  },
};
