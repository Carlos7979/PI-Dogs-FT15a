import './index.css'

function Image(props) {
    const { id, src, alt } = props;
    return (
        <div id={`imgage-${id}`}>
            <img id={`img-${id}`} src={src} alt={alt}/>
        </div>
    )
}

export default Image;