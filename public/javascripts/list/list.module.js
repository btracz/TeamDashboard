/**
 * Created by ghasbroucq on 12/05/2015.
 */
(function(){
    'use strict';
    angular
        .module('db.list', [])
        .directive('dbList', dbListDirective);

    function dbListDirective () {
        return {
            restrict: 'E',
            templateUrl: 'javascripts/list/list.html',
            replace: true,
            scope: {
                items: '='
            },
            controller: dbListController
        };
    }


    dbListController.$inject = ['$scope'];

    function dbListController($scope) {
        $scope.edition = true;

        $scope.addListItem = function(){
            $scope.items.push(angular.copy($scope.item));
            $scope.item = {};
        }
    }

})();