"use strict";

app.factory('guideFactory', function($q, $http){

    let getTrips = function(){
    // let trips = []
    return $q(function(resolve, reject){
      $http.get('../../data/guides.json')
      .success(function(coolTrips){
        // $scope.books = coolTrips.guides
        resolve(coolTrips)
      })
      .error(function(error){
        reject(error)
      })
    })
  }

  return {getTrips}
})
