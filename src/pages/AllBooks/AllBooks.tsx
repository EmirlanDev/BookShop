import Book from "./Book/Book";
import Filter from "./Filter/Filter";

const AllBooks = () => {
  return (
    <section id="all">
      <div className="container">
        <h1 className="title">All Books</h1>
        <p className="paragraf">Here you can find all the books you need</p>
        <div className="all">
          <Filter />
          <Book />
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
