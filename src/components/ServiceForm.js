import React, {useRef, useContext} from 'react';
import Context from './Context';

function ServiceForm () {
    const dispatch = useContext(Context); // context hook
    const servicePref = useRef();
    const milage = useRef();
    const date = useRef();
    const parts = useRef();
    const labor = useRef();

    function handleSubmit (e) {
        e.preventDefault();
        if (date.current.value !== '' && labor.current.value !=='' &&  servicePref.current.value !== '' && milage.current.value !== '') {
            dispatch({
                type: 'addService',
                service: servicePref.current.value,
                date: date.current.value,
                labor: labor.current.value,
                miles: milage.current.value,
                parts: parts.current.value,
                total: parseFloat(parts.current.value) + parseFloat(labor.current.value)
              });
    
              dispatch({
                  type: 'updateMilage',
                  milage: milage.current.value
              });

            // RESET FORM values
            milage.current.value = '';
            servicePref.current.value = '';
            parts.current.value = '';
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="dateF">Date: </label>
            <input type="date" id="dateF" ref={date} />
        </div>
        <div>
            <label htmlFor="servicePerf">Service Performed: </label>
            <input type="text" id="servicePerf" ref={servicePref} />
        </div>
        <div>
            <label htmlFor="milage">Mileage: </label>
            <input type="text" id="milage" ref={milage} />
        </div>
        <div>
            <label htmlFor="labor">Labor: </label>
            <input type="text" id="labor" ref={labor} />
        </div>
        <div>
            <label htmlFor="parts">Parts: </label>
            <input type="text" id="parts" ref={parts} />
        </div>
        <input type="submit" value="Submit" />
    </form>
    );
}

export default ServiceForm;