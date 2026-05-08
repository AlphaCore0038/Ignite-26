

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    const regNameEl = document.getElementById('r-name');
    if (regNameEl && type !== 'food') {
        const registrationData = JSON.parse(localStorage.getItem('ignite_registration'));
        const receiptContent = document.getElementById('receipt-content');

        if (registrationData) {
            regNameEl.textContent = registrationData.name;
            const emailEl = document.getElementById('r-email');
            const campusEl = document.getElementById('r-campus');
            const phoneEl = document.getElementById('r-phone');
            const eventEl = document.getElementById('r-event');
            const dateEl = document.getElementById('r-date');
            const idEl = document.getElementById('r-id');
            const qrImg = document.getElementById('r-qr');

            if (emailEl) emailEl.textContent = registrationData.email;
            if (campusEl) campusEl.textContent = registrationData.campus;
            if (phoneEl) phoneEl.textContent = registrationData.phone;
            if (eventEl) eventEl.textContent = registrationData.event || 'All Events';
            
            if (dateEl) {
                dateEl.textContent = new Date().toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            }

            
            const staticId = 'IGN-26-CONFIRMED';
            if (idEl) idEl.textContent = staticId;

            
            if (qrImg) {
                qrImg.src = `image/qr_code.png`;
            }
        } else if (receiptContent) {
            
            receiptContent.innerHTML = `
              <div style="text-align:center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff4d00; margin-bottom: 20px;"></i>
                <h3>No registration data found</h3>
                <p style="color: rgba(255,255,255,0.6); margin-bottom: 30px;">Please complete the registration form first.</p>
                <a href="register.html" class="btn-print" style="text-decoration:none; display:inline-flex;">Go to Register</a>
              </div>
            `;
        }
    }

    
    const foodTotalEl = document.getElementById('o-total');
    if (foodTotalEl && type === 'food') {
        const orderData = JSON.parse(localStorage.getItem('ignite_food_order'));
        const receiptContent = document.getElementById('receipt-content');

        if (orderData && orderData.items && orderData.items.length > 0) {
            const itemsContainer = document.getElementById('o-items');
            if (itemsContainer) {
                let html = '';
                orderData.items.forEach(item => {
                    html += `
                      <div class="item-row">
                        <span class="item-name">${item.emoji} ${item.name}</span>
                        <span class="item-price">₹${item.price}</span>
                      </div>
                    `;
                });
                itemsContainer.innerHTML = html;
            }
            foodTotalEl.textContent = `₹${orderData.total}`;

            const idEl = document.getElementById('o-id');
            const qrImg = document.getElementById('o-qr');
            const staticId = 'FOOD-26-CONFIRMED';
            
            if (idEl) idEl.textContent = staticId;
            if (qrImg) {
                qrImg.src = `image/qr_code.png`;
            }
        } else if (receiptContent) {
            receiptContent.innerHTML = `
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
