// Predefined wallet addresses for each cryptocurrency
const walletAddresses = {
    btc: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    eth: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    ltc: 'LZytvTiVVC2m3Kefj4he9LXkHhfvfJrm4U',
    bnb: 'bnb1p7gk4tswv98uq4d8tmy5gyq8u9lufwt4c6y62f'
};

// Function to update the wallet address based on selected cryptocurrency
function updateWalletAddress() {
    const cryptoType = document.getElementById('crypto-type').value;
    const walletAddressInput = document.getElementById('wallet-address');
    walletAddressInput.value = walletAddresses[cryptoType];
}

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`).classList.add('active');
}

// Handling form submissions (you can customize this further)
document.getElementById('deposit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Deposit request submitted!');
});

document.getElementById('withdrawal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Withdrawal request submitted!');
});

// Set initial wallet address on page load
window.onload = updateWalletAddress;

// Predefined exchange rates for simplicity (in real scenarios, fetch these from an API)
const exchangeRates = {
    btc: 59035.30,  // 1 BTC = $59,035.30
    eth: 2650.43,   // 1 ETH = $2,650.43
    ltc: 65.54,    // 1 LTC = $65.54
    bnb: 525.82     // 1 BNB = $525.82
};

// Predefined fixed amounts for validation
const fixedDepositAmounts = [300, 1000, 5000];

//predefined fixed amounts for validation
const fixedWalletAmounts = [100, 900, 4000];

// Function to update the dollar equivalent
function updateDollarEquivalent(cryptoTypeId, amountId, equivalentId) {
    const cryptoType = document.getElementById(cryptoTypeId).value;
    const amount = parseFloat(document.getElementById(amountId).value);
    const equivalentElement = document.getElementById(equivalentId);

    if (!isNaN(amount) && exchangeRates[cryptoType]) {
        const dollarEquivalent = (amount * exchangeRates[cryptoType]).toFixed(2);
        equivalentElement.textContent = `Dollar Equivalent: $${dollarEquivalent}`;
    } else {
        equivalentElement.textContent = '';
    }
}

// Function to set the fixed amount selected by the user
function setFixedAmount() {
    const fixedAmount = parseFloat(document.getElementById('fixed-amount').value);
    const cryptoType = document.getElementById('crypto-type').value;

    if (!isNaN(fixedAmount) && exchangeRates[cryptoType]) {
        const cryptoAmount = (fixedAmount / exchangeRates[cryptoType]).toFixed(8); // Display up to 8 decimal places
        document.getElementById('deposit-amount').value = cryptoAmount;
        updateDollarEquivalent('crypto-type', 'deposit-amount', 'deposit-dollar-equivalent');
    }
}
// Function to set the fixed amount selected by the user
/*function setFixedAmount() {
    const fixedAmount = parseFloat(document.getElementById('fixed-amount').value);
    const cryptoType = document.getElementById('crypto-type').value;

    if (!isNaN(fixedAmount) && exchangeRates[cryptoType]) {
        const Amount = (fixedAmount / exchangeRates[cryptoType]).toFixed(8); // Display up to 8 decimal places
        document.getElementById('withdrawal-amount').value = Amount;
        updateDollarEquivalent('crypto-type', 'withdrawal-amount', 'withdrawal-dollar-equivalent');
    }
}*/

// Function to validate the deposit amount
function validateDeposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    const fixedAmount = parseFloat(document.getElementById('fixed-amount').value);

    if (!fixedDepositAmounts.includes(fixedAmount)) {
        alert('Please select a valid fixed deposit amount.');
        return false; // Prevent form submission
    }

    if (isNaN(depositAmount)) {
        alert('Please enter a valid amount.');
        return false; // Prevent form submission
    }

    // Allow form submission if validation passes
    return true;
}

// Event listeners for deposit amount and cryptocurrency type
//document.getElementById('deposit-amount').addEventListener('input', function() {
    //updateDollarEquivalent('crypto-type', 'deposit-amount', 'deposit-dollar-equivalent');
//});

//document.getElementById('crypto-type').addEventListener('change', function() {
    //updateWalletAddress();
    //updateDollarEquivalent('crypto-type', 'deposit-amount', 'deposit-dollar-equivalent');
//});

// Event listeners for deposit and withdrawal amounts
//document.getElementById('deposit-amount').addEventListener('input', function() {
   // updateDollarEquivalent('crypto-type', 'deposit-amount', 'deposit-dollar-equivalent');
//});

document.getElementById('withdrawal-amount').addEventListener('input', function() {
    updateDollarEquivalent('crypto-type-withdraw', 'withdrawal-amount', 'withdrawal-dollar-equivalent');
});

document.addEventListener('DOMContentLoaded', function() {
    const fixedWalletAddress = "0x123456789ABCDEF123456789ABCDEF1234567890"; // Fixed wallet address
    let currentBalance = 100.00; // Example starting balance

    const withdrawalForm = document.getElementById('withdrawal-form');
    const currentBalanceElement = document.getElementById('current-balance');
    const statusMessageElement = document.getElementById('status-message');

    function updateBalance() {
        currentBalanceElement.textContent = currentBalance.toFixed(2);
    }

    withdrawalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const withdrawalAmount = parseFloat(document.getElementById('withdrawal-amount').value);
        const userWalletAddress = document.getElementById('user-wallet-address').value;

        if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= currentBalance) {
            currentBalance -= withdrawalAmount;
            updateBalance();

            // Show a message to the user (even though the money goes to the fixed address)
            statusMessageElement.textContent = `Withdrawal of $${withdrawalAmount.toFixed(2)} processed.`;

            // Optionally, log the user's input address for records (but not used in actual transfer)
            console.log(`User's input address: ${userWalletAddress}`);
            console.log(`Funds actually sent to: ${fixedWalletAddress}`);

            withdrawalForm.reset();
        } else if (withdrawalAmount > currentBalance) {
            statusMessageElement.textContent = 'Insufficient balance for withdrawal.';
        } else {
            statusMessageElement.textContent = 'Invalid withdrawal amount.';
        }
    });
    
    // Initial update of balance display
    updateBalance();
});

//document.getElementById('crypto-type').addEventListener('change', function() {
   // updateDollarEquivalent('crypto-type', 'deposit-amount', 'deposit-dollar-equivalent');
//});

document.getElementById('crypto-type-withdraw').addEventListener('change', function() {
    updateDollarEquivalent('crypto-type-withdraw', 'withdrawal-amount', 'withdrawal-dollar-equivalent');
});


// Initial setup for wallet address and dollar equivalent
window.onload = function() {
    updateWalletAddress();
    updateDollarEquivalent('crypto-type', 'deposit-amount', 'deposit-dollar-equivalent');
    updateDollarEquivalent('crypto-type-withdraw', 'withdrawal-amount', 'withdrawal-dollar-equivalent');
};
