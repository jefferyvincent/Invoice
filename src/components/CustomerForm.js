import React, {useContext} from 'react';
import Context from './Context';

function CustomerForm ({make, model, year, vin, miles, name, address, city, phone}) {
    const dispatch = useContext(Context); // context hook

    return <form>
        <fieldset>
            <legend>Customer</legend>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder={name} onChange={(e)=>dispatch({type:'updateCustomer', payload: e.target.value})} id="name" />
            </div>
            <div>
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" id="address" onChange={(e)=>dispatch({type:'updateAddress', payload: e.target.value})} placeholder={address} />
            </div>
            <div>
                <label htmlFor="city">City, State, Zip: </label>
                <input type="text" name="city" id="city" placeholder={city} onChange={(e)=> dispatch({type:'updateCity', payload: e.target.value})} />
            </div>
            <div>
                <label htmlFor="phone">Phone: </label>
                <input type="text" name="phone" id="phone" placeholder={phone} onChange={(e)=>dispatch({type:'updatePhone', payload: e.target.value})} />
            </div>
        </fieldset>
        <fieldset>
            <legend>Vehicle</legend>
            <div>
                <label htmlFor="year">Year: </label>
                <input type="text" name="year" placeholder={year} id="year" onChange={(e)=>dispatch({type:'updateYear', payload: e.target.value})} />
            </div>
            <div>
                <label htmlFor="make">Make: </label>
                <input type="text" name="make" placeholder={make} id="make" onChange={(e)=>dispatch({type:'updateMake', payload: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="model">Modal: </label>
                <input type="text" name="model" placeholder={model} id="model"onChange={(e)=>dispatch({type:'updateModel', payload: e.target.value})} />
            </div>
            <div>
                <label htmlFor="vin">VIN: </label>
                <input type="text" name="vin" placeholder={vin} id="vin" onChange={(e)=> dispatch({type:'updateVin', payload: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="miles">Mileage: </label>
                <input type="text" name="miles" placeholder={miles} id="miles" onChange={(e)=>dispatch({type:'updateMilage', payload: e.target.value})} />
            </div>
        </fieldset>
    </form>
}

export default CustomerForm;