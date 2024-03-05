/* eslint-disable @typescript-eslint/no-namespace */
export namespace ApiContract {
  export namespace CommonContract {
    export interface PaginatedRequest {
      offset?: number;
      limit?: number;
    }

    export interface PaginatedMetadata {
      total: number;
      page: number;
      pageSize: number;
    }

    export interface PaginatedResponse<T> {
      data: T[];
      metadata: PaginatedMetadata;
    }
  }

  export namespace MountainsApiContract {
    export const Paths = {
      getAllMountains: "/mountains",
      createMountain: "/mountains",
      getMountain: (mountainId: string) => `/mountains/${mountainId}/edit`,
      patchMountain: (mountainId: string) => `/mountains/${mountainId}/edit`,
      deleteMountain: (mountainId: string) => `/mountains/${mountainId}/edit`,
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

    export interface CreateMountainRequest {
      name: string;
      height: number;
      continent: EContinent;
      pictureUrl: string;
    }

    export interface UpdateMountainRequest {
      name?: string;
      height?: number;
      continent?: EContinent;
      pictureUrl?: string;
    }

    export interface GetMountainResponse extends Mountain {}

    export interface GetAllMountainsRequest
      extends CommonContract.PaginatedRequest {
      continent?: EContinent;
    }
    export interface GetAllMountainsResponse
      extends CommonContract.PaginatedResponse<Mountain> {}
  }
}
