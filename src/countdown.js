
class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector
        this.targetDate = targetDate
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
            secs: document.querySelector(`${this.selector} [data-value="seconds"]`) 
        }
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(total/(1000*60*60*24))
        const hours = Math.floor((total/(1000*60*60))%24)
        const mins = Math.floor((total/1000/60)%60)
        const secs = Math.floor((total/1000)%60)

        return {total, days, hours, mins, secs}
    }

    updateTimer( {days, hours, minutes, secs} ) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.mins.textContent = minutes
        this.refs.secs.textContent = secs
    }

    startTimer() {
        const countdown = this.getTimeRemaining(this.targetDate)
        this.updateTimer(countdown)
        setInterval(() => {
            const countdown = this.getTimeRemaining(this.targetDate)
            this.updateTimer(countdown)
        }, 1000) //refresh every 1000ms
    }
}