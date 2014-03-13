'use strict';



// Load the Native UI Library
var gui = require('nw.gui');

// Get the current window
var win = gui.Window.get();

// Create the menu bar
var menu = new gui.Menu({ type: 'menubar'});

var filemenu = new gui.MenuItem({label: "File"});

var filesubmenu = new gui.Menu();
var minimize = new gui.MenuItem({label: "Minimize"});
minimize.click = function() { win.minimize(); }

var exit = new gui.MenuItem({label: "Exit"});
exit.click = function() { win.close() }

filesubmenu.append(minimize);
filesubmenu.append(exit);

filemenu.submenu = filesubmenu;

menu.append(filemenu);


var secondmenu = new gui.MenuItem({label: "Second Menu"});

var secondsubmenu = new gui.Menu();
var secondmenuitem = new gui.MenuItem({label: "Nothing"});
secondsubmenu.append(secondmenuitem);

secondmenu.submenu = secondsubmenu;

menu.append(secondmenu);


gui.Window.get().menu = menu;



// Declare app level module which depends on filters, and services
var app = angular.module('app', [ // not sure if we need all of these.
  'ngCookies',
  'ngResource',
  'ngRoute'
]);

app.controller('testCtrl', ['$scope', function ($scope) {

	$scope.data = "This should get rendered.";

}]);

app.directive('appVersion', function($document) {
    return function(scope, element, attr) {
      element.text(angular.version.full);
    };
});