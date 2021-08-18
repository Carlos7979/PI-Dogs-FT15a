import './index.css'

function Image(props) {
    const { id, src, alt, isDetail } = props;
    const imageClass = isDetail ? 'imageDetail' : 'img';
    return (
        <div id={`imgage-${id}`}>
            <img id={`img-${id}`} src={src} alt={alt} className={imageClass}/>
        </div>
    )
}

export default Image;