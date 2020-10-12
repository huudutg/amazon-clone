import React from 'react'
import { useStateValue } from '../../StateProvider';
import { ReactComponent as Empty } from '../../empty.svg';
import CheckoutItems from './CheckoutItems';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__ad"
                src="https://www.seattleafloat.com/wp-content/uploads/2020/03/Updated-2019-Seattle-Afloat-Banner-%C2%AE.png" alt="" />
            {basket?.length === 0 ? (
                <div className="checkout__empty">
                    <span>Your cart is empty!</span>
                    <Empty />

                </div>
            ) : (
                    <div className="checkout__content">
                        <div className="checkout__items">
                            <h2>Your shopping cart</h2>
                            {basket.map(item => (
                                <CheckoutItems
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    img={item.img} />
                            ))}
                        </div>
                        <div className="checkout__subtotal">
                            <Subtotal />
                        </div>
                    </div>

                )}
        </div>

    )
}

export default Checkout
