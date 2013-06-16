/**
	@florianhacker
*/

FUNK.PhysicalObject = function( config )
{	
	this.config = config;
	// default values
	this.posX = config.x || 0;
	this.posY = config.y || 0;

	this.drag = config.drag || 0.9;

	this.velX = config.velX || 1;
	this.velY = config.velY || 2;

	this.gravity = config.gravity || 0;

	this.fade = config.fade || 0;
}

FUNK.PhysicalObject.prototype.update = function()
{
	this.velX *= this.drag;
	this.velY *= this.drag;

	// gravity
	this.velY += this.gravity;

	// position
	this.posX += this.velX;
	this.posY += this.velY;
}