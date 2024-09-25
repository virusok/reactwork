import {restaurants} from '/database/mock';
import {Menu} from '../menu/Menu';
import {Reviews} from '../reviews/Reviews';
export const Index=()=>{
    return(
        <div className='restorane-list'>
        {restaurants.map(({menu, reviews}, index) => {
            return (
            <div className='restorane-item' key={index} id={index}>
                <h3>Меню ресторана</h3>
                <ul className='restorane-catalog'>
                    {menu.length ? (
                        menu.map(menu => 
                            <Menu menuItem={menu.name} /> 
                        )
                    ): <li>{'У ресторана нет меню.'}</li>}
                </ul>
                <h3>Отзывы</h3>
                <ul className='restorane-reviews'>
                    
                    {reviews.length ? (
                        reviews.map(reviews => 
                            <Reviews reviewItem={reviews.text} />
                        )
                    ): <li>{'У ресторана нет отзывов.'}</li>}
                </ul>
            </div>
            ) 
        })}
        </div>
    )
}