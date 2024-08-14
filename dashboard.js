document.addEventListener('DOMContentLoaded', function() {
    let balance = 0;

    // Function to update balance display
    function updateBalance() {
        document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
    }

    // Load balance from localStorage if available
    if (localStorage.getItem('cryptoBalance')) {
        balance = parseFloat(localStorage.getItem('cryptoBalance'));
        updateBalance();
    }

    // Function to add $50 to the balance every 24 hours
    function addDailyBonus() {
        balance += 50;
        localStorage.setItem('cryptoBalance', balance.toFixed(2));
        updateBalance();
    }

    // Check if it's time to add the daily bonus
    if (localStorage.getItem('lastUpdate')) {
        const lastUpdate = new Date(localStorage.getItem('lastUpdate'));
        const now = new Date();
        const timeDiff = now - lastUpdate;
        const oneDay = 24 * 60 * 60 * 1000;

        if (timeDiff >= oneDay) {
            addDailyBonus();
            localStorage.setItem('lastUpdate', now);
        }
    } else {
        localStorage.setItem('lastUpdate', new Date());
    }

    // Add daily bonus every 24 hours
    setInterval(addDailyBonus, 24 * 60 * 60 * 1000);
});
