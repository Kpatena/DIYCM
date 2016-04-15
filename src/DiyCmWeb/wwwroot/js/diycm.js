﻿var app = angular.module('diycm', ['ngRoute', 'LocalStorageModule', 'ngAnimate', 'ui.bootstrap']);

// setup the routing
app.config(function ($routeProvider) {

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
        title: 'Home'
    })
    .when('/projects', {
        templateUrl: 'views/projects/projects.html',
        controller: 'projectsController',
        title: 'Projects'
    })
    .when('/projects/:id', {
        templateUrl: 'views/projects/singleProject.html',
        controller: 'singleProjectController',
        title: 'Project Details'
    })
    .when('/quotes', {
        templateUrl: 'views/quotes/quotes.html',
        controller: 'quoteheadersController',
        title: 'Quotes'
    })
    .when('/quotes-details', {
        templateUrl: 'views/quotes/quotes-details.html',
        controller: 'homeController',
        title: 'Quote Details'
      })
    .when('/categories', {
        templateUrl: 'views/categories/categories.html',
        controller: 'homeController',
        title: 'All Categories'
    })
    .when('/subCategories', {
        templateUrl: 'views/subcategories/subCategories.html',
        controller: 'homeController',
        title: 'All Sub-Categories'
    })
    .when('/documents', {
        templateUrl: 'views/documents/documents.html',
        controller: 'documentsController',
        title: 'All Documents'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        title: 'Login'
    });
    $routeProvider.otherwise({ redirectTo: "/home" });

});

// Controls the rootscope
app.run(function ($rootScope, $route, $location) {
    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
        //Change page title, based on Route information
        $rootScope.title = $route.current.title;
    });

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.loggedUser == null ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "views/login.html" ) {
          // already going to #login, no redirect needed
          $rootScope.showLogin = true;
        } else {
          // not going to #login, we should redirect now
          $location.path( "/login" );
        }
      } else {
        $rootScope.showLogin = true;
      }
    });
});
