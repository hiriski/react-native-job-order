import { AnyAction } from 'redux';

import ActionTypes from './enum';
import { RolePermission } from '@/interfaces/role';
import { ResponseListUser, User, UserModel } from '@/interfaces/user';

// Actions definiition

interface SetDialogAddEditUserRequested {
  type: typeof ActionTypes.SET_DIALOG_ADD_EDIT_USER_REQUESTED;
  payload: {
    open: boolean;
    id: number | null;
  };
}
interface SetDrawerAddEditUser {
  type: typeof ActionTypes.SET_DIALOG_ADD_EDIT_USER;
  payload: {
    open: boolean;
    id: number | null;
  };
}
interface SetDialogDetailUser {
  type: typeof ActionTypes.SET_DIALOG_DETAIL_USER;
  payload: {
    open: boolean;
    id: number | null;
  };
}
interface SetDialogPermissionsUser {
  type: typeof ActionTypes.SET_DIALOG_PERMISSIONS_USER;
  payload: {
    open: boolean;
    userName: string | null;
    permissions: RolePermission[] | null;
  };
}
interface FetchingUserList {
  type: typeof ActionTypes.FETCHING_USER_LIST_REQUESTED;
  payload?: Record<string, string>;
}
interface FetchingUserListLoading {
  type: typeof ActionTypes.FETCHING_USER_LIST_LOADING;
}
interface FetchingUserListFailure {
  type: typeof ActionTypes.FETCHING_USER_LIST_FAILURE;
}
interface FetchingUserListSuccess {
  type: typeof ActionTypes.FETCHING_USER_LIST_SUCCESS;
  payload: ResponseListUser;
}

interface FetchingUser {
  type: typeof ActionTypes.FETCHING_USER_REQUESTED;
  payload: number;
}
interface FetchingUserLoading {
  type: typeof ActionTypes.FETCHING_USER_LOADING;
}
interface FetchingUserFailure {
  type: typeof ActionTypes.FETCHING_USER_FAILURE;
}
interface FetchingUserSuccess {
  type: typeof ActionTypes.FETCHING_USER_SUCCESS;
  payload: User;
}

interface CreateUser {
  type: typeof ActionTypes.CREATE_USER_REQUESTED;
  payload: UserModel;
}
interface CreateUserLoading {
  type: typeof ActionTypes.CREATE_USER_LOADING;
}
interface CreateUserSuccesss {
  type: typeof ActionTypes.CREATE_USER_SUCCESS;
  payload: User;
}
interface CreateUserFailure {
  type: typeof ActionTypes.CREATE_USER_FAILURE;
}

interface UpdateUser {
  type: typeof ActionTypes.UPDATE_USER_REQUESTED;
  payload: {
    id: string;
    body: UserModel;
  };
}
interface UpdateUserLoading {
  type: typeof ActionTypes.UPDATE_USER_LOADING;
}
interface UpdateUserSuccess {
  type: typeof ActionTypes.UPDATE_USER_SUCCESS;
  payload: User;
}
interface UpdateUserFailure {
  type: typeof ActionTypes.UPDATE_USER_FAILURE;
}

interface DeleteUser {
  type: typeof ActionTypes.DELETE_USER_REQUESTED;
  payload: string;
}
interface DeleteUserLoading {
  type: typeof ActionTypes.DELETE_USER_LOADING;
}
interface DeleteUserFailure {
  type: typeof ActionTypes.DELETE_USER_FAILURE;
}
interface DeleteUserSuccess {
  type: typeof ActionTypes.DELETE_USER_SUCCESS;
}

// Union action types
export type UserAction =
  | SetDialogAddEditUserRequested
  | SetDrawerAddEditUser
  | SetDialogDetailUser
  | SetDialogPermissionsUser
  | FetchingUserList
  | FetchingUserListLoading
  | FetchingUserListFailure
  | FetchingUserListSuccess
  | FetchingUser
  | FetchingUserLoading
  | FetchingUserFailure
  | FetchingUserSuccess
  | CreateUser
  | CreateUserLoading
  | CreateUserSuccesss
  | CreateUserFailure
  | UpdateUser
  | UpdateUserLoading
  | UpdateUserSuccess
  | UpdateUserFailure
  | DeleteUser
  | DeleteUserLoading
  | DeleteUserSuccess
  | DeleteUserFailure;

