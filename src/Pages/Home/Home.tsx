import Header from '../../Components/Header/Header';
import './Home.scss'

export function Home() {
    return (
        <>
        <Header/>
        <div className="Home">
            <div className='home_container'>
                <div className='call_to_action'>
                    <h4 className='call_to_action-title'>So, you want to travel to</h4> 
                    <h2 className='call_to_action-emphasis'>Space</h2>
                    <p className='call_to_action-paragraph'>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className='button_explore'>
                    <a className='button_explore-anchor' href='/Destination'>Explore</a>
                </div>
            </div>
        </div>
        </>
    );
}
    