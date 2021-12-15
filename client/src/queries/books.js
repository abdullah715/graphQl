import { gql } from "@apollo/client";

export const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;
