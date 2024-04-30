document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[name="name"]');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const addressTextarea = document.querySelector('textarea[name="address"]');
    const emailInput = document.querySelector('input[name="email"]');
    const postalCodeInput = document.querySelector('input[name="postal_code"]');
    const cardNumberInput = document.querySelector('input[name="card_number"]');
    const expDateInput = document.querySelector('input[name="exp_date"]');
    const cvvInput = document.querySelector('input[name="cvv"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate name
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        // Validate gender
        let selectedGender = false;
        genderInputs.forEach(function(input) {
            if (input.checked) {
                selectedGender = true;
            }
        });
        if (!selectedGender) {
            alert('Please select your gender.');
            return;
        }

        // Validate address
        if (addressTextarea.value.trim() === '') {
            alert('Please enter your address.');
            return;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        // Validate postal code
        if (postalCodeInput.value.trim() === '') {
            alert('Please enter your postal code.');
            return;
        }

        // Validate card number
        if (cardNumberInput.value.trim() === '') {
            alert('Please enter your card number.');
            return;
        }

        // Validate expiration date
        if (expDateInput.value.trim() === '') {
            alert('Please enter the expiration date of your card.');
            return;
        }

        // Validate CVV
        if (cvvInput.value.trim() === '') {
            alert('Please enter your CVV.');
            return;
        }

        // If all validations pass, submit the form
        showPaymentSuccessMessage();
    });

    function showPaymentSuccessMessage() {
        form.reset();
        alert('Paiement réussi!');
    }  
});
