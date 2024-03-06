/* eslint-disable @typescript-eslint/no-namespace */
export namespace ApiContract {
  export namespace MountainsApiContract {
    export const Paths = {
      getAllMountains: "/mountains",
      createMountain: "/mountains",
      getMountain: (mountainId: string) => `/mountains/object/${mountainId}`,
      patchMountain: (mountainId: string) => `/mountains/object/${mountainId}`,
      deleteMountain: (mountainId: string) => `/mountains/object/${mountainId}`,
    };

    export enum EContinent {
      AFRICA = "Africa",
      ANTARCTICA = "Antarctica",
      ASIA = "Asia",
      EUROPE = "Europe",
      NORTH_AMERICA = "North America",
      OCEANIA = "Oceania",
      SOUTH_AMERICA = "South America",
    }

    export interface Mountain {
      id: string;
      continent: EContinent;
      name: string;
      height: number;
      pictureUrl: string;
    }

    export interface CreateMountainRequest
      extends Omit<ApiContract.MountainsApiContract.Mountain, "id"> {}

    export interface CreateMountainResponse extends Pick<Mountain, "id"> {}

    export interface UpdateMountainRequest
      extends ApiContract.MountainsApiContract.Mountain {}

    export interface UpdateMountainResponse extends Pick<Mountain, "id"> {}

    export interface GetMountainResponse extends Mountain {}

    export interface GetAllMountainsResponse {
      items: Mountain[];
    }
  }
}
