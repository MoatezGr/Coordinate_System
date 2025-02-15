

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
                Meteor.style.background = "white"
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
        