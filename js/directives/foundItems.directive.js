(function() {
    'use strict';
    
    angular
        .module('NarrowItDownApp')
        .directive('foundItems', FoundItemsDirective);
    
    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true,
            template: `
                <div class="menu-items">
                    <div ng-if="list.items.length === 0" class="error-message">
                        Nothing found
                    </div>
                    <div class="menu-item" ng-repeat="item in list.items">
                        <div>
                            <span>{{item.name}}</span>,
                            <span>{{item.short_name}}</span>,
                            <span>{{item.description}}</span>
                        </div>
                        <button ng-click="list.removeItem($index)">Don't want this one!</button>
                    </div>
                </div>
            `
        };
        
        return ddo;
    }
    
    function FoundItemsDirectiveController() {
        var list = this;
        
        list.removeItem = function(index) {
            list.onRemove({ index: index });
        };
    }
})();
