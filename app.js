/* 
 * (c) 2016 Cristian-Dan Bara, http://cristianbara.github.io/
 * License: CC BY-NC-ND 3.0, http://creativecommons.org/licenses/by-nc-nd/3.0/
 */
var model = [
    {
        text: "Something you still have to pack",
        done: false,
        fromTip: -1
    },
    {
        text: "Something you've packed",
        done: false,
        fromTip: -1
    },

];

var empty_model = [
    {
        text: "",
        done: false,
        fromTip: -1
    } 

];

var business_model = [
    {
        text: "",
        done: false,
        fromTip: -1
    },
    {
        text: "Wallet",
        done: false,
        fromTip: -1
    },
    {
        text: "Keys",
        done: false,
        fromTip: -1
    },
    {
        text: "Identity documents",
        done: false,
        fromTip: -1
    },
    {
        text: "Travel tickets/ boarding passes",
        done: false,
        fromTip: -1
    },
    {
        text: "Phone",
        done: false,
        fromTip: -1
    },
    
    {
        text: "Computer/Tablet",
        done: false,
        fromTip: -1
    },
    {
        text: "Business cards",
        done: false,
        fromTip: -1
    },
    {
        text: "Notebook",
        done: false,
        fromTip: -1
    },
    {
        text: "Umbrella",
        done: false,
        fromTip: -1
    },

];

var city_break_model = [
    {
        text: "",
        done: false,
        fromTip: -1
    },
    {
        text: "Wallet",
        done: false,
        fromTip: -1
    },
    {
        text: "Keys",
        done: false,
        fromTip: -1
    },
    {
        text: "Identity documents",
        done: false,
        fromTip: -1
    },
    {
        text: "Travel tickets/ boarding passes",
        done: false,
        fromTip: -1
    },
    {
        text: "Phone",
        done: false,
        fromTip: -1
    },
    {
        text: "Camera",
        done: false,
        fromTip: -1
    },
    {
        text: "City guide",
        done: false,
        fromTip: -1
    },
    {
        text: "Language guide",
        done: false,
        fromTip: -1
    },
    {
        text: "Umbrella",
        done: false,
        fromTip: -1
    },
    ];

var mountain_model = [
    {
        text: "",
        done: false,
        fromTip: -1
    },
    {
        text: "Wallet",
        done: false,
        fromTip: -1
    },
    {
        text: "Keys",
        done: false,
        fromTip: -1
    },
    {
        text: "Identity documents",
        done: false,
        fromTip: -1
    },
    {
        text: "Travel tickets/ boarding passes",
        done: false,
        fromTip: -1
    },
    {
        text: "Phone",
        done: false,
        fromTip: -1
    },
    {
        text: "Camera",
        done: false,
        fromTip: -1
    },
    {
        text: "Maps",
        done: false,
        fromTip: -1
    },
    {
        text: "Boots",
        done: false,
        fromTip: -1
    },
    {
        text: "Sun glasses",
        done: false,
        fromTip: -1
    },
    {
        text: "Flashlite",
        done: false,
        fromTip: -1
    }
];

var beach_model = [
  {
        text: "",
        done: false,
        fromTip: -1
    },
    {
        text: "Wallet",
        done: false,
        fromTip: -1
    },
    {
        text: "Keys",
        done: false,
        fromTip: -1
    },
    {
        text: "Identity documents",
        done: false,
        fromTip: -1
    },
    {
        text: "Travel tickets/ boarding passes",
        done: false,
        fromTip: -1
    },
    {
        text: "Phone",
        done: false,
        fromTip: -1
    },
    {
        text: "Camera",
        done: false,
        fromTip: -1
    },
    {
        text: "Sunscreen",
        done: false,
        fromTip: -1
    },
    {
        text: "Sun glasses",
        done: false,
        fromTip: -1
    },
    {
        text: "Swimming suit",
        done: false,
        fromTip: -1
    },
];

var tips = [
    {
        text: "Don't forget your <u>sunscreen</u>!",
        tip: "Sunscreen",
        done: false
    },
    {
        text: "<u>Sunglasses</u> are always a good choice.",
        tip: "Sunglasses",
        done: false
    },

];

