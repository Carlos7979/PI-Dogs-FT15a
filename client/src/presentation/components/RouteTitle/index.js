import './index.css';

function RouteTitle({title, color, background}) {
    const styles = {
        color,
        borderColor: color,
        background
    }
    return (
        <div className="routeTitle" style={styles}>
            {title}
        </div>
    )
}

export default RouteTitle;
