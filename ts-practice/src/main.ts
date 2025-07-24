function doubleIfEven(num: number): number {
  return num % 2 == 0 ? num ** 2 : num;
}

console.log(doubleIfEven(2));
console.log(doubleIfEven(3));

type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

let book1: Book = {
  title: "The lord of the rings",
  author: "R.R Martin",
  publishedYear: 2024,
};

console.log(book1.title);
