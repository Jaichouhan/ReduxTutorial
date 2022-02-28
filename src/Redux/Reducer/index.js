import {combinReducers} from "redux";

import Reducer from "../Reducer/Reducer";

export default combinReducers({
    users:Reducer
})