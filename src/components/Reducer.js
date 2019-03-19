
const appReducer = (state, action) => {
    switch (action.type) {
        case 'updateCustomer': {
            return {
                ...state,
                customer: action.payload
            }
        }
        case 'updateAddress': {
            return {
                ...state,
                address: action.payload
            }
        }
        case 'updateCity': {
            return {
                ...state,
                city: action.payload
            }
        }
        case 'updatePhone': {
            return {
                ...state,
                phone: action.payload
            }
        }
        case 'updateModel': {
            return {
                ...state,
                model: action.payload
            }
        }
        case 'updateYear': {
            return {
                ...state,
                year: action.payload
            }
        }
        case 'updateMake': {
            return {
                ...state,
                make: action.payload
            }
        }
        case 'updateVin': {
            return {
                ...state,
                vin: action.payload
            }
        }
        case 'updateMilage': {
            return {
                ...state,
                mileage: action.payload
            }
        }
        case 'deleteService': {
            return {
                ...state,
                service: state.service.filter(item => item.id !== action.payload)
            }
        }
        case 'addService': {
            return {
                ...state,
                service: [
                    ...state.service,
                    {
                        id: Date.now(),
                        miles: action.miles,
                        service: action.service,
                        labor: action.labor,
                        parts: action.parts,
                        total: action.total
                    }
                ],
            }
        }
        case 'reset': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

 export default appReducer;