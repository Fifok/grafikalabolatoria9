var glCanvas = document.getElementById("glcanvas");
var scene = new THREE.Scene({color: 0xffffff});
var perspCamera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, perspCamera);
}

var dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-20, 10, 5);
perspCamera.add(dirLight);
scene.add(perspCamera);

color = new THREE.MeshPhongMaterial({color: 0xfffffff});

baseGeoDown = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 64);
baseDownPart = new THREE.Mesh(baseGeoDown, color);

baseGeoTop = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 64);
baseTopPart = new THREE.Mesh(baseGeoTop, color);

baseTopPart.position.y = 0.30;
baseTopPart.scale.set(0.95,1,0.95);

base = new THREE.Group();
base.add(baseDownPart);
base.add(baseTopPart);

base.position.set(0, -3.75, 0);
base.scale.set(3,2,2);

scene.add(base);

size = 0.2;

columnGeoDown = new THREE.CylinderGeometry(1.1, 1.6, 2, 100);
columnPartDown = new THREE.Mesh(columnGeoDown, color);

columnPartDown.position.set(0, -2, -0);

columnGeoTop = new THREE.CylinderGeometry(0.85, 1.09, 2, 100);
columnPartTop = new THREE.Mesh(columnGeoTop, color);

var column = new THREE.Group();
column.add(columnPartDown);
column.add(columnPartTop);
column.position.set(0, 0, -0.5);

scene.add(column);

headGeoDisk = new THREE.CylinderGeometry(1.5, 1.5, 0.25, 100);
headDisk = new THREE.Mesh(headGeoDisk, color);
headNeckGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 100);
headNeck = new THREE.Mesh(headNeckGeo, color);

headGeoTop = new THREE.CylinderGeometry(2,2,2,16);
headTop = new THREE.Mesh(headGeoTop, color);
headTop.scale.set(1,0.5,1);
headTop.position.set(0,1.5,0);

head = new THREE.Group();
head.add(headDisk);
head.add(headNeck);
head.add(headTop);

head.position.set(0, 1, -0.5);

scene.add(head);

perspCamera.position.z = 5;

animate();