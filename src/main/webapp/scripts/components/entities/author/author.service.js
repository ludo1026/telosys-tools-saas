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
        .factory('Author', Author);

    Author.$inject = ['Restangular'];

    /* @ngInject */
    function Author(Restangular){
        var service = Restangular.service('authors');

        return {
            get: get,
            getAll: getAll,
            create: create,
            update: update,
            remove: remove
        };

        ////////////////

        /**
         * Get a registry from an id
         * @returns the registry corresponding (promise){*}
         */
        function get(id) {
            return service.one(id)
                .get()
                .then(function(data) {
                    return data;
                })
                .catch(function(error) {
                    //logger.error('authors/:id',"Error lors de l'appel du service REST authors",error);
                    throw error;
                })
        }

        /**
         * Get the list of all the registries
         * @returns the complete array of registries (promise){*}
         */
        function getAll() {
            return service
                .getList()
                .then(function(data) {
                    return data;
                })
                .catch(function(error) {
                    //logger.error('authors',"Error lors de l'appel du service REST authors",error);
                    throw error;
                })
        }

        /**
         * Create a new author
         * @param author to create
         * @returns the author inserted
         */
        function create(author) {
            //logger.debug('call the /registries service');
            return service
                .post(author)
                .then(function(data) {
                    return data;
                })
                .catch(function (error){
                    //logger.error('registries',"Error lors de l'appel du service REST Registry",error);
                    throw error;
                })
        }

        /**
         * Update author
         * @param author to update
         * @returns the author updated
         */
        function update(author) {
            return author.put()
                .then(function(data) {
                    return data;
                })
                .catch(function (error) {
                    throw error;
                })
        }

        /**
         * Remove author
         * @param author to remove
         * @returns the author removed
         */
        function remove(author) {
            return author.remove()
                .then(function(data) {
                    return data;
                })
                .catch(function (error) {
                    throw error;
                })
        }
    }


})();