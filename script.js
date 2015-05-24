var portfolioApp = angular.module('portfolioApp', ['ngAnimate','ngSanitize','ngRoute']);

portfolioApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/main.html',
        controller: 'mainController'
    }).when('/contact', {
        templateUrl: '/contact.html',
        controller: 'mainController'
    }).when('/project/:id', {
        templateUrl: '/project.html',
        controller: 'projectController'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('!');
}]);

portfolioApp.controller('portfolioController', ['$scope','$location', function($scope,$location){
    console.log('portfolio controller',$location.path())
    $scope.$on("$routeChangeSuccess", function () {
        $scope.nav = $location.path() == '/' ? false : true;
    });
    $scope.navPos = function() {
        $scope.nav = $location.path() == '/' ? "lowerNav" : "upperNav";
    }
    $scope.ifPath = function(path) {
        return path == $location.path();
    }
}]);

portfolioApp.controller('mainController', ['$scope', function($scope){
    // $scope.path = false;
}]);

portfolioApp.controller('projectController', ['$scope','$routeParams','$location','$sce', function($scope,$routeParams,$location,$sce){
    console.log($routeParams.id)
    switch($routeParams.id) {
        case '1':
            $scope.projectImage = "fantasystarcraft.png";
            $scope.projectText = $sce.trustAsHtml('My first web app I created at General Assembly was <a href="http://www.fantasystarcraft.com">Fantasy Starcraft II</a>, A site for casual fans of professional Starcraft II tournaments to create their own fantasy leagues with friends.');
            break;
        case '2':
            $scope.projectImage = "fstvl.png";
            $scope.projectText = $sce.trustAsHtml('<a href="http://fstvl.herokuapp.com">Project 2</a> coming soon...');
            break;
        case '3':
            $scope.projectImage = "default.png";
            $scope.projectText = $sce.trustAsHtml('Project 3 coming soon...');
            break;
        default:
            $location.path('/')
            break;
    }
}]);