import { Book } from "../store/BooksStore";

export const getSide = () =>
  typeof window === "undefined" ? "server" : "client";

export const books: Book[] = [
  {
    id: 0,
    title: "The Witcher",
    release: "1990",
    image:
      "https://www.hachettebookgroup.com/wp-content/uploads/2019/09/9780316497541-1.jpg?fit=471%2C750",
    author: "Andrzej Sapkowski"
  },
  {
    id: 1,
    title: "Lord of the rings",
    release: "1954",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    author: "J. R. R. Tolkien"
  }
];

export const clientBooks: Book[] = [
  {
    id: 0,
    title: "Harry Potter and Philosopher's Stone",
    release: "1997",
    image: "https://images-na.ssl-images-amazon.com/images/I/910ityjoncL.jpg",
    author: "	J. K. Rowling"
  }
];
