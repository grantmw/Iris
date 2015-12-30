app.controller('AuthController', ['$scope', 'Auth', function($scope, Auth){

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      console.log('login function working')
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      console.log('register function working')
    });
  };

  

}]);





