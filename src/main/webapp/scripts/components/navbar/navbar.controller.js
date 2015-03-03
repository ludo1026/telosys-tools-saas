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
    "use strict";

    angular
        .module('telosys-tools-saasApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'CONFIG'];

    function NavbarController($state, Auth, Principal, CONFIG) {
        /* jshint validthis: true */
        var vm = this;

        vm.isAuthenticated = Principal.isAuthenticated;
        vm.isInRole = Principal.isInRole;
        vm.config = CONFIG;
        vm.logout = logout;

        ////////////////
        function logout() {
            Auth.logout();
            $state.go('home');
        };
    }

})();