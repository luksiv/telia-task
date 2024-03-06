import { ApiContract } from "../ApiContract.ts";
import * as API from "@aws-amplify/api";
import { HttpError } from "../HttpError.ts";

export const getAllMountains = async () => {
  const response = await API.get({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.getAllMountains,
  }).response;

  const responseBody: unknown = await response.body.json();
  return responseBody as ApiContract.MountainsApiContract.GetAllMountainsResponse;
};

export const createMountain = async (
  data: ApiContract.MountainsApiContract.CreateMountainRequest,
) => {
  const response = await API.post({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.getAllMountains,
    options: {
      body: data,
    },
  }).response;

  const responseBody: unknown = await response.body.json();
  return responseBody as ApiContract.MountainsApiContract.CreateMountainResponse;
};

export const getMountain = async (mountainId: string) => {
  const request = API.get({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.getMountain(mountainId),
    options: {},
  });

  try {
    const response = await request.response;
    const responseBody: unknown = await response.body.json();
    return responseBody as ApiContract.MountainsApiContract.GetMountainResponse;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new HttpError(
      error?._response?.statusCode || 500,
      error?._response?.body || "Unknown error",
      error?._response?.body ? JSON.parse(error?._response?.body) : undefined,
    );
  }
};

export const patchMountain = async (
  data: ApiContract.MountainsApiContract.UpdateMountainRequest,
) => {
  const response = await API.put({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.getAllMountains,
    options: {
      // @ts-expect-error -- some issue with the API type
      body: data,
    },
  }).response;

  if (response.statusCode > 400) {
    throw new HttpError(response.statusCode, await response.body.text());
  }

  const responseBody: unknown = await response.body.json();
  return responseBody as ApiContract.MountainsApiContract.UpdateMountainResponse;
};

export const deleteMountain = async (mountainId: string) => {
  const response = await API.del({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.deleteMountain(mountainId),
    options: {},
  }).response;

  if (response.statusCode > 400) {
    throw new HttpError(response.statusCode, "Unknown delete error");
  }
};
