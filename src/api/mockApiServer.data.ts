import { ApiContract } from "./ApiContract.ts";

export const MOCK_getAllMountains: ApiContract.MountainsApiContract.GetAllMountainsResponse =
  {
    data: [
      {
        id: "1",
        continent: ApiContract.MountainsApiContract.EContinent.AFRICA,
        name: "Kilimanjaro",
        height: 5895,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/1920px-Mt._Kilimanjaro_12.2006.JPG",
      },
      {
        id: "2",
        continent: ApiContract.MountainsApiContract.EContinent.ASIA,
        name: "Everest",
        height: 8848,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1a/Shivas_Kinder_-_0253.jpg",
      },
      {
        id: "3",
        continent: ApiContract.MountainsApiContract.EContinent.EUROPE,
        name: "Elbrus",
        height: 5642,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c7/Mount_Elbrus_May_2008.jpg",
      },
      {
        id: "4",
        continent: ApiContract.MountainsApiContract.EContinent.EUROPE,
        name: "Mont Blanc",
        height: 4808,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Monte_bianco.JPG",
      },
      {
        id: "5",
        continent: ApiContract.MountainsApiContract.EContinent.EUROPE,
        name: "Rysy",
        height: 2503,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/Rysy%2C_wierzcholek_slowacki.jpg",
      },
    ],
    metadata: {
      total: 5,
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
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/1920px-Mt._Kilimanjaro_12.2006.JPG",
  };
