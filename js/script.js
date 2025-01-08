// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

// FUNCTIONS

const get10RndEmails = () => {
    const emails = []
        for(let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {

                const result = response.data.response
                emails.push(result)

                emailListElm.innerHTML = ``

                if (emails.length === 10) {
                    for (let j = 0; j < emails.length; j++) {
                        emailListElm.innerHTML += `<li class="list-group-item">${emails[j]}</li>`;
                    }
                }
            })
            .finally(() => {
                loadingElm.classList.add("d-none")
                emailsCardElm.classList.remove("d-none")
                titleElm.classList.add("d-none")
            })
        }
}

// DOM ELEMENTS

const emailListElm = document.getElementById("email-list")
const titleElm = document.getElementById("title")
const btnStartElm = document.getElementById("btn-start")
const emailsCardElm = document.getElementById("emails-card")
const loadingElm = document.getElementById("loading")
const cardHeaderElm = document.getElementById("card-header")

// EVENTS

btnStartElm.addEventListener("click", () => {
    get10RndEmails()
    btnStartElm.innerHTML = "Genera di nuovo"
    loadingElm.classList.remove("d-none")
})