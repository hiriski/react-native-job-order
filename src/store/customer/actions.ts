import { AnyAction } from 'redux';

import ActionTypes from './enum';
import { Customer, CustomerModel, ResponseListCustomer } from '@app/interfaces/customer';

// Actions definiition

interface SetDrawerAddEditCustomerRequested {
  type: typeof ActionTypes.SET_DRAWER_ADD_EDIT_CUSTOMER_REQUESTED;
  payload: {
    open: boolean;
    id: number | null;
  };
}
interface SetDrawerAddEditCustomer {
  type: typeof ActionTypes.SET_DRAWER_ADD_EDIT_CUSTOMER;
  payload: {
    open: boolean;
    id: number | null;
  };
}
interface SetDialogDetailCustomer {
  type: typeof ActionTypes.SET_DIALOG_DETAIL_CUSTOMER;
  payload: {
    open: boolean;
    id: number | null;
  };
}
interface FetchingCustomerList {
  type: typeof ActionTypes.FETCHING_CUSTOMER_LIST_REQUESTED;
  payload?: Record<string, string>;
}
interface FetchingCustomerListLoading {
  type: typeof ActionTypes.FETCHING_CUSTOMER_LIST_LOADING;
}
interface FetchingCustomerListFailure {
  type: typeof ActionTypes.FETCHING_CUSTOMER_LIST_FAILURE;
}
interface FetchingCustomerListSuccess {
  type: typeof ActionTypes.FETCHING_CUSTOMER_LIST_SUCCESS;
  payload: ResponseListCustomer;
}

interface FetchingCustomer {
  type: typeof ActionTypes.FETCHING_CUSTOMER_REQUESTED;
  payload: string;
}
interface FetchingCustomerLoading {
  type: typeof ActionTypes.FETCHING_CUSTOMER_LOADING;
}
interface FetchingCustomerFailure {
  type: typeof ActionTypes.FETCHING_CUSTOMER_FAILURE;
}
interface FetchingCustomerSuccess {
  type: typeof ActionTypes.FETCHING_CUSTOMER_SUCCESS;
  payload: Customer;
}

interface CreateCustomer {
  type: typeof ActionTypes.CREATE_CUSTOMER_REQUESTED;
  payload: CustomerModel;
}
interface CreateCustomerLoading {
  type: typeof ActionTypes.CREATE_CUSTOMER_LOADING;
}
interface CreateCustomerSuccesss {
  type: typeof ActionTypes.CREATE_CUSTOMER_SUCCESS;
  payload: Customer;
}
interface CreateCustomerFailure {
  type: typeof ActionTypes.CREATE_CUSTOMER_FAILURE;
}

interface UpdateCustomer {
  type: typeof ActionTypes.UPDATE_CUSTOMER_REQUESTED;
  payload: {
    id: string;
    body: CustomerModel;
  };
}
interface UpdateCustomerLoading {
  type: typeof ActionTypes.UPDATE_CUSTOMER_LOADING;
}
interface UpdateCustomerSuccess {
  type: typeof ActionTypes.UPDATE_CUSTOMER_SUCCESS;
  payload: Customer;
}
interface UpdateCustomerFailure {
  type: typeof ActionTypes.UPDATE_CUSTOMER_FAILURE;
}

interface DeleteCustomer {
  type: typeof ActionTypes.DELETE_CUSTOMER_REQUESTED;
  payload: string;
}
interface DeleteCustomerLoading {
  type: typeof ActionTypes.DELETE_CUSTOMER_LOADING;
}
interface DeleteCustomerFailure {
  type: typeof ActionTypes.DELETE_CUSTOMER_FAILURE;
}
interface DeleteCustomerSuccess {
  type: typeof ActionTypes.DELETE_CUSTOMER_SUCCESS;
}

// Union action types
export type CustomerAction =
  | SetDrawerAddEditCustomerRequested
  | SetDrawerAddEditCustomer
  | SetDialogDetailCustomer
  | FetchingCustomerList
  | FetchingCustomerListLoading
  | FetchingCustomerListFailure
  | FetchingCustomerListSuccess
  | FetchingCustomer
  | FetchingCustomerLoading
  | FetchingCustomerFailure
  | FetchingCustomerSuccess
  | CreateCustomer
  | CreateCustomerLoading
  | CreateCustomerSuccesss
  | CreateCustomerFailure
  | UpdateCustomer
  | UpdateCustomerLoading
  | UpdateCustomerSuccess
  | UpdateCustomerFailure
  | DeleteCustomer
  | DeleteCustomerLoading
  | DeleteCustomerSuccess
  | DeleteCustomerFailure;

