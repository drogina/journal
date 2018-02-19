'use strict';

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entries', {
    templateUrl: 'view1/view1.html',
    controller: 'JournalCtrl'
  });
}])

.factory('JournalService', function($resource) {
    var journalResource = $resource('http://localhost:8000/journals/:journalId/', null, {
        'update': {method:'PUT'}
    });

    function list() {
        return journalResource.query().$promise;
    }

    function get(journalId) {
        return journalResource.get({journalId: journalId}).$promise;
    }

    function create(entry) {
        return journalResource.save(entry).$promise;
    }

    function destroy(journalId) {
        return journalResource.delete({journalId: journalId}).$promise;
    }

    function update(journalId, entry) {
        return journalResource.update({journalId: journalId}, entry).$promise;
    }

    return {
        list: list,
        get: get,
        create: create,
        destroy: destroy,
        update: update
    }

})

.controller('JournalCtrl', function($scope, JournalService) {

    $scope.entries = [];

    function getEntries() {
        JournalService.list()
        .then(function(response) {
            $scope.entries = response;
        });
    }

    $scope.deleteEntry = function(entryId) {
        JournalService.destroy(entryId)
            .then(getEntries);
    };

    getEntries();


});