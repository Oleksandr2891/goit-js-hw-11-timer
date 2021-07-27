import './sass/main.scss';

class CountdownTimer {

    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.value = targetDate;
    }

    start(startTime) {
        startTime = this.value.getTime();

        setInterval(() => {
            const currentTime = Date.now();
            const timeDelta = startTime - currentTime;
            const time = this.getTimeComponents(timeDelta);
            udateClockface(time)
        }, 1000);

    }

    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');

        return { days, hours, mins, secs };
    };
};



const counter = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
});

counter.start();

// const countdownTimer = {

//     start() {
//         const startTime = new Date('Jul 17, 2022');

//         setInterval(() => {
//             const currentTime = Date.now();
//             const timeDelta = startTime - currentTime;
//             const time = getTimeComponents(timeDelta);
//             udateClockface(time)
//             console.log(timeComponents);

//         }, 1000);

//     }

// };

// countdownTimer.start();


// function getTimeComponents(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
//     const secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');

//     return { days, hours, mins, secs };
// };

function udateClockface({ days, hours, mins, secs }) {
    const dayface = document.querySelector('#timer-1 .date');
    const timeface = document.querySelector('#timer-1 .time');
    dayface.textContent = `Days ${days}`;
    timeface.textContent = `Time ${hours}:${mins}:${secs}`;
}


