'use strict';

angular.module('journalApp.edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit/:id?', {
    templateUrl: 'view2/view2.html',
    controller: 'EditCtrl'
  });
}])

.controller('EditCtrl', function($scope, $routeParams, $location, JournalService) {

    var entryId = $routeParams.id;
    $scope.entry = {};

    if (entryId) {
        getEntry($routeParams.id);
    }

    function getEntry(id) {
        JournalService.get(id)
            .then(function(response) {
                console.log('get', response);
                $scope.entry = response;
            })
    }

    function goToEntries() {
        $location.path('#/journals');
    }

    $scope.saveEntry = function() {
        $scope.entry.updated_date = new Date();
        if ($scope.entry.id) {
            JournalService.update($scope.entry.id, $scope.entry)
                .then(goToEntries);
        }
        else {
            JournalService.create($scope.entry)
                .then(goToEntries);
        }
    }

});