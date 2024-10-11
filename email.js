// Inizializza EmailJS con il tuo USER ID
(function(){
    emailjs.init(service_wg538x8); // Sostituisci con il tuo USER ID da EmailJS
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
    emailjs.send(Gmail_API,template_o894elp, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('success-message').style.display = 'block'; // Mostra messaggio di successo
            document.getElementById('contact-form').reset(); // Resetta il modulo
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('error-message').style.display = 'block'; // Mostra messaggio di errore
        });
});