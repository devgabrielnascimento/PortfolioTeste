let theme_icon = document.querySelector("#theme");
let theme_icon_forms = document.querySelector("#theme_forms");
let pathTheme = "assets/images/";
const pathThemeMoon = "moon_icon.svg";
const pathThemeSun = "sun_icon.svg";
const header = document.querySelector("header");
const logo = document.querySelector("#logo");
const dropdown_hamburguer = document.querySelector
("#dropdown_hamburguer");
const icon_menu_hamburguer = document.querySelector("#icon_menu_hamburguer");

    theme_icon.addEventListener("click", () => {
        if (theme_icon.src.includes(pathTheme + pathThemeMoon)) {
            theme_icon.src = pathTheme + pathThemeSun;
            document.body.style.backgroundColor = "#222222";
            document.body.style.color = "#ffffff";
            header.style.backgroundColor = "#222222";
            header.style.border = "2px solid #222222";
            header.style.boxShadow = "2px 4px #333232";
            logo.querySelector('path').setAttribute('fill', '#ffffff');
            icon_menu_hamburguer.querySelector('path').setAttribute('fill', '#ffffff');
            let paths = icon_menu_hamburguer.querySelectorAll('path');
            paths.forEach((path) => path.setAttribute('fill', '#ffffff'));
        }
        else if(theme_icon.src.includes(pathTheme + pathThemeSun)){
            theme_icon.src = pathTheme + pathThemeMoon;
            document.body.style.color = "#000000";
            document.body.style.backgroundColor = "#ffffff";
            header.style.backgroundColor = "#ffffff";
            header.style.border = "2px solid #f2f2f2";
            header.style.boxShadow = "2px 4px #e5e2e2";
            logo.querySelector('path').setAttribute('fill', '#000000');
            icon_menu_hamburguer.querySelector('path').setAttribute('fill', '#ffffff');
            let paths = icon_menu_hamburguer.querySelectorAll('path');
            paths.forEach((path) => path.setAttribute('fill', '#000000'));
        }
        }
      );