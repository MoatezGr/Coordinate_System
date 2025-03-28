                                //-------------Html Elements-------------//
        let Plan_div = document.getElementById("Plan_div")
        let Study_Timer = document.getElementById("Study_Timer")
        let Study_Timer_sec = document.getElementById("Study_Timer_sec")
        let Study_Final_Result = document.getElementById("Study_Final_Result")
        let Rate = document.getElementById("Rate")
        let Title_Of_Second_Zone = document.getElementById("Title_Of_Second_Zone")
        let First_Zone = document.getElementById("First_Zone")
        let Second_Zone = document.getElementById("Second_Zone")
        let Title_Of_Third_Zone = document.getElementById("Title_Of_Third_Zone")
        let Soon_Second_Zone = document.getElementById("Soon_Second_Zone")
        let Loading = document.getElementById("Loading")
        let Timer_div = document.getElementById("Timer_div")
        let line = document.getElementById("line")
        const Bar_Zone = document.getElementById("Bar_Zone")
        const Bar_Timer = document.getElementById("Bar_Timer")
        const Bar_Coordinate = document.getElementById("Bar_Coordinate")
        const Meteor_div = document.getElementById("Meteor_div")
        
                                //-------------Var-------------//
        localStorage.setItem("First_Point", "1")
        let First_Point = parseInt(localStorage.getItem("First_Point"))

        let Something_In_Diagonal = false
        let Timer_Mode = true
        let rate_mode = true
        let loaded_mode = false
        let Total_Study_Hours = 0;
        let Multiply_Numbers = 48;
        let c = 0
        let rc = 0
        let i = 0
        let days = 0
        let sec = 0
        let min = 0
        let hours = 0
        let minute ;
        let IntervalID;
        let IntervalID2;
        let IntervalID3;
        let IntervalID4;
        let Study_Time_Result;
        let color;
        let num_color ;
                                //?-------------Arrays-------------//
        let ST = [0]
                                //?-------------Object-------------//
        Coordinate = {}
        Diagonal_Obj = {}
        Study_Time_Spend = {}
                                //?-------------Functions-------------//
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
        function Display_Study_Result() {
                Study_Result()

                clearInterval(IntervalID4)
        }
        function Recover_Line_Color_By_MouseLeave() {
            for (let i = 0; i <= 7; i++) {
                document.getElementById("Line" + i).style.backgroundColor = localStorage.getItem("element_color")
            }
        }
        function Line_Color_animation() {
            console.log(`The var c is ${c}`);
            
            if (c <= 7) {
                if (num_color == 1) {               
                    color = "white"
                }else if(num_color == 2){
                    color = "green"
                }else{
                    color = "lightgreen"
                }
                console.log(`your color is ${color}`);
                
                document.getElementById("Line" + c).style.backgroundColor = color
            
                c++
            }else if(c === 8){
                    clearInterval(IntervalID2)
            }

        }
        function Study_Result() {  
                minute = JSON.parse(localStorage.getItem("study_time_spend"))["study_time_spend" + (i+1)] - (parseInt(JSON.parse(localStorage.getItem("study_time_spend"))["study_time_spend" + (i+1)])) 
                console.log(minute);
                console.log(Total_Study_Hours);
                console.log(parseInt(minute) * 60);
                
                    let Study_Result_Elements = document.createElement("p")
                    Study_Result_Elements.innerHTML = `--> Day ${i + 1}, you study for : ${parseInt(JSON.parse(localStorage.getItem("study_time_spend"))["study_time_spend" + (i+1)])} h : ${parseInt(minute * 60)} m`
                    Study_Result_Elements.style.marginTop = "10px"
                    Study_Result_Elements.style.color = localStorage.getItem("text_color")
                    Study_Final_Result.appendChild(Study_Result_Elements)
                if (days == 6 && rate_mode == true) {
        
                    rate_mode = false
                    if (i == 1) {
                        Total_Study_Hours = parseFloat(Study_Time_Spend["study_time_spend" + i])
                        console.log(`the typeof total_study_hours is ${typeof(Total_Study_Hours)} First`);
                        
                    }else{
                        Total_Study_Hours += parseFloat(Study_Time_Spend["study_time_spend" + i])
                        console.log(`the typeof total_study_hours is ${typeof(Total_Study_Hours)} Second`);
                    }
            

            if (Total_Study_Hours <= 1.75) {
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "Week"
                Rate.appendChild(Rate_Element)
            }else if (Total_Study_Hours <= 3.5 && Total_Study_Hours >= 1.75) {
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "Close to average"
                Rate.appendChild(Rate_Element)
            }else if (Total_Study_Hours <= 7 && Total_Study_Hours >= 3.5) {
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "Average"
                Rate.appendChild(Rate_Element)
            }else if (Total_Study_Hours <= 14 && Total_Study_Hours >= 7) {
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "Nice"
                Rate.appendChild(Rate_Element)
            }else if (Total_Study_Hours <= 21 && Total_Study_Hours >= 14) {
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "Excellent"
                Rate.appendChild(Rate_Element)
            }else if (Total_Study_Hours <= 28 && Total_Study_Hours >= 21) {
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "Very hardworking"
                Rate.appendChild(Rate_Element)
            }else if(Total_Study_Hours > 28){
                let Rate_Element = document.createElement("h1")
                Rate_Element.style.width = "auto"
                Rate_Element.style.height = "auto"
                Rate_Element.style.marginLeft = "20px"
                Rate_Element.style.marginTop = "13px"
                Rate_Element.style.color = localStorage.getItem("element_color") 
                Rate_Element.innerHTML = "WoW!! Very hardworking"
                Rate.appendChild(Rate_Element)
            }

            console.log(Total_Study_Hours);
            }
        }
        function Study_Result_Load() {
                for (let j = 1; j <= Object.values(JSON.parse(localStorage.getItem("study_time_spend"))).length ; j++) {
                    minute = JSON.parse(localStorage.getItem("study_time_spend"))["study_time_spend" + j] - (parseInt(JSON.parse(localStorage.getItem("study_time_spend"))["study_time_spend" + j])) 
                    console.log(minute);
                    console.log(Total_Study_Hours);
                    console.log(parseInt(minute) * 60);
                    
                        let Study_Result_Elements = document.createElement("p")
                        Study_Result_Elements.innerHTML = `--> Day ${j}, you study for : ${parseInt(JSON.parse(localStorage.getItem("study_time_spend"))["study_time_spend" + j])} h : ${parseInt(minute * 60)} m`
                        Study_Result_Elements.style.marginTop = "10px"
                        Study_Result_Elements.style.color = localStorage.getItem("text_color")
                        Study_Final_Result.appendChild(Study_Result_Elements)
                    if (days >= 6 && rate_mode == true) {
            
                        rate_mode = false
                        if (j == 1) {
                            Total_Study_Hours = parseFloat(Study_Time_Spend["study_time_spend" + i])
                            console.log(`the typeof total_study_hours is ${typeof(Total_Study_Hours)} First`);
                            
                        }else{
                            Total_Study_Hours += parseFloat(Study_Time_Spend["study_time_spend" + i])
                            console.log(`the typeof total_study_hours is ${typeof(Total_Study_Hours)} Second`);
                        }
                
    
                if (Total_Study_Hours <= 1.75) {
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "Week"
                    Rate.appendChild(Rate_Element)
                }else if (Total_Study_Hours <= 3.5 && Total_Study_Hours >= 1.75) {
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "Close to average"
                    Rate.appendChild(Rate_Element)
                }else if (Total_Study_Hours <= 7 && Total_Study_Hours >= 3.5) {
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "Average"
                    Rate.appendChild(Rate_Element)
                }else if (Total_Study_Hours <= 14 && Total_Study_Hours >= 7) {
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "Nice"
                    Rate.appendChild(Rate_Element)
                }else if (Total_Study_Hours <= 21 && Total_Study_Hours >= 14) {
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "Excellent"
                    Rate.appendChild(Rate_Element)
                }else if (Total_Study_Hours <= 28 && Total_Study_Hours >= 21) {
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "Very hardworking"
                    Rate.appendChild(Rate_Element)
                }else if(Total_Study_Hours > 28){
                    let Rate_Element = document.createElement("h1")
                    Rate_Element.style.width = "auto"
                    Rate_Element.style.height = "auto"
                    Rate_Element.style.marginLeft = "20px"
                    Rate_Element.style.marginTop = "13px"
                    Rate_Element.style.color = localStorage.getItem("element_color") 
                    Rate_Element.innerHTML = "WoW!! Very hardworking"
                    Rate.appendChild(Rate_Element)
                }
    
                console.log(Total_Study_Hours);
                }
                
            }
        }
        function Recover_WebPage_Colors() {
            document.body.style.backgroundImage = `linear-gradient(70deg , ${localStorage.getItem("element_color")} , ${localStorage.getItem("background_color")})`
            Study_Timer.style.backgroundColor = localStorage.getItem("element_color")
            Bar_Zone.style.backgroundColor = localStorage.getItem("text_color")
        }
        function Create_Coordinate_System_Plan() {
            for (let p = 1; p <= 7; p++) {
                let Plan_Vertical = document.createElement("div")
                Plan_Vertical.style.position = "absolute"
                Plan_Vertical.style.background = localStorage.getItem("text_color")
                Plan_Vertical.style.left = (Multiply_Numbers * p) + "px"
                Plan_Vertical.style.bottom = "0px"
                Plan_Vertical.style.height = Multiply_Numbers * 8 + "px"
                Plan_Vertical.style.width = "0.1px"
                Plan_div.appendChild(Plan_Vertical)

                let Plan_Horizontal =  document.createElement("div")
                Plan_Horizontal.style.position = "absolute"
                Plan_Horizontal.style.background = localStorage.getItem("text_color")
                Plan_Horizontal.style.left = "0px"
                Plan_Horizontal.style.bottom = (Multiply_Numbers * p) + "px"
                Plan_Horizontal.style.height = "0.1px"
                Plan_Horizontal.style.width = Multiply_Numbers * 8 + "px"
                Plan_div.appendChild(Plan_Horizontal)
            }
        }
        function Study_Timer_Function() {
                if (sec < 60) {
                    sec += 1
                }
                if (sec === 60){
                    min += 1
                    sec = 0
                }
                if (min === 60) {
                    hours += 1
                    min = 0
                }

                Study_Timer.style.color = localStorage.getItem("text_color")
                Study_Timer_sec.style.color = localStorage.getItem("text_color")
                Study_Timer.innerHTML =  hours + " h : " + min + " m"
                Study_Timer_sec.innerHTML = sec + " s"
            
        }
        function Something_In_Diagonal_Function() {
            if (JSON.parse(localStorage.getItem("Diagonal")) === null) {
                Something_In_Diagonal = false
            }else if(Object.values(JSON.parse(localStorage.getItem("Diagonal"))).length >= 0){
                Something_In_Diagonal = true
            }
            

        }
        function Calcul_Distance_And_Angle() {
                    if (i >= 1) {

                                        //*Coordinate Of Point*//
                    //Stock the var days and ST in an Object like an coordinate systeme
                    Coordinate["Line" + i + "x"] = parseFloat(document.getElementById("Line" + i).style.left)
                    Coordinate["Line" + i + "y"] = parseFloat(document.getElementById("Line" + i).style.bottom)
                    //Stock Coordinate Object in the LocalStorage
                    localStorage.setItem("Coordinate",JSON.stringify(Coordinate))
                    console.log(Coordinate);
                    let Coordinate_y = JSON.parse(localStorage.getItem("Coordinate"))
                    
                                        //*Diagonal Of Two Points*//
                    //Calcul the hypotenuse of two point
                    Diagonal_Obj["Diagonal" + (i - 1)] = Math.sqrt(
                    Math.pow((Coordinate_y["Line" + i + "y"]-Coordinate_y["Line" + (i-1) + "y"]),2) + Math.pow(Multiply_Numbers,2))
                    //Stock The Diagonal Object in the LocalStorage
                    localStorage.setItem("Diagonal",JSON.stringify(Diagonal_Obj))
                    console.log(JSON.parse(localStorage.getItem("Diagonal")));
                    let Diagonal = JSON.parse(localStorage.getItem("Diagonal"))
                    //Give The Diagonal Distance to the widht of the Line
                    document.getElementById("Line" + (i-1)).style.width = ((Diagonal["Diagonal" + (i-1)])) + "px"
                    document.getElementById("Line" + (i-1)).style.height = "2px"
                    console.log(`The hypotenuse Distance is ${Diagonal["Diagonal" + (i-1)]}`);


                                        //*Angle OF The Diagonal*//
                    //Calcul The Angle of the Line 
                    let Angle_Radians;
                    if (i === 1) {
                    Angle_Radians = Math.atan((parseFloat(document.getElementById("Line" + i).style.bottom)) / (parseFloat(document.getElementById("Line" + i).style.left)))
                    }else{
                    Angle_Radians = Math.atan(
                    (parseFloat(document.getElementById("Line" + i).style.bottom) - parseFloat(document.getElementById("Line" + (i-1)).style.bottom)) 
                    / (parseFloat(document.getElementById("Line" + i).style.left) - parseFloat(document.getElementById("Line" + (i-1)).style.left)))
                    }
                    console.log(`the Angle_Radians is : ${Angle_Radians}`);
                    //Change the type of the Angle Radians To Degrees
                    Degrees = Angle_Radians * (180 / Math.PI)
                    console.log(`the Angle_Radians is : ${Degrees}`);
                    document.getElementById("Line" + (i-1)).style.rotate = (Degrees * -1) + "deg"
                    console.log("-----------------CODE------------------");
                }
        }
        function Create_New_Point() {
                            //*Add +1 For The Var*//
        i++
        days++
                            //*Stock The Time Study In Array*//
        ST.push(Study_Time_Result) // HERE !!
        console.log(ST);
        localStorage.setItem("ST",JSON.stringify(ST))
        console.log(ST);
        console.log("------------------CODE-----------------");
        console.log(`days value = ${days}`);
        console.log(`Value Of i is : ${i}`);
        console.log(`ST value = ${ST[i]}`);


                            //*Add Div To Html With Property*// 
        var lineElement = document.createElement("div");
        lineElement.style.backgroundColor = localStorage.getItem("text_color")
        lineElement.style.height = "3px"
        lineElement.style.width = "3px"
        lineElement.style.borderRadius = "90px" 
        lineElement.style.position = "absolute";
        lineElement.style.transformOrigin = "bottom left"
        lineElement.id = "Line" + i
        line.appendChild(lineElement)

                            //*Styling The New Div by Id*//
        document.getElementById("Line" + i).style.left = (days * Multiply_Numbers)  + "px"
        console.log(`The left Position is: ${document.getElementById("Line" + i).style.left}`);
        document.getElementById("Line" + i).style.bottom = (ST[i] * Multiply_Numbers) + "px"
        console.log(`The Bottom Position is: ${document.getElementById("Line" + i).style.bottom}`);
        }
        

                                //?-------------CODE-------------//

                        //!Recovery The Last Coordanate Systeme//   
    Meteor_Animation()                 
    Recover_WebPage_Colors()
    Create_Coordinate_System_Plan()
    Something_In_Diagonal_Function()
    
    //IntervalID4 = setInterval(() => {Display_Study_Result()}, 2000);

