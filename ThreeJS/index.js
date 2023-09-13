import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0xeebb00});
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}

render();
