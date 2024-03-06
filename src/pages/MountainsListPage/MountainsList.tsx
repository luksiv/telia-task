import { ROUTE_PATHS } from "../../router/routes.config.tsx";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import ModalImage from "react-modal-image";
import { ApiContract } from "../../api/ApiContract.ts";

export interface MountainsListProps {
  mountains: ApiContract.MountainsApiContract.Mountain[];
}

export default function MountainsList(props: MountainsListProps) {
  return (
    <div className={"border-gray-200 rounded overflow-hidden"}>
      <ul className="list-inside divide-y divide-gray-100 bg-white">
        {props.mountains.map((mountain) => (
          <li key={mountain.id} className="p-4 hover:bg-purple-100 ">
            <div className={"flex gap-4"}>
              {mountain.pictureUrl && (
                <ModalImage
                  small={mountain.pictureUrl}
                  large={mountain.pictureUrl}
                  alt={mountain.name}
                  className="h-12 w-12 object-cover rounded"
                />
              )}
              <Link
                to={generatePath(ROUTE_PATHS.mountainsDetails, {
                  mountainId: mountain.id,
                })}
                className={"w-full"}
              >
                <div className={"flex w-full justify-between items-center"}>
                  <div className={"flex gap-2"}>
                    <div>
                      <h2 className="text-xl font-medium">{mountain.name}</h2>
                      <p className="text-sm text-gray-500">
                        {mountain.continent}
                      </p>
                    </div>
                  </div>
                  <div className={"text-right"}>
                    <p className="text-sm text-gray-900 font-medium">
                      {mountain.height} meters
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
