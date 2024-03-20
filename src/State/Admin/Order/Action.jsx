import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";
import { API_BASE_URL, api } from "../../../config/apiConfig";


export const getOrders = () => {

    return async (dispatch) => {
        dispatch({ type: GET_ORDERS_REQUEST });
        try {
            const response = await api.get(`/api/admin/orders/`);
            console.log("get all orders ", response.data);
            dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
        }
    }
}




export const confirmOrder = (orderId) => {
    return async (dispatch) => {

        try {
            dispatch({ type: CONFIRMED_ORDER_REQUEST });
            const { data } = await api.put(`/api/admin/orders/${orderId}/confirmed`);
            console.log("shipped order ", data);
            dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
        }
    }
}




export const shipOrder = (orderId) => {
    return async (dispatch) => {

        try {
            dispatch({ type: SHIP_ORDER_REQUEST });
            const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
            console.log("shipped order ", data);
            dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
        }
    }
}


export const deliverOrder = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: DELIVERED_ORDER_REQUEST });
            const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`);
            console.log("confirmed order ", data);
            dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
        }
    }
}




export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CANCEL_ORDER_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
        const { data } = response.data;
        console.log("confirmed order ", response.data);
        dispatch({ type: CANCEL_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CANCEL_ORDER_FAILURE, payload: error.message });
    }
}


export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/delete`);
        console.log("confirmed order ", data);
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
}
