/**
	@florianhacker
*/

var FUNK = FUNK || {};

// global vars
FUNK.VISUALS = [];
FUNK.STAGE = null;
FUNK.CTX = null;
FUNK.WIDTH = null;
FUNK.HEIGHT = null;

FUNK.init = function(width, height, backgroundColor){

	var canvas = document.createElement("canvas");
	canvas.width = FUNK.WIDTH = width || window.innerWidth;
	canvas.height = FUNK.HEIGHT = height || window.innerHeight;
	canvas.style.backgroundColor = backgroundColor || "#000";

	var ctx = canvas.getContext('2d');

	FUNK.STAGE = canvas;
	FUNK.CTX = ctx;
}


FUNK.getStage = function(){

	return FUNK.STAGE;
}


FUNK.applyStageToDom = function(){

	document.body.appendChild(FUNK.STAGE);
}

