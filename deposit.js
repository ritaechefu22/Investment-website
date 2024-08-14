document.addEventListener('DOMContentLoaded', function() {
    const cryptoAddresses = {
        'ETH': '0xf253f44c1548022d33eef8934af3fb8a66138693',
        'BTC': '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        'USDT': 'LZ3Sn1kqfSVvmbi2Pf7Ly2GSbpYUkJ3VGy'
    };

    const cryptoTypeSelect = document.getElementById('crypto-type');
    const cryptoAddressInput = document.getElementById('crypto-address');
    
    // Set the initial address
    cryptoAddressInput.value = cryptoAddresses[cryptoTypeSelect.value];

    // Update the address when the cryptocurrency type changes
    cryptoTypeSelect.addEventListener('change', function() {
        cryptoAddressInput.value = cryptoAddresses[cryptoTypeSelect.value];
    });

    document.getElementById('deposit').addEventListener('click', function() {
    deposit();
    });
    document.getElementById('deposit-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get the selected cryptocurrency type, deposit address, and amount
        const cryptoType = cryptoTypeSelect.value;
        const address = cryptoAddressInput.value;
        const amount = document.getElementById('amount').value;

        // Display confirmation message
        document.getElementById('confirmation-message').classList.remove('hidden');
        document.getElementById('confirm-crypto').textContent = cryptoType;
        document.getElementById('confirm-address').textContent = address;
        // document.getElementById('confirm-amount').textContent = amount;
        
        // Clear the form
        document.getElementById('deposit-form').reset();
        
        // Reset the address to the default for the selected cryptocurrency
        cryptoAddressInput.value = cryptoAddresses[cryptoType];
    });

    //initialize a variable to hold the total balance
    let totalBalance = 0;

    //function to handle deposit button click
    function deposit() {
        //get the deposit amount from the input field
        let depositAmount = parseFloat(document.getElementById('amount').value);

        //check if the input is a valid number
        if (!isNaN(depositAmount)) {
            // Add the deposit amount to the total balance
            totalBalance += depositAmount;
        }

        //update the display of the total balance
        document.getElementById('confirm-amount').textContent = totalBalance;
    }
});

