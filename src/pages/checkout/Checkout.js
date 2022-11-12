import "./checkout.css";
import {ArrowLeft} from "../../Icons";


function popup(){
    alert("paid");
}

function openCreditCardInput(){
    const checkRadioCc = document.getElementById("radio-cc")
    const creditCardInput = document.getElementById("credit-card-input")
    if(checkRadioCc.checked){
        creditCardInput.style.display = "block";
    }
    else{
        creditCardInput.style.display = "none";
    }
}

function openMbWayInput(){
    const checkRadioMb = document.getElementById("radio-mbway")
    const mbwayInput = document.getElementById("mbway-input")
    if(checkRadioMb.checked){
        mbwayInput.style.display = "block";
    }
} 

function openPayPalInput(){
    const checkRadioPayPal = document.getElementById("radio-paypal")
    const paypalInput = document.getElementById("paypal-input")
    if(checkRadioPayPal.checked){
        paypalInput.style.display = "block";
    }
}

function openCryptoInput(){
    const checkRadioCrypto = document.getElementById("radio-crypto")
    const cryptoInput = document.getElementById("crypto-input")
    if(checkRadioCrypto.checked){
        cryptoInput.style.display = "block";
    }
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
            <input type="radio" name="radio-box" id="radio-cc" onClick={openCreditCardInput}/>
        </div> 
        

        <div className="credit-card-input" id="credit-card-input" style={{display: "none"}}>
                <input type="number" placeholder="Card number"/>
                <input type="number" placeholder="Expiry"/>
                <input type="number" placeholder="CVC"/>
        </div>
        
        
        <div className="mbway" >
            <div className="icon-title">
                <img className="icon" alt="" src="img/mbway.svg" />
                <div className="title">MBWay</div>
            </div>
            <input type="radio" name="radio-box" id="radio-mbway" onClick={openMbWayInput} />
        </div>

        <div id="mbway-input" style={{display: "none"}}>
            <input type="number" placeholder="Mobile number"/>
        </div>

        <div className="paypal">
            <div className="icon-title">
                <img className="icon" alt="" src="img/paypal.svg" />
                <div className="title">PayPal</div>
            </div>
           <input type="radio" name="radio-box" id="radio-paypal" onClick={openPayPalInput}/>
        </div>

        <div id="paypal-input" style={{display: "none"}}>
            You will be redirected to PayPal website
        </div>
      
        <div className="crypto-div">
            <div className="icon-title">
                <img className="icon" alt="" src="img/bitcoin.svg" />
                <div className="title">Crypto Currency</div>
            </div>
            <input type="radio" name="radio-box" id="radio-crypto" onClick={openCryptoInput} />
        </div>

        <div id="crypto-input" style={{display: "none"}}>
            You will be redirected to Crypto website
        </div>

        <div className="payment-order">
            <button className="pay-button" onClick={popup}>Pagar</button>
        </div>
    </div>
  );
};

export default Checkout;
