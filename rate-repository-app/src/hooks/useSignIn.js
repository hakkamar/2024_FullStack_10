import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphqL/mutations";

import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    const payload = await mutate({ variables: { credentials } });
    const { data } = payload;

    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
    }

    return payload;
  };

  return [signIn, result];
};

export default useSignIn;
