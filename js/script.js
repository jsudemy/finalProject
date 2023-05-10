'use strict';

let numberOfFilms; 

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)); {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } 
    if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('You are classic watcher');
    }
    if (personalMovieDB.count >= 30) {
      alert('Your are great watcher!');
    }
    if (personalMovieDB.count == null || personalMovieDB.count == undefined || personalMovieDB.count == NaN) {
      alert('Erorr');
    }
  },

  showMyDb: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      /* let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    }); */

      let genres = prompt('Введите ваши любимые жанры через запятую').toLocaleLowerCase();

      if (genres === '' || genres == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
      }
    }
  },  

  toggleVisibleMyDB: () => {
    personalMovieDB.privat = personalMovieDB.privat ? false : true;
  }
};


/* function writeYourGenres() {
  let i = 0;
  do {
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, '');
    i++;
  } while (i < 3); {
  } 
} */


