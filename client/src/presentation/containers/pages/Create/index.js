import './index.css';
import Title from '../../../components/Title';
import Form from '../../../components/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTemperamentsToSelect } from '../../../../logic/actions';

function Create() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTemperamentsToSelect());
    }, []);
    return (
        <section className="create">
            <Title title="Create a new Dog"/>
            <Form/>
        </section>
    )
}

export default Create