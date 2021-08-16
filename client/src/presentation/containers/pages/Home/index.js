import './index.css';
import Search from '../../../components/Search';
import Dogs from '../../../components/Dogs';

function Home() {
    return (
        <section className="home">
            <div className="home-title">
                Home page
            </div>
            <Search/>
            <Dogs/>
        </section>
    )
}

export default Home