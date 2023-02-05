const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNotificacion = document.querySelector('#vernotificacion');
navigator.serviceWorker.register('sw.js')
verNotificacion.addEventListener('click', () => {
    console.log("ss");
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Notification with ServiceWorker');
          });

        setInterval(() => {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification('Vibration Sample', {
                  body: 'Buzz! Buzz!',
                  icon: '../images/touch/chrome-touch-icon-192x192.png',
                  vibrate: [200, 100, 200, 100, 200, 100, 200],
                  tag: 'vibration-sample'
                })
              })
        },5000)

        notificacion.onclick = function(){
            window.open('http://google.com');
        }
    }
})