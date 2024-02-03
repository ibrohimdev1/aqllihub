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

    document.querySelectorAll("#emailHelp").forEach(function (emailHelp) {
        console.log(emailHelp)
        emailHelp.classList.toggle("dark")
      }

    )
    document.querySelectorAll("body input").forEach(function (input) {
        console.log(input)
        input.classList.toggle("dark")
       }
    )
    document.querySelectorAll('body div').forEach(function (div) {
        console.log(div)
        div.classList.toggle("dark")
    })

    document.querySelectorAll('body li').forEach(function (li){
        console.log(li)
        li.classList.toggle('dark')
    })

    document.querySelectorAll('body button').forEach(function (button){
        console.log(button)
        button.classList.toggle('dark')
    })



    document.querySelectorAll("body div").forEach(function (div) {
        console.log(div)
        if (div.getAttribute("data-bs-theme") == "dark") {
            div.setAttribute("data-bs-theme", "light")

        } else {
            div.setAttribute("data-bs-theme", "dark")
        }
    })


    document.querySelectorAll(".cards").forEach(function (cards) {
        console.log(cards)
        cards.classList.toggle("dark")
      }

    )
    }
)


