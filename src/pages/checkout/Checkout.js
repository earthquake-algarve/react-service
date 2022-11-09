import "./checkout.css";
import {ArrowLeft} from "../../Icons";

function popup(){
    alert("paid");
}


const Checkout = () => {
  return (
    
    <div className="pgina-de-checkout">
        <a className="voltar-b" href='/'><ArrowLeft/>Voltar</a>
        <div className="resumo-top-div">
            <div className="check-out-div">Check-out</div>
            <div className="items-60">
                <span>2 items</span>
                <span className="span"> | 60€</span>
            </div>
        </div>      

        <b className="payment-b">Payment</b>

        <div className="carto-de-credito">
            <img className="icon" alt="" src="img/mastercard.svg" />
            <div className="crypto-currency-div">Credit card</div>
            <input type="checkbox" className="checkbox-icon"/>
        </div>        

        <div className="mbway-div">
            <img className="icon" alt="" src="img/mbway.svg" />
            <div className="crypto-currency-div">MBWay</div>
        <input type="checkbox" className="checkbox-icon" />
        </div>

        <div className="paypal-div">
            <img className="icon" alt="" src="img/paypal.svg" />
            <div className="crypto-currency-div">PayPal</div>
            <input type="checkbox" className="checkbox-icon" />
        </div>
      

      
        <div className="crypto-div">
            <img className="icon" alt="" src="img/bitcoin.svg" />
            <div className="crypto-currency-div">Crypto Currency</div>
            <input type="checkbox" className="checkbox-icon" />
        </div>

        <div>
            <button className="aqui" onClick={popup}>Pagar</button>
        </div>
        
    </div>
  );
};

export default Checkout;
