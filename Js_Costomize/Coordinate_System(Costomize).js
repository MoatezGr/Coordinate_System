                                //-------------Html Elements-------------//
    let body = document.getElementById("body")
    let Accept_Button = document.getElementById("Accept_Button")
    let Not_Accept_Button = document.getElementById("Not_Accept_Button")
    let combo_color_div1 = document.getElementById("combo_color_div1")
    let combo_color_div2 = document.getElementById("combo_color_div2")
    let combo_color_div3 = document.getElementById("combo_color_div3")
    let combo_color_botton = document.getElementById("combo_color_botton")
    let babel_1 = document.getElementById("babel_1")
    let babel_2 = document.getElementById("babel_2")
    let cercle_1 = document.getElementById("cercle_1")
    let cercle_2 = document.getElementById("cercle_2")
    let cercle_3 = document.getElementById("cercle_3")
    let cercle_4 = document.getElementById("cercle_4")
    let text_h1 = document.getElementById("text_h1")
    let costomize_main_div = document.getElementById("costomize_main_div")
    let costomize_tools_controler = document.getElementById("costomize_tools_controler")
    let Hex_input = document.getElementById("Hex_input")
    let costomize_color_input = document.getElementById("costomize_color_input")
    let next_botton = document.getElementById("next_botton")
    let costomize_Accept_Button = document.getElementById("costomize_Accept_Button")
    let BackGround_text = document.getElementById("BackGround_text")
    let Elements_text = document.getElementById("Elements_text")
    let Textcolor_text = document.getElementById("Textcolor_text")
    let costomize_color_controler = document.getElementById("costomize_color_controler")
    let error_cercle2 = document.getElementById("error_cercle1")
    let error_cercle1 = document.getElementById("error_cercle2")

                                //-------------VAR-------------//
    let First_Color = "#2F4F4F"
    let Second_Color = "#fff3ca"
    let Text_Color = "#d1d1d1"
    let c = 0

                               //-------------FUNCTIONS-------------//
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
            babel_1.style.backgroundColor = Second_Color
            babel_2.style.backgroundColor = Second_Color
            cercle_1.style.backgroundColor = Second_Color
            cercle_3.style.backgroundColor = Second_Color
            cercle_2.style.backgroundColor = Text_Color
            cercle_4.style.backgroundColor = Text_Color
            text_h1.style.color = Text_Color
        }, 100);
    }

    function Costomize_color_machine() {
        if (c <= 2 && Hex_input.value != "" || costomize_color_input.value != "#000000") {
            if (Hex_input.value != ""){
                if (c == 0) {
                    localStorage.setItem("background_color" , Hex_input.value)
                    Elements_text.style.display = "block"
                    BackGround_text.style.display = "none"
                    Textcolor_text.style.display = "none"
                    error_cercle1.style.display = "none"
                    error_cercle2.style.display = "none"
                }else if (c == 1) {
                    localStorage.setItem("element_color" , Hex_input.value)
                    Textcolor_text.style.display = "block"
                    BackGround_text.style.display = "none"
                    Elements_text.style.display = "none"
                    error_cercle1.style.display = "none"
                    error_cercle2.style.display = "none"
                }else if (c == 2) {
                    next_botton.value = "Comfirm"
                    localStorage.setItem("text_color" , Hex_input.value)
                    error_cercle1.style.display = "none"
                    error_cercle2.style.display = "none"
                }
            }else if (costomize_color_input.value != "#000000") {
                if (c == 0) {
                    localStorage.setItem("background_color" , costomize_color_input.value)
                    Elements_text.style.display = "block"
                    BackGround_text.style.display = "none"
                    Textcolor_text.style.display = "none"
                    error_cercle1.style.display = "none"
                    error_cercle2.style.display = "none"
                }else if (c == 1) {
                    localStorage.setItem("element_color" , costomize_color_input.value)
                    next_botton.value = "accept"
                    Textcolor_text.style.display = "block"
                    BackGround_text.style.display = "none"
                    Elements_text.style.display = "none"
                    error_cercle1.style.display = "none"
                    error_cercle2.style.display = "none"
                }else if (c == 2) {
                    localStorage.setItem("text_color" , costomize_color_input.value)
                    next_botton.value = "Comfirm"
                    error_cercle1.style.display = "none"
                    error_cercle2.style.display = "none"
                }
            }
    
            c += 1
            console.log(c);
            
            First_Color = localStorage.getItem("background_color")
            Second_Color = localStorage.getItem("element_color")
            Text_Color = localStorage.getItem("text_color")
            Hex_input.value = ""
            costomize_color_input.value = "#000000"
            }else if(c > 2){
                costomize_color_controler.style.display = "none"
                costomize_main_div.style.display = "block"
                error_cercle1.style.display = "none"
                error_cercle2.style.display = "none"
                next_botton.value = "Next"
                c = 0
            }else{
                error_cercle1.style.display = "block"
                error_cercle2.style.display = "block"
            }
    }
    
                                //-------------CODE-------------//

    Accept_Button.onclick = function () {
        costomize_main_div.style.display = "none"
        costomize_color_controler.style.display = "none"
        costomize_tools_controler.style.display = "flex"
    }

    Not_Accept_Button.onclick = function () {
        costomize_main_div.style.display = "none"
        costomize_tools_controler.style.display = "none"
        costomize_color_controler.style.display = "grid"
    }

    combo_color_div1.onclick = function () {
        combo_color_botton.style.display = "block"
        First_Color = "#9a7787"
        Second_Color = "#E4AFB0"
        Text_Color = "#FED7BF"
    }

    combo_color_div2.onclick = function () {
        combo_color_botton.style.display = "block"
        First_Color = "#533638"
        Second_Color = "#F7B9C4"
        Text_Color = "#F5EDEC"
    }

    combo_color_div3.onclick = function () {
        combo_color_botton.style.display = "block"
        First_Color = "#2B7A78"
        Second_Color = "#3AAFA9"
        Text_Color = "#DEF2F1"
    }

    combo_color_botton.onclick = function () {
        localStorage.setItem("background_color", First_Color)
        localStorage.setItem("element_color", Second_Color)
        localStorage.setItem("text_color", Text_Color)

        costomize_main_div.style.display = "block"
        costomize_tools_controler.style.display = "none"
    }

    next_botton.onclick = function () {
        Costomize_color_machine()
    }
    



    Colors_page_default()
    Costomize_color_Live()


    