var openURL = function (url) {
    if (device.platform === 'Android') {
        navigator.app.loadUrl(url, {
            openExternal: true
        });
    } else {
        window.open(url, '_system');
    }
};

angular.module('myTravelListApp', ['contenteditable', 'ngStorage', 'ngAnimate', 'ngSanitize'])
    .controller('myTravelListController', function ($scope, $filter, $localStorage, $timeout) {
        // controller code goes here
        $scope.isShowingList = true;
        $scope.showMenu = false;

        if ($localStorage.myToDos) {

            $scope.model = $localStorage.myToDos;

        } else {

            $scope.model = model;
        };
    
    //$scope.model = model;    
    $scope.tips = tips;


        var orderBy = $filter('orderBy');


        $scope.setIsShowingList = function (booleanValue) {
            $scope.isShowingList = booleanValue;
        }

        $scope.orderModel = function () {
            $scope.model = orderBy($scope.model, 'done', false);
            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;
        }

        $scope.markAsDone = function (item) {
            // change the done flag for the index item            
            item.done = true;

            $timeout(function () {
                $scope.orderModel();
            }, 200);

        }

        $scope.removeToDo = function (item) {
            // if item comes from the tip, reset the tip
            if(item.tip >= 0 ) {
                $scope.tips[item.tip].done = false;
            }
            // take out the index item from the $scope model
            for (i = 0; i < $scope.model.length; i++) {
                if ($scope.model[i] == item) {
                    $scope.model.splice(i, 1);
                }
            };

            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;
            
            //force scope rendering
            $timeout( function() {
                $scope.$apply();
            }, 100);

        }

        $scope.addToDo = function () {
            // make a new, empty item
            var newItem = {
                    text: '',
                    done: false,
                    fromTip: -1
                }
                // push the item to the $scope model list
                //$scope.model.push(newItem);

            // add new item to the top of the list
            $scope.model.splice(0, 0, newItem);

            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;

            //refresh $scope
            //$scope.$apply();
        }
        
        $scope.addToDoFromTip = function (tipText, tipIndex) {
            // make a new, empty item
            var newItem = {
                    text: tipText,
                    done: false,
                    fromTip: tipIndex
                }
                // push the item to the $scope model list
                //$scope.model.push(newItem);
            //mark tip as added
            $scope.tips[tipIndex].done = true;

            // add new item to the top of the list
            $scope.model.splice(0, 0, newItem);

            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;

            //force scope rendering
            $timeout( function() {
                $scope.$apply();
            }, 100);
        }

        $scope.markUndone = function (item) {
            item.done = false;

            //order the list
            $scope.orderModel();

            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;

        }

        $scope.toggleMenu = function () {
            $scope.showMenu = !$scope.showMenu;
        }

        $scope.resetList = function () {
            // reset all the existing items in the model
            for (i = 0; i < $scope.model.length; i++) {
                $scope.model[i].done = false;
            }
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;

        }

        $scope.deleteList = function () {
            // delete the entire list
            $scope.model = [];
            
            // reset all the existing items in the model
            for (i = 0; i < $scope.tips.length; i++) {
                $scope.tips[i].done = false;
            }
                        
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //force scope rendering
            $timeout( function() {
                $scope.$apply();
            }, 100);
            
            //close the menu
            $scope.showMenu = false;
        }
        
        $scope.newEmptyList = function() {
            $scope.deleteList();
            $scope.model = empty_model;
            
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;
            
        }
        
        $scope.newBusinessList = function() {
            $scope.deleteList();
            $scope.model = business_model;
            
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;
            
            
        }
        
        $scope.newCityBreakList = function() {
            $scope.deleteList();
            $scope.model = city_break_model;
            
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;
        }
        
        $scope.newMontainList = function() {
            $scope.deleteList();
            $scope.model = mountain_model;
            
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;
        }
        
        $scope.newBeachList = function() {
            $scope.deleteList();
            $scope.model = beach_model;
            
            // save change in local storage
            $localStorage.myToDos = $scope.model;
            
            //close the menu
            $scope.showMenu = false;
        }
        

    });