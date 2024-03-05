import { setupWorker } from "msw/browser";
import { http, HttpResponse } from "msw";
import { getBaseApiUrl } from "./getBaseApiUrl.ts";
import { ApiContract } from "./ApiContract.ts";
import {
  MOCK_getAllMountains,
  MOCK_getMountain,
} from "./mockApiServer.data.ts";

const url = (path: string) => {
  return `${getBaseApiUrl()}${path}`;
};

console.log(url(ApiContract.MountainsApiContract.Paths.getAllMountains));

export const mockApiHandlers = [
  http.get(url(ApiContract.MountainsApiContract.Paths.getAllMountains), () =>
    HttpResponse.json(MOCK_getAllMountains),
  ),
  http.post(url(ApiContract.MountainsApiContract.Paths.createMountain), () =>
    HttpResponse.json(MOCK_getMountain),
  ),
  http.get(url(ApiContract.MountainsApiContract.Paths.getMountain("1")), () =>
    HttpResponse.json(MOCK_getMountain),
  ),
  http.patch(
    url(ApiContract.MountainsApiContract.Paths.patchMountain("1")),
    () => HttpResponse.json(MOCK_getMountain),
  ),
  http.delete(
    url(ApiContract.MountainsApiContract.Paths.deleteMountain("1")),
    () => HttpResponse.json(MOCK_getMountain),
  ),
];

export const worker = setupWorker(...mockApiHandlers);

export * from "msw";

export default worker;
