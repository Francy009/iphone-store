import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addDiscount, deleteItemfFromCart, updateQuantity} from "../redux/reducers/cart-reducer";

function Carrello() {
    const {cart, total} = useSelector(store => store.cart)
    const dispatch = useDispatch();
    const [discount, setDiscount] = useState("")
    const [isCouponApplied, setIsCouponApplied] = useState(false)
    return (
        <section className="h-100" style={{backgroundColor: "#eee"}}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-black">Carrello</h3>
                        </div>

                        {cart && cart.length > 0 ? (
                            cart.map((item) => {
                                return (
                                    <div>
                                        <div className="card rounded-3 mb-4">
                                            <div className="card-body p-4">
                                                <div className="row d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img
                                                            src={item.immagine}
                                                            className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <p className="lead fw-normal mb-2">{item.nome}</p>
                                                        <p><span className="text-muted">Memoria: </span>{item.memoria}
                                                            <span className="text-muted">Colore: </span>{item.colore}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2"
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i className="fas fa-minus"></i>
                                                        </button>

                                                        <input id="form1" min="1" name="quantity" value={item.quantita}
                                                               onChange={(e) => dispatch(updateQuantity({
                                                                   item: item,
                                                                   newQuantity: parseInt(e.target.value, 10) || 0
                                                               }))}
                                                               type="number"
                                                               className="form-control form-control-sm"/>

                                                        <button className="btn btn-link px-2"
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h5 className="mb-0">€{item.prezzo}</h5>
                                                    </div>

                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <button type="button" className="btn btn-outline-danger"
                                                                onClick={() => dispatch(deleteItemfFromCart(item))}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" fill="currentColor" className="bi bi-trash"
                                                                 viewBox="0 0 16 16">
                                                                <path
                                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                                                                <path
                                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        ) : <div>
                            <h1>Il tuo carrello è vuoto</h1>
                        </div>}
                        {cart && cart.length > 0 &&
                            <div>
                                <div className="card mb-4">
                                    <div className="card-body p-4 d-flex flex-row">
                                        <div className="form-outline flex-fill">
                                            <input type="text" id="form1"
                                                   className="form-control form-control-lg" value={discount}
                                                   onChange={(e) => setDiscount(e.target.value)}/>
                                            <label className="form-label">Codice sconto</label>
                                        </div>
                                        <button type="button"
                                                onClick={() => {
                                                    dispatch(addDiscount(discount))
                                                    setIsCouponApplied(true)
                                                }}
                                                disabled={isCouponApplied}
                                                className="btn btn-outline-warning btn-lg ms-3">Applica
                                        </button>
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body p-4 d-flex flex-row">
                                        <h1 className="fw-normal mb-0 text-black">Totale</h1>
                                        <div className="form-outline flex-fill">
                                            <h1 className="fw-normal mb-0 text-black">{total}</h1>
                                        </div>
                                        <button type="button"
                                                className="btn btn-warning btn-block btn-lg">Procedi al pagamento
                                        </button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carrello;