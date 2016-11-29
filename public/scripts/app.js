angular.module('movieApp', []).controller('MovieController', MovieController);

var pictures = ['http://wallpapercave.com/wp/QlF13TB.jpg', 'https://static1.squarespace.com/static/56ff005dc6fc084cc7e651a7/t/56ff91261bbee0d82526fee3/1459657124842/amazing-sun-rays-through-golden-gate-bridge-hd-wallpaper-574472.jpg?format=2500w', 'http://wallpapercave.com/wp/1lS7grH.jpg'];

function MovieController(){

  var vm = this;

  vm.moviesToWatch = [
    {
      id: 1,
      title: "Lord of the Rings",
      genre: "fantasy",
      moviePicture: "../public/images/defaultPic.jpg"
    },
    {
      id: 2,
      title: "Shooter",
      genre: "action",
      moviePicture: "../public/images/defaultPic.jpg"
    },
    {
      id: 3,
      title: "Shrek",
      genre: "cartoon",
      moviePicture: "../public/images/defaultPic.jpg"
    },
    {
      id: 4,
      title: "Bourne",
      genre: "action",
      moviePicture: "../public/images/defaultPic.jpg"
    }
  ];

  vm.submit = function(movieTitle){
    vm.moviesToWatch.push({title: movieTitle});
  }

  vm.deleteMovie = function(movie){
    var index = vm.moviesToWatch.indexOf(movie);
    vm.moviesToWatch.splice(index, 1);
  }

  vm.randomPic = function(movie){
    var random = Math.random()*(pictures.length-1);
    random = Math.round(random);

    movie.moviePicture = pictures[random];
  }
}
