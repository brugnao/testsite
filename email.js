// Inizializza EmailJS con il tuo USER ID
(function(){
    emailjs.init("IL_TUO_USER_ID"); // Sostituisci con il tuo USER ID da EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Blocca l'invio normale del modulo

    // Parametri per il messaggio
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Invio dell'email con EmailJS
    emailjs.send('TUO_SERVICE_ID', 'TUO_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('success-message').style.display = 'block'; // Mostra messaggio di successo
            document.getElementById('contact-form').reset(); // Resetta il modulo
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('error-message').style.display = 'block'; // Mostra messaggio di errore
        });
});