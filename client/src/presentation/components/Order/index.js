import { useDispatch } from 'react-redux';
import { orderDogs, orderFiltered, setOrder } from '../../../logic/actions';
import './index.css';

function Order({dogs, filtered, order}) {
    const dispatch = useDispatch();
    const handleChange = event => {
        const value = event.target.value;
        const newOrder = [...order];
        if (value === 'name' || value === 'weight') {
            newOrder[0] = value;
        } else {
            newOrder[1] = value;
        }
        dispatch(setOrder(newOrder));
        if (filtered.length > 1) {
            dispatch(orderFiltered(filtered, newOrder))
        } else {
            dispatch(orderDogs(dogs, newOrder));
        }
    }
    return (
        <div className="order">
            <div>
                <span>Order by type</span>
                <div>
                    <input type="radio" id="order-name" name="type" onChange={handleChange} value="name" checked={order[0] === "name"}/>
                    <label htmlFor="order-name">name</label>
                    <input type="radio" id="order-weight" name="type" onChange={handleChange} value="weight" checked={order[0] === "weight"}/>
                    <label htmlFor="order-weight">weight</label>
                </div>
            </div>
            <div>
                ------
            </div>
            <div>
                <span>Order by direction</span>
                <div>
                    <input type="radio" id="order-upward" name="direction" onChange={handleChange} value="upward" checked={order[1] === "upward"}/>
                    <label htmlFor="order-upward">upward</label>
                    <input type="radio" id="order-downward" name="direction" onChange={handleChange} value="downward" checked={order[1] === "downward"}/>
                    <label htmlFor="order-downward">downward</label>
                </div>
            </div>
        </div>
    )
}

export default Order;