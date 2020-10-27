function scripGen()  {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }//End function randomNumber

    //Variables
    var numBook = 0;
    var book = "";
    var chapter = 0;

    //Generate for Chapter
    numBook = randomNumber(1, 239);
    
    //if else used to determine the proper book and chapter
    if (numBook >= 1 && numBook <= 22) {
        book = "1 Nephi";
        chapter = numBook;
    } else if (numBook >= 23 && numBook <= 55) {
        book = "2 Nephi";
        chapter = numBook - 22;
    } else if (numBook >= 56 && numBook <= 62) {
        book = "Jacob";
        chapter = numBook - 55;
    } else if (numBook == 63) {
        book = "Enos";
        chapter = 1;
    } else if (numBook == 64) {
        book = "Jarom";
        chapter = 1;
    } else if (numBook == 65) {
        book = "Omni";
        chapter = 1;
    } else if (numBook == 66) {
        book = "Words of Mormon";
        chapter = 1;
    } else if (numBook >= 67 && numBook <= 95) {
        book = "Mosiah";
        chapter = numBook - 66;
    } else if (numBook >= 96 && numBook <= 158) {
        book = "Alma";
        chapter = numBook - 95;
    } else if (numBook >= 159 && numBook <= 174) {
        book = "Helaman";
        chapter = numBook - 158;
    } else if (numBook >= 175 && numBook <= 204) {
        book = "3 Nephi";
        chapter = numBook - 174;
    } else if (numBook == 205) {
        book = "4 Nephi";
        chapter = 1;
    } else if (numBook >= 206 && numBook <= 214) {
        book = "Mormon";
        chapter = numBook - 205;
    } else if (numBook >= 215 && numBook <= 229) {
        book = "Ether";
        chapter = numBook - 214;
    } else if (numBook >= 230 && numBook <= 239) {
        book = "Moroni";
        chapter = numBook - 229;
    }

    console.log(book);//Remove from final build
    console.log(chapter);//Remove from final build

    //Add the scripture to the page so that the user can see what was generated
    document.getElementById('insert').innerHTML = book + ": " + chapter;

}//End function scripGen
