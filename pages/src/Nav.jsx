import { useState } from 'react';

function Nav({ setSpecies }) {
    const [title, setTitle] = useState('Short');

    function navTo(target) {
        setSpecies(target);
    }

    return (
        <div className="nav">
            <button className={`title-content ${title === 'Short' ? 'active' : ''}`} 
            onClick={(e) => {
                e.preventDefault();
                navTo('Short'); setTitle('Short')}}>
                Short
            </button>
            <button className={`title-content ${title === 'Medium' ? 'active' : ''}`} 
            onClick={(e) => {
                e.preventDefault();
                navTo('Medium'); setTitle('Medium')}}>
                Medium
            </button>
            <button className={`title-content ${title === "Long" ? 'active' : ''}`} 
            onClick={(e) => {
                e.preventDefault();
                navTo('Long'); setTitle('Long')}}>
                Long
            </button>
        </div>
    );
}

export default Nav;
