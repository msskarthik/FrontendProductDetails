import {api} from 'boot/axios';
import state from './state';



export const getIncrement = ({commit}) => {
    commit('setIncrement')
}

export const res = async({commit}) => {
    const result = await api.get('/posts/61dc00bca81ab895988630e1');
    const dataItem = result.data
    commit('setData',dataItem)
}

export const getDecrement = ({commit}) => {
    commit('setDecrement')
}
export const getCartList = async({commit,state}) => {
    const payload = {...state.productItem,quantity:state.quantity,size: state.size}
    const res = await api.post('/cart',payload)
    const data = res.data
    console.log(data)
    commit('setCartList',data)
}
export const getSizeItem = ({commit},payload) => {
    commit('setSizeItem',payload)
}

