import { gql } from "apollo-boost";

const APPLICATION_CREATE_MUTATION = gql`
  mutation createApplication($title: String!, $description: String!, $address: String!) {
    createApplication(title: $title, description: $description, address: $address) {
      id
      title
      description
    }
  }
`;

export default { APPLICATION_CREATE_MUTATION };
