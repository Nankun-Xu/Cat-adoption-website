
import Home from './Home';
import About from './About';
import Cats from './Cats';
import Subscribe from './Subscribe';

import Contact from './Contact';
import Policy from './Policy';
import Terms from './Terms';

function Main({page,setPage} ) {

    return (
        <main>
            {(page === 'Home') && <Home/> }
            {(page === 'About') && <About/>}
            {(page === 'Cats') && <Cats setPage={ setPage }/>}
            {(page === 'Subscribe') && <Subscribe/>}

            {(page === 'Contact') && <Contact setPage={ setPage }/>}
            {(page === 'Policy') && <Policy setPage={ setPage }/>}
            {(page === 'Terms') && <Terms setPage={ setPage }/>}
        </main>
    );
}
export default Main;