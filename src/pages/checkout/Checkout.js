import "./checkout.css";
import { ArrowLeft } from "../../Icons";


function popup() {
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
    divShow[0].style.display = "flex"
}

function formatCardNumber(){
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
    if (this.value === this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];
    
    for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }
    
    for (let i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);
    
    this.value = this.lastValue = parts.join(' ');
    this.selectionStart = this.selectionEnd = caretPosition;
}
}

function formatDate(){
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
        if (this.value === this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }
        
        for (let i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);
        
        this.value = this.lastValue = parts.join('/');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
}



const Checkout = () => {
    return (

        <div className="page-checkout">
            <a className="voltar" href='/'>
                <ArrowLeft />
            </a>

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
                <input type="radio" name="radio-box" id="radio-cc" onClick={showDiv} />
            </div>


            <div className="credit-card-input" id="credit-card-input" name="radio-cc" style={{ display: "none" }}>
                <div className="form-floating">
                    <input type="text" name="card-num" placeholder="Card number" size="18" id="cr_no" minLength="19" maxLength="19" className="form-control" onChange={formatCardNumber}/>
                    
                    <label className="number-label" htmlFor="cr_no">Card number</label>
                </div>
                
                <div className="form-floating">
                    <input type="text" placeholder="Expiry" size="6" id="exp" name="exp" minLength="5" maxLength="5" className="form-control" onChange={formatDate} />

                    <label className="exp-label" htmlFor="exp">Expiry</label>
                </div>


                <div className="form-floating">
                    <input type="text" id ="cvc-number" placeholder="CVC" size="3" minLength="3" maxLength="3" pattern="^[1-9]\d\d{3}$" className="form-control"/>

                    <label className="cvc-label" htmlFor="cvc-number">CVC</label>
                </div>
            </div>


            <div className="mbway" >
                <div className="icon-title">
                    <img className="icon" alt="" src="img/mbway.svg" />
                    <div className="title">MBWay</div>
                </div>
                <input type="radio" name="radio-box" id="radio-mbway" onClick={showDiv} />
            </div>

            <div className="form-floating" id="mbway-input" name="radio-mbway" style={{ display: "none" }}>
                <input type="number" className="form-control" id="mobile-input" placeholder="Mobile nº" />
                <label className="mobile-label" htmlFor="mobile-input">Mobile nº</label>
            </div>

            <div className="paypal">
                <div className="icon-title">
                    <img className="icon" alt="" src="img/paypal.svg" />
                    <div className="title">PayPal</div>
                </div>
                <input type="radio" name="radio-box" id="radio-paypal" onClick={showDiv} />
            </div>

            <div id="paypal-input" name="radio-paypal" style={{ display: "none" }}>
                You will be redirected to PayPal website
            </div>

            <div className="crypto-div">
                <div className="icon-title">
                    <img className="icon" alt="" src="img/bitcoin.svg" />
                    <div className="title">Crypto Currency</div>
                </div>
                <input type="radio" name="radio-box" id="radio-crypto" onClick={showDiv} />
            </div>

            <div id="crypto-input" name="radio-crypto" style={{ display: "none" }}>
                You will be redirected to Crypto website
            </div>

            <div className="payment-order">
                <button className="pay-button" onClick={popup}>Pagar</button>
            </div>
        </div>
    );
};

export default Checkout;
