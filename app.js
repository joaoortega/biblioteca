const books = require('./database')
const readline = require('readline-sync')

const initialSearch = readline.question("Do you want to search for a specific book? Y/N ");

if (initialSearch.toLocaleUpperCase() === "Y") {
    console.log("These are the available categories: ");

    let availableCategories = [];
    let idForCategory = 0;

    for (let i = 0; i < books.length; i++) {
        if (!availableCategories.includes(books[i].categoria)) {
            availableCategories.push(books[i].categoria);
            console.log(`${idForCategory++} - ${books[i].categoria}`);
        }
    }

    const numberOfSelectedCategory = readline.question("Please select a number to list all the books of that category: ");

    if (numberOfSelectedCategory < availableCategories.length) {
        let categoryToSearch = 0;
        for (let i = 0; i < availableCategories.length; i++) {
            categoryToSearch = availableCategories[numberOfSelectedCategory];
        }

    const listResult = books.filter(iterateBooks => iterateBooks.categoria == categoryToSearch);
    console.table(listResult);
    } else {
        console.log("Please select a valid option.")
    }

} else {
    const orderedBooks = books.sort((a,b)=> a.paginas - b.paginas)
    console.log("These are all the available books: ");
    console.table(orderedBooks);
}