import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getTotal } from '../../reducer';
function Subtotal() {
    const getBasketTotal = (params) => {

    }
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <div>
                            Subtotal ({basket.length} items): <strong>{`$ ${value}`}</strong>
                        </div>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This product contains gift
                        </small>
                        <button>Checkout</button>
                    </>
                )}
                value={getTotal(basket)}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'}
                displayType={'text'}
            />

        </div>
    )
}

export default Subtotal
