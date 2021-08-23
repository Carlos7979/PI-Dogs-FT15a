import './index.css';
import { useSelector } from 'react-redux';
import Name from '../../../components/Name';
import Image from '../../../components/Image';
import Temperaments from '../../../components/Temperaments';
import Height from '../../../components/Height';
import Weight from '../../../components/Weight';
import LifeSpan from '../../../components/LifeSpan';

function Detail() {
    const dog = useSelector(state => state.dog);
    const { id, name, urlImage, temperament, height, weight, lifeSpan } = dog;
    return (
        <div className="dogs">
        {dog.name && <div className="dogDetail">
            <Name name={name}/>
            <Image src={urlImage} alt={name} isDetail={true}/>
            <Temperaments temperaments={temperament} isDetail={true}/>
            <Height height={height}/>
            <Weight weight={weight}/>
            <LifeSpan lifeSpan={lifeSpan}/>
        </div>}
        </div>
    )
}

export default Detail