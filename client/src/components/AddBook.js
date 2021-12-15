import { useQuery, useMutation } from "@apollo/client";
import React, { Suspense, useState } from "react";
import {
  addBookMutation,
  getAuthorQuery,
  getBookQuery,
} from "../queries/books";

export default function AddBooks() {
  const { loading, error, data } = useQuery(getAuthorQuery);

  const [addBook, { addedBookData }] = useMutation(addBookMutation, {
    refetchQueries: [getBookQuery],
  });

  const [book, setBook] = useState({
    name: null,
    genre: null,
    authorId: null,
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setBook((old) => ({ ...old, [name]: value.length ? value : null }));
  }
  const displayAuthors = () => {
    if (loading) {
      return <p>Loading Authors</p>;
    } else {
      return data.authors.map((e) => {
        return (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        );
      });
    }
  };
  console.log(data);

  async function submitForm(e) {
    e.preventDefault();
    console.log("form", e.target, book);

    try {
      await addBook({
        variables: book,
        onCompleted: ({ addBook }) => {
          console.log(addBook);
          alert("Saved " + addBook.name);
        },
      });
    } catch ({ graphQLErrors, networkError }) {
      console.log(graphQLErrors, networkError);
    }
  }
  return (
    <div id="author-form-div">
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <label>Book Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Genre</label>
          <input type="text" name="genre" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Author</label>
          <select name="authorId" onChange={handleChange}>
            <option>Select Author</option>
            {displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    </div>
  );
}
