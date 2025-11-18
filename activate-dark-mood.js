// darke and light mode
export function turnModde(){
    const lightModeButtom = document.querySelector(".color-mode") ;

    function TurnDarkMode(){
        document.body.classList.add("dark-mode")
        localStorage.setItem("darkMode" , "active" )
    }
    function TurnLightMode(){
        document.body.classList.remove("dark-mode")
        localStorage.setItem("darkMode" , null )
    }

    lightModeButtom.addEventListener("click" , function(){
        const mode = localStorage.getItem("darkMode");
        if(mode === "active") TurnLightMode() ;
        else TurnDarkMode() ;
    })

    if(localStorage.getItem("darkMode") === "active") TurnDarkMode() ;
}