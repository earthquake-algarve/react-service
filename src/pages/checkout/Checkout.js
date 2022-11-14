import "./checkout.css";
import {ArrowLeft} from "../../Icons";


function popup(){
    alert("paid");
}

function showDiv(event) {
    
    const creditCardInput = document.getElementById("credit-card-input")
    creditCardInput.style.display = "none"
    const mbwayInput = document.getElementById("mbway-input")
    mbwayInput.style.display = "none"
    const paypalInput = document.getElementById("paypal-input")
    paypalInput.style.display = "none"
    const cryptoInput = document.getElementById("crypto-input")
    cryptoInput.style.display = "none"

    const div = event.target.id
    const divShow = document.getElementsByName(div)
    divShow[0].style.display = "block"
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
            <input type="radio" name="radio-box" id="radio-cc" onClick={showDiv}/>
        </div> 
        

        <div className="credit-card-input" id="credit-card-input" name="radio-cc" style={{display: "none"}}>
                <input type="number" placeholder="Card number"/>
                <input type="number" placeholder="Expiry"/>
                <input type="number" placeholder="CVC"/>
        </div>
        
        
        <div className="mbway" >
            <div className="icon-title">
                <img className="icon" alt="" src="img/mbway.svg" />
                <div className="title">MBWay</div>
            </div>
            <input type="radio" name="radio-box" id="radio-mbway" onClick={showDiv} />
        </div>

        <div id="mbway-input" name="radio-mbway" style={{display: "none"}}>
            <input type="number" placeholder="Mobile number"/>
        </div>

        <div className="paypal">
            <div className="icon-title">
                <img className="icon" alt="" src="img/paypal.svg" />
                <div className="title">PayPal</div>
            </div>
           <input type="radio" name="radio-box" id="radio-paypal" onClick={showDiv}/>
        </div>

        <div id="paypal-input" name="radio-paypal" style={{display: "none"}}>
            You will be redirected to PayPal website
        </div>
      
        <div className="crypto-div">
            <div className="icon-title">
                <img className="icon" alt="" src="img/bitcoin.svg" />
                <div className="title">Crypto Currency</div>
            </div>
            <input type="radio" name="radio-box" id="radio-crypto" onClick={showDiv} />
        </div>

        <div id="crypto-input" name="radio-crypto" style={{display: "none"}}>
            You will be redirected to Crypto website
        </div>

        <div className="payment-order">
            <button className="pay-button" onClick={popup}>Pagar</button>
        </div>
    </div>
  );
};

export default Checkout;
