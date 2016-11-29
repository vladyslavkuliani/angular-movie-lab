angular.module('movieApp', []).controller('MovieController', MovieController);

function MovieController(){

  var vm = this;

  vm.moviesToWatch = [
    {
      id: 1,
      title: "Lord of the Rings",
      genre: "fantasy"
    },
    {
      id: 2,
      title: "Shooter",
      genre: "action"
    },
    {
      id: 3,
      title: "Shrek",
      genre: "cartoon"
    },
    {
      id: 4,
      title: "Bourne",
      genre: "action"
    }
  ];

  vm.submit = function(movieTitle){
    vm.moviesToWatch.push({title: movieTitle});
  }

  vm.showMore = function(){
    
  }
}
