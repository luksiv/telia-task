import { ApiContract } from "../ApiContract.ts";
import * as API from "@aws-amplify/api";

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
  const response = await API.get({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.getMountain(mountainId),
    options: {},
  }).response;

  const responseBody: unknown = await response.body.json();
  return responseBody as ApiContract.MountainsApiContract.GetMountainResponse;
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

  const responseBody: unknown = await response.body.json();
  return responseBody as ApiContract.MountainsApiContract.UpdateMountainResponse;
};

export const deleteMountain = async (mountainId: string) => {
  return API.del({
    apiName: "teliafeapi",
    path: ApiContract.MountainsApiContract.Paths.deleteMountain(mountainId),
    options: {},
  });
};
