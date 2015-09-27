(function(){
    'use strict';

    var myApp = angular
        .module('dashboard', ['db.list', 'dataModule']);


    myApp.controller('myAppController', ['$scope', 'dataFactory', function($scope, dataFactory) {

        $scope.phones = [];

        dataFactory.getPhones()
            .then(function(phones){
                $scope.phones = phones;
            });

        $scope.sendData = function(newValue){
            dataFactory.setPhones(newValue)
                .then(function(phones){
                    $scope.phones = phones;
                });
        };

    }]);

})();

