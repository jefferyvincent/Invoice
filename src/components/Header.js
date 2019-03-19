import React from 'react';

function Header ({address, city, phone, customer, make, model, year, mileage, vin}) {
    let order = Date.now();
    let today = new Date();
    let date = today.toLocaleDateString("en-US");
    return(
    <header className="main-head">
        <div className="company-info">
            <div className="company">
                <h1>Car Care and Tire Center</h1>
                <p>
                    <span className="street-address">2401 Castleton Commerce Way, Ste 101</span> <br/>
                    <span className="region">Virginia Beach, </span>
                    <span className="state">VA </span>
                    <span className="postal-code">23456</span><br />
                    <span className="phone">555-689-4702</span><br />
                </p>
                "YOUR AUTO COMPANION"
            </div>
            <div className="work-order">
                <p>
                    <span className="order-number label">Invoice Order # {order}</span>< br />
                    <span className="order-date"><span className="label">Date:</span> {date}</span>
                </p>
            </div>
        </div>
        <div className="customer-info">
            <div className="customer-pane">
                <div className="customer"><span className="label">Customer:</span> {customer}</div>
                <div className="address"><span className="label">Address:</span> {address}</div>
                <div className="city"><span className="label">City:</span> {city} </div>
                <div className="phone"><span className="label">Phone:</span> {phone}</div>
            </div>
            <div className="vehicle-pane">
                <div className="make"><span className="label">Vehicle:</span> {year} {make} {model}</div>
                <div className="vin"><span className="label">VIN:</span> {vin} </div>
                <div className="milage"><span className="label">Mileage:</span> {mileage}</div>
            </div>
        </div>
        <hr />
    </header>)
}

export default Header;