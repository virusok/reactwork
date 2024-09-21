import { createRoot } from "react-dom/client";
import { restaurants } from '../database/mock';
import './css/style.css'; 
const root = document.getElementById("root");

// ---Разбиваю данные на несколько более удобных массивов---
let {
  name: rName,
  menu: rMenu,
  reviews: rReviews
} = restaurants;

rName = restaurants.map((el) => { // Имя ресторана
  return el.name != null && el.name != '' ? el.name : 'Имя ресторана не указано';
});
rMenu = restaurants.map((el) => { // Меню ресторана
  return el.menu != null && el.menu != '' ? el.menu : 'Меню ресторана не создано';
});
rReviews = restaurants.map((el) => { // Отзывы ресторана
  return el.reviews != null && el.reviews != '' ? el.reviews : 'Отзывов ещё нет';
});
//console.log(rName); console.log(rMenu); console.log(rReviews);

createRoot(root).render(
  <div className='restorane-list'>
    {
      rName.map((el, key) => { 
        return ( 
        <div className='restorane-item' key={key}>
          <div className='restorane-name'>{el}</div>
          <h3>Меню ресторана</h3>
          <ul className='restorane-catalog'>
            {rMenu.map((el,key) => {return (<li key={key}>{el.map(item => item.name)}</li>)})}
          </ul>
          <h3>Отзывы</h3>
          <ul className='restorane-reviews'>
            {rReviews.map((el,key) => {return (<li key={key}>{el.map(item => item.text)}</li>)})}
          </ul>
        </div>
        )
      })
    }
  </div>
);
