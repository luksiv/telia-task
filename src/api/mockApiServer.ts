import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { getBaseApiUrl } from "./getBaseApiUrl.ts";
import { ApiContract } from "./ApiContract.ts";
import {
  MOCK_getAllMountains,
  MOCK_getMountain,
} from "./mockApiServer.data.ts";

export const mockApiServer = setupServer();

mockApiServer.listen({
  onUnhandledRequest: "warn",
});

mockApiServer.listen();

// export const stopMockApiServer = () => {
//   mockApiServer.close();
// };

const url = (path: string) => {
  return `${getBaseApiUrl()}${path}`;
};

export const mockApiHandlers = [
  http.get(url(ApiContract.MountainsApiContract.Paths.getAllMountains), () =>
    HttpResponse.json(MOCK_getAllMountains),
  ),
  http.post(url(ApiContract.MountainsApiContract.Paths.createMountain), () =>
    HttpResponse.json(MOCK_getMountain),
  ),
  http.get(url(ApiContract.MountainsApiContract.Paths.getMountain("10")), () =>
    HttpResponse.json(MOCK_getMountain),
  ),
  http.patch(
    url(ApiContract.MountainsApiContract.Paths.patchMountain("10")),
    () => HttpResponse.json(MOCK_getMountain),
  ),
  http.delete(
    url(ApiContract.MountainsApiContract.Paths.deleteMountain("10")),
    () => HttpResponse.json(MOCK_getMountain),
  ),
];

export * from "msw";

export default mockApiServer;
