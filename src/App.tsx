import { Button, Heading, withAuthenticator } from "@aws-amplify/ui-react";

import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";
import MainLayout from "./components/MainLayout.tsx";

type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};

function App({ user, signOut }: AppProps) {
  return (
    <MainLayout>
      <Heading level={1}>Hello {user?.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <h2>Amplify Todos</h2>
      ...
    </MainLayout>
  );
}

export default withAuthenticator(App);
