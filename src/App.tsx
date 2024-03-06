import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import AppRouter from "./router/AppRouter.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";

function App() {
  const auth = useAuthenticator();

  useEffect(() => {
    if (auth.user) {
      queryClient.clear();
    }
  }, [auth.user]);

  return (
    <>
      <SnackbarProvider autoHideDuration={2500} />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AppRouter />
      </QueryClientProvider>
    </>
  );
}

export default withAuthenticator(App);
