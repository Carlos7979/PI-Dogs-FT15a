import './index.css';
import Image from '../Image';
import Temperaments from '../Temperaments';
import Name from '../Name';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDog } from '../../../logic/actions';

function Dog({dog}) {
    const { id, name, urlImage, temperament } = dog;
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = event => {
        const target = event.target;
        const splitted = target.id.split('-');
        // if (splitted.length === 2) console.log(splitted[1]);
        splitted.shift();
        console.log(splitted.join('-'));
        console.log(id);
        history.push(`/detail`);
        dispatch(getDog(id));
    }
    return (
        <div id={`dog-${id}`} className="dog" onClick={handleClick} >
            <Name name={name} id={id}/>
            <Image src={urlImage} alt={name} id={id}/>
            {name !== 'Not founded dog' && <Temperaments temperaments={temperament} id={id}/>}
        </div>
    )
}

export default Dog;