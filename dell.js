
let cart = [];

    function ajouterAuPanier(nom, prix, image) {
      const existingItem = cart.find(item => item.nom === nom);
      if (existingItem) {
        existingItem.quantite += 1;
      } else {
        cart.push({ nom, prix, image, quantite: 1 });
      }
      updateCartCount();
      showAlert();
      updateCartDisplay();
    }

    function showAlert() {
      const alert = document.getElementById('alert');
      alert.classList.add('active');
      setTimeout(() => {
        alert.classList.remove('active');
      }, 3000);
    }

    function updateCartCount() {
      const total = cart.reduce((sum, item) => sum + item.quantite, 0);
      document.getElementById('cartCount').textContent = total;
    }

    function toggleCart() {
      document.getElementById('cartPanel').classList.toggle('active');
    }

    function changerQuantite(nom, changement) {
      const item = cart.find(p => p.nom === nom);
      if (!item) return;

      item.quantite += changement;
      if (item.quantite <= 0) {
        cart = cart.filter(p => p.nom !== nom);
      }

      updateCartCount();
      updateCartDisplay();
    }

    function calculateTotal() {
      return cart.reduce((sum, item) => sum + item.prix * item.quantite, 0);
    }

    function updateCartDisplay() {
      const cartItemsContainer = document.getElementById('cartItems');
      const cartTotalElement = document.getElementById('cartTotal');
      cartItemsContainer.innerHTML = '';

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
        cartTotalElement.textContent = 'Total: 0$';
        return;
      }

      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.nom}">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.nom}</div>
            <div class="cart-item-price">${item.prix}$ x ${item.quantite}</div>
            <div class="quantity-control">
              <button class="quantity-btn" onclick="changerQuantite('${item.nom}', -1)">-</button>
              <input class="quantity-input" type="text" value="${item.quantite}" readonly>
              <button class="quantity-btn" onclick="changerQuantite('${item.nom}', 1)">+</button>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
      });

      cartTotalElement.textContent = 'Total: ' + calculateTotal() + '$';
    }















 
    
