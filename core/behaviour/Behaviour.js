/**
	@florianhacker
*/

FUNK.Behaviour = function(){}

FUNK.Behaviour.mouseX = 0;
FUNK.Behaviour.mouseY = 0;


FUNK.Behaviour.followMouse = function(vis){

	this.visual = vis;
	this.visual.allowUpdate = false;

	document.addEventListener('mousemove', this.onMouseMove )

	this.update();
}

FUNK.Behaviour.onMouseMove = function(e){

	FUNK.Behaviour.mouseX = e.pageX;
	FUNK.Behaviour.mouseY = e.pageY;
}


FUNK.Behaviour.update = function(){

	this.visual.posX += (this.mouseX - this.visual.posX - this.visual.width/2) * 0.1;
	this.visual.posY += (this.mouseY - this.visual.posY - this.visual.height/2) * 0.1;

	requestAnimationFrame( this.update.bind( FUNK.Behaviour ) );
}


