document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const totalAmountSpan = document.getElementById("totalAmount");

    radioButtons.forEach(button => {
        button.addEventListener("change", function() {
            const selectedValue = this.value;
            let initialAmount = 0;
            let discount = 0;

            if (selectedValue === "1") {
                initialAmount = 195;
                discount = 0.5;
            } else if (selectedValue === "2") {
                initialAmount = 345;
                discount = 0.4;
            } else if (selectedValue === "3") {
                initialAmount = 528;
                discount = 0.6;
            }

            const discountedAmount = initialAmount * (1 - discount);
            totalAmountSpan.textContent = discountedAmount.toFixed(2); // Displaying with two decimal places
        });
    });
});

#SKIMBOX_Assignment_Submissions
