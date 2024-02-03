"use strict"

let mode = document.getElementById("mode_changer")

mode.addEventListener("click", function () {
    let navbar = document.getElementById("navbarmenu");
    if (navbar.getAttribute("data-bs-theme") == "dark") {
        navbar.setAttribute("data-bs-theme", "light")

    } else {
        navbar.setAttribute("data-bs-theme", "dark")
    }
    document.querySelectorAll(".card").forEach(function (card) {
        console.log(card)
        if (card.getAttribute("data-bs-theme") == "dark") {
            card.setAttribute("data-bs-theme", "light")

        } else {
            card.setAttribute("data-bs-theme", "dark")
        }
    })
    document.body.classList.toggle("dark")
 
    document.querySelectorAll("body label").forEach(function (label) {
        console.log(label)
        label.classList.toggle("dark")

    })

    document.querySelectorAll("body ul").forEach(function (ul) {
        console.log(ul)
        if (ul.getAttribute("data-bs-theme") == "dark") {
            ul.setAttribute("data-bs-theme", "light")

        } else {
            ul.setAttribute("data-bs-theme", "dark")
        }
    })

    }
)