/**
	@florianhacker
*/

FUNK.VisualObject = function( canvas, physics )
{
	this.canvas = canvas;
	this.width = canvas.width;
	this.height = canvas.height;

	this.allowUpdate = true;

	var physics = physics || {};

	FUNK.PhysicalObject.call( this, physics );
}

FUNK.VisualObject.constructor = FUNK.VisualObject;
FUNK.VisualObject.prototype = Object.create( FUNK.VisualObject.prototype );

FUNK.VisualObject.prototype.update = function()
{
	if( this.allowUpdate ){

		FUNK.PhysicalObject.prototype.update.call( this );
	}
}

FUNK.VisualObject.prototype.clone = function()
{
	//var canvas = FUNK.cloneCanvas( this.canvas, 0, 0 );
	return new FUNK.VisualObject( this.canvas, this.config );
}




