const name = "Daniel";
const lastName = "Rojas";
let age = 32;
const webdev = true;
const birth = new Date("1989-12-29");
let favBook = {
    title: "Padre rico Padre pobre",
    author: "Robert Kiyosaki",
    year: "1997",
    url: "https://es.wikipedia.org/wiki/Robert_Kiyosaki"
};
let favHobbies = ["Coding", "Series", "Movies", "Sports", "Video Games", "Food"];

function miActividadFavorita(){
    return favHobbies[0];
};

console.log(miActividadFavorita());