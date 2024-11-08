const unitPrice = 49.99;

        function calculateTotalPrice() {
            const quantity = document.getElementById('quantity').value;
            const totalPrice = (quantity * unitPrice).toFixed(2);
            document.getElementById('totalPrice').textContent = totalPrice;
        }

        function buyNow() {
            const quantity = document.getElementById('quantity').value;
            const totalPrice = (quantity * unitPrice).toFixed(2);
            alert(`You are purchasing ${quantity} item(s) with a total price of $${totalPrice}.\nThank you for your purchase!`);
        }