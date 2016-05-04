﻿/// <reference path="" />
/// <reference path="Pages/ContactUs/contactus.html" />
/// <reference path="" />
/// <reference path="" />
/// <reference path="" />

// Define your Routing here.

angular.module("myApp")
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('Home', {
            url: '/home',
            templateUrl: 'App/Pages/Home/home.html',
            controller: 'homeController'
        })
        .state('Portfolio', {
            url: '/Portfolio',
            templateUrl: 'App/Pages/Portfolio/portfolio.html',
            controller: 'portfolioController'
        })
        .state('About', {
            url: '/About',
            templateUrl: 'App/Pages/About/about.html',
            controller: 'aboutController'
        })
        .state('Contactus', {
            url: '/Contactus',
            templateUrl: 'App/Pages/ContactUs/contactus.html',
            controller: 'contactusController'
        })
        .state("otherwise", {
            url: "*path",
            templateUrl: "App/Pages/NotFound/notFound.html"
        });
    }])

    // If you want to go to a default state on every startup
    // Define it here
    .run(["$location", function ($location) {
        // Go to state dashboard
        $location.url('/home');
    }]);
