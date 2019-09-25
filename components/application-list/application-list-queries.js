import { gql } from "apollo-boost";

const APPICAIONS_QUERY = gql`
 {
    allApplications {
      title
      description
    }
  }
`;

export default {
  APPICAIONS_QUERY
};
