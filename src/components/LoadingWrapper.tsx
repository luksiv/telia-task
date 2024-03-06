import EmptyLoadingState from "./EmptyLoadingState.tsx";

export default function LoadingWrapper({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return isLoading ? <EmptyLoadingState /> : <>{children}</>;
}
