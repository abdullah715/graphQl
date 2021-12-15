import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/BookList";
import AddBooks from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <BookList />
      <hr />
      <AddBooks />
    </div>
  );
}

export default App;
