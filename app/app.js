(function (angular) {

    var app=angular.module('myApp',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'home.html'
        }).when('/in_theaters',{
            templateUrl:'2.html'
        }).when('/coming_soon',{
            templateUrl:'1.html'
        }).when('/top',{
            templateUrl:'home.html'
        }).otherwise({
            redirectTo:'home.html'
        })
    });

})(angular);