'use strict';

/**
 * @ngdoc function
 * @name xyzApp.controller:MainCtrl
 * @description
 * # PlayCtrl
 * Controller of the xyzApp
 */
angular.module('xyzApp')
  .controller('PlayCtrl', function ($scope, $window) {
    $scope.startToPlay = function(){
    	var nameP1 = $scope.data.players.firstPlayer;
    	var namePC = $scope.data.players.secondPlayer;
    	var retries = $scope.data.numberOfRetries
    	var i = 0;
    	while(i < retries){
    		var optionP1 = randomOption();
    		var optionP2 = randomOption();
    		//$scope.result.info = "Ronda " + (i+1) + nameP1 + "escoge " + optionP1 + namePC + "escoge " + optionP2
    		//$scope.result.info = "Ronda "
    		$window.alert("Ronda " + (i+1) + nameP1 + "escoge " + optionP1 + namePC + "escoge " + optionP2);
    		//$scope.result.info.winner = winner(nameP1,nameP2,optionP1,optionP2)
    		$window.alert(winner(nameP1,namePC,optionP1,optionP2));
    		i = i + 1;
    	}
    	
    };
    function randomOption(){
    	var options = ["Piedra","Papel","Tijera"];
    	return options[Math.floor(Math.random() * options.length)];
    }
    function winner(nameP1,nameP2,optionP1,optionP2){
    	if(optionP1 === "Piedra" && optionP2 === "Papel"){
    		return nameP2;
    	}
    	if(optionP1 === "Piedra" && optionP2 === "Tijera"){
    		return nameP1;
    	}
    	if(optionP1 === "Papel" && optionP2 === "Piedra"){
    		return nameP1;
    	}
    	if(optionP1=== "Papel" && optionP2 === "Tijera"){
    		return nameP2;
    	}
    	if(optionP1 === "Tijera" && optionP2 === "Papel"){
    		return nameP1;
    	}
    	if(optionP1 === "Tijera" && optionP2 === "Piedra"){
    		return nameP2;
    	}
    	if(optionP1 === "Piedra" && optionP2 === "Piedra"){
    		return "Empate";
    	}
    	if(optionP1 === "Papel" && optionP2 === "Papel"){
    		return "Empate";
    	}
    	if(optionP1 === "Tijera" && optionP2 === "Tijera"){
    		return "Empate";
    	}
    }
  });
