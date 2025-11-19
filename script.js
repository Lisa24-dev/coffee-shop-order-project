const orders = [];

const submitOrder = () => {
  const nameInput = document.getElementById('customerName').value.trim();
  const drinkInput =
    document.getElementById('coffeeOrder').value.trim() ?? 'Americano';
  const messageEl = document.getElementById('orderMessage');

  if (!nameInput) {
    messageEl.textContent = 'Please enter a customer name.';
    return;
  }

  const newOrder = {
    name: nameInput,
    drink: drinkInput || 'Americano',
    time: new Date().toLocaleTimeString(),
  };

  orders.push(newOrder);
  messageEl.textContent = `Thanks, ${newOrder.name}! Your ${newOrder.drink} is being prepared.`;

  renderOrders();
};

const renderOrders = () => {
  const orderList = document.getElementById('orderList');
  orderList.innerHTML = '';

  const lastThree = orders.slice(-3);
  lastThree.forEach(({ name, drink, time }) => {
    const li = document.createElement('li');
    li.textContent = `${name} ordered ${drink} at ${time}`;
    orderList.appendChild(li);
  });
};
