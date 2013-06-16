funk
====

```
FUNK.JS - Easy to use Javascript Animation Toolbox

// initialise FUNK
FUNK.init();

// Add canvas to Dom
FUNK.applyStageToDom();

// CREATE Particle
FUNK.ShapeFactory.createShape("circle", 
  // how it looks (FUNK.VisualObject)
	{ 
		color : "#00ff00", 
		r : 100
	}, 
  // how it moves (FUNK.PhysicalObject)
	{ 
		x : 500, 
		y : 300,
		velX : 5,
		velY : -4,
		drag : 0.99,
		gravity : 0.1
	} 
);

// get funky
FUNK.Animator.run()
```
