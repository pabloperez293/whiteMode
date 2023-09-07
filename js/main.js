// varibles

const btnSwitch = document.querySelector("#switch");


btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Se guarda el modo 

    if ( document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    }else{
        localStorage.setItem("dark-mode", "false");
    }
})

// Lo actualizo el modo

if( localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("acitve");
}else{
    document.body.classList.remove("dark");
}


