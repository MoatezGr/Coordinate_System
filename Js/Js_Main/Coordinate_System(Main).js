
import * as THREE from "three";
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GLTFLoader } from "three/examples/jsm/Addons.js";

                                //-------------Html Elements-------------//
        let Meteor_div = document.getElementById("Meteor_div") 


                                //-------------VAR-------------//
        let i = 0


                                //-------------FUNCTIONS-------------//    
        function Recover_WebPage_Colors() {
            document.body.style.background = localStorage.getItem("Second_Color")
        }
                                
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

                setTimeout(() => {
                    Meteor.style.visibility = "hidden"
                }, 4000 + (Random_Delay * 1000));
                
            }, 100);
        }
        
                                //-------------CODE-------------//
        if (localStorage.getItem('First_Color') == null) {
            location.assign("./Coordinate_System(Costomize).html")
        } 
        Recover_WebPage_Colors()                
        Meteor_Animation()
          
                               //-------------3D MODULE-------------//

const canvas = document.getElementById("canvas")

const renderer = new THREE.WebGLRenderer({alpha: true , canvas: canvas})
renderer.setSize(window.innerWidth,window.innerHeight)



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)
const light =new THREE.AmbientLight(0xffffff)
scene.add(light)
camera.position.z = 13


const loader = new GLTFLoader

loader.load("cafe/scene.gltf", function (gltf) {
    const cafe = gltf.scene
    cafe.position.x = 0
    cafe.position.y = -20
    scene.add(cafe)

    function animate() {
        requestAnimationFrame(animate)

        if (cafe.position.y <= -2) {
            cafe.position.y += 0.2
        }else{
            cafe.rotation.y += 0.001
        }

        renderer.render(scene,camera)
    }

    animate()  
})