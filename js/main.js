function main()
{	
	// Setup
	setup();
	
	// Keyboard Test
	document.onkeydown = keyPressed;

	// Fade Renderer
	container.cache(0,0,window.innerWidth,window.innerHeight);


	// Display Test
	var testing = new createjs.Shape();
		//testing.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		testing.graphics.beginFill("DeepSkyBlue").rect(0,0,50,50);
		//testing.x = window.innerWidth * 0.5;
		//testing.y = window.innerHeight * 0.5;
		testing.originX = testing.x;
		testing.counter = 0;
		testing.increment = .1;
		testing.amplitude = 50;
		testing.alpha = 0.5;
		testing.addEventListener( "tick" , testingTick );
	container.addChild(testing);  

	// Extension Test
  	var extend_test = new ExtendedContainer();
		extend_test.output();
}

var counter = 0;

function testingTick( event )
{
	event.target.x = event.target.originX + Math.sin( event.target.counter ) * event.target.amplitude;
	event.target.counter += event.target.increment;
	event.target.alpha = .01;
	//container.updateCache("source-over");
	container.updateCache("source-over");		// might want updateContext
	event.target.alpha = 1;
	/*
	Commposite operation short-hand:

	source-over	destination + source
	destination-over	source + destination
	source-in	destination & source
	destination-in	source & destination
	source-out	source - destination
	destination-out	destination - source
	source-atop	destination + (source & destination)
	destination-atop	source + (destination & source)
	lighter	destination + source + lighter(source & destination)
	darker	destination + source + darker(source & destination)
	xor	source ^ destination
	copy	source
	*/
}	

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 32 )
	{
		console.log("testing");
	}
}