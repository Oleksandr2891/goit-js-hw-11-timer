import './sass/main.scss';

class CountdownTimer {

    constructor({ selector, targetDate }) {
        this.intervalId = null;
        this.selector = selector;
        this.value = targetDate;
    }

    start(startTime) {
        startTime = this.value.getTime();

        this.intervalId = setInterval(() => {

            const currentTime = Date.now();
            const timeDelta = startTime - currentTime;
            if (timeDelta <= 1) return this.stop();
            const time = this.getTimeComponents(timeDelta);
            this.udateClockface(time)

        }, 1000);

    }

    stop() {
        clearInterval(this.intervalId);
        const timerBg = document.querySelector(`body`);
        timerBg.style.backgroundColor = 'red'
    }

    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(3, '0');
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');

        return { days, hours, mins, secs };
    };
    udateClockface({ days, hours, mins, secs }) {
        const dayface = document.querySelector(`${this.selector} .date`);
        const timeface = document.querySelector(`${this.selector} .time`);
        dayface.textContent = `Days ${days}`;
        timeface.textContent = `Time ${hours}:${mins}:${secs}`;
    }


};



const counter = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 27, 2021 19:18'),
});

counter.start();



