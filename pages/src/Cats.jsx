import './Cats.css';
import cards from './cards';

function Cats({ setPage }) {
    const list = cards.map(item => {
        return (
            <div className="card" key={item.name}>
                <h3 className="card__title">{item.name}</h3>
                <img className="card__pic" alt={item.name} src={item.imagePath} />
                <p className="card__text">{item.text} </p>
                <a href="/poop.html" onClick={(e) => {
                    setPage('About');
                    e.preventDefault();
                }}>Go To About</a>
            </div>
        );
    });
    return (
        <main id="main">
            <div className={`cards`}>
                {list}
            </div>
        </main>
    )
}

export default Cats;