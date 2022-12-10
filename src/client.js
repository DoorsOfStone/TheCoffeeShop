import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "da1p37ok",
  dataset: "production",
  apiVersion: "2022-11-06",
  useCdn: true,
});

export default client;
