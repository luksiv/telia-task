import { ApiContract } from "../ApiContract.ts";
import { request } from "../request.ts";

export const getAllMountains = (
  params: Partial<ApiContract.MountainsApiContract.GetAllMountainsRequest>,
) =>
  request.get<ApiContract.MountainsApiContract.GetAllMountainsResponse>(
    ApiContract.MountainsApiContract.Paths.getAllMountains,
    {
      params,
    },
  );

export const createMountain = (
  data: ApiContract.MountainsApiContract.CreateMountainRequest,
) =>
  request.post<ApiContract.MountainsApiContract.GetMountainResponse>(
    ApiContract.MountainsApiContract.Paths.createMountain,
    data,
  );

export const getMountain = (mountainId: string) =>
  request.get<ApiContract.MountainsApiContract.GetMountainResponse>(
    ApiContract.MountainsApiContract.Paths.getMountain(mountainId),
  );

export const patchMountain = (
  mountainId: string,
  data: ApiContract.MountainsApiContract.UpdateMountainRequest,
) =>
  request.patch<ApiContract.MountainsApiContract.GetMountainResponse>(
    ApiContract.MountainsApiContract.Paths.patchMountain(mountainId),
    data,
  );

export const deleteMountain = (mountainId: string) =>
  request.delete<void>(
    ApiContract.MountainsApiContract.Paths.deleteMountain(mountainId),
  );
