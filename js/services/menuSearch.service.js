(function() {
    'use strict';
    
    angular
        .module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchService);
    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            })
            .then(function(response) {
                var foundItems = [];
                
                // Process all categories
                for (var category in response.data) {
                    var menuItems = response.data[category].menu_items;
                    
                    // Process items in each category
                    for (var i = 0; i < menuItems.length; i++) {
                        if (menuItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            foundItems.push(menuItems[i]);
                        }
                    }
                }
                
                return foundItems;
            });
        };
    }
})();
