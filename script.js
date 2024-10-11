// Esempio di codice per un calendario interattivo di eventi
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById('calendar');
    const eventiList = document.getElementById('eventi-list');

    // Questo array può essere dinamico o collegato a un database
    const eventi = [
        { data: '2024-10-12', titolo: 'Il mercante di Venezia', ora: '20:30' },
        { data: '2024-11-25', titolo: 'Sogno di una notte di mezza estate', ora: '21:00' }
    ];

    // Creazione di una lista di eventi visibili nel calendario
    eventi.forEach(evento => {
        const li = document.createElement('li');
        li.textContent = `${evento.data} - ${evento.titolo} - Ore ${evento.ora}`;
        eventiList.appendChild(li);
    });
});




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

