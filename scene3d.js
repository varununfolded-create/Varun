import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

const MODEL_URL='https://cdn.jsdelivr.net/gh/mrdoob/three.js@r180/examples/models/gltf/ferrari.glb';
const targets=[document.getElementById('hero3d'),document.getElementById('race3d')].filter(Boolean);

function mount(container,index){
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(30,1,.1,100);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)); renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.15;
 container.appendChild(renderer.domElement);
 const hemi=new THREE.HemisphereLight(0xbfd8ff,0x08090d,2.2); scene.add(hemi);
 const key=new THREE.DirectionalLight(0xffffff,4.5); key.position.set(5,8,6); scene.add(key);
 const red=new THREE.PointLight(0x1688ff,90,18); red.position.set(-4,2,2); scene.add(red);
 const rim=new THREE.PointLight(0x6db8ff,55,18); rim.position.set(5,1,-4); scene.add(rim);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshStandardMaterial({color:0x05070a,metalness:.2,roughness:.78,transparent:true,opacity:.58})); floor.rotation.x=-Math.PI/2; floor.position.y=-1.35; scene.add(floor);
 const grid=new THREE.GridHelper(28,28,0x3b4553,0x1c232c); grid.position.y=-1.32; grid.material.transparent=true; grid.material.opacity=.22; scene.add(grid);
 const group=new THREE.Group(); scene.add(group);
 const loader=new GLTFLoader(); loader.load(MODEL_URL,g=>{const car=g.scene; car.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;}}); car.scale.setScalar(index===0?2.05:1.8); car.rotation.y=index===0?-0.38:0.55; car.position.set(index===0?1.25:1.35,-1.05,0); group.add(car);},undefined,e=>console.warn('3D car failed to load',e));
 const resize=()=>{const w=container.clientWidth||innerWidth,h=container.clientHeight||innerHeight; camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}; resize(); addEventListener('resize',resize);
 camera.position.set(index===0?4.7:5.1,1.9,index===0?5.4:5.9); camera.lookAt(index===0?.8:-.1,-.55,0);
 const particles=new THREE.Points(new THREE.BufferGeometry(),new THREE.PointsMaterial({color:0x4aa3ff,size:.035,transparent:true,opacity:.7})); const pos=new Float32Array(600); for(let i=0;i<pos.length;i+=3){pos[i]=(Math.random()-.5)*14;pos[i+1]=Math.random()*5-1;pos[i+2]=(Math.random()-.5)*12} particles.geometry.setAttribute('position',new THREE.BufferAttribute(pos,3)); scene.add(particles);
 const clock=new THREE.Clock();
 function animate(){const t=clock.getElapsedTime(); group.rotation.y=Math.sin(t*.18)*.16+(index?-.12:0); group.position.y=Math.sin(t*.7)*.035; grid.position.z=(t*.35)%1; particles.rotation.y=t*.015; renderer.render(scene,camera); requestAnimationFrame(animate)} animate();
}
targets.forEach(mount);
