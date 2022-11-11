import "./checkout.css";
import {ArrowLeft} from "../../Icons";


function popup(){
    alert("paid");
}


const Checkout = () => {
  return (
    
    <div className="page-checkout">
        <div className="back"><a className="voltar" href='/'><ArrowLeft/>Voltar</a></div>

        <div className="resumo-top">
            <div className="checkout">Check-out</div>
            <div className="items">
                <span>2 items</span>
                <span> | 60€</span>
            </div>
        </div>      

        <div className="payment-div"><p className="payment">Payment</p></div>

        <div className="cartao-de-credito">
            <div className="icon-title">
                <img className="icon" alt="" src="img/mastercard.svg" />
                <div className="title">Credit card</div>
            </div>
            <input type="radio" name="radio-box" className="checkbox-icon"/>
        </div>       
        
        <div className="mbway">
            <div className="icon-title">
                <img className="icon" alt="" src="img/mbway.svg" />
                <div className="title">MBWay</div>
            </div>
            <input type="radio" name="radio-box" className="checkbox-icon" />
        </div>

        <div className="paypal">
            <div className="icon-title">
                <img className="icon" alt="" src="img/paypal.svg" />
                <div className="title">PayPal</div>
            </div>
           <input type="radio" name="radio-box" className="checkbox-icon" />
        </div>
      
        <div className="crypto-div">
            <div className="icon-title">
                <img className="icon" alt="" src="img/bitcoin.svg" />
                <div className="title">Crypto Currency</div>
            </div>
            <input type="radio" name="radio-box" className="checkbox-icon" />
        </div>

        <div className="payment-order">
            <button className="pay-button" onClick={popup}>Pagar</button>
        </div>
    </div>
  );
};

export default Checkout;
