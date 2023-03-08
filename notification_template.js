const notificationModule = {
    notify: (message, timeout = 5000, level = 'is-success') => {
        const div = document.createElement('div');
        const span = document.createElement('span');

        //! BULMA CSS CLASSES, adapt to your library 
        div.classList.add('notification');
        div.classList.add(level);

        span.classList.add(level);
        span.textContent = message;

        div.appendChild(span);

        document.body.append(div);

        setTimeout(() => {
            document.querySelector('.notification').remove();
        }, timeout);
    },
};

module.exports = notificationModule;
