import './SpaceTechnology.scss'
import data from '../../Data/data.json'
import { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const { technology } = data;

function SpaceTechnology() {

    const [isVisible, setIsVisible] = useState(0)

    return (
        <div className="SpaceTechnology">
            <div className="spacetechnology_container">
                <SectionTitle style={{marginLeft: "40px"}} title='space launch 101' number='03'/>
                <div className='spacetechnology_box'>

                    <ul className='technology_list'>
                        <li className={`technology_list-number ${ isVisible === 0 ? 'active' : ''}`} onClick={() => setIsVisible(0)}>{technology[0].key}</li>
                        <li className={`technology_list-number ${ isVisible === 1 ? 'active' : ''}`} onClick={() => setIsVisible(1)}>{technology[1].key}</li>
                        <li className={`technology_list-number ${ isVisible === 2 ? 'active' : ''}`} onClick={() => setIsVisible(2)}>{technology[2].key}</li>
                    </ul>

                    <div className="technology">
                        <picture>
                            <source className='technology_image' srcSet={technology[isVisible].images.portrait}  media="(min-width: 1201px)"/>
                            <source className='technology_image' srcSet={technology[isVisible].images.landscape}  media="(max-width: 1200px)"/>
                            <img className='technology_image' src={technology[isVisible].images.portrait} alt="Technology Potograph" />
                        </picture>
                    </div>

                    <div className='technology_infos'>
                        <h3 className='technology_infos-cta'>the terminology...</h3>
                        <h2 className='technology_infos-name'>{technology[isVisible].name}</h2>
                        <p className='technology_infos-description'>{technology[isVisible].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpaceTechnology;
