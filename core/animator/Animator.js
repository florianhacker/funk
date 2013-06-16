// @florianhacker
// static class, do not instanciate

FUNK.Animator = function(){
	
	this.callback = null;
}


FUNK.Animator.run = function( cb ){

	this.callback = cb || null;

	requestAnimationFrame( FUNK.Animator.loop );	
}

FUNK.Animator.loop = function( ){
	
	if( this.callback ) FUNK.Animator.callback();

	FUNK.Renderer.render();

	requestAnimationFrame( FUNK.Animator.loop );	
}

