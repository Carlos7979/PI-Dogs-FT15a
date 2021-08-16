import './index.css';
import Dog from '../Dog';
import { useSelector } from 'react-redux';

function Dogs() {
    const dogs = useSelector(state => state.dogs);
    return (
        <div className="dogs">
            {dogs.map((dog, index) => {
                return <Dog dog={dog} key={index}/>
            })}
        </div>
    )
}

export default Dogs;