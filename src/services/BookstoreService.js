class BookstoreService {
  data = [
    {
      id: 1,
      title: "The call of the Wild",
      author: "J. London",
      price: 7.2,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/91Nl-q6vgLL._SY445_.jpg"
    },
    {
      id: 2,
      title: "Sherlock Holmes",
      author: "A.C. Doyle",
      price: 11.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/5177950yDnL._SX357_BO1,204,203,200_.jpg"
    },
    {
      id: 3,
      title: "The tragedy of Hamlet. Prince of Denmark",
      author: "W. Shakespeare",
      price: 9.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51kYjjryGhL.jpg"
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      price: 35,
      coverImage:
        "https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg"
    }
  ];
  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.data), 700);
    });
  }
}

export default BookstoreService;
