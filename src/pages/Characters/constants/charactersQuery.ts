import { gql } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
      }
      results {
        name
        image
        id
      }
    }
  }
`;

export { CHARACTERS_QUERY };
