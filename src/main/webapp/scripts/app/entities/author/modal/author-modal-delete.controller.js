/**
 * Created by BWI on 27/02/15.
 */
(function (){
    "use strict";

    angular
        .module('telosys-tools-saasApp')
        .controller('AuthorModalRemoveController', AuthorModalRemoveController);

    AuthorModalRemoveController.$inject = ['$modalInstance', 'authorName', 'Logger'];

    /* @ngInject */
    function AuthorModalRemoveController($modalInstance, authorName, Logger){
        /* jshint validthis: true */
        var vm = this;
        var logger = Logger.getInstance('AuthorModalRemoveController');

        vm.authorName = authorName;
        vm.confirmRemove = confirmRemove;
        vm.cancel = cancel;

        ////////////////

        function confirmRemove() {
            logger.debug('Choice -> confirm delete');
            $modalInstance.close(true);
        };

        function cancel() {
            logger.debug('Choice -> Cancel');
            $modalInstance.dismiss('cancel');
        }


    }

})();