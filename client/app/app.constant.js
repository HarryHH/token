(function(angular, undefined) {
'use strict';

angular.module('tokenApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);