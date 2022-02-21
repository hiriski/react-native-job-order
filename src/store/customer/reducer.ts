import { Customer } from '@app/interfaces/customer';
import { LaravelPaginationLinks, LaravelPaginationMeta } from '@app/interfaces/laravel-pagination';

import { CustomerAction } from './actions';
import * as ActionTypes from './constants';

export interface CustomerState {
  listCustomer: {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    data: Array<Customer> | null;
    meta?: LaravelPaginationMeta;
    links?: LaravelPaginationLinks;
  };

  detail: {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    data: Customer | null;
  };

  drawerAddEdit: {
    open: boolean;
    id: number | null;
  };

  dialogDetail: {
    open: boolean;
    id: number | null;
  };

  createCustomer: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    customer: Customer | null;
  };

  updateCustomer: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    customer: Customer | null;
  };

  deleteCustomer: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  };
}

const initialState = {
  listCustomer: {
    isFetching: false,
    isError: false,
    isSuccess: false,
    data: [],
    meta: null,
    links: null,
  },

  detail: {
    isFetching: false,
    isError: false,
    isSuccess: false,
    data: null,
  },

  drawerAddEdit: {
    open: false,
    id: null,
  },

  dialogDetail: {
    open: false,
    id: null,
  },

  createCustomer: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    customer: null,
  },

  updateCustomer: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    customer: null,
  },

  deleteCustomer: {
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
};

const customerReducer = (state: CustomerState = initialState, action: CustomerAction): CustomerState => {
  switch (action.type) {
    // fetch list customer.
    case ActionTypes.FETCHING_CUSTOMER_LIST_LOADING:
      return {
        ...state,
        listCustomer: {
          ...state.listCustomer,
          isFetching: true,
          isError: false,
          isSuccess: false,
        },
      };
    case ActionTypes.FETCHING_CUSTOMER_LIST_FAILURE:
      return {
        ...state,
        listCustomer: {
          ...state.listCustomer,
          isFetching: false,
          isError: true,
          isSuccess: false,
        },
      };
    case ActionTypes.FETCHING_CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        listCustomer: {
          ...state.listCustomer,
          isFetching: false,
          isError: false,
          isSuccess: true,

          /**
           * data
           * links
           * meta
           */
          ...action.payload,
        },
      };

    // set drawer add or edit customer
    case ActionTypes.SET_DRAWER_ADD_EDIT_CUSTOMER:
      return {
        ...state,
        drawerAddEdit: {
          open: action.payload.open,
          id: action.payload.id ?? null,
        },
      };

    // set dialog detail customer
    case ActionTypes.SET_DIALOG_DETAIL_CUSTOMER:
      return {
        ...state,
        dialogDetail: {
          open: action.payload.open,
          id: action.payload.id ?? null,
        },
      };

    // fetch customer by id
    case ActionTypes.FETCHING_CUSTOMER_LOADING:
      return {
        ...state,
        detail: {
          isFetching: true,
          isError: false,
          isSuccess: false,
          data: null,
        },
      };
    case ActionTypes.FETCHING_CUSTOMER_FAILURE:
      return {
        ...state,
        detail: {
          isFetching: false,
          isError: true,
          isSuccess: false,
          data: null,
        },
      };
    case ActionTypes.FETCHING_CUSTOMER_SUCCESS:
      return {
        ...state,
        detail: {
          isFetching: false,
          isError: false,
          isSuccess: true,
          data: action.payload,
        },
      };

    // create customer
    case ActionTypes.CREATE_CUSTOMER_LOADING:
      return {
        ...state,
        createCustomer: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.CREATE_CUSTOMER_FAILURE:
      return {
        ...state,
        createCustomer: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        createCustomer: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          customer: action.payload,
        },
      };

    // update customer
    case ActionTypes.UPDATE_CUSTOMER_LOADING:
      return {
        ...state,
        updateCustomer: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.UPDATE_CUSTOMER_FAILURE:
      return {
        ...state,
        updateCustomer: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        updateCustomer: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          customer: action.payload,
        },
      };

    // delete customer
    case ActionTypes.DELETE_CUSTOMER_LOADING:
      return {
        ...state,
        deleteCustomer: {
          isLoading: true,
          isError: false,
          isSuccess: false,
        },
      };
    case ActionTypes.DELETE_CUSTOMER_FAILURE:
      return {
        ...state,
        deleteCustomer: {
          isLoading: false,
          isError: true,
          isSuccess: false,
        },
      };
    case ActionTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        deleteCustomer: {
          isLoading: false,
          isError: false,
          isSuccess: true,
        },
      };
    default:
      return state;
  }
};

export default customerReducer;
