
const header =  document.querySelector('.head')
console.log(header)

window.addEventListener('scroll', function (){
   
   console.log(header)
   let scrollY =window.pageYOffset;
        if(scrollY > 1) {
         header.classList.add('head_fixed');
        } else {
         header.classList.remove('head_fixed');
        }
      });

function ready() {
  console.log('DOM готов');
  const services =  document.querySelector('.s2__services')
  const price = [
    {
      procedure: 'Маникюр с покрытием ногтей гель-лаком',
      price: 1000,
      time: 90,
    },
    {
      procedure: 'Снятие гель-лака с ногтей на руках',
      price: 400,
      time:60,
    },
    {
      procedure: 'Аппаратный маникюр',
      price: 500,
      time: 60,
    },
    {
      procedure: 'Ремонт ногтя',
      price: 150,
      time: 30,
    },
    {
      procedure: 'Наращивание ногтей гелем',
      price: 2200,
      time: 90,
    },
    {
      procedure: 'Стразы на ногтях',
      price: 10,
      time: 20,
    },
    {
      procedure: 'Снятие наращенных ногтей',
      price: 500,
      time: 60,
    },
    {
      procedure: 'Коррекция наращенных ногтей',
      price: 1800,
      time: 90,
    },
    {
      procedure: 'Классический маникюр',
      price: 500,
      time: 60,
    },
    {
      procedure: 'Маникюр с покрытием ногтей лаком',
      price: 600,
      time: 60,
    },
    {
      procedure: 'Ручная роспись ногтей',
      price: 1200,
      time: 60,
    }
  ]
  price.forEach(element => {
    let item = `
      <div class="s2__services-item">
        <div class="s2__services-item-block">
          <p>${element.procedure}</p>
        </div>
        <div class="s2__services-item-panel">
          <p>${element.price}р</p>
          <p>длительность: ${element.time}мин </p>
        </div>
      </div>
    `
    services.insertAdjacentHTML("beforeend", item);
  });
 

  
   
}

document.addEventListener("DOMContentLoaded", ready);
