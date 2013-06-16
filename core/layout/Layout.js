/**
	@florianhacker
*/

FUNK.Layout = function(){

}


FUNK.Layout.create = function(type, visuals, config){

	switch(type){

		case "grid":

			this.createGrid(visuals, config);

			break;

		default:

			break;
	}

}




FUNK.Layout.createGrid = function(visuals, config){

	var columnMax = config.columns || 5;
	var rowsMax = config.rows || 5;

	console.log('create grid:', rowsMax + " x " + columnMax);

	// load visuals if not enough to fill grid
	var maxItems = columnMax*rowsMax;
	while(visuals.length < maxItems){
		var visualClone = visuals[visuals.length-1].clone();
		FUNK.VISUALS.push( visualClone );
		visuals.push( visualClone );
	}

	// GRID layout
	var currentColumn = 0;
	var currentRow = 0;

	for(var i = 0; i<maxItems; i++){
		
		//console.log("i", i)
		//visuals[i].allowUpdate = false;

		visuals[i].posX = (FUNK.STAGE.width/columnMax) * currentColumn - visuals[i].width/2;
		visuals[i].posY = (FUNK.STAGE.height/rowsMax) * currentRow - visuals[i].height/2;

		if( currentColumn == columnMax-1){
			currentRow++;
			currentColumn=0;
		}
		else{
			currentColumn++;
		}
	}

}



