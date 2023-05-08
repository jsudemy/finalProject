'use strict';

let numberOfFilms; 

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)); {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movieTitle = prompt('Один из последних просмотренных фильмов?', '');
    const movieRating = prompt('На сколько оцените его?', '');
  
    if (!movieTitle || !movieRating ||movieTitle.length < 50) {
      console.log('error');
      i--;
      continue;
    }
  
    personalMovieDB.movies[movieTitle] = movieRating;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } 
  if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are classic watcher');
  }
  if (personalMovieDB.count >= 30) {
    alert('Your are great watcher!');
  }
  if (personalMovieDB.count === null || personalMovieDB.count === undefined || personalMovieDB.count === NaN) {
    alert('Erorr');
  }
}

detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

/* function writeYourGenres() {
  let i = 0;
  do {
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, '');
    i++;
  } while (i < 3); {
  } 
} */

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);// когда записываю в массив то отнемаю 
  }
}

writeYourGenres();

