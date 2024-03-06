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

export function useGetAllMountains() {
  return useQuery<ApiContract.MountainsApiContract.GetAllMountainsResponse>({
    queryKey: ["getAllMountains"],
    queryFn: () => getAllMountains(),
  });
}
export function useCreateMountain() {
  return useMutation<
    ApiContract.MountainsApiContract.CreateMountainResponse,
    ErrorResponse,
    ApiContract.MountainsApiContract.CreateMountainRequest
  >({
    mutationFn: (data) => createMountain(data),
  });
}
export function useGetMountain(mountainId?: string) {
  return useQuery<ApiContract.MountainsApiContract.GetMountainResponse>({
    queryKey: ["getMountain", mountainId],
    queryFn: () => getMountain(mountainId ?? ""),
    enabled: !!mountainId,
  });
}
export function usePatchMountain() {
  return useMutation<
    ApiContract.MountainsApiContract.UpdateMountainResponse,
    ErrorResponse,
    ApiContract.MountainsApiContract.UpdateMountainRequest
  >({
    mutationFn: (data) => patchMountain(data),
  });
}
export function useDeleteMountain() {
  return useMutation<unknown, ErrorResponse, string>({
    mutationFn: (mountainId) => deleteMountain(mountainId),
  });
}
