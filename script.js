var portfolioApp = angular.module('portfolioApp', ['ngAnimate','ngSanitize','ngMaterial','ngRoute']);

portfolioApp.config(['$mdThemingProvider',function($mdThemingProvider) {
    // $mdThemingProvider.definePalette('goldAndBlue', {
    //     '50': 'eaad10',
    //     '100': 'D29B0E',
    //     '200': 'BA890C',
    //     '300': 'A2780B',
    //     '400': 'EFB623',
    //     '500': 'F1BE3B',
    //     '600': '654B07',
    //     '700': '654B07',
    //     '800': 'AA8C3E',
    //     '900': 'E5BD54',
    //     'A100': '0041ff',
    //     'A200': '456ee5',
    //     'A400': '002798',
    //     'A700': '001A65'
    // })
    $mdThemingProvider.theme('default').primaryPalette('indigo')
}]);

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
    // console.log('portfolio controller',$location.path())
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
    // console.log($routeParams.id)

    var project1Text = 'The first web app I created at General Assembly was <a href="http://www.fantasystarcraft.com">Fantasy Starcraft II</a>, a site for casual fans of professional Starcraft II tournaments to create their own fantasy leagues with friends. The project was built with NodeJS and ExpressJS.';
    var project2Text = 'Myself and a partner created <a href="http://fstvl.herokuapp.com">FSTVL</a> as a group project at General Assembly. The site is designed to be a scheduler for attendees to festivals, conventions, and conferences that have many events. Festival organizers can sign up to populate their event data which is searchable for consumers. Consumers can add the events they want to go to and view a calendar that displays their selected events and share that calendar with other users. Once a calendar is shared, the recipient can compare their calendar to their friend\'s. On the compare view, users can delete their events or add their friend\'s events to their own calendars. The project was built in Ruby on Rails';
    var project3Text = 'The final web app I created at General Assembly was <a href="http://rpgchat.herokuapp.com/">RPGChat</a>, a site for groups to play games such as Dungeons &amp; Dragons online through a chat with specific chat commands and features to facilitate role-playing. The site allows users to create games, search for games to join, and finally join a game. Each player can create a character with a built-in character sheet that is tied to features of the chat. Game Masters and players have powerful features such as changing the their name dynamically during chat, hiding messages so that only the characters with the right language can read them, and a flexible dice rolling system injected into chat messages. The project was built in Sails.js with Angular.js.';

    switch($routeParams.id) {
        case '1':
            $scope.projectImage = "fantasystarcraft.png";
            $scope.projectText = $sce.trustAsHtml(project1Text);
            break;
        case '2':
            $scope.projectImage = "fstvl.png";
            $scope.projectText = $sce.trustAsHtml(project2Text);
            break;
        case '3':
            $scope.projectImage = "default.png";
            $scope.projectText = $sce.trustAsHtml(project3Text);
            break;
        default:
            location.href = '/';
            break;
    }
}]);