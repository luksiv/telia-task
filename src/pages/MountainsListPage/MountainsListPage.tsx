import MainLayout from "../../components/MainLayout.tsx";
import { useGetAllMountains } from "../../api/Mountains/Mountains.queries.ts";
import { ROUTE_PATHS } from "../../router/routes.config.tsx";
import EmptyLoadingState from "../../components/EmptyLoadingState.tsx";
import EmptyStateView from "../../components/EmptyStateView.tsx";
import MountainsList from "./MountainsList.tsx";

export default function MountainsListPage() {
  const mountains = useGetAllMountains();

  const hasData = (mountains.data?.items ?? []).length !== 0;

  return (
    <MainLayout
      title={"Mountains"}
      buttons={[
        {
          label: "Add Mountain",
          linkTo: ROUTE_PATHS.mountainsCreate,
          hidden: !hasData,
        },
      ]}
    >
      {mountains.isLoading && <EmptyLoadingState />}
      {!mountains.isLoading && !mountains.data && (
        <EmptyStateView
          message={"No mountains found"}
          subtitle={"Create a new mountain to get started"}
          actionLabel={"Add Mountain"}
          actionLink={ROUTE_PATHS.mountainsCreate}
        />
      )}
      {mountains.data?.items && hasData && (
        <MountainsList mountains={mountains.data.items} />
      )}
    </MainLayout>
  );
}
