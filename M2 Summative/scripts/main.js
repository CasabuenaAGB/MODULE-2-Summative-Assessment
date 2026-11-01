//import * as THREE from './three.module.js';
//import { OrbitControls } from './OrbitControls.js';
//I tested it and tried to fix, but ended up getting a 404 error with a file named "three.core.js", which does not exist in my scripts folder


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.background = new THREE.Color(0x77b1fc);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true; 
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5, 10, 2);

light.castShadow = true; 

light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;

scene.add(light);

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 50, 29, 1 );
const ltexture = new THREE.TextureLoader().load("assets/textures/lawn.png")
const material = new THREE.MeshStandardMaterial( { map: ltexture } );
const lawn = new THREE.Mesh( geometry, material );
scene.add( lawn );

const geometry2 = new THREE.BoxGeometry( 56, 35, 1 );
const swtexture = new THREE.TextureLoader().load("assets/textures/sidewalk.jpg")
const material2 = new THREE.MeshStandardMaterial( { map: swtexture } );
const sidewalk = new THREE.Mesh( geometry2, material2 );
scene.add( sidewalk );

const geometry3 = new THREE.BoxGeometry( 15, 35, 1 );
const rtexture = new THREE.TextureLoader().load("assets/textures/Road.png")
const material3 = new THREE.MeshStandardMaterial( { map: rtexture } );
const road = new THREE.Mesh( geometry3, material3 );
scene.add( road );

const geometry4 = new THREE.BoxGeometry( 0.1, 34, 20 );
const htexture = new THREE.TextureLoader().load("assets/textures/House Front.png")
const material4 = new THREE.MeshBasicMaterial( { map: htexture } );
const house = new THREE.Mesh( geometry4, material4 );
scene.add( house );

const geometry5 = new THREE.CapsuleGeometry( 2, 2, 2, 8, 4 );
const ntexture = new THREE.TextureLoader().load("assets/textures/Nut Wall.png")
const material5 = new THREE.MeshBasicMaterial( { map: ntexture } );
const nut = new THREE.Mesh( geometry5, material5 );
scene.add( nut );

const geometry6 = new THREE.BoxGeometry( 20, 50, 5 );
const rttexture = new THREE.TextureLoader().load("assets/textures/Roof Tile.png")
const material6 = new THREE.MeshBasicMaterial( { map: rttexture } );
const roof = new THREE.Mesh(geometry6, material6 );
scene.add( roof );

const geometry7 = new THREE.BoxGeometry( 18.9, 34, 20 );
const h2texture = new THREE.TextureLoader().load("assets/textures/House.png")
const material7 = new THREE.MeshBasicMaterial( { map: h2texture } );
const house2 = new THREE.Mesh( geometry7, material7 );
scene.add( house2 );

const geometry8 = new THREE.BoxGeometry( 54, 1, 5 );
const material8 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const fence = new THREE.Mesh( geometry8, material8 );
scene.add( fence );

lawn.position.x = -0.5;
lawn.position.y = 0;
lawn.rotation.x = -1;
lawn.rotation.y = 0;
lawn.rotation.z = 0;

sidewalk.position.x = 0;
sidewalk.position.y = -0.2;
sidewalk.rotation.x = -1;
sidewalk.rotation.y = 0;
sidewalk.rotation.z = 0;

fence.position.x = -0.5;
fence.position.y = 12;
fence.position.z = -13.5
fence.rotation.x = 2;

road.position.x = 34.5
road.position.y = -0.2;
road.rotation.x = -1;
road.rotation.y = 0;
road.rotation.z = 0;

house.position.x = -28;
house.position.y = 8;
house.position.z = 5;
house.rotation.x = -1;
house.rotation.y = 0;
house.rotation.z = 0;

house2.position.x = -37.5;
house2.position.y = 8;
house2.position.z = 5;
house2.rotation.x = -1;
house2.rotation.y = 0;
house2.rotation.z = 0;

roof.position.x = -34.5;
roof.position.y = 20;
roof.position.z = 5;
roof.rotation.x = -1;
roof.rotation.y = 0;
roof.rotation.z = 0;

nut.position.x = -11.3;
nut.position.y = 2;
nut.position.z = 0.5;
nut.rotation.x = 0;
nut.rotation.y = -9;
nut.rotation.z = 0;

camera.position.x = 0;
camera.position.z = 50;

let stars, starGeo;

particles();

function particles() {
  const points = [];

  for (let i = 0; i < 6000; i++) {
    let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    points.push(star);
  }

  starGeo = new THREE.BufferGeometry().setFromPoints(points);

  let sun = new THREE.TextureLoader().load("assets/textures/Sun.png");
  let sunMaterial = new THREE.PointsMaterial({ map: sun });

  stars = new THREE.Points(starGeo, sunMaterial);
  scene.add(stars);
}



//const controls = new OrbitControls( camera, renderer.domElement );
//camera.position.set( 0, 20, 100 );
//controls.update();

function animate() {
  //controls.update();
	renderer.render( scene, camera );
}