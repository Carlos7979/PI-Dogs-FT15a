import './index.css';
import Search from '../../../components/Search';
import Dogs from '../../../components/Dogs';
import RouteTitle from '../../../components/RouteTitle';

function Home() {
    return (
        <section className="home">
            {/* <RouteTitle title={'Home'} color={'chocolate'} background={'mediumseagreen'}/> */}
            {/* <Search/> */}
            <Dogs/>
        </section>
    )
}

export default Home