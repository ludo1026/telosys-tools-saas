/*
 *  Copyright (C) 2015  Telosys-tools-saas project org. ( http://telosys-tools-saas.github.io/ )
 *
 *  Licensed under the GNU LESSER GENERAL PUBLIC LICENSE, Version 3.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *          http://www.gnu.org/licenses/lgpl.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
(function (){
    'use strict';

    angular.module('telosys-tools-saasApp', [
        'LocalStorageModule',
        'tmh.dynamicLocale',
        'ngResource',
        'ui.router',
        'ngCookies',
        'pascalprecht.translate',
        'ngCacheBuster',
        'restangular',
        'logger',
        'ui.bootstrap'])

        .run(function ($rootScope, $location, $window, $http, $state, $translate, Auth, Principal, Language, ENV, CONFIG) {
            $rootScope.ENV = ENV;
            $rootScope.VERSION = CONFIG.VERSION;
            $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;

                if (Principal.isIdentityResolved()) {
                    Auth.authorize();
                }

                // Update the language
                Language.getCurrent().then(function (language) {
                    $translate.use(language);
                });
            });

            $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
                var titleKey = 'global.title';

                $rootScope.previousStateName = fromState.name;
                $rootScope.previousStateParams = fromParams;

                // Set the page title key to the one configured in state or use default one
                if (toState.data.pageTitle) {
                    titleKey = toState.data.pageTitle;
                }
                $translate(titleKey).then(function (title) {
                    // Change window title with translated one
                    $window.document.title = title;
                });
            });

            $rootScope.back = function() {
                // If previous state is 'activate' or do not exist go to 'home'
                if ($rootScope.previousStateName === 'activate' || $state.get($rootScope.previousStateName) === null) {
                    $state.go('home');
                } else {
                    $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
                }
            };
        })

        .factory('authInterceptor', function ($rootScope, $q, $location, localStorageService) {
            return {
                // Add authorization token to headers
                request: function (config) {
                    config.headers = config.headers || {};
                    var token = localStorageService.get('token');

                    if (token && token.expires_at && token.expires_at > new Date().getTime()) {
                        config.headers.Authorization = 'Bearer ' + token.access_token;
                    }

                    return config;
                }
            };
        });
})();