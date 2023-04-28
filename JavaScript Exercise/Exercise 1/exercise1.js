// Array of objects
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    available: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    available: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    available: true,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
    available: false,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    available: true,
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    year: 1927,
    available: true,
  },
  { title: "Beloved", 
    author: "Toni Morrison", 
    year: 1987, 
    available: false },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    year: 1982,
    available: true,
  },
  {
    title: "The Sound and the Fury",
    author: "William Faulkner",
    year: 1929,
    available: false,
  },
  {
    title: "Their Eyes Were Watching God",
    author: "Zora Neale Hurston",
    year: 1937,
    available: true,
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    year: 1939,
    available: true,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    available: true,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Bronte",
    year: 1847,
    available: true,
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
    available: false,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    available: true,
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    year: 1969,
    available: true,
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    year: 1926,
    available: false,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    available: true,
  },
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    available: true,
  },
  {
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
    year: 1478,
    available: false,
  },
];

// create a new array and filter all the books that are available only.
const AvailableBooks = books.filter((book) => book.available == true);

// create a new array to map all of the available books with only specific data
// needed
const AvailableBooksInfo = AvailableBooks.map((book) => ({
  title: book.title,
  author: book.author,
  year: book.year,
}));

// output
console.log(AvailableBooksInfo);
