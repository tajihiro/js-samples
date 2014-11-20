'use strict';

angular.module('angularSample')
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

        var $uri ='sample.json';

        $scope.doSearch = function() {

            $http({
                method : 'GET',
                url : $uri
            }).success(function(data, status, headers, config) {
                $scope.results = data.data;
                console.log(status);
                console.log(data);
            }).error(function(data, status, headers, config) {
                console.log(status);
            });
        };

    }]);