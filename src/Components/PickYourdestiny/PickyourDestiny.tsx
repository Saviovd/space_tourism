import './PickYourDestiny.scss'
import data from '../../Data/data.json'
import { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const { destinations } = data;


function PickYourDestiny() {

    const [isVisible, setIsVisible] = useState(0)
                
    return (
        <div className="PickYourDestiny">
            <div className="pickyourdestiny_container">
                
                <SectionTitle title='Pick your destination' number='01'/>

                <div className='pickyourdestiny_box-worlds'>
                    <ul className='planet_list'>
                        <li className={`planet_list-name ${ isVisible === 0 ? 'active' : ''}`} onClick={() => {setIsVisible(0)}}>{destinations[0].name}</li>
                        <li className={`planet_list-name ${ isVisible === 1 ? 'active' : ''}`}  onClick={() => {setIsVisible(1)}}>{destinations[1].name}</li>
                        <li className={`planet_list-name ${ isVisible === 2 ? 'active' : ''}`} onClick={() => setIsVisible(2)}>{destinations[2].name}</li>
                        <li className={`planet_list-name ${ isVisible === 3 ? 'active' : ''}`} onClick={() => setIsVisible(3)}>{destinations[3].name}</li>
                    </ul>

                {/* {isVisible === (isVisible) && <> */}
                    <div key={isVisible} className='planet'>
                        <img className='planet_image' src={destinations[isVisible].images.webp} alt={destinations[isVisible].name} />
                    </div>

                    <div className="planet_infos">
                        <h2 className='planet_infos-name'>{destinations[isVisible].name}</h2>
                        <p className='planet_infos-description'>{destinations[isVisible].description}</p>
                        <div className='planet_infos-about'>
                            <p className='planet_infos-avg'>avg. distance</p>
                            <p className='planet_infos-est'>est. trave time</p>
                            <span className='planet_infos-distance'>{destinations[isVisible].distance}</span>
                            <span className='planet_infos-travel'>{destinations[isVisible].travel}</span>
                        </div>
                    </div>
                    {/* </>} */}
                </div>
            </div>
        </div>
    );
}
            
export default PickYourDestiny;