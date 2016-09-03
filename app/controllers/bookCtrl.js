"use strict"

app.controller("bookCtrl", function($scope, guideFactory){
  $scope.books = []

  guideFactory.getTrips()
    .then(function(datData){
        $scope.books = datData.guides
    })
})
