let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

function clearScreen() {
    document.getElementById("result").value = "";
}

function liveScreen(value) {
    let res = document.getElementById("result");
    if(res.value == "undefined"){
        res.value = "";
    }
    res.value += value;
}

// Funcion de Cambiar Tema
function changeTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == lightTheme) {
        theme.href = darkTheme;
        darkMode.innerHTML = "Tema Claro";
    } else {
        theme.href = lightTheme;
        darkMode.innerHTML = "Tema Oscuro";
    }
}