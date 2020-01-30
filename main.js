const myMoviesString = 'The Love Bug,Cars,Smokey & the Bandit,Tucker,American Graffiti';
console.log(myMoviesString);
const myMoviesArray = myMoviesString.split(',');
console.log(myMoviesArray);
let userMovie = prompt('Please type the name of your favorite movie:');
myMoviesArray.push(userMovie);
console.log(myMoviesArray);
const myMoviesToString = myMoviesArray.toString();
console.log(myMoviesToString);
alert ('The movie list string is ' + myMoviesToString + '.')