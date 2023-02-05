const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNotificacion = document.querySelector('#vernotificacion');

verNotificacion.addEventListener('click', () => {
    console.log("ss");
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: '/images/example-logo.jpg',
            body: 'Tutoriales de js con blackCode'
        });

        setInterval(() => {
            const notificacion = new Notification('Esta es la notificacion', {
                icon: '/images/example-logo.jpg',
                body: 'Tutoriales de js con blackCode'
            })
        },5000)

        notificacion.onclick = function(){
            window.open('http://google.com');
        }
    }
})