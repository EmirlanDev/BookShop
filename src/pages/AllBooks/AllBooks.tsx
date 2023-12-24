import Book from "./Book/Book";
import Filter from "./Filter/Filter";

const AllBooks = () => {
  return (
    <div>
      <h1>All Books</h1>
      <p>Here you can find all the books you need</p>
      <div className="all" style={{display: 'flex'}}>
        <Filter />
        <Book />
      </div>
    </div>
  );
};

export default AllBooks;
