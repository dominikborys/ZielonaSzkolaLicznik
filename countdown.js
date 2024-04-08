document.addEventListener('DOMContentLoaded', function() {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    function setWhiteWallpaper() {
        document.body.style.backgroundImage = "url('tapeta.jpg')";
    }

    function setBlackWallpaper() {
        document.body.style.backgroundImage = "url('czarnatapeta.jpg')";
    }

    sunIcon.addEventListener('click', function() {
        setWhiteWallpaper(); 
    });

    moonIcon.addEventListener('click', function() {
        setBlackWallpaper(); 
    });

    function updateCountdown() {
        const targetDate = new Date('2024-05-31'); 
        const startDate = new Date('2024-03-22'); 
        const now = new Date();

        const timeDifference = targetDate - now;
        const totalTime = targetDate - startDate;
        const progressPercentage = ((totalTime - timeDifference) / totalTime) * 100;

        if (timeDifference > 0) {
            const secondsLeft = Math.floor((timeDifference / 1000) % 60);
            const minutesLeft = Math.floor((timeDifference / 1000 / 60) % 60);
            const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            document.getElementById('days').textContent = `${daysLeft} dni`;
            document.getElementById('hours').textContent = `${hoursLeft} godzin`;
            document.getElementById('minutes').textContent = `${minutesLeft} minut`;
            document.getElementById('seconds').textContent = `${secondsLeft} sekund`;

            document.getElementById('weekdays').textContent = `${countWeekdays(now, targetDate)} dni`;

            document.getElementById('percent').textContent = `${progressPercentage.toFixed(2)}%`;
        } else {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = "Termin minął!";
            document.getElementById('percent').textContent = "100%";
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000); 

    function countWeekdays(startDate, endDate) {
        let count = 0;
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { 
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return count;
    }
});
