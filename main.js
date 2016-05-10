angular.module('myApp', ['ngAnimate'])
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
            $scope.panel3Name = $scope.panel2Name
            $scope.panel3Des = $scope.panel2Des
            $scope.panel3Url = $scope.panel2Url
            $scope.panel2Name = $scope.panel1Name
            $scope.panel2Des = $scope.panel1Des
            $scope.panel2Url = $scope.panel1Url
            $scope.panel1Name = name;
            $scope.panel1Des = des;
            $scope.panel1Url = url;

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
