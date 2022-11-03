import "./checkout.css";
import { CheckoutIcon } from '../../Icons'

const Checkout = () => {
  return (
    <div className="pgina-de-checkout">
        <div className="resumo-top-div">
            <div className="check-out-div">Check-out</div>
            <div className="items-60">
                <span>2 items</span>
                <span className="span"> | 60€</span>
            </div>
        </div>      

        <b className="payment-b">Payment</b>

        <div className="carto-de-credito">
            <CheckoutIcon/> 
            <div className="crypto-currency-div">Credit card</div>
            <input type="checkbox" className="checkbox-icon" />
        </div>        

        <div className="mbway-div">
            <img className="icon" alt="" src="../icon2.svg" />
            <div className="crypto-currency-div">MBWay</div>
            <input type="checkbox" className="checkbox-icon" />
        </div>

        <div className="paypal-div">
            <img className="icon" alt="" src="../icon1.svg" />
            <div className="crypto-currency-div">PayPal</div>
            <input type="checkbox" className="checkbox-icon" />
        </div>
      

      
        <div className="crypto-div">
            <img className="icon" alt="" src="../icon.svg" />
            <div className="crypto-currency-div">Crypto Currency</div>
            <input type="checkbox" className="checkbox-icon" />
        </div>

        <div>
            <button className="aqui" >Pagar</button>
        </div>
        
    </div>
  );
};

export default Checkout;
