//コントローラ定義
var MyController = function($scope){
    $scope.msg1 = "こんにちは。コントローラ(Message1)!!";
    $scope.msg2 = "こんにちは。コントローラ(Message2)!!";
    $scope.myfunc = function(){
        $scope.msg1 = "メッセージ変更!!";
    };
};
//Application定義
var myApp01 = angular.module('myApp01',[]);
//Applicationにコントローラ設定
myApp01.controller('myController', MyController);
