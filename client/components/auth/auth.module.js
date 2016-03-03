'use strict';

angular.module('tokenApp.auth', [
  'tokenApp.constants',
  'tokenApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
