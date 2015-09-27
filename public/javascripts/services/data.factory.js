(function() {
    'use strict';

    angular
        .module('dataModule', [])
        .factory('dataFactory', dataFactory);

    // Dépendances
    dataFactory.$inject = ['$http', '$q', '$log'];

    function dataFactory($http, $q, $log) {
       return {
            getPhones : getPhones,
            setPhones: setPhones
        };

        function getPhones(){
            var deferred = $q.defer();

            // Récupère les résultats de la recherche via une requête HTTP
            $http.get('/users')
                .success(function(data){
                    var phones = data.phones;
                    deferred.resolve(phones);
                })
                .error(function(data, status){
                    var mes = "Erreur à la récupération des téléphones." ;
                    $log.error(mes);
                    deferred.reject(mes);
                });

            return deferred.promise;
        }

        function setPhones(value){
            var deferred = $q.defer();

            // Récupère les résultats de la recherche via une requête HTTP
            $http.put('/users', value)
                .success(function(data){
                    var phones = data;
                    deferred.resolve(phones);
                })
                .error(function(data, status){
                    var mes = "Erreur à la mise à jour des téléphones." ;
                    $log.error(mes);
                    deferred.reject(mes);
                });

            return deferred.promise;
        }
    }
})();
