function oldBooks(input) {
    let index = 0;
    let fav = input[index];
    index++;
    let books = input[index];
    index++;
    let counter = 0;
    let found = false;

    while (books !== "No More Books") {
        counter++;
        if (fav === books) {
            found = true;
            break;
        }
        books = input[index];
        index++;
    }
    if (found === true) {
        console.log(`You checked ${counter-1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

