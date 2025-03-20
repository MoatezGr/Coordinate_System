

                                //-------------Html Elements-------------//
        let Meteor_div = document.getElementById("Meteor_div") 
        let body = document.getElementById("body")
        let nav = document.getElementById("nav")
        let container2 = document.getElementById("container2")
        let p_text = document.getElementById("p_text")
        let p_text1 = document.getElementById("p_text1")
        let p_text2 = document.getElementById("p_text2")
        let p_text3 = document.getElementById("p_text3")
        let h1_text1 = document.getElementById("h1_text1")
        let h1_text2 = document.getElementById("h1_text2")
        let h1_text3 = document.getElementById("h1_text3")
        let a1 = document.getElementById("a1")
        let a2 = document.getElementById("a2")
        let a3 = document.getElementById("a3")

                                //-------------VAR-------------//  
        let First_Color = "#2F4F4F"
        let Second_Color = "#fff3ca"
        let Text_Color = "#d1d1d1"

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

        function Colors_page_default() {
            if (localStorage.getItem("background_color") != "#2F4F4F" && localStorage.getItem("element_color") != "#fff3ca" && localStorage.getItem("text_color") != "#d1d1d1"){
                First_Color = localStorage.getItem("background_color")
                Second_Color = localStorage.getItem("element_color")
                Text_Color = localStorage.getItem("text_color")
            }
        }

        function Costomize_color_Live() {
            setInterval(() => {
                body.style.backgroundColor = First_Color
                a1.style.backgroundColor = Second_Color
                a2.style.backgroundColor = Second_Color
                a3.style.backgroundColor = Second_Color
                nav.style.backgroundColor = Second_Color
                nav.style.boxShadow = `2px 5px 15px ${Second_Color}`
                container2.style.backgroundColor = Second_Color
                p_text.style.color = Text_Color
                h1_text1.style.color = Text_Color
                h1_text2.style.color = Text_Color
                h1_text3.style.color = Text_Color
            }, 100);
        }

        
                                //-------------CODE-------------//       
        Meteor_Animation()
        Colors_page_default()
        Costomize_color_Live()
        