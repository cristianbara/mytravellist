/* 
 * (c) 2016 Cristian-Dan Bara, http://cristianbara.github.io/
 * License: CC BY-NC-ND 3.0, http://creativecommons.org/licenses/by-nc-nd/3.0/
 */

/*
 * The starter model for the application. 
 * It contains a set of list items, se second one is marked as done
 * @property {object} model[@index {number}] 
 * @property {string} model[@index {number}].text - the text information of each list item
 * @property {boolean} model[@index {number}].done - marks wwther the item is done (true), or not (false)
 * @property {number} model[@index {number}].fromTip - if negative, the item does not come from the @tips set, else, it holds the index of the tip in the @tips set
 */
var model = [
    {
        text: "Something you still have to pack",
        done: false,
        fromTip: -1
    },
    {
        text: "Something you've packed",
        done: true,
        fromTip: -1
    },

];



/*
 * The template for the empty model. 
 * It contains a set of list items, se second one is marked as done
 * @property {object} empty_model[@index {number}] 
 * @property {string} empty_model[@index {number}].text - the text information of each list item
 * @property {boolean} empty_model[@index {number}].done - marks wwther the item is done (true), or not (false)
 * @property {number} empty_model[@index {number}].fromTip - if negative, the item does not come from the @tips set, else, it holds the index of the tip in the @tips set
 */
var empty_model = [
    {
        text: "",
        done: false,
        fromTip: -1
    }

];



/*
 * The template for the business travel model. 
 * It contains a set of list items, se second one is marked as done
 * @property {object} business_model[@index {number}] 
 * @property {string} business_model[@index {number}].text - the text information of each list item
 * @property {boolean} business_model[@index {number}].done - marks wwther the item is done (true), or not (false)
 * @property {number} business_model[@index {number}].fromTip - if negative, the item does not come from the @tips set, else, it holds the index of the tip in the @tips set
 */
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



/*
 * The template for the city break travel model. 
 * It contains a set of list items, se second one is marked as done
 * @property {object} city_break_model[@index {number}] 
 * @property {string} city_break_model[@index {number}].text - the text information of each list item
 * @property {boolean} city_break_model[@index {number}].done - marks wwther the item is done (true), or not (false)
 * @property {number} city_break_model[@index {number}].fromTip - if negative, the item does not come from the @tips set, else, it holds the index of the tip in the @tips set
 */
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



/*
 * The template for the mountain travel model. 
 * It contains a set of list items, se second one is marked as done
 * @property {object} mountain_model[@index {number}] 
 * @property {string} mountain_model[@index {number}].text - the text information of each list item
 * @property {boolean} mountain_model[@index {number}].done - marks wwther the item is done (true), or not (false)
 * @property {number} mountain_model[@index {number}].fromTip - if negative, the item does not come from the @tips set, else, it holds the index of the tip in the @tips set
 */
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




/*
 * The template for the beach travel model. 
 * It contains a set of list items
 * @property {object} beach_model[@index {number}] 
 * @property {string} beach_model[@index {number}].text - the text information of each list item
 * @property {boolean} beach_model[@index {number}].done - marks wwther the item is done (true), or not (false)
 * @property {number} beach_model[@index {number}].fromTip - if negative, the item does not come from the @tips set, else, it holds the index of the tip in the @tips set
 */
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



/*
 * The et of tips for every travel model. 
 * It contains a set of list items
 * @property {object} tips[@index {number}] 
 * @property {string} tips[@index {number}].text - the text information of each tip item
 * @property {string} tips[@index {number}].tip - text to be includede in the travel list @model
 * @property {boolean} tips[@index {number}].done - if false, the tip was not added to the @model, else the tip is present in the @model list
 */
var tips = [
    {
        text: "Don't forget to <u>check the weather</u>!",
        tip: "Check the weather",
        done: false
    },
    {
        text: "If you are flying, use a <u>transparent bag for cosmetics</u>. It's going to speed up your airport security checkup.",
        tip: "Transparent bag for cosmetics",
        done: false
    },
    {
        text: "Don't forget yout <u>tooth brush and tooth paste</u>.",
        tip: "Tooth brush & tooth paste",
        done: false
    },
    {
        text: "For a longer trip, a <u>nail clipper</u> might come in handy.",
        tip: "Nail clipper",
        done: false
    },
    {
        text: "Sometimes traveling can be noizy. Pack some <u>ear taps</u>",
        tip: "Ear taps",
        done: false
    },
    {
        text: "In case you scratch, or injure yourself, pack some <u>adhesive bandages</u>",
        tip: "Adhesive bandages",
        done: false
    },
    {
        text: "For long waiting times, <u>something to read</u> may help.",
        tip: "Adhesive bandages",
        done: false
    }
/* to be extended */
];


/*
 * Function which opens a url.
 * @param {string} url - the URL string
 * @return {undefined}
 */
var openURL = function (url) {
    if (device.platform === 'Android') {
        navigator.app.loadUrl(url, {
            openExternal: true
        });
    } else {
        window.open(url, '_system');
    }
};



/*
 * @module myTravelListApp 
 */
