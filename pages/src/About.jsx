import AccordionSection from './AccordionSection.jsx';

import { useState } from 'react';
import Short from './Short';
import Medium from './Medium';
import Nav from './Nav';
import Long from './Long';

import './About.css';

function About() {
    const [species, setSpecies] = useState('Short');
    return (
        <main id="main">
            <h2 className='about__title'>About</h2>
            <p>The KK Cat's cage-free environment provides previously homeless adult cats a place to wander and play. Given a chance for their authentic kitty natures to emerge, they can find wonderful forever homes, and leave the shelter behind.</p>
            <AccordionSection title="WHAT TO EXPECT">
                <p className="accordian__text">A visit to The KK Cat may range from active and playful to cozy and quiet. If cats are snoozing, simply relax and enjoy their calming presence. If the cats are awake, you are invited to socialize, play, and join in their fun. If there are fewer than ten cats in the room when you visit,
                    it's because some have been adopted — a happy event! We bring new cats in to The KK Cat on the days that we're closed to the public in order to give them a chance to adjust to their new surroundings.
                    Some guests come exclusively to spend time with cats, while others bring their laptops, books or sketchpads and spend their hour working. If you're looking to interact with cats, you'll find many toys and treats to interest some of our feline residents.
                    From time to time, the KK Cat hosts events such as Purr Yoga, craft workshops, and music nights. Tickets for those events will be made available when the event is scheduled.  </p>

            </AccordionSection>

            <AccordionSection title="INTERESTED IN ADOPTING?">
                <p className="accordian__text">Guests who are interested in adopting are encouraged to fill out an application prior to visiting the lounge.  Please click here for more information on the adoption process. </p>

            </AccordionSection>

            <AccordionSection title="ADOPTER RESERVATIONS">
                <p className="accordian__text">Potential adopters are encouraged to fill out an adoption application and schedule an adoption interview prior to booking a visit.
                    If you have already met with our adoption counselors and are ready to visit our cats on-site, you are welcome to reserve your spot using our reservation system. Please contact us for details.</p>

            </AccordionSection>
            <div>
                <p>The Dancing Cat would not be possible without our valued volunteers! Whether you're interested in helping out on site or contributing to our organization from home, we have many available positions that you can see below. Volunteers must be 18 years of age or older.
                    We endeavor to embody our values in all of the work we do as an organization. Read about our values here.
                    To contact us regarding volunteer opportunities, fill out our Volunteer Interest Form by clicking here or scrolling to the bottom of this page.</p>
            </div>
            <div className='cat__gallary'>
                <div className='cat__title'>
                    <h3>Browse Cats</h3>
                    <p>by hair length</p>
                </div>
                <Nav species={species} setSpecies={setSpecies} />
                {species === 'Short' && <Short />}
                {species === 'Medium' && <Medium />}
                {species === 'Long' && <Long />}
            </div>
        </main>
    )
}

export default About;