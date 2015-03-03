/**
 * Created by BWI on 27/02/15.
 */
(function (){
    "use strict";

    angular
        .module('telosys-tools-saasApp')
        .controller('AuthorModalChangeController', AuthorModalChangeController);

    AuthorModalChangeController.$inject = ['$modalInstance', '$filter', 'authorEdited', 'Logger'];

    /* @ngInject */
    function AuthorModalChangeController($modalInstance, $filter, authorEdited, Logger){
        /* jshint validthis: true */
        var vm = this;
        var logger = Logger.getInstance('AuthorModalChangeController');

        vm.authorEdited = authorEdited;
        vm.save = save;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
            vm.authorEdited.birthDate = new Date($filter('date')(vm.authorEdited.birthDate, 'yyyy-MM-dd'));
        }

        function save() {
            logger.debug('Choice --> Save');
            console.log(vm.authorEdited);
            $modalInstance.close(vm.authorEdited);
        };

        function cancel() {
            $modalInstance.dismiss('cancel');
        }


    }

})();