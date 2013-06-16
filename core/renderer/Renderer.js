// @florianhacker

FUNK.Renderer = function(){
	
}


FUNK.Renderer.render = function(){

	FUNK.CTX.clearRect( 0, 0, FUNK.WIDTH, FUNK.HEIGHT);

	for( var i = 0; i < FUNK.VISUALS.length; i++){

		var visual = FUNK.VISUALS[i];

		FUNK.CTX.drawImage( visual.canvas, visual.posX, visual.posY );

		visual.update();
	}

}