import MainLayout from "../../components/MainLayout.tsx";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteMountain,
  useGetMountain,
} from "../../api/Mountains/Mountains.queries.ts";
import { ROUTE_PATHS } from "../../router/routes.config.tsx";
import { generatePath } from "react-router";
import { enqueueSnackbar } from "notistack";

export default function MountainsDetailsPage() {
  const navigate = useNavigate();
  const params = useParams<{ mountainId?: string }>();
  const mountainId = params.mountainId || "";

  if (!mountainId || mountainId === "") {
    navigate(ROUTE_PATHS.mountainsList);
  }

  const { data: mountainData, isLoading: isMountainLoading } =
    useGetMountain(mountainId);

  const deleteMutation = useDeleteMountain();

  return (
    <MainLayout
      title={mountainData?.name ?? "Mountain"}
      isLoading={isMountainLoading}
      buttons={[
        {
          label: "Back",
          linkTo: ROUTE_PATHS.mountainsList,
          variant: "secondary",
        },
        {
          label: "Edit",
          linkTo: generatePath(ROUTE_PATHS.mountainsEdit, { mountainId }),
        },
        {
          label: "Delete",
          variant: "danger",
          hidden: isMountainLoading,
          onClick: () => {
            window.confirm("Are you sure you want to delete this mountain?") &&
              deleteMutation.mutate(mountainId, {
                onSuccess: () => {
                  enqueueSnackbar("Mountain deleted", { variant: "success" });
                  navigate(ROUTE_PATHS.mountainsList);
                },
                onError: () => {
                  enqueueSnackbar("Failed to delete mountain", {
                    variant: "error",
                  });
                },
              });
          },
        },
      ]}
    >
      <div>
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {mountainData?.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Continent
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {mountainData?.continent}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Height
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {mountainData?.height} meters
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Image
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <img
                src={mountainData?.pictureUrl}
                alt={mountainData?.name}
                className={"h-64 w-full sm:w-64 object-contain rounded"}
              />
              <a
                href={mountainData?.pictureUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary-600 hover:underline"
              >
                {mountainData?.pictureUrl}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </MainLayout>
  );
}
