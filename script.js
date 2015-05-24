var portfolioApp = angular.module('portfolioApp', ['ngAnimate','ngRoute']);

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

portfolioApp.controller('projectController', ['$scope','$routeParams','$location', function($scope,$routeParams,$location){
    console.log($routeParams.id)
    switch($routeParams.id) {
        case '1':
            $scope.projectImage = "fantasystarcraft.png";
            $scope.projectText = "Project 1 coming soon...";
            break;
        case '2':
            $scope.projectImage = "fstvl.png";
            $scope.projectText = "Project 2 coming soon...";
            break;
        case '3':
            $scope.projectImage = "default.png";
            $scope.projectText = "Project 3 coming soon...";
            break;
        default:
            $location.path('/')
            break;
    }
}]);