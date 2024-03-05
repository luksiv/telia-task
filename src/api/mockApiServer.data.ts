import { ApiContract } from "./ApiContract.ts";

export const MOCK_getAllMountains: ApiContract.MountainsApiContract.GetAllMountainsResponse =
  {
    data: [
      {
        id: "1",
        continent: ApiContract.MountainsApiContract.EContinent.AFRICA,
        name: "Kilimanjaro",
        height: 5895,
      },
      {
        id: "2",
        continent: ApiContract.MountainsApiContract.EContinent.ASIA,
        name: "Everest",
        height: 8848,
      },
      {
        id: "3",
        continent: ApiContract.MountainsApiContract.EContinent.EUROPE,
        name: "Elbrus",
        height: 5642,
      },
      {
        id: "4",
        continent: ApiContract.MountainsApiContract.EContinent.EUROPE,
        name: "Mont Blanc",
        height: 4808,
      },
      {
        id: "5",
        continent: ApiContract.MountainsApiContract.EContinent.EUROPE,
        name: "Rysy",
        height: 2503,
      },
    ],
    metadata: {
      total: 3,
      page: 1,
      pageSize: 10,
    },
  };

export const MOCK_getMountain: ApiContract.MountainsApiContract.GetMountainResponse =
  {
    id: "1",
    continent: ApiContract.MountainsApiContract.EContinent.AFRICA,
    name: "Kilimanjaro",
    height: 5895,
  };
