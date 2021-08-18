import './index.css';

function Name({id, name}) {
    return (
        <div id={`name-${id}`} className="name">
            {name}
        </div>
    )
}

export default Name;