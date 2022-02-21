// prettier-ignore
enum CustomerActionTypes {
  SET_DRAWER_ADD_EDIT_CUSTOMER_REQUESTED  = 'customer/SET_DRAWER_ADD_EDIT_CUSTOMER_REQUESTED',
  SET_DRAWER_ADD_EDIT_CUSTOMER            = 'customer/SET_DRAWER_ADD_EDIT_CUSTOMER',
  SET_DIALOG_DETAIL_CUSTOMER              = 'customer/SET_DIALOG_DETAIL_CUSTOMER',

  FETCHING_CUSTOMER_LIST_REQUESTED  = 'customer/FETCHING_CUSTOMER_LIST_REQUESTED',
  FETCHING_CUSTOMER_LIST_LOADING    = 'customer/FETCHING_CUSTOMER_LIST_LOADING',
  FETCHING_CUSTOMER_LIST_FAILURE    = 'customer/FETCHING_CUSTOMER_LIST_FAILURE',
  FETCHING_CUSTOMER_LIST_SUCCESS    = 'customer/FETCHING_CUSTOMER_LIST_SUCCESS',

  FETCHING_CUSTOMER_REQUESTED = 'customer/FETCHING_CUSTOMER_REQUESTED',
  FETCHING_CUSTOMER_LOADING   = 'customer/FETCHING_CUSTOMER_LOADING',
  FETCHING_CUSTOMER_FAILURE   = 'customer/FETCHING_CUSTOMER_FAILURE',
  FETCHING_CUSTOMER_SUCCESS   = 'customer/FETCHING_CUSTOMER_SUCCESS',

  CREATE_CUSTOMER_REQUESTED   = 'customer/CREATE_CUSTOMER_REQUESTED',
  CREATE_CUSTOMER_LOADING     = 'customer/CREATE_CUSTOMER_LOADING',
  CREATE_CUSTOMER_FAILURE     = 'customer/CREATE_CUSTOMER_FAILURE',
  CREATE_CUSTOMER_SUCCESS     = 'customer/CREATE_CUSTOMER_SUCCESS',

  UPDATE_CUSTOMER_REQUESTED   = 'customer/UPDATE_CUSTOMER_REQUESTED',
  UPDATE_CUSTOMER_LOADING     = 'customer/UPDATE_CUSTOMER_LOADING',
  UPDATE_CUSTOMER_FAILURE     = 'customer/UPDATE_CUSTOMER_FAILURE',
  UPDATE_CUSTOMER_SUCCESS     = 'customer/UPDATE_CUSTOMER_SUCCESS',

  DELETE_CUSTOMER_REQUESTED   = 'customer/DELETE_CUSTOMER_REQUESTED',
  DELETE_CUSTOMER_LOADING     = 'customer/DELETE_CUSTOMER_LOADING',
  DELETE_CUSTOMER_FAILURE     = 'customer/DELETE_CUSTOMER_FAILURE',
  DELETE_CUSTOMER_SUCCESS     = 'customer/DELETE_CUSTOMER_SUCCESS',
}

export default CustomerActionTypes;