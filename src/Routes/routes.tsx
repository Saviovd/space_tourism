import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Destination } from '../Pages/Destination/Destination';
import { Crew } from '../Pages/Crew/Crew';
import { Technology } from '../Pages/Technology/Technology';

export const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/Destination' element={<Destination />} />
                <Route path='/Crew' element={<Crew />} />
                <Route path='/Technology' element={<Technology />} />
            </ReactRoutes>
        </Router>
    )
}