import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const {Types, Creators} = createActions({
  setStocks: ['stocks'],
  updateStocks: ['stock'],
});

export const ListPostsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  stocks: [],
});

/* Reducers Handlers */

const setStocks = (state = INITIAL_STATE, {stocks}) => state.merge({stocks});

const updateStocks = (state = INITIAL_STATE, {stock}) =>
  state.merge({
    stocks: state.stocks.map((el) => {
      return el.id == stock.id ? stock : el;
    }),
  });

/* Reducers */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STOCKS]: setStocks,
  [Types.UPDATE_STOCKS]: updateStocks,
});