if (Something_In_Diagonal === true) {
    Study_Result_Load()

    for (let j = 0; j <= Object.values(JSON.parse(localStorage.getItem("Diagonal"))).length; j++) {
        console.log(`The j of The loop is : ${j}`);
        //----------------------LOOP------------------------
        var lineElement = document.createElement("div");
        lineElement.style.backgroundColor = localStorage.getItem("text_color")
        lineElement.style.height = "3px"
        lineElement.style.width = "3px"
        lineElement.style.borderRadius = "90px" 
        lineElement.style.position = "absolute";
        lineElement.style.transformOrigin = "bottom left"
        lineElement.id = "Line" + j
        line.appendChild(lineElement)

        ST = JSON.parse(localStorage.getItem("ST"))
        console.log(JSON.parse(localStorage.getItem("ST")));
        console.log(`ST in function of j is : ${ST[j]}`);

        if (j === 0) {
        document.getElementById("Line" + j).style.left = 0 + "px"
        console.log(document.getElementById("Line" + j).style.left);
        document.getElementById("Line" + j).style.bottom = 0 + "px"
        console.log(document.getElementById("Line" + j).style.bottom);
        console.log("----------------LOOP----------------");
        }else{
        document.getElementById("Line" + j).style.left = (j * Multiply_Numbers)  + "px"
        console.log(document.getElementById("Line" + j).style.left);
        document.getElementById("Line" + j).style.bottom = ((parseFloat(ST[j])) * Multiply_Numbers) + "px"
        console.log(document.getElementById("Line" + j).style.bottom);
        
        //----------------------------------------------
        //Stock The Diagonal Object in the LocalStorage
        let Diagonal = JSON.parse(localStorage.getItem("Diagonal"))

        //Give The Diagonal Distance to the widht of the Line
        document.getElementById("Line" + (j - 1)).style.width = ((Diagonal["Diagonal" + (j - 1)])) + "px"
        document.getElementById("Line" + (j - 1)).style.height = "2px"
        console.log(`The Diagonal Distance is ${Diagonal["Diagonal" + (j - 1)]}`);
        console.log(`The Diagonal Type is ${typeof(Diagonal["Diagonal" + (j - 1)])}`);

        //Angle
        //Calcul The Angle of the Line 
            let Angle_Radians;
            if (j >= 1) {
            Angle_Radians = Math.atan(
            (parseFloat(document.getElementById("Line" + j).style.bottom) - parseFloat(document.getElementById("Line" + (j-1)).style.bottom)) 
            / (parseFloat(document.getElementById("Line" + j).style.left) - parseFloat(document.getElementById("Line" + (j-1)).style.left)))
            }else{
            Angle_Radians = Math.atan((parseFloat(document.getElementById("Line" + j).style.bottom)) / (parseFloat(document.getElementById("Line" + j).style.left)))
            console.log(`🚀 ~ document.getElementById("Line" + j).style.bottom: ${document.getElementById("Line" + j).style.bottom}`)
            console.log(`angle radians is : ${Angle_Radians}`);
            }

            //Change the type of the Angle Radians To Degrees
            Degrees = Angle_Radians * (180 / Math.PI)
            console.log(`the Degrees is: ${Degrees}`);
            document.getElementById("Line" + (j-1)).style.rotate = (Degrees * -1) + "deg" 
        
        
        console.log("---------------LOOP---------------");
    }

        //Give i and days the last value before the user close the page
        if (j === Object.values(JSON.parse(localStorage.getItem("Diagonal"))).length) {
            First_Point = 0
            Coordinate = JSON.parse(localStorage.getItem("Coordinate"))
            Diagonal_Obj = JSON.parse(localStorage.getItem("Diagonal"))
            ST = []
            ST = JSON.parse(localStorage.getItem("ST")) 
            i = Object.values(JSON.parse(localStorage.getItem("Diagonal"))).length 
            days = Object.values(JSON.parse(localStorage.getItem("Diagonal"))).length 
            Study_Time_Spend = JSON.parse(localStorage.getItem("study_time_spend"))
            
            Something_In_Diagonal = false

            console.log(`In The Object Of Coordinate : ${Coordinate}`);
            console.log(`In The Object Of Diagonal : ${Diagonal_Obj}`);
            console.log(`In The Object Of ST : ${ST}`);
            
        }
            
}
}

                        //!Code for Create An Coordinate System//
      
    if (i === 0) {
                        //*Add Img To Html With Property*// 
        var lineElement = document.createElement("div");
        lineElement.style.backgroundColor = localStorage.getItem("text_color")
        lineElement.style.height = "3px"
        lineElement.style.width = "3px"
        lineElement.style.borderRadius = "90px" 
        lineElement.style.position = "absolute";
        lineElement.style.transformOrigin = "bottom left"
        lineElement.id = "Line" + i
        line.appendChild(lineElement)

                        //*Styling The New Img by Id*//
        document.getElementById("Line" + i).style.left = 0
        console.log(`🚀 ~ document.getElementById("Line" + i=${i}).style.bottom:, ${document.getElementById("Line" + i).style.left}`)
        document.getElementById("Line" + i).style.bottom = 0
        console.log(`🚀 ~ document.getElementById("Line" + i=${i}).style.bottom:, ${document.getElementById("Line" + i).style.bottom}`)

                        //*Stock The Coordinate Of Origine Point*//
        Coordinate["Line" + i + "x"] = 0
        Coordinate["Line" + i + "y"] = 0 
        }


    Timer_div.onclick = function () {
        if (Timer_Mode == false) {
            Study_Time_Spend["study_time_spend" + (i + 1)] = parseFloat(hours + (min / 60)).toFixed(2)
            localStorage.setItem("study_time_spend",JSON.stringify(Study_Time_Spend))               
            
            Study_Time_Result = parseFloat(hours + (min / 60)).toFixed(2)
            Study_Result()
            Create_New_Point()
            Calcul_Distance_And_Angle()

            Timer_Mode = true
            sec = 0
            min = 0
            hours = 0
            Study_Timer.innerHTML =  hours + " h : " + min + " m"
            Study_Timer_sec.innerHTML = sec + " s"
            clearInterval(IntervalID)
        }else if (Timer_Mode == true) {
            if (days < 7) {
                console.log("start");
                
                IntervalID = setInterval(() => {Study_Timer_Function()}, 1000)     
                Timer_Mode = false
            }
        }

    }

    Second_Zone.onmouseenter = function () {
        num_color = Math.floor((Math.random() * 3) + 1);
        c = 0
        if (days >= 7) {
            IntervalID2 =  setInterval(() => {Line_Color_animation()}, 100);
        }
    }

    Second_Zone.onmouseout = function () {
        if (days >= 7) {
            clearInterval(IntervalID2)
            Recover_Line_Color_By_MouseLeave() 
        }
    }

    Bar_Zone.onmouseenter = function () {
        console.log("mouse In");
        Bar_Zone.style.animationName = "Bar_Open_Animation"
        Bar_Timer.style.display = "block"
        Bar_Coordinate.style.display = "block"
    }

    Bar_Zone.onmouseleave = function () {
        Bar_Zone.style.animationName = "Bar_Close_Animation"
        Bar_Timer.style.display = "none"
        Bar_Coordinate.style.display = "none"
    }

    Bar_Timer.onclick = function () {
        First_Zone.style.display = "grid"
        Second_Zone.style.display = "none"
    }

    Bar_Coordinate.onclick = function () {
        Second_Zone.style.display = "grid"
        line.style.display = "block"
        First_Zone.style.display = "none"
    }

