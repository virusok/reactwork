import { createRoot } from "react-dom/client";
import { restaurants } from '../database/mock';
import './css/style.css'; 
const root = document.getElementById("root");

createRoot(root).render(
  <div className='restorane-list'>
    {
      restaurants.map((restorane, key) => {
				let {
					name: restoraneName, 
					menu: restoraneMenu,
					reviews: restoraneReviews,
				} = restorane;
        return ( 
        <div className='restorane-item' key={key}>
          <div className='restorane-name'>{restoraneName}</div>
          <h3>Меню ресторана</h3>
          <ul className='restorane-catalog'>
						{restoraneMenu.map((menu, key) => <li key={key}>{menu.name}</li>)}
          </ul>
          <h3>Отзывы</h3>
          <ul className='restorane-reviews'>
						{restoraneReviews.map((reviews, key) => <li key={key}>{reviews.text}</li>)}
          </ul>
        </div>
        )
      })
    }
  </div>
);
