import { createRoot } from "react-dom/client";
import { restaurants } from '../database/mock';
import './css/style.css'; 
const root = document.getElementById("root");

createRoot(root).render(
  <div className='restorane-list'>
  {
    restaurants.map(({name, menu, reviews}, index) => {
      return ( 
      <div className='restorane-item' key={index}>
        <div className='restorane-name'>{name}</div>
        <h3>Меню ресторана</h3>
        <ul className='restorane-catalog'>
          {menu.map(menu => <li>{menu.name}</li>)}
        </ul>
        <h3>Отзывы</h3>
        <ul className='restorane-reviews'>
          {reviews.map(reviews => <li>{reviews.text}</li>)}
        </ul>
      </div>
      )
    })
  }
  </div>
);
