/**
 * Created by tajihiro on 2014/11/23.
 */
//コントローラ定義
var MainController = function($scope){
    $scope.myfunc = function(){
        $scope.memberName = $scope.memberId;
    };
};

var MemberListController = function($resource, $scope){
    var res = $resource('/member.json');
    $scope.members = res.query();
    $scope.changeId = function(){
        //JSON取得
        $scope.memberName = res.query();
    };
};

//ネストコントローラ
var ParentController = function($scope){
    $scope.message = 'Parent Message';
};
var ChildController = function($scope){
    $scope.message = 'Childe Message';
};

//Application定義
var mainApp = angular.module('MainApp',['ngResource']);
mainApp.config(['$resourceProvider', function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = true;
}]);

//Applicationにコントローラ設定
mainApp.controller('mainController', MainController);
mainApp.controller('memberListController', MemberListController);
mainApp.controller('parentController', ParentController);
mainApp.controller('childController1', ChildController);
mainApp.controller('childController2', ChildController);

