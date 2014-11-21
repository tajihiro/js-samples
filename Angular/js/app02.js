//コントローラ定義
var MyController = function($scope){
    $scope.msg,
    $scope.click = function() {
        console.log("click");
        $scope.msg = "CLICKED!!!";
    },
    $scope.myfunc = function(){
        console.log("myfunc");

    }
};
//Application設定
var myApp02 = angular.module('myApp02',[]);
//Applicationにコントローラ設定
myApp02.controller('myController', MyController);
