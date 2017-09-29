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
    $scope.loadGraph = function(){
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
        function preload() {
            game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
            game.load.image('background','assets/misc/starfield.jpg');
        }
        var button;
        var background;
        function create() {

            game.stage.backgroundColor = '#182d3b';

            background = game.add.tileSprite(0, 0, 800, 600, 'background');

            button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

            button.onInputOver.add(over, this);
            button.onInputOut.add(out, this);
            button.onInputUp.add(up, this);

        }

        function up() {
            console.log('button up', arguments);
        }

        function over() {
            console.log('button over');
        }

        function out() {
            console.log('button out');
        }

        function actionOnClick () {

            background.visible =! background.visible;

        }
    }
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
                $scope.results.push("Ronda # " + i + " " + nameP1 + " " + "escoge " + optionP1 + " " + namePC + " " +"escoge " + optionP2 + " (GANA =>" + nameP1 + ")");
            }if(r === namePC){
                p = p + 1;
                $scope.results.push("Ronda # " + i + " " + nameP1 + " " + "escoge " + optionP1 + " " + namePC + " " +"escoge " + optionP2 + " (GANA =>" + namePC + ")");
            }else{
                e = e + 1;
                $scope.results.push("Ronda # " + i + " " + nameP1 + " " + "escoge " + optionP1 + " " + namePC + " " +"escoge " + optionP2 + "  (EMPATA)");
            }
    		i = i + 1;
    	}
        $scope.win = "Veces ganadas :" + w
        $scope.lost = "Veces perdidas :" + p
        $scope.tie = "Veces empatadas :" + e
    };
    function randomOption(){
    	var options = ["Piedra","Papel","Tijera"];
    	return options[Math.floor(Math.random() * options.length)];
    }
    function result(nameP1,nameP2,optionP1,optionP2){
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
