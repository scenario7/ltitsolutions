import sanityClient, { createClient } from "@sanity/client";

export default createClient({
  projectId: "98a8ncj5", // find this at manage.sanity.io or in your sanity.json
  dataset: "client-website-dataset", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31',
  useCdn: true
});