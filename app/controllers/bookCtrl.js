"use strict"

app.controller("bookCtrl", function($scope, $q, $http){

  $scope.getTrips = function(){
    let trips = []
    return $q(function(resolve, reject){
      $http.get('../../data/guides.json')
      .success(function(coolTrips){
        $scope.books = coolTrips.guides
        resolve(coolTrips)
      })
      .error(function(error){
        reject(error)
      })
    })
  }

})
