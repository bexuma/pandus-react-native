import { gql } from "apollo-boost";

const APPICAIONS_QUERY = gql`
 {
    allApplications {
      title
      description
      address
      latitude
      longitude
    }
  }
`;

export default {
  APPICAIONS_QUERY
};
