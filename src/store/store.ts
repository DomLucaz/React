import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensreducer';

const store = createStore(tokenReducer);

export default store;