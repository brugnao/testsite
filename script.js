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

