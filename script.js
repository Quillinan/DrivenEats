//Variaveis mutaveis para funções
let dishName = '';
let drinkName = '';
let dessertName = '';
let dishPrice = '';
let drinkPrice = '';
let dessertPrice = '';

//Função Selecionar e Desmarcar comida
function selectDish(dish) {
  nameDish = dish.innerHTML;
  const btnSelect = document.querySelector('.dish .select');
  if (btnSelect !== null) {
    btnSelect.classList.remove('select');
  }

  const selected = document.querySelector(dish);
  selected.classList.add('select');
  dishName = dish;
  verifyOrder();
  dishPrice = document.querySelector('.dish .divCard h4');
  dhP = dishPrice.innerHTML.replace('R$', '').replace(',', '.');
}

//Função Selecionar e Desmarcar bebida
function selectDrink(drink) {
  nameDrink = drink.innerHTML;
  const btnSelect = document.querySelector('.drink .select');
  if (btnSelect !== null) {
    btnSelect.classList.remove('select');
  }

  const selected = document.querySelector(drink);
  selected.classList.add('select');
  drinkName = drink;
  verifyOrder();
  drinkPrice = document.querySelector('.drink .divCard h4');
  dkP = drinkPrice.innerHTML.replace('R$', '').replace(',', '.');
}

//Função Selecionar e Desmarcar sobremesa
function selectDessert(dessert) {
  console.log(dessert);
  nameDessert = dessert.innerHTML;
  const btnSelect = document.querySelector('.dessert .select');
  if (btnSelect !== null) {
    btnSelect.classList.remove('select');
  }

  const selected = document.querySelector(dessert);
  selected.classList.add('select');
  dessertName = dessert;
  verifyOrder();
  dessertPrice = document.querySelector('.dessert .divCard h4');
  dtP = dessertPrice.innerHTML.replace('R$', '').replace(',', '.');
  console.log(dtP);
}

//Função verificar pedido completo
function verifyOrder() {
  if (dishName !== '' && drinkName !== '' && dessertName !== '') {
    const button = document.querySelector('.close');
    const buttonDisable = document.querySelector('.ordering');
    buttonDisable.classList.add('disable');
    button.classList.remove('disable');
  }
}

//Função encerrar pedido e chamar api
function closeOrder() {
  const total = (Number(dhP) + Number(dkP) + Number(dtP)).toFixed(2);
  const envDish = document.querySelector('.dish .divCard h3');
  const envDrink = document.querySelector('.drink .divCard h3');
  const envDessert = document.querySelector('.dessert .divCard h3');
  let text =
    `Olá, gostaria de fazer o pedido:\n` +
    `- Prato: ${envDish.innerHTML}\n` +
    `- Bebida: ${envDrink.innerHTML}\n` +
    `- Sobremesa: ${envDessert.innerHTML}\n` +
    `Total: R$ ${total}`;
  +window.open(`https://wa.me/+5521987940809?text=${text}`);
}
