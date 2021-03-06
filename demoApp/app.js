angular.module('demoApp',
  ['ngHintDirectives','breadcrumbs','dataFetch', 'haAnimations', 'haPrFlags', 'haQuestions', 'ngAnimate',
  'haShareResources','haSupportComponents', 'haTriage', 'ngRoute', 'qaStore','ngLocale'])
  .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/questions/help-support-components/:componentCat?/:subComponentCat?', {
          controller: 'SupportComponentsController',
          controllerAs: 'supComponentsCtrl',
          templateUrl: 'questions/support-components/support-components.html'
        }).
        when('/questions/help-pr-flags', {
          controller: 'PrFlagsController',
          controllerAs: 'prFlagsCtrl',
          templateUrl: 'questions/pr-flags/pr-flags.html'
        }).
        when('/questions/help-triage', {
          controller: 'TriageController',
          controllerAs: 'triageCtrl',
          templateUrl: 'questions/triage/help-triage.html'
        }).
        when('/questions/help-share-resources', {
          controller: 'ShareResourcesController',
          controllerAs: 'shareResourcesCtrl',
          templateUrl: 'questions/share-resources/share-resources.html'
        }).
        when('/questions/help-update-docs', {
          templateUrl: 'questions/update-docs.html'
        }).
        when('/questions/intro', {
          templateUrl: 'questions/intro.html'
        }).
        when('/questions/:url', {
          controller: 'QuestionsController',
          controllerAs: 'questionsCtrl',
          templateUrl: 'questions/questions.html'
        }).
        otherwise({redirectTo: '/questions/intro'});
}])