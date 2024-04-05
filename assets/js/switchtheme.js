let theme_icon = document.querySelector("#theme");
let theme_icon_dois = document.querySelector("#theme");
const header = document.querySelector("header")

    theme_icon.addEventListener("click", () => {
        if(theme_icon.src = "assets/images/moon_icon.svg") {
            theme_icon.src = "assets/images/sun_icon.svg";
            document.body.style.backgroundColor = "#222222";
            document.body.style.color = "#ffffff";
            header.style.backgroundColor = "#222222";
            header.style.border = "2px solid #222222";
            header.style.boxShadow = "2px 4px #333232";
        }

        else {
            header.style.backgroundColor = "#ffffff";
            header.style.border = "2px solid #222222";
            header.style.boxShadow = "2px 4px #333232";
        }
        }
      )
      ;