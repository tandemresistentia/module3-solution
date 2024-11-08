(function() {
    'use strict';
    
    angular
        .module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.searchTerm = '';
        menu.found = [];
        
        menu.narrowItDown = function() {
            if (menu.searchTerm.trim() === '') {
                menu.found = [];
                return;
            }
            
            MenuSearchService.getMatchedMenuItems(menu.searchTerm)
                .then(function(result) {
                    menu.found = result;
                });
        };
        
        menu.removeItem = function(index) {
            menu.found.splice(index, 1);
        };
    }
})();
