<script>
    var mySwiper = new Swiper('.swiper-container', {
        // Swiper configuration options
        // ...
    });

    // Handle Validate.js validation for Credit Card and CVV
    var paymentForm = document.getElementById('payment-info-form');
    paymentForm.addEventListener('submit', function (e) {
        var validation = new Validate(paymentForm, {
            fields: {
                'credit-card': {
                    rules: 'required|numeric|length:10',
                    messages: {
                        required: 'Credit Card Number is required',
                        numeric: 'Enter a valid numeric value',
                        length: 'Credit Card Number must be 10 digits'
                    }
                },
                'cvv': {
                    rules: 'required|numeric|length:3',
                    messages: {
                        required: 'CVV is required',
                        numeric: 'Enter a valid numeric value',
                        length: 'CVV must be 3 digits'
                    }
                }
            }
        });

        if (!validation.passes()) {
            e.preventDefault();
            
            alert(validation.errors);
        }
    });
</script>
