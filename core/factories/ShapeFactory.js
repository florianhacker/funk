/**
	@florianhacker
*/

FUNK.ShapeFactory = function(){

}


FUNK.ShapeFactory.createShape = function(type, config, physics){

	var canvas = document.createElement("canvas");

	switch(type){

		case "circle":

			this.drawCircle(canvas, config);

			break;

		case "rect":

			this.drawRect(canvas, config);

			break;

		default:

			break;
	}

	var visual = new FUNK.VisualObject(canvas, physics)
	
	FUNK.VISUALS.push(visual);

	return visual;
}




FUNK.ShapeFactory.drawRect = function(canvas, config){

	var w = config.width || 100;
	var h = config.height || 100;
	var c = config.color || "#ff0000";

	canvas.width = w;
	canvas.height = h;

	var ctx = canvas.getContext('2d');
	ctx.fillStyle = c;
	ctx.fillRect(0, 0, w, h);
}



FUNK.ShapeFactory.drawCircle = function(canvas, config){

	var r = config.radius || 100;
	var c = config.color || "#ff0000";

	canvas.width = canvas.height = r*2;

	var ctx = canvas.getContext('2d');
		
	ctx.fillStyle = c || 'red';
	ctx.beginPath();
	ctx.arc(r, r, r, 0, 2*Math.PI);	
	ctx.fill();
	ctx.stroke();
}


