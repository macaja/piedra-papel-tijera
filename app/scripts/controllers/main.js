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
    	var i = 1;
        var w = 0;
        var p = 0;
        var e = 0;
        $scope.results = [];
    	while(i <= retries){
    		var optionP1 = randomOption();
    		var optionP2 = randomOption();
            var r = result(nameP1,namePC,optionP1,optionP2) ;
            if(r === nameP1){
                w = w + 1;
                $scope.results.push("Ronda # " + i + "\n" + nameP1 + " : " + optionP1 + " " + namePC + " " +": " + optionP2 + "..............................   "+ nameP1 + "  ");
            }else if(r === namePC){
                p = p + 1;
                $scope.results.push("Ronda # " + i + "\n" + nameP1 + " : " + optionP1 + " " + namePC + " " +": " + optionP2 + "..............................   " + namePC + "  ");
            }else{
                e = e + 1;
                $scope.results.push("Ronda # " + i + "\n" + nameP1 + " : " + optionP1 + " " + namePC + " " +": " + optionP2 + "..............................   ");
            }
    		i = i + 1;
    	}
        $scope.win = "Veces ganadas :" + w
        $scope.lost = "Veces perdidas :" + p
        $scope.tie = "Veces empatadas :" + e
    };
    function randomOption(){
    	var options = ["","",""];
    	return options[Math.floor(Math.random() * options.length)];
    }
    function result(nameP1,nameP2,optionP1,optionP2){
    	if(optionP1 === "" && optionP2 === ""){
    		return nameP2;
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return nameP1;
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return nameP1;
    	}
    	if(optionP1=== "" && optionP2 === ""){
    		return nameP2;
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return nameP1;
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return nameP2;
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return "Empate";
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return "Empate";
    	}
    	if(optionP1 === "" && optionP2 === ""){
    		return "Empate";
    	}
    }
  });