// Actions creator.

export const setDrawerAddEditCustomer = (open: boolean, id: number | null): SetDrawerAddEditCustomerRequested => ({
  type: ActionTypes.SET_DRAWER_ADD_EDIT_CUSTOMER_REQUESTED,
  payload: { open, id },
});

export const setDialogDetaiLCustomer = (open: boolean, id: number | null): SetDialogDetailCustomer => ({
  type: ActionTypes.SET_DIALOG_DETAIL_CUSTOMER,
  payload: { open, id },
});

/** fetch customer list */
export const fetchCustomerListRequest = (payload?: Record<string, string>): FetchingCustomerList | AnyAction => ({
  type: ActionTypes.FETCHING_CUSTOMER_LIST_REQUESTED,
  payload,
});
export const fetchCustomerListLoading = (): FetchingCustomerListLoading => ({
  type: ActionTypes.FETCHING_CUSTOMER_LIST_LOADING,
});
export const fetchingCustomerListFailure = (): FetchingCustomerListFailure => ({
  type: ActionTypes.FETCHING_CUSTOMER_LIST_FAILURE,
});
export const fetchingCustomerListSuccess = (payload: ResponseListCustomer): FetchingCustomerListSuccess => ({
  type: ActionTypes.FETCHING_CUSTOMER_LIST_SUCCESS,
  payload,
});

/** fetch customer by id */
export const fetchCustomer = (payload: string): FetchingCustomer => ({
  type: ActionTypes.FETCHING_CUSTOMER_REQUESTED,
  payload,
});
export const fetchingCustomerLoading = (): FetchingCustomerLoading => ({
  type: ActionTypes.FETCHING_CUSTOMER_LOADING,
});
export const fetchingCustomerFailure = (): FetchingCustomerFailure => ({
  type: ActionTypes.FETCHING_CUSTOMER_FAILURE,
});
export const fetchingCustomerSuccess = (payload: Customer): FetchingCustomerSuccess => ({
  type: ActionTypes.FETCHING_CUSTOMER_SUCCESS,
  payload,
});

/** create customer */
export const createCustomerRequest = (payload: CustomerModel): CreateCustomer => ({
  type: ActionTypes.CREATE_CUSTOMER_REQUESTED,
  payload,
});
export const createCustomerLoading = (): CreateCustomerLoading => ({
  type: ActionTypes.CREATE_CUSTOMER_LOADING,
});
export const createCustomerFailure = (): CreateCustomerFailure => ({
  type: ActionTypes.CREATE_CUSTOMER_FAILURE,
});
export const createCustomerSuccess = (payload: Customer): CreateCustomerSuccesss => ({
  type: ActionTypes.CREATE_CUSTOMER_SUCCESS,
  payload,
});

/** update customer */
export const updateCustomerRequest = (id: string, body: CustomerModel): UpdateCustomer => ({
  type: ActionTypes.UPDATE_CUSTOMER_REQUESTED,
  payload: { id, body },
});
export const updateCustomerLoading = (): UpdateCustomerLoading => ({
  type: ActionTypes.UPDATE_CUSTOMER_LOADING,
});
export const updateCustomerFailure = (): UpdateCustomerFailure => ({
  type: ActionTypes.UPDATE_CUSTOMER_FAILURE,
});
export const updateCustomerSuccess = (payload: Customer): UpdateCustomerSuccess => ({
  type: ActionTypes.UPDATE_CUSTOMER_SUCCESS,
  payload,
});

/** delete customer */
export const deleteCustomerRequest = (payload: string): DeleteCustomer => ({
  type: ActionTypes.DELETE_CUSTOMER_REQUESTED,
  payload,
});
export const deleteCustomerLoading = (): DeleteCustomerLoading => ({
  type: ActionTypes.DELETE_CUSTOMER_LOADING,
});
export const deleteCustomerFailure = (): DeleteCustomerFailure => ({
  type: ActionTypes.DELETE_CUSTOMER_FAILURE,
});
export const deleteCustomerSuccess = (): DeleteCustomerSuccess => ({
  type: ActionTypes.DELETE_CUSTOMER_SUCCESS,
});
