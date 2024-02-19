import  {configureStore} from './store/configureStore'
import appReducer from './slices/appSlice'
const store = configureStore({
    reducer:{
        app:appReducer,
    }
})





export default store;