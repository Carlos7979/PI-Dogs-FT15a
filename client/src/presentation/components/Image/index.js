import './index.css'

function Image(props) {
    const { src, alt } = props;
    return (
        <div>
            <img src={src} alt={alt}/>
        </div>
    )
}

export default Image;