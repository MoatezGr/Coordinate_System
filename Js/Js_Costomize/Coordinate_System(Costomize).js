                                //-------------Html Elements-------------//
    let Accept_Button = document.getElementById("Accept_Button")
    let Not_Accept_Button = document.getElementById("Not_Accept_Button")
    let Accept_Button_2 = document.getElementById("Accept_Button_2")
    let Start_Button = document.getElementById("Start_Button")
    let text_0 = document.getElementById("text_0")
    let text_1 = document.getElementById("text_1")
    let text_2 = document.getElementById("text_2")
    let Square = document.getElementById("Square")
    let Pack_1 = document.getElementById("Pack_1")
    let Pack_2 = document.getElementById("Pack_2")
    let Pack_3 = document.getElementById("Pack_3")
    let Packs = document.getElementById("Packs")
    let First_Color_Input = document.getElementById("First_Color_Input")
    let Second_Color_Input = document.getElementById("Second_Color_Input")
    let Text_Color_Input = document.getElementById("Text_Color_Input")
    let First_Color_Label = document.getElementById("First_Color_Label")
    let Second_Color_Label = document.getElementById("Second_Color_Label")
    let Text_Color_Label = document.getElementById("Text_Color_Label")

                                //-------------VAR-------------//
    let First_Color = "#474B4F"
    let Second_Color = "#222629"
    let Text_Color = "#61892F"

                               //-------------FUNCTIONS-------------//
    function Display_Colors_By_Events() {
                                   
                         //? Display The Packs ?//

        Pack_1.onmouseenter = function () {
            Pack_1.style.animationName = "Pack_Animation"
            Pack_1.style.animationPlayState = "running"

            document.body.style.backgroundColor = "#d1d1d1"
            Square.style.backgroundColor = "#3d5b83"
            text_0.style.color = "#2f4053"
            text_1.style.color = "#2f4053"
            text_2.style.color = "#2f4053"
        }

        Pack_1.onmouseleave = function () {
            Pack_1.style.animationPlayState = "paused"

            document.body.style.backgroundColor = First_Color
            Square.style.backgroundColor = Second_Color
            text_0.style.color = Text_Color
            text_1.style.color = Text_Color
            text_2.style.color = Text_Color
        }

        Pack_2.onmouseenter = function () {
            Pack_2.style.animationName = "Pack_Animation"
            Pack_2.style.animationPlayState = "running"

            document.body.style.backgroundColor = "#292525"
            Square.style.backgroundColor = "#157968"
            text_0.style.color = "#afafaf"
            text_1.style.color = "#afafaf"
            text_2.style.color = "#afafaf"
        }

        Pack_2.onmouseleave = function () {
            Pack_2.style.animationPlayState = "paused"

            document.body.style.backgroundColor = First_Color
            Square.style.backgroundColor = Second_Color
            text_0.style.color = Text_Color
            text_1.style.color = Text_Color
            text_2.style.color = Text_Color
        }

        Pack_3.onmouseenter = function () {
            Pack_3.style.animationName = "Pack_Animation"
            Pack_3.style.animationPlayState = "running"

            document.body.style.backgroundColor = "#3e2d53"
            Square.style.backgroundColor = "#01272c"
            text_0.style.color = "#afafaf"
            text_1.style.color = "#afafaf"
            text_2.style.color = "#afafaf"
        }

        Pack_3.onmouseleave = function () {
            Pack_3.style.animationPlayState = "paused"

            document.body.style.backgroundColor = First_Color
            Square.style.backgroundColor = Second_Color
            text_0.style.color = Text_Color
            text_1.style.color = Text_Color
            text_2.style.color = Text_Color
        }
  
    }
    function Confirm_Colors_And_Stock_It() {
        Pack_1.onclick = function () {
        if (confirm("Press Ok For Confirm Your WebPage Color") === true) {
            First_Color = "#d1d1d1"
            Second_Color = "#3d5b83"
            Text_Color = "#2f4053"
   
            localStorage.setItem("First_Color" , First_Color)
            localStorage.setItem("Second_Color" , Second_Color)
            localStorage.setItem("Text_Color" , Text_Color)
            
            location.assign("./index.html")
        }
        }

        Pack_2.onclick = function () {
            if (confirm("Press Ok For Confirm Your WebPage Color") === true) {
                First_Color = "#292525"
                Second_Color = "#157968"
                Text_Color = "#afafaf"
       
                localStorage.setItem("First_Color" , First_Color)
                localStorage.setItem("Second_Color" , Second_Color)
                localStorage.setItem("Text_Color" , Text_Color)

                location.assign("./index.html")    
            }
        }

        Pack_3.onclick = function () {
            if (confirm("Press Ok For Confirm Your WebPage Color") === true) {
                First_Color = "#3e2d53"
                Second_Color = "#01272c"
                Text_Color = "#afafaf"
       
                localStorage.setItem("First_Color" , First_Color)
                localStorage.setItem("Second_Color" , Second_Color)
                localStorage.setItem("Text_Color" , Text_Color)
                
                location.assign("./index.html")
            }
        }
    }
    function Put_Color_By_Inputs() {
        text_1.style.visibility = "hidden"
        text_2.style.visibility = "hidden"
        Packs.style.visibility = "hidden"
        Accept_Button_2.style.visibility = "hidden"
        Start_Button.style.visibility = "visible"
        First_Color_Input.style.visibility = "visible"
        Second_Color_Input.style.visibility = "visible"
        Text_Color_Input.style.visibility = "visible"
        First_Color_Label.style.visibility = "visible"
        Second_Color_Label.style.visibility = "visible"
        Text_Color_Label.style.visibility = "visible"

                                 //? Display The Colors_Inputs ?//
        setInterval(() => {
            if (First_Color_Input.value != "#000000" || Second_Color_Input.value != "#000000" || Text_Color_Input.value != "#000000") {
                document.body.style.backgroundColor = First_Color_Input.value
                Square.style.backgroundColor = Second_Color_Input.value
                text_0.style.color = Text_Color_Input.value
                text_1.style.color = Text_Color_Input.value
                text_2.style.color = Text_Color_Input.value
            }else{
                document.body.style.backgroundColor = First_Color
                Square.style.backgroundColor = Second_Color
                text_0.style.color = Text_Color
                text_1.style.color = Text_Color
                text_2.style.color = Text_Color
            }
        },100);
    }
    
                                //-------------CODE-------------//

    Accept_Button.onclick = function () {
        Accept_Button.style.visibility = "hidden"
        Not_Accept_Button.style.visibility = "hidden"
        text_1.style.visibility = "hidden"
        text_2.style.visibility = "visible"
        Packs.style.visibility = "visible"
        Accept_Button_2.style.visibility = "visible"
    }

    Not_Accept_Button.onclick = function () {
        Not_Accept_Button.style.visibility = "hidden"
        Accept_Button.style.visibility = "hidden"
        Put_Color_By_Inputs()
    }

    Accept_Button_2.onclick = function () {
        Put_Color_By_Inputs()
    }

    Start_Button.onclick = function () {
        if (First_Color_Input.value != "#000000" || Second_Color_Input.value != "#000000" || Text_Color_Input.value != "#000000") {
            localStorage.setItem("First_Color",First_Color_Input.value)
            localStorage.setItem("Second_Color",Second_Color_Input.value)
            localStorage.setItem("Text_Color",Text_Color_Input.value)
    
            location.assign("./index.html")
        }
    }

    Display_Colors_By_Events()
    Confirm_Colors_And_Stock_It()
    


    


