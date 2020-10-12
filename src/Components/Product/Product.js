import React from 'react'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { yellow } from '@material-ui/core/colors';
import { useStateValue } from '../../StateProvider';
function Product(props) {
    const [{ }, dispatch] = useStateValue();

    const add = (params) => {
        dispatch({
            type: 'ADD',
            item: {
                id: props.id,
                title: props.title,
                img: props.img,
                price: props.price,
                rating: props.rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <div>{props.title}</div>
                <div className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
                <div className="product__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_) => (
                            <StarOutlinedIcon style={{ color: yellow[500] }} />
                        ))}
                </div>
            </div>

            <img className="product__img" src={props.img} alt="" />
            <button onClick={add}>Add to cart</button>
        </div>
    )
}

export default Product
