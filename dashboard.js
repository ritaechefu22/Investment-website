document.addEventListener('DOMContentLoaded', function() {
    let totalDeposited = 0;
    let totalWithdrawn = 0;
    let currentBalance = 0;
    let pendingBalance = 0;

    /*const depositForm = document.getElementById('deposit-form');
    const withdrawalForm = document.getElementById('withdrawal-form');*/
    const totalDepositedElement = document.getElementById('total-deposited');
    const totalWithdrawnElement = document.getElementById('total-withdrawn');
    const currentBalanceElement = document.getElementById('current-balance');
    const pendingBalanceElement = document.getElementById('pending-balance');

    // Function to update the displayed balances
    function updateBalances() {
        currentBalanceElement.textContent = `$${currentBalance.toFixed(2)}`;
        pendingBalanceElement.textContent = `$${pendingBalance.toFixed(2)}`;
    }

    // Function to handle the addition of the pending balance to the current balance after 7 days
    function addPendingToBalance() {
        currentBalance += pendingBalance;
        pendingBalance = 0;
        updateBalances();
    }

    // Set interval to increase pending balance by $50 every 7 days (in milliseconds)
    setInterval(function() {
        pendingBalance += 50;
        updateBalances();
        // Trigger the function to add pending balance to current balance after 7 days
        setTimeout(addPendingToBalance, 7 * 24 * 60 * 60 * 1000);
    }, 7 * 24 * 60 * 60 * 1000); // 7 days

    /*depositForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            totalDeposited += depositAmount;
            totalDepositedElement.textContent = `$${totalDeposited.toFixed(2)}`;
            currentBalance += depositAmount;
            updateBalances();
            depositForm.reset();
        }
    });*/

    /*withdrawalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const withdrawalAmount = parseFloat(document.getElementById('withdrawal-amount').value);
        if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= currentBalance) {
            // Update the total withdrawn and current balance
            totalWithdrawn += withdrawalAmount;
            currentBalance -= withdrawalAmount; });*/

            {
            // Update the display
            totalWithdrawnElement.textContent = `$${totalWithdrawn.toFixed(2)}`;
            updateBalances();

            // Simulate successful withdrawal without actually sending funds
            alert(`Withdrawal of $${withdrawalAmount.toFixed(2)} processed.`);

            /*withdrawalForm.reset(); 
        } else if (withdrawalAmount > currentBalance) {
            alert('Insufficient balance for withdrawal.');*/
        }
    //});

    document.getElementById('logout-btn').addEventListener('click', function() {
        // Add logout functionality
        alert('Logged out');
    });

    // Initial call to update the displayed balances
    updateBalances();
});
