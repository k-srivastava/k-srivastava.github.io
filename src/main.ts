import * as THREE from 'three';
import { randomHexColor } from './utils.ts';

import './style.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.outerWidth / window.outerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: <HTMLCanvasElement>document.querySelector('#background')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.outerWidth, window.outerHeight, false);

const geometry = new THREE.TorusGeometry(7, 3, 20, 100);
const material = new THREE.MeshBasicMaterial({color: 0x32CD32, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

torus.position.setX(-8);
torus.position.setY(6);

scene.add(torus);

window.onclick = (): void => {
    torus.material.color = new THREE.Color(randomHexColor());
    console.log(torus.material.color);
}

function renderScene(): void {
    requestAnimationFrame(renderScene);

    torus.rotateX(0.01);

    renderer.render(scene, camera);
}

renderScene();