angular.module('myTravelListApp', ['contenteditable', 'ngStorage', 'ngAnimate', 'ngSanitize'])
    .controller('myTravelListController', function ($scope, $filter, $localStorage, $timeout) {
        /*
         * @param {boolean} $scope.isShowingList - flag which toggle between the @model list tab and the @tips tab
         */
        $scope.isShowingList = true;



        /*
         * @param {boolean} $scope.showMenu - flag which triggers the display/hiding of the left hand side menu
         */
        $scope.showMenu = false;



        /*
         * Loads data @model from local storage is it exisits. 
         */
        if ($localStorage.myToDos) {

            $scope.model = $localStorage.myToDos;

        } else {
            // take the default model
            $scope.model = model;
        };




        /*
         * Loads @tips into the application scope. 
         */
        $scope.tips = tips;



        /*
         * orderBy is a function reference to the $filter service. 
         */
        var orderBy = $filter('orderBy');



        /*
         * Function which sets the @isShowingList parameter.
         * @param {boolean} booleanValue - a boolean value
         * @return {undefined}
         */
        $scope.setIsShowingList = function (booleanValue) {
            $scope.isShowingList = booleanValue;
        };



        /*
         * Function which orders a data @model according to the @done parameter and then save the result in the local storage.
         * @return {undefined}
         */
        $scope.orderModel = function () {
            $scope.model = orderBy($scope.model, 'done', false);
            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;
        };



        /*
         * Item functions
         */

        /*
         * Function which marks an item as done.
         * @param {object} item - a @model item
         * @return {undefined}
         */
        $scope.markAsDone = function (item) {
            // change the done flag for the index item            
            item.done = true;

            $timeout(function () {
                $scope.orderModel();
            }, 200);

        }



        /*
         * Function which removes an item from the @model.
         * @param {object} item - a @model item
         * @return {undefined}
         */
        $scope.removeToDo = function (item) {
            // if item comes from the tip, reset the tip
            if (item.tip >= 0) {
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
            $timeout(function () {
                $scope.$apply();
            }, 100);

        };



        /*
         * Function which adds a default item to the @model.
         * @return {undefined}
         */
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
        };



        /*
         * Function which adds an item to the @tips.
         * @param {string} tipText - the text from the @tips item
         * @param {number} tipIndex - the index number from the @tips item
         * @return {undefined}
         */
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
            $timeout(function () {
                $scope.$apply();
            }, 100);
        };




        /*
         *Left hand side menu functions
         */



        /*
         * Function which marks an item as not done.
         * @param {object} item - a @model item
         * @return {undefined}
         */
        $scope.markUndone = function (item) {
            item.done = false;

            //order the list
            $scope.orderModel();

            // save the new $scope model to local storage
            $localStorage.myToDos = $scope.model;

        };



        /*
         * Function which toggles the left hand side menu.
         * @return {undefined}
         */
        $scope.toggleMenu = function () {
            $scope.showMenu = !$scope.showMenu;
        };



        /*
         * Function which resets the @model, turning all items to done = false.
         * @return {undefined}
         */
        $scope.resetList = function () {
            // reset all the existing items in the model
            for (i = 0; i < $scope.model.length; i++) {
                $scope.model[i].done = false;
            }
            // save change in local storage
            $localStorage.myToDos = $scope.model;

            //close the menu
            $scope.showMenu = false;

        };



        /*
         * Function which deletes all items in the @model
         * @return {undefined}
         */
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
            $timeout(function () {
                $scope.$apply();
            }, 100);

            //close the menu
            $scope.showMenu = false;
        };


        /*
         * New list handlers
         */


        /*
         * Function which assigns a new empty list in the @model
         * @return {undefined}
         */
        $scope.newEmptyList = function () {
            $scope.deleteList();
            $scope.model = empty_model;

            // save change in local storage
            $localStorage.myToDos = $scope.model;

            //close the menu
            $scope.showMenu = false;

        };



        /*
         * Function which assigns a new business travel list in the @model
         * @return {undefined}
         */
        $scope.newBusinessList = function () {
            $scope.deleteList();
            $scope.model = business_model;

            // save change in local storage
            $localStorage.myToDos = $scope.model;

            //close the menu
            $scope.showMenu = false;


        };



        /*
         * Function which assigns a new city break list in the @model
         * @return {undefined}
         */
        $scope.newCityBreakList = function () {
            $scope.deleteList();
            $scope.model = city_break_model;

            // save change in local storage
            $localStorage.myToDos = $scope.model;

            //close the menu
            $scope.showMenu = false;
        };



        /*
         * Function which assigns a new mountain travel list in the @model
         * @return {undefined}
         */
        $scope.newMontainList = function () {
            $scope.deleteList();
            $scope.model = mountain_model;

            // save change in local storage
            $localStorage.myToDos = $scope.model;

            //close the menu
            $scope.showMenu = false;
        };



        /*
         * Function which assigns a new beach travel list in the @model
         * @return {undefined}
         */
        $scope.newBeachList = function () {
            $scope.deleteList();
            $scope.model = beach_model;

            // save change in local storage
            $localStorage.myToDos = $scope.model;

            //close the menu
            $scope.showMenu = false;
        }


    });