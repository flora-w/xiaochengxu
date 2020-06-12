import { combineReducers } from 'redux';
// import homeReducer  from "../pages/home/store"
import { reducer as homeReducer } from '../pages/home/store';
// import { reducer as SeatFormReducer } from '../pages/seatForm/store';
// import { reducer as detailsReducer } from '../pages/details/store';
// import { reducer as loginReducer } from "../pages/login/store";

// import fillFormReducer from "../pages/purchaseTicket/store";


//使用combine使小的reducer组成一个总的reducer
const reducer = combineReducers({
    homeReducer,
    // SeatFormReducer,
    // resultReducer,
    // detailsReducer


});
export default reducer;