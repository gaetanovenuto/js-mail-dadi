const myButton = document.getElementById('button');

myButton.addEventListener('click',
    function() {
        // Genero un numero casuale tra 1 e 6

        const userDicePrevious = Math.random() * 6;

        // Arrotondo il numero per difetto

        const userFinalDice = (Math.floor(userDicePrevious) + 1);
        console.log("Il dado dell'utente è:", userFinalDice);
        document.getElementById('user').innerHTML = userFinalDice;

        // Genero un numero casuale tra 1 e 6

        const computerDicePrevious = Math.random() * 6;

        // Arrotondo il numero per difetto

        const computerFinalDice = (Math.floor(computerDicePrevious) + 1);
        console.log("Il dado del computer è:", computerFinalDice);
        document.getElementById('computer').innerHTML = computerFinalDice;

        if (userFinalDice > computerFinalDice) {
            document.getElementById('result').innerHTML = 'Hai vinto!'
        }

        else if (userFinalDice === computerFinalDice) {
            document.getElementById('result').innerHTML = 'Hai pareggiato!'
        }

        else {
            document.getElementById('result').innerHTML = 'Hai perso!'
        }
    }
)