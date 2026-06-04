

document.addEventListener('DOMContentLoaded', () => {
    const url = new URLSearchParams(window.location.search);
    const t = url.get('type');

    const nameText = document.getElementById('r-name');
    if (nameText && t !== 'food') {
        const data = JSON.parse(localStorage.getItem('ignite_registration'));
        const box = document.getElementById('receipt-content');

        if (data) {
            nameText.textContent = data.name;
            const emailText = document.getElementById('r-email');
            const campusText = document.getElementById('r-campus');
            const phoneText = document.getElementById('r-phone');
            const eventText = document.getElementById('r-event');
            const dateText = document.getElementById('r-date');
            const idText = document.getElementById('r-id');
            const qrPic = document.getElementById('r-qr');

            if (emailText) emailText.textContent = data.email;
            if (campusText) campusText.textContent = data.campus;
            if (phoneText) phoneText.textContent = data.phone;
            if (eventText) eventText.textContent = data.event || 'All Events';
            
            if (dateText) {
                dateText.textContent = new Date().toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            }

            
            const staticId = 'IGN-26-CONFIRMED';
            if (idText) idText.textContent = staticId;

            
            if (qrPic) {
                qrPic.src = `image/qr_code.png`;
            }
        } else if (box) {
            
            box.innerHTML = `
              <div style="text-align:center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff4d00; margin-bottom: 20px;"></i>
                <h3>No registration data found</h3>
                <p style="color: rgba(255,255,255,0.6); margin-bottom: 30px;">Please complete the registration form first.</p>
                <a href="register.html" class="btn-print" style="text-decoration:none; display:inline-flex;">Go to Register</a>
              </div>
            `;
        }
    }

    
    const totalText = document.getElementById('o-total');
    if (totalText && t === 'food') {
        const data = JSON.parse(localStorage.getItem('ignite_food_order'));
        const box = document.getElementById('receipt-content');

        if (data && data.items && data.items.length > 0) {
            const itemsBox = document.getElementById('o-items');
            if (itemsBox) {
                let html = '';
                data.items.forEach(item => {
                    html += `
                      <div class="item-row">
                        <span class="item-name">${item.emoji} ${item.name}</span>
                        <span class="item-price">₹${item.price}</span>
                      </div>
                    `;
                });
                itemsBox.innerHTML = html;
            }
            totalText.textContent = `₹${data.total}`;

            const idText = document.getElementById('o-id');
            const qrPic = document.getElementById('o-qr');
            const staticId = 'FOOD-26-CONFIRMED';
            
            if (idText) idText.textContent = staticId;
            if (qrPic) {
                qrPic.src = `image/qr_code.png`;
            }
        } else if (box) {
            box.innerHTML = `
              <div style="text-align:center; padding: 40px;">
                <i class="fas fa-utensils" style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 20px;"></i>
                <h3>Your order is empty</h3>
                <p style="color: var(--text-muted); margin-bottom: 30px;">Head back to the food stalls to grab some grub!</p>
                <a href="food-stalls.html" class="btn-print" style="text-decoration:none; display:inline-flex; background: var(--accent-cyan);">Visit Food Stalls</a>
              </div>
            `;
        }
    }
});
