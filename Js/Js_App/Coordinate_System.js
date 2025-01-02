                                //-------------Html Elements-------------//
        let Plan_div = document.getElementById("Plan_div")
        let Study_Timer = document.getElementById("Study_Timer")
        let Study_Timer_sec = document.getElementById("Study_Timer_sec")
        let button_finish = document.getElementById("button_finish")
        let button_start = document.getElementById("button_start")
        let TimeOut = document.getElementById("TimeOut")
        let Reset_button = document.getElementById("Reset_button")
        
                                //-------------Var-------------//
        localStorage.setItem("First_Point", "1")
        let First_Point = parseInt(localStorage.getItem("First_Point"))

        let Something_In_Diagonal = false
        let Timer_Mode = false
        let Multiply_Numbers = 40;
        let i = 0
        let days = 0
        let sec = 0
        let min = 0
        let hours = 0
        let IntervalID;
        let Study_Time_Result;
                                //?-------------Arrays-------------//
        let ST = [0]
                                //?-------------Object-------------//
        Coordinate = {}
        Diagonal_Obj = {}
                                //?-------------Functions-------------//
        function Recover_WebPage_Colors() {
            document.body.style.background = localStorage.getItem("First_Color")
        }
        function Create_Coordinate_System_Plan() {
            for (let p = 1; p <= 7; p++) {
                let Plan_Vertical = document.createElement("div")
                Plan_Vertical.style.position = "absolute"
                Plan_Vertical.style.background = localStorage.getItem("Second_Color")
                Plan_Vertical.style.left = (Multiply_Numbers * p) + "px"
                Plan_Vertical.style.bottom = "0px"
                Plan_Vertical.style.height = Multiply_Numbers * 8 + "px"
                Plan_Vertical.style.width = "0.1px"
                Plan_div.appendChild(Plan_Vertical)

                let Plan_Horizontal =  document.createElement("div")
                Plan_Horizontal.style.position = "absolute"
                Plan_Horizontal.style.background = localStorage.getItem("Second_Color")
                Plan_Horizontal.style.left = "0px"
                Plan_Horizontal.style.bottom = (Multiply_Numbers * p) + "px"
                Plan_Horizontal.style.height = "0.1px"
                Plan_Horizontal.style.width = Multiply_Numbers * 8 + "px"
                Plan_div.appendChild(Plan_Horizontal)
            }
        }
        function Study_Timer_Function() {
                if (Timer_Mode === true) {
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
            }

                Study_Timer.style.color = localStorage.getItem("Text_Color")
                Study_Timer_sec.style.color = localStorage.getItem("Text_Color")
                Study_Timer.innerHTML =  hours + " h : " + min + " m"
                Study_Timer_sec.innerHTML = sec + " s"
            
        }
        function Reset_LocalStorage(){
            Reset_button.onclick = function () {
                localStorage.removeItem("Coordinate") 
                localStorage.removeItem("Diagonal") 
                localStorage.removeItem("ST") 
                localStorage.removeItem("First_Point") 
                localStorage.removeItem("First_Color") 
                localStorage.removeItem("Second_Color") 
                localStorage.removeItem("Text_Color") 
                location.reload();
                console.warn("LocalStorage Reseted...");
            }
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


                            //*Add Img To Html With Property*// 
        var lineElement = document.createElement("div");
        lineElement.style.backgroundColor = localStorage.getItem("Second_Color")
        lineElement.style.height = "3px"
        lineElement.style.width = "3px"
        lineElement.style.borderRadius = "90px" 
        lineElement.style.position = "absolute";
        lineElement.style.transformOrigin = "bottom left"
        lineElement.id = "Line" + i
        document.body.appendChild(lineElement)

                            //*Styling The New Img by Id*//
        document.getElementById("Line" + i).style.left = (days * Multiply_Numbers)  + "px"
        console.log(`The left Position is: ${document.getElementById("Line" + i).style.left}`);
        document.getElementById("Line" + i).style.bottom = (ST[i] * Multiply_Numbers) + "px"
        console.log(`The Bottom Position is: ${document.getElementById("Line" + i).style.bottom}`);
        }
        

                                //?-------------CODE-------------//

                        //!Recovery The Last Coordanate Systeme//
    Recover_WebPage_Colors()
    Create_Coordinate_System_Plan()
    Something_In_Diagonal_Function()

if (Something_In_Diagonal === true) {
    for (let j = 0; j <= Object.values(JSON.parse(localStorage.getItem("Diagonal"))).length; j++) {
        console.log(`The j of The loop is : ${j}`);
        //----------------------LOOP------------------------
        var lineElement = document.createElement("div");
        lineElement.style.backgroundColor = localStorage.getItem("Second_Color")
        lineElement.style.height = "3px"
        lineElement.style.width = "3px"
        lineElement.style.borderRadius = "90px" 
        lineElement.style.position = "absolute";
        lineElement.style.transformOrigin = "bottom left"
        lineElement.id = "Line" + j
        document.body.appendChild(lineElement)

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
        lineElement.style.backgroundColor = localStorage.getItem("Second_Color")
        lineElement.style.height = "3px"
        lineElement.style.width = "3px"
        lineElement.style.borderRadius = "90px" 
        lineElement.style.position = "absolute";
        lineElement.style.transformOrigin = "bottom left"
        lineElement.id = "Line" + i
        document.body.appendChild(lineElement)

                        //*Styling The New Img by Id*//
        document.getElementById("Line" + i).style.left = 0
        console.log(`🚀 ~ document.getElementById("Line" + i=${i}).style.bottom:, ${document.getElementById("Line" + i).style.left}`)
        document.getElementById("Line" + i).style.bottom = 0
        console.log(`🚀 ~ document.getElementById("Line" + i=${i}).style.bottom:, ${document.getElementById("Line" + i).style.bottom}`)

                        //*Stock The Coordinate Of Origine Point*//
        Coordinate["Line" + i + "x"] = 0
        Coordinate["Line" + i + "y"] = 0 
        }

    button_start.onclick = function () {
        IntervalID = setInterval(() => {Study_Timer_Function()}, 1000)
        
        Timer_Mode = true
        button_finish.style.visibility = "visible"
        button_start.style.visibility = "hidden"
        TimeOut.style.borderTopColor = localStorage.getItem("Second_Color")
        TimeOut.style.animationName = "TimeOut_Animation"
        TimeOut.style.animationPlayState = "running"
        TimeOut.style.visibility = "visible"
    }

    button_finish.onclick = function () {
        if (days <= 7) {  
            Timer_Mode = false
            TimeOut.style.animationPlayState = "stop"
            TimeOut.style.visibility = "hidden"
            button_finish.style.visibility = "hidden"
            button_start.style.visibility = "visible"

            Study_Time_Result = parseFloat(hours + (min / 100))
            Create_New_Point()
            Calcul_Distance_And_Angle()

            sec = 0
            min = 0
            hours = 0
            Study_Timer.innerHTML =  hours + " h : " + min + " m"
            Study_Timer_sec.innerHTML = sec + " s"
            clearInterval(IntervalID)
        }else{
            console.warn("This is your coordinate systeme for this week");
        }
    }
 
                        //!Reset The LocalStorage By Button//
    Reset_LocalStorage()
