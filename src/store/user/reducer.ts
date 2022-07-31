import { LaravelPaginationLinks, LaravelPaginationMeta } from '@/interfaces/laravel-pagination';
import { RolePermission } from '@/interfaces/role';
import { User } from '@/interfaces/user';

import { UserAction } from './actions';
import ActionTypes from './enum';
import moment from 'moment';

export interface UserState {
  listUser: {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    data?: User[];
    meta?: LaravelPaginationMeta;
    links?: LaravelPaginationLinks;
    lastFetched?: Date;
  };

  detail: {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    data: User | null;
  };

  // dialogAddEdit: {
  //   open: boolean;
  //   id: number | null;
  // };
  //
  // dialogDetail: {
  //   open: boolean;
  //   id: number | null;
  // };

  createUser: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    customer: User | null;
  };

  updateUser: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    customer: User | null;
  };

  deleteUser: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  };

  // dialogUserPermissions: {
  //   open: boolean;
  //   userName: string | null;
  //   permissions: RolePermission[] | null;
  // };
}

const initialState = {
  listUser: {
    isFetching: false,
    isError: false,
    isSuccess: false,
    data: [],
    meta: undefined,
    links: undefined,
    lastFetched: undefined,
  },

  detail: {
    isFetching: false,
    isError: false,
    isSuccess: false,
    data: null,
  },

  // dialogAddEdit: {
  //   open: false,
  //   id: null,
  // },

  // dialogDetail: {
  //   open: false,
  //   id: null,
  // },

  createUser: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    customer: null,
  },

  updateUser: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    customer: null,
  },

  deleteUser: {
    isLoading: false,
    isError: false,
    isSuccess: false,
  },

  // dialogUserPermissions: {
  //   open: false,
  //   userName: null,
  //   permissions: null,
  // },
};

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    // fetch list user.
    case ActionTypes.FETCHING_USER_LIST_LOADING:
      return {
        ...state,
        listUser: {
          ...state.listUser,
          isFetching: true,
          isError: false,
          isSuccess: false,
        },
      };
    case ActionTypes.FETCHING_USER_LIST_FAILURE:
      return {
        ...state,
        listUser: {
          ...state.listUser,
          isFetching: false,
          isError: true,
          isSuccess: false,
        },
      };
    case ActionTypes.FETCHING_USER_LIST_SUCCESS:
      return {
        ...state,
        listUser: {
          ...state.listUser,
          isFetching: false,
          isError: false,
          isSuccess: true,

          /**
           * data
           * links
           * meta
           */
          ...action.payload,
          lastFetched: moment(new Date()).toDate(),
        },
      };

    // // set drawer add or edit user
    // case ActionTypes.SET_DIALOG_ADD_EDIT_USER:
    //   return {
    //     ...state,
    //     dialogAddEdit: {
    //       open: action.payload.open,
    //       id: action.payload.id ?? null,
    //     },
    //   };
    //
    // // set dialog detail user
    // case ActionTypes.SET_DIALOG_DETAIL_USER:
    //   return {
    //     ...state,
    //     dialogDetail: {
    //       open: action.payload.open,
    //       id: action.payload.id ?? null,
    //     },
    //   };

    // fetch user by id
    case ActionTypes.FETCHING_USER_LOADING:
      return {
        ...state,
        detail: {
          isFetching: true,
          isError: false,
          isSuccess: false,
          data: null,
        },
      };
    case ActionTypes.FETCHING_USER_FAILURE:
      return {
        ...state,
        detail: {
          isFetching: false,
          isError: true,
          isSuccess: false,
          data: null,
        },
      };
    case ActionTypes.FETCHING_USER_SUCCESS:
      return {
        ...state,
        detail: {
          isFetching: false,
          isError: false,
          isSuccess: true,
          data: action.payload,
        },
      };

    // create user
    case ActionTypes.CREATE_USER_LOADING:
      return {
        ...state,
        createUser: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        createUser: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          customer: action.payload,
        },
      };

    // update user
    case ActionTypes.UPDATE_USER_LOADING:
      return {
        ...state,
        updateUser: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        updateUser: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          customer: null,
        },
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUser: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          customer: action.payload,
        },
      };

    // delete user
    case ActionTypes.DELETE_USER_LOADING:
      return {
        ...state,
        deleteUser: {
          isLoading: true,
          isError: false,
          isSuccess: false,
        },
      };
    case ActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUser: {
          isLoading: false,
          isError: true,
          isSuccess: false,
        },
      };
    case ActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUser: {
          isLoading: false,
          isError: false,
          isSuccess: true,
        },
      };

    // case ActionTypes.SET_DIALOG_PERMISSIONS_USER:
    //   return {
    //     ...state,
    //     dialogUserPermissions: {
    //       open: action.payload.open,
    //       userName: action.payload.userName,
    //       permissions: action.payload.permissions,
    //     },
    //   };
    default:
      return state;
  }
};
