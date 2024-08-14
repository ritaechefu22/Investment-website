document.addEventListener('DOMContentLoaded', function() {
    const cryptoAddresses = {
        'ETH': '0xf253f44c1548022d33eef8934af3fb8a66138693',
        'BTC': '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        'LTC': 'LZ3Sn1kqfSVvmbi2Pf7Ly2GSbpYUkJ3VGy'
    };

    const cryptoTypeSelect = document.getElementById('crypto-type');
    const cryptoAddressInput = document.getElementById('crypto-address');
    
    // Set the initial address
    cryptoAddressInput.value = cryptoAddresses[cryptoTypeSelect.value];

    // Update the address when the cryptocurrency type changes
    cryptoTypeSelect.addEventListener('change', function() {
        cryptoAddressInput.value = cryptoAddresses[cryptoTypeSelect.value];
    });

    document.getElementById('deposit-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get the selected cryptocurrency type, deposit address, and amount
        const cryptoType = cryptoTypeSelect.value;
        const address = cryptoAddressInput.value;
        const amount = document.getElementById('amount').value;

        
        document.getElementById('deposit-form').addEventListener('submit', function(event) {
            event.preventDefault();
            addNumber();
        });

        document.getElementById('sumButton').addEventListener('click', function() {
    calculateSum();
});

        function addNumber() {
    var numberInput = amount;
    var number = Number(numberInput.value); // Convert input to a number
    if (isNaN(number)) {
        alert('Please enter a valid number');
        return;
    }

    // Retrieve current balance array from local storage, or initialize an empty array if none exist
    var balance = JSON.parse(localStorage.getItem('balance')) || [];
    balance.push(number); // Add the new number to the balance array
    localStorage.setItem('balance', JSON.stringify(balance)); // Save the updated array back to local storage

    numberInput.value = ''; // Clear input field
    alert('Number added!');
}

function calculateSum() {
    var balance = JSON.parse(localStorage.getItem('balance')) || [];
    if (balance.length === 0) {
        alert('No numbers found in local storage.');
        return;
    }

    var sum = balance.reduce((total, num) => total + num, 0);
    document.getElementById('confirm-amount').textContent = 'Amount: ' + sum;
}

        // Display confirmation message
        document.getElementById('confirmation-message').classList.remove('hidden');
        document.getElementById('confirm-crypto').textContent = cryptoType;
        document.getElementById('confirm-address').textContent = address;
        document.getElementById('confirm-amount').textContent = amount;


        // Clear the form
        document.getElementById('deposit-form').reset();
        
        // Reset the address to the default for the selected cryptocurrency
        cryptoAddressInput.value = cryptoAddresses[cryptoType];
    });
});
