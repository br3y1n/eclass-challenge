import { gql } from "@apollo/client";

const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      image
      name
      species
      gender
      created
      status
    }
  }
`;

export { CHARACTER_QUERY };
