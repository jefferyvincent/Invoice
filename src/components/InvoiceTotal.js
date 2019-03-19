import React from 'react';

function InvoiceTotal ({parts, labor, sublet, other, environment, tax}) {
    let subtotal = labor + parts + sublet + other + environment;
    
    function calcTax () {
        let sum = subtotal * parseFloat(tax) /100;
        return sum;
    }

    function grandTotal () {
        let taxed = calcTax();
        let total = subtotal + taxed;
        return total;
    }

    return <div className="invoiceTotal">
        <div className="l-col">
            <div className="lbl">Labor:</div>
            <div className="lbl">Parts:</div>
            <div className="lbl">Sublet:</div>
            <div className="lbl">Other Fees:</div>
            <div className="lbl">Shop/Enviro:</div>
            <div className="lbl">Subtotal:</div>
            <div className="lbl">Sales Tax:</div>
            <div className="lbl">Total:</div>
        </div>
        <div className="r-col">
            <div className="pl">${labor.toFixed(2)}</div>
            <div className="pl">${parts.toFixed(2)}</div>
            <div className="pl">${sublet.toFixed(2)}</div>
            <div className="pl">${other.toFixed(2)}</div>
            <div className="pl">${environment.toFixed(2)}</div>
            <div className="pl">${subtotal.toFixed(2)}</div>
            <div className="pl">${calcTax().toFixed(2)}</div>
            <div className="pl">${grandTotal().toFixed(2)}</div>
        </div>
    </div>
}

export default InvoiceTotal;