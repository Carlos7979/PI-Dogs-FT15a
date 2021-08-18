import './index.css';
import Image from '../Image';
import Temperaments from '../Temperaments';
import Name from '../Name';

function Dog({dog}) {
    const { name, urlImage, temperament } = dog
    return (
        <div className="dog">
            <Name name={name}/>
            <Image src={urlImage} alt={name}/>
            {name !== 'Not founded dog' && <Temperaments temperaments={temperament}/>}
        </div>
    )
}

export default Dog;