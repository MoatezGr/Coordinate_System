                                //-------------Html Elements-------------//
        let Square_1 = document.getElementById("Square_1") 
        let Square_2 = document.getElementById("Square_2") 
        let Start_Button = document.getElementById("Start_Button") 
        let Meteor_div = document.getElementById("Meteor_div") 


                                //-------------VAR-------------//
        let Button_clicked = false
        let i = 0


                                //-------------FUNCTIONS-------------//    
        function Recover_WebPage_Colors() {
            document.body.style.background = localStorage.getItem("Second_Color")
            Square_1.style.background = localStorage.getItem("First_Color")
            Square_2.style.background = localStorage.getItem("First_Color")
            Start_Button.style.color = localStorage.getItem("Text_Color")
            Start_Button.style.borderColor = localStorage.getItem("First_Color")
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
                

                
            }, 100);
        }
        
                                //-------------CODE-------------//
        if (localStorage.getItem('First_Color') == null) {
            location.assign("./Coordinate_System(Costomize).html")
        }   
        Recover_WebPage_Colors()                
        Meteor_Animation()
        

        Start_Button.onmouseenter = function () {
            if (Button_clicked === false) {
                console.log("Focus On");
                Square_1.style.animationName = "Square_1_MouseEnter"
                Square_2.style.animationName = "Square_2_MouseEnter"       
            }
        }

        Start_Button.onmouseout = function () {
            if (Button_clicked === false) {
                console.log("Focus Out");
                Square_1.style.animationName = "Square_1_MouseOut"
                Square_2.style.animationName = "Square_2_MouseOut"
            }
        }



        Start_Button.onclick = function () {
            console.log("Clicked");
            Button_clicked = true
            console.log(Button_clicked);
            Square_1.style.animationDuration = "2s"
            Square_2.style.animationDuration = "2s"
            Square_1.style.animationName = "Square_1_Button_Clicked"
            Square_2.style.animationName = "Square_2_Button_Clicked"
            Start_Button.style.animationName = "Start_Button_Animation"
            setTimeout(() => {
                location.assign("./Coordinate_System.html")
            }, 1700);

        }