// Actions creator.

export const setDialogAddEditUser = (open: boolean, id: number | null): SetDialogAddEditUserRequested => ({
  type: ActionTypes.SET_DIALOG_ADD_EDIT_USER_REQUESTED,
  payload: { open, id },
});

export const setDialogDetailUser = (open: boolean, id: number | null): SetDialogDetailUser => ({
  type: ActionTypes.SET_DIALOG_DETAIL_USER,
  payload: { open, id },
});

export const setDialogPermissionsUser = (
  open: boolean,
  userName: string | null,
  permissions: RolePermission[] | null,
): SetDialogPermissionsUser => ({
  type: ActionTypes.SET_DIALOG_PERMISSIONS_USER,
  payload: { open, userName, permissions },
});

/** fetch user list */
export const fetchUserListRequest = (payload?: Record<string, string>): FetchingUserList | AnyAction => ({
  type: ActionTypes.FETCHING_USER_LIST_REQUESTED,
  payload,
});
export const fetchingUserListLoading = (): FetchingUserListLoading => ({
  type: ActionTypes.FETCHING_USER_LIST_LOADING,
});
export const fetchingUserListFailure = (): FetchingUserListFailure => ({
  type: ActionTypes.FETCHING_USER_LIST_FAILURE,
});
export const fetchingUserListSuccess = (payload: ResponseListUser): FetchingUserListSuccess => ({
  type: ActionTypes.FETCHING_USER_LIST_SUCCESS,
  payload,
});

/** fetch user by id */
export const fetchUserRequest = (payload: number): FetchingUser => ({
  type: ActionTypes.FETCHING_USER_REQUESTED,
  payload,
});
export const fetchingUserLoading = (): FetchingUserLoading => ({
  type: ActionTypes.FETCHING_USER_LOADING,
});
export const fetchingUserFailure = (): FetchingUserFailure => ({
  type: ActionTypes.FETCHING_USER_FAILURE,
});
export const fetchingUserSuccess = (payload: User): FetchingUserSuccess => ({
  type: ActionTypes.FETCHING_USER_SUCCESS,
  payload,
});

/** create user */
export const createUserRequest = (payload: UserModel): CreateUser => ({
  type: ActionTypes.CREATE_USER_REQUESTED,
  payload,
});
export const createUserLoading = (): CreateUserLoading => ({
  type: ActionTypes.CREATE_USER_LOADING,
});
export const createUserFailure = (): CreateUserFailure => ({
  type: ActionTypes.CREATE_USER_FAILURE,
});
export const createUserSuccess = (payload: User): CreateUserSuccesss => ({
  type: ActionTypes.CREATE_USER_SUCCESS,
  payload,
});

/** update user */
export const updateUserRequest = (id: string, body: UserModel): UpdateUser => ({
  type: ActionTypes.UPDATE_USER_REQUESTED,
  payload: { id, body },
});
export const updateUserLoading = (): UpdateUserLoading => ({
  type: ActionTypes.UPDATE_USER_LOADING,
});
export const updateUserFailure = (): UpdateUserFailure => ({
  type: ActionTypes.UPDATE_USER_FAILURE,
});
export const updateUserSuccess = (payload: User): UpdateUserSuccess => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
  payload,
});

/** delete user */
export const deleteUserRequest = (payload: string): DeleteUser => ({
  type: ActionTypes.DELETE_USER_REQUESTED,
  payload,
});
export const deleteUserLoading = (): DeleteUserLoading => ({
  type: ActionTypes.DELETE_USER_LOADING,
});
export const deleteUserFailure = (): DeleteUserFailure => ({
  type: ActionTypes.DELETE_USER_FAILURE,
});
export const deleteUserSuccess = (): DeleteUserSuccess => ({
  type: ActionTypes.DELETE_USER_SUCCESS,
});
