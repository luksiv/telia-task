import {
  createMountain,
  deleteMountain,
  getAllMountains,
  getMountain,
  patchMountain,
} from "./Mountains.transport.ts";
import { ApiContract } from "../ApiContract.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ErrorResponse } from "../request.ts";

export function useGetAllMountains(
  params: Partial<ApiContract.MountainsApiContract.GetAllMountainsRequest> = {},
) {
  return useQuery<ApiContract.MountainsApiContract.GetAllMountainsResponse>({
    queryKey: ["getAllMountains", params],
    queryFn: () => getAllMountains(params),
  });
}
export function useCreateMountain() {
  return useMutation<
    ApiContract.MountainsApiContract.GetMountainResponse,
    ErrorResponse,
    ApiContract.MountainsApiContract.CreateMountainRequest
  >({
    mutationFn: (data) => createMountain(data),
  });
}
export function useGetMountain(mountainId: string) {
  return useQuery<ApiContract.MountainsApiContract.GetMountainResponse>({
    queryKey: ["getMountain", mountainId],
    queryFn: () => getMountain(mountainId),
    enabled: !!mountainId,
  });
}
export function usePatchMountain() {
  return useMutation<
    ApiContract.MountainsApiContract.GetMountainResponse,
    ErrorResponse,
    {
      mountainId: string;
      data: ApiContract.MountainsApiContract.UpdateMountainRequest;
    }
  >({
    mutationFn: ({ mountainId, data }) => patchMountain(mountainId, data),
  });
}
export function useDeleteMountain() {
  return useMutation<void, ErrorResponse, string>({
    mutationFn: (mountainId) => deleteMountain(mountainId),
  });
}
