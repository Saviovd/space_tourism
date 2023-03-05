import './MeetYourCrew.scss'
import data from '../../Data/data.json'
import { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const { crew } = data;


function MeetYourcrew() {

    const [isVisible, setIsVisible] = useState(0)

    return (
        <div className="MeetYourcrew">
            <div className="meetyourcrew_container">
                <SectionTitle title='Meet Your crew' number='02'/>
                <div className='meetyourcrew_box-people'>
                    <ul className='crew_list'>
                        <li className={`crew_list-point ${ isVisible === 0 ? 'active' : ''}`} onClick={() => setIsVisible(0)}></li>
                        <li className={`crew_list-point ${ isVisible === 1 ? 'active' : ''}`} onClick={() => setIsVisible(1)}></li>
                        <li className={`crew_list-point ${ isVisible === 2 ? 'active' : ''}`} onClick={() => setIsVisible(2)}></li>
                        <li className={`crew_list-point ${ isVisible === 3 ? 'active' : ''}`} onClick={() => setIsVisible(3)}></li>
                    </ul>

                    <div key={crew[isVisible].key} className="person">
                        <img className='person_image' src={crew[isVisible].images.png} alt="Crew Member" />
                    </div>

                    <div className='person_infos'>
                        <h3 className='person_infos-role'>{crew[isVisible].role}</h3>
                        <h2 className='person_infos-name'>{crew[isVisible].name}</h2>
                        <p className='person_infos-bio'>{crew[isVisible].bio}</p>
                    </div>
            </div>
        </div>
    </div>);
}

export default MeetYourcrew;
