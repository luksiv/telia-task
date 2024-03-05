import { withAuthenticator } from "@aws-amplify/ui-react";
import AppRouter from "./router/AppRouter.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient.tsx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default withAuthenticator(App);
