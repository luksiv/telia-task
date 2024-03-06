import {
  createMountain,
  deleteMountain,
  getAllMountains,
  getMountain,
  patchMountain,
} from "./Mountains.transport.ts";
import { ApiContract } from "../ApiContract.ts";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetAllMountains() {
  return useQuery<ApiContract.MountainsApiContract.GetAllMountainsResponse>({
    queryKey: ["getAllMountains"],
    queryFn: () => getAllMountains(),
    retry: 1,
  });
}
export function useCreateMountain() {
  return useMutation<
    ApiContract.MountainsApiContract.CreateMountainResponse,
    unknown,
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
    retry: 1,
  });
}
export function usePatchMountain() {
  return useMutation<
    ApiContract.MountainsApiContract.UpdateMountainResponse,
    unknown,
    ApiContract.MountainsApiContract.UpdateMountainRequest
  >({
    mutationFn: (data) => patchMountain(data),
  });
}
export function useDeleteMountain() {
  return useMutation<void, unknown, string>({
    mutationFn: (mountainId) => deleteMountain(mountainId),
  });
}
