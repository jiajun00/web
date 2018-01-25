var container = document.getElementById( 'container' );

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setClearColor( 0xd3b3ff, 1 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
camera.position.set( 0, -2, 4 );

var controls = new THREE.OrbitControls( camera, renderer.domElement );

var scene = new THREE.Scene();

var sapphire = new THREE.Color( 0x0f52ba );

// lights

var aLight = new THREE.AmbientLight( sapphire );
scene.add( aLight );

var dLight1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
dLight1.position.set( 1, 0.8, 1 );
scene.add( dLight1 );

var dLight2 = new THREE.DirectionalLight( 0xffffff, 0.2 );
dLight2.position.set( -1, -0.5, 1 );
scene.add( dLight2 );

var dLight3 = new THREE.DirectionalLight( 0xffffff, 0.1 );
dLight3.position.set( 0.5, .5, 1 );
scene.add( dLight3 );

// gem

var gemGroup = new THREE.Group();
scene.add( gemGroup );

var height = 0.5;
var gemGeo = new THREE.CylinderGeometry( 0.5, 1, height, 6 );
gemGeo.faces.splice( -6 ); // remove bottom cap

var gemMat = new THREE.MeshPhongMaterial({
	flatShading: true,
	side: THREE.DoubleSide,
	color: sapphire,
	specular: 0xffffff,
	transparent: true,
	opacity: 0.9
});

var gem = new THREE.Mesh( gemGeo, gemMat );
gem.scale.z = 1.5;
gem.rotation.x = Math.PI / 2;
gem.position.z = height / 2;;
gemGroup.add( gem );

var wireframe = new THREE.EdgesGeometry( gemGeo );
var line = new THREE.LineSegments( wireframe );
line.material.color.setHex( 0x1c75ff );
line.material.transparent = true;
line.material.opacity = 0.7;
gem.add( line );

var back = gem.clone();
back.rotation.z = Math.PI;
back.position.z = - height / 2;
gemGroup.add( back );

// mouse events

renderer.domElement.style.cursor = 'pointer';

var scale = { s: 1 };
var mouseIsDown = false;
var destination = 0.8;

function mousedown(e){
	mouseIsDown = true;
	gemGroup.rotation.set(0,0,0);
	TWEEN.removeAll();
}

function mouseup(){
	mouseIsDown = false;
	TWEEN.removeAll();
	
	var tweenS = tweenProp( scale, 's', 1 );
	tweenS.onUpdate(function(){
		gemGroup.scale.setScalar( scale.s );
	});

	var dir = Math.random() < 0.5 ? -1 : 1;
	var axis = Math.random() < 0.7 ? 'y' : 'z';
	var tweenR = tweenProp( gemGroup.rotation, axis, dir * Math.PI );
	tweenR.onComplete(function(){
		gemGroup.rotation[axis] = 0;
	});

	tweenS.start();
	tweenR.start();
}

renderer.domElement.addEventListener('mousedown', mousedown, false);
renderer.domElement.addEventListener('mouseup', mouseup, false);

renderer.domElement.addEventListener('touchstart', mousedown, false);
renderer.domElement.addEventListener('touchend', mouseup, false);

//

window.addEventListener( 'resize', resize, false );

function resize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

loop();

function loop( time ) {
	requestAnimationFrame( loop );

	TWEEN.update();

	// animate lights in a circle

	var t  = time / 1000;
	dLight1.position.x = - Math.cos( t * 4 );
	dLight1.position.z = Math.sin( t * 4 );

	dLight2.position.x = Math.cos( t * 4 );
	dLight2.position.z = -Math.sin( t * 4 );

	// animate gem up and down floating

	// gemGroup.position.y = Math.sin( t ) / 2 + 0.5;
	gemGroup.position.y = Math.sin( t * 3 ) * 0.25;

	if ( mouseIsDown ) {
		lerp( scale, 's', 0.8 );
		gemGroup.scale.setScalar( scale.s );
	}

	controls.update();
	renderer.render( scene, camera );
}

function tweenProp( obj, prop, targetValue, update ) {
	var target = {};
	target[prop] = targetValue;

	var tween = new TWEEN.Tween( obj )
		.to( target, 1000 )
		.easing( TWEEN.Easing.Elastic.Out );

	return tween;
}

function lerp( object, prop, destination ) {
	if (object && object[prop] !== destination) {
		object[prop] += (destination - object[prop]) * 0.4;

		if (Math.abs(destination - object[prop]) < 0.01) {
			object[prop] = destination;
		}
	}
}