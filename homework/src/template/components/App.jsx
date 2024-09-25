import {Header} from './header/Header.jsx';
import {Footer} from './footer/Footer.jsx';
import {Index} from './restorane/Restorane';
import {Names} from './names/Names.jsx';
export const App=()=>{
    return(
        <>
            <Header/>
            <div className="restorane-names">
                <Names/>
            </div>
            <Index/>
            <Footer/>
        </>
    )
}