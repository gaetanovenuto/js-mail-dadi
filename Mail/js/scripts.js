// Definisco i valori delle Mail che daranno risultato corretto

const Emails = ["gaetanovenuto99@live.it", "salvatoreimpellizzeri2001@gmail.com", "alessiovietri@boolean.careers.com"];

// Stampo in console i valori delle Mail che daranno risultato corretto
console.log('Emails:', Emails, typeof Emails);

// Porto il button su JS

const myButton = document.getElementById('button');

// Aggiungo la funzione al button

myButton.addEventListener('click',
    function() { 

        // Prendo il valore dell'input inserito dall'utente

        const myEmail = document.getElementById('email').value;

        // Stampo in console il valore dell'input inserito dall'utente

        console.log('myEmail', myEmail, typeof myEmail);

        for (i = 0; i < Emails.length; i++) {

            // Se il valore dell'input inserito dall'utente è incluso tra i valori delle Mail che daranno risultato corretto, l'HTML stamperà la dicitura "corretta"...

            if (Emails.includes(myEmail)) {              
                document.getElementById('result').innerHTML = 'corretta';
            }
    
            // ...altrimenti, stamperà la dicitura "sbagliata"!

            else {
                document.getElementById('result').innerHTML = 'sbagliata';
            }
        }
    }

)