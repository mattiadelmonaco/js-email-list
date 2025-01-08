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

                if (emails.length === 10) {
                    for (let j = 0; j < emails.length; j++) {
                        emailListElm.innerHTML += `<li>${emails[j]}</li>`;
                    }
                }
            })
        }
}

// DOM ELEMENTS

const emailListElm = document.getElementById("email-list")

// EVENTS

get10RndEmails()