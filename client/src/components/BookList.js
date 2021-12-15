import { useQuery } from "@apollo/client";
import React, { Suspense } from "react";
import { getBookQuery } from "../queries/books";

export default function BookList() {
  const { loading, error, data } = useQuery(getBookQuery);

  console.log(data);

  return (
    <div id="book-list">
      <h1>Reading List</h1>
      <Suspense fallback={<p>Loading</p>}>
        <ol>
          {!loading ? (
            data.books.map((e) => {
              return <li key={e.id}>{e.name}</li>;
            })
          ) : (
            <p>Loading</p>
          )}
        </ol>
      </Suspense>
    </div>
  );
}
