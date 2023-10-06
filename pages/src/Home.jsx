import './Home.css';
function Home() {
    return (
        <main id="main">
            <div className="panels">
                <div className="panel" id="subjects">
                    <img className="panel__pic" id="panel1__pic" alt="subject" src="http://placekitten.com/200/200?image=11" />
                    <div className="content">
                        <h2 className="panel__title">Still looking?</h2>
                        <p className="panel__text">Be sure to check out our Home to Home website, where pets can find a loving new home without ever seeing the inside of a shelter.  </p>
                        <p className="panel__text">This service is free to use for both guardians and adopters, and gives animals needing a new home the best of both worlds:their current guardian can find the best fit, and their adopter can learn all about their personality and preferences first-hand.</p>
                        <p className="panel__text">Try to help them!</p>
                    </div>
                </div>

                <div className="panel" id="kings">
                    <img className="panel__pic" id="panel2__pic" alt="king" src="http://placekitten.com/200/200?image=1g" />
                    <div className="content">
                        <h2 className="panel__title">The Mouser Program</h2>
                        <p className="panel__text">The Mouser Program is an effort to reduce euthanasia of feral cats in local partner shelters.</p>
                        <p className="panel__text">We work with these shelters to transfer in feral cats to be adopted out as Mousers. </p>
                        <p className="panel__text">All Mouser Program candidates are deemed feral, unable to be returned to their colony, and considered unadoptable at their host shelter or rescue.</p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home;