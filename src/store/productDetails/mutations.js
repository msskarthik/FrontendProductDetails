export function someMutation (/* state */) {
}


export const setIncrement = (state) => {
    state.quantity++
   
}
export const setData = (state,payload) => {
    state.productItem = payload
    state.rating_point = payload.rating
}

export const setDecrement = (state) => {
    state.quantity--

}
export const setCartList = (state,payload) => {
    state.cart.push(payload)
}

export const setSizeItem = (state,payload) => {
    for (let item of state.items) {
        if (item.id === payload) {
            item.clicked = true
            state.size = item.size
        }else {
            item.clicked = false
      } 
    }
}