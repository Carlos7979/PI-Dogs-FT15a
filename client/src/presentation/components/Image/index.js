import './index.css'

function Image(props) {
    const { src } = props;
    return (
        <div>
            <img src={src}/>
        </div>
    )
}

export default Image;