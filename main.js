angular.module('myApp', [])
    .controller('main', ['$scope', function($scope) {
        $scope.data = data
        $scope.panel1Name = $scope.data[0].name
        $scope.panel1Des = $scope.data[0].des
        $scope.panel1Url = $scope.data[0].url
        $scope.panel2Name = $scope.data[1].name
        $scope.panel2Des = $scope.data[1].des
        $scope.panel2Url = $scope.data[1].url
        $scope.panel3Name = $scope.data[2].name
        $scope.panel3Des = $scope.data[2].des
        $scope.panel3Url = $scope.data[2].url

        $scope.showProfile = function(name, url, des) {
 $scope.panel1Name = name
        $scope.panel1Des = url
        $scope.panel1Url = des


        }





    }]);











var checkExpiration = function(year, month) {

    var today = new Date();
    var date = new Date();

    if (today.getTime() >= date.setFullYear(year, month)) {

        alert('Expired')
    } else {
        alert('Valid')

    }

}


//checkExpiration(2015, 07)
