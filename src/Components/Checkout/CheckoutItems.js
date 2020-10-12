import React from 'react'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { yellow } from '@material-ui/core/colors';
import { useStateValue } from '../../StateProvider';

function CheckoutItems({ id, title, img, price, rating }) {

    const [{ }, dispatch] = useStateValue();

    const remove = (params) => {
        dispatch({
            type: 'REMOVE',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                rating: rating
            }
        });
    }
    return (
        <div className="checkout__item">
            <img src={img} alt="" />
            <div className="checkout__item--info">
                <div className="checkout__item--title">
                    {title}
                </div>
                <div className="checkout__item--price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkout__item--rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <StarOutlinedIcon style={{ color: yellow[500] }} />
                        ))}
                </div>
                <button onClick={remove}>Remove from cart</button>
            </div>

        </div>
    )
}

export default CheckoutItems
