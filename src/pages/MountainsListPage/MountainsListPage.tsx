import MainLayout from "../../components/MainLayout.tsx";
import { useGetAllMountains } from "../../api/Mountains/Mountains.queries.ts";
import { ROUTE_PATHS } from "../../router/routes.config.tsx";
import { Link, useSearchParams } from "react-router-dom";
import { generatePath } from "react-router";
import ModalImage from "react-modal-image";

export default function MountainsListPage() {
  const [params, setSearchParams] = useSearchParams();

  const page = +(params.get("page") || "0");
  const limit = +(params.get("limit") || "10");

  const mountains = useGetAllMountains({
    limit: 10,
    offset: page * 10,
  });

  const incrementPage = () => {
    setSearchParams({ page: (page + 1).toString() });
  };

  const decrementPage = () => {
    const newPage = page - 1;

    if (newPage <= 0) {
      setSearchParams({});
    } else {
      setSearchParams({ page: newPage.toString() });
    }
  };

  const total = mountains?.data?.metadata?.total ?? 0;

  const hasNextPage = total > (page + 1) * limit;
  const hasPreviousPage = page > 0;

  return (
    <MainLayout
      title={"Mountains"}
      headerButton={{
        label: "Add Mountain",
        linkTo: ROUTE_PATHS.mountainsCreate,
      }}
    >
      <div className={"border-gray-200 rounded overflow-hidden"}>
        <ul className="list-inside divide-y divide-gray-100 bg-white">
          {mountains.data?.data?.map((mountain) => (
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
                  to={generatePath(ROUTE_PATHS.mountainsEdit, {
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
      <nav
        className="flex items-center justify-between border-t p-4 bg-white"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{page + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(mountains?.data?.metadata?.total ?? limit, limit)}
            </span>{" "}
            of{" "}
            <span className="font-medium">
              {mountains?.data?.metadata?.total}
            </span>{" "}
            results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          {hasPreviousPage && (
            <button
              onClick={decrementPage}
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Previous
            </button>
          )}
          {hasNextPage && (
            <button
              onClick={incrementPage}
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Next
            </button>
          )}
        </div>
      </nav>
    </MainLayout>
  );
}
