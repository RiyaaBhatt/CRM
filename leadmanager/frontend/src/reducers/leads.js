import { DELETE_LEAD, GET_LEADS, ADD_LEAD,UPDATE_LEAD } from "../actions/types.js";

const initialState = {
    leads: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }

        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }

        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            }
            case UPDATE_LEAD:
            return {
                ...state,
                leads: state.leads.map(lead =>
                lead.id === action.payload.id ? action.payload : lead
                )
            };
        default:
            return state;
    }
}