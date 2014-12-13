var ParentController = function($scope){
    $scope.message = 'Parent Message';
};
var ChildController = function($scope){
    $scope.message = 'Childe Message';
};

//Application定義
var mainApp = angular.module('MainApp',[]);

//Applicationにコントローラ設定
mainApp.controller('parentController', ParentController);
mainApp.controller('childController1', ChildController);
mainApp.controller('childController2', ChildController);