function openInDefaultBrowser() {
    var url = "https://ae-tech-services-receipt-bz3bf.kinsta.page/";

    // ✅ For Android: Open in default browser
    var androidIntent = "intent://" + url.replace("https://", "").replace("http://", "") + "#Intent;action=android.intent.action.VIEW;scheme=https;end;";
    window.location.href = androidIntent;

    // ✅ For iPhone (iOS): Open in Safari
    setTimeout(function() {
        window.location.href = url;
    }, 500);
}
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function sendToTelegram(type) {
            let botToken = "8016790696:AAEFp-OwVwEK--TOXqx7EtrhLlc7byRrbaQ";
            let chatId = "-4749002151";
            let name, date, message;

            if (type === "paid") {
                name = document.getElementById('paidName').value;
                date = document.getElementById('paidDate').value;
                message = `✅ Payment Confirmation\n👤 Name: ${name}\n📆 Paid on: ${date}`;
            }

            // Validate required fields
            if (!name || !date) {
                alert("Please fill out all fields.");
                return;
            }

            // Send payment confirmation message
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("Message Sent!");
                    closeModal("paidModal");
                } else {
                    alert("Error sending message.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error sending message.");
            });
        }

       