angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Jon', 'Spencer', 'Breyden', 'Joe'];

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = '';
  };
});
