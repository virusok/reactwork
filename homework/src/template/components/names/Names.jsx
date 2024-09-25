import { restaurants } from '/database/mock';
export const Names=()=> {
    return (
        restaurants.map(({name}, index) => {
            return (
                <div className='restorane-name' key={index} data-num={index}>{name}</div>
            )
        })
    )
}
