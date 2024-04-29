import { ApolloClient, InMemoryCache } from "@apollo/client";

import Constants from "expo-constants";

const createApolloClient = () => {
  //console.log(Constants.expoConfig.extra.apolloUri);

  return new ApolloClient({
    //uri: "http://192.168.0.7:4000/graphql",
    uri: Constants.expoConfig.extra.apolloUri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
