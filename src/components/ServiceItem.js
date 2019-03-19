import React, { useContext } from 'react';
import Context from './Context';

function ServiceItem ({id, desc, labor, parts, total }) {
    const dispatch = useContext(Context); // context hook

    let partSum = parseFloat(parts);
    let laborSum = parseFloat(labor);

    return (
    <tr className="service-item">
        <td>{id}</td>
        <td className="item_service">{desc}</td>
        <td className="item_labor">{laborSum.toFixed(2)}</td>
        <td className="item_parts">{partSum.toFixed(2)}</td>
        <td className="item_total">{total.toFixed(2)}</td>
        <td> <button className="item_delete" onClick={()=> {dispatch({type: 'deleteService', payload: id})}}>Delete</button></td>
    </tr>
    );
}

export default ServiceItem;