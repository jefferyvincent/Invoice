import React, { useReducer, useEffect, useRef } from 'react';

import appReducer from './Reducer';
import Tabs from './Tabs/Tabs';
import Header from './Header';
import ServiceItem from './ServiceItem';
import ServiceForm from './ServiceForm';
import CustomerForm from './CustomerForm';
import Context from './Context';
import InvoiceTotal from './InvoiceTotal';

 
const initialState = {
    customer: 'Jeffery Vincent',
    address: '1313 Mocking Bird lane',
    city: 'HOLLYWOOD, CA 90210',
    phone: '(555) 332-32333',
    make: 'Mitsubishi',
    model: 'Raider',
    year: 2006,
    mileage: 0,
    tax: 4.3,
    vin: '5FNRL18023B147127',
    service: [],
}; 

function useEffectOnce (cb) {
    const didRun = useRef(false);
    useEffect(
        () => {
            if(!didRun.current) {
                cb()
                didRun.current = true;
            }
        }
    );
}

function UseDocumentTitle (title) {
    useEffect(()=> {
        document.title = title;
    }, [title])
}
  
function ServiceApp () {
    const [state, dispatch ] = useReducer(appReducer, initialState) // use reducer hook

    // get from localStorage
    useEffectOnce(
        () => {
            const raw = localStorage.getItem('ServiceData');
            if (raw !== null) {
             dispatch({ type: 'reset', payload: JSON.parse(raw)});
            }
        }
    );

    // // write to localStorage
    useEffect(
        () => localStorage.setItem('ServiceData', JSON.stringify(state), [state])
    );

    UseDocumentTitle(state.customer);

    function labor () {
        let total = 0;
        state.service.map((item) => total = total + parseFloat(item.labor));

        return total;
    }

    function parts () {
        let sum = 0;
        state.service.map((item) => sum = sum + parseFloat(item.parts));
        return sum;
    }


    console.log(parts);

    return (
    <Context.Provider value={dispatch}>
        <Header 
        customer={state.customer}
        address={state.address}
        city={state.city}
        phone={state.phone}
        make={state.make} 
        model={state.model} 
        year={state.year} 
        mileage={state.mileage}
        vin={state.vin}
        />
        <article className="content">
            <table>
                <thead>
                    <tr>
                        <th className="serviceId">id</th>
                        <th className="serviceDesc">Description</th>
                        <th>Labor</th>
                        <th>Parts</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                {state.service.map((item, key) => 
                    <ServiceItem 
                    key={key} 
                    id={item.id}
                    date={item.date} 
                    desc={item.service} 
                    labor={item.labor}
                    total ={item.total}
                    parts={item.parts} />)}
                </tbody>
            </table>
            <hr />
        </article>
        <footer className="main-footer">
            <Tabs>
                {/* SERVICE FORM  */}
                <div label="Add Service">
                    <ServiceForm />
                </div>
                {/* CUSTOMER FORM  */}
                <div label="Customer Information">
                    <CustomerForm 
                    year={state.year} 
                    model={state.model} 
                    make={state.make} 
                    vin={state.vin} 
                    miles={state.mileage} 
                    name={state.customer}
                    address={state.address}
                    city={state.city}
                    phone={state.phone} />
                </div>
            </Tabs>
            <div className="invoice-total">
                 <InvoiceTotal  parts={parts()} labor={labor()} sublet={0} other={0} environment={0} tax={state.tax} />
             </div>
        </footer>
        
    </Context.Provider>
    );
}

export default ServiceApp;