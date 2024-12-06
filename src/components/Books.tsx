import React, { useState, useEffect, useMemo } from "react";
import { mockData } from "../mockData";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
}

export const Books = () => {
  const [searchBook, setSearchBook] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState(mockData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchBook(searchTerm);

    const filteredBooks = mockData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBooks(filteredBooks);
  };

  return (
    <div style={{ display: "block", marginTop: "30px" }}>
      <input
        value={searchBook}
        onChange={handleInputChange}
        placeholder={"Search"}
        type='text'
      />
      <div>
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            style={{
              display: "inline-block",
              textAlign: "left",
              width: "200px",
            }}
          >
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
