const Emails = ["gaetanovenuto99@live.it", "salvatoreimpellizzeri2001@gmail.com", "alessiovietri@boolean.careers.com"];
console.log('Emails:', Emails, typeof Emails)

const myButton = document.getElementById('button');

myButton.addEventListener('click',
    function() { 
        const myEmail = document.getElementById('email').value;
        console.log('myEmail', myEmail, typeof myEmail);

        for (i = 0; i < Emails.length; i++) {
            if (myEmail == Emails[i]) {              
                document.getElementById('result').innerHTML = 'corretta';
            }
    
            else {
                document.getElementById('result').innerHTML = 'sbagliata';
            }
        }
    }

)