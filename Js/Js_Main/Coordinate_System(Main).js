
                                //-------------IMPORT-------------//
import * as THREE from ".../node_modules/three";
import { GLTFLoader, OrbitControls } from "../node_modules/three/examples/jsm/Addons.js";

                                //-------------Html Elements-------------//
        let Meteor_div = document.getElementById("Meteor_div") 
        let canvas = document.getElementById("canvas")

                                //-------------VAR-------------//

                                //-------------FUNCTIONS-------------//    
                                
        function Meteor_Animation(){
            setInterval(() => {
                let Random_top_potsion =  Math.floor((Math.random() * 100));
                let Random_Delay =  Math.floor((Math.random() * 7) + 2);
                let Meteor = document.createElement("div")

                Meteor.style.position = "absolute"
                Meteor.style.background = localStorage.getItem("Text_Color")
                Meteor.style.height = "5px"
                Meteor.style.width = "5px"
                Meteor.style.left = "-20px"
                Meteor.style.top = Random_top_potsion + "%"
                Meteor.style.borderRadius = "90px"
                

                Meteor.style.animationDuration = "4s"
                Meteor.style.animationDelay = Random_Delay + "s"
                Meteor.style.animationDirection = "alternate"
                Meteor.style.animationFillMode = "forwards"
                Meteor.style.animationName = "Meteor_Animation"
                Meteor_div.appendChild(Meteor)

   
            }, 100);
        }
        
                                //-------------CODE-------------//               
        Meteor_Animation()
          
                               //-------------3D MODULE-------------//

const renderer = new THREE.WebGLRenderer({alpha: true , canvas : canvas})
renderer.setSize(canvas.height * 2.5,canvas.width * 1.5)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerHeight/window.innerWidth)
const light = new THREE.AmbientLight(0xffffff)
const lightdirection = new THREE.DirectionalLight(0xffffff , 0.8)

camera.position.set(0,1.5,1.5)
camera.rotation.set(-0.8,0,0)

scene.add(light)
scene.add(lightdirection)
renderer.render(scene , camera)

const loader = new GLTFLoader()
loader.load("fox/scene.gltf" , function ( gltf ) {
    const fox = gltf.scene
    scene.add(fox)

    function animate() {
        requestAnimationFrame(animate)
        fox.rotation.y += 0.005

        renderer.render(scene , camera)
    }
    animate()

})