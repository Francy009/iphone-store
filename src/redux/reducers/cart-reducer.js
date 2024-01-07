import {createSlice} from "@reduxjs/toolkit";
import {get} from "axios";

const initialState = {
    cart: [],
    total: 0,
    payed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            // Verifica se esiste già un elemento con le stesse proprietà nel carrello
            const existingItemIndex = state.cart.findIndex(
                (item) =>
                    item.id === newItem.id &&
                    item.memoria === newItem.memoria &&
                    item.colore === newItem.colore
            );

            if (existingItemIndex !== -1) {
                // Elemento esistente: crea una copia aggiornata
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex].quantita += 1;

                // Aggiorna lo stato con il nuovo carrello
                state.total += updatedCart[existingItemIndex].prezzo
                state.cart = updatedCart;
            } else {
                // Elemento non esistente: aggiungi un nuovo elemento al carrello con quantità 1
                state.total += newItem.prezzo
                state.cart.push(newItem)
            }
        },
        cleanCart: (state) => {
            state.cart = []
            state.total = 0
        },
        deleteItemfFromCart: (state, action) =>{
            state.cart = state.cart.filter( (el) =>
                el.id !== action.payload.id ||
                el.memoria !== action.payload.memoria ||
                el.colore !== action.payload.colore)
            state.total -= action.payload.prezzo
        },
        updateQuantity: (state, action) => {
            const { newQuantity } = action.payload;

            // Cerca l'elemento nel carrello in base all'itemId, memoria e colore
            const itemIndex = state.cart.findIndex(
                (item) =>
                    item.id === action.payload.item.id &&
                    item.memoria === action.payload.item.memoria &&
                    item.colore === action.payload.item.colore
            );

            if (itemIndex !== -1) {
                // Elemento trovato: crea una copia aggiornata
                const updatedCart = [...state.cart];
                if(newQuantity >= updatedCart[itemIndex].quantita){
                    state.total += updatedCart[itemIndex].prezzo
                } else{
                    state.total -= updatedCart[itemIndex].prezzo
                }
                updatedCart[itemIndex].quantita = newQuantity;

                // Aggiorna lo stato con il nuovo carrello

                state.cart = updatedCart;
            }
        },
        addDiscount: (state, action) => {
            if(action.payload === "ASSUMIFRANCESCA"){
                state.total -= state.total*20/100
            }
        }
    },
});

export const addItemToCart = (item) => (dispatch) => {
    dispatch(addToCart(item))
}

export const {addToCart,
    cleanCart,
    deleteItemfFromCart,
    updateQuantity,
    addDiscount} = cartSlice.actions;
const {reducer} = cartSlice;

export default reducer;
