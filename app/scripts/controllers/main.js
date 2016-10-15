'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function ($scope, $localStorage) {

  	$scope.$storage = $localStorage;



  	$scope.borrar_storage = function (){
  		$localStorage.contador ++;
	}

	$scope.borrar_storage2 = function (){
  		$localStorage.contador --;
	}


  });
