export const initialState = {
    basket: [],
    // user=null,
}

export const getTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log('action', action)
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(basket =>
                basket.id == action.item.id);
            console.log(index)
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove ${action.item.id}`)
            }
            return {
                ...state,
                basket: newBasket

            };
            break;
        default:
            return state;
    }
}

export default reducer;