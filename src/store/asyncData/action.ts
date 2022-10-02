export enum AsyncActions {
  ADD_COUNT = "ADD_COUNT",
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
}

export const addCount = () => ({
  type: AsyncActions.ADD_COUNT,
});

export const fetchUser = () => ({
  type: AsyncActions.FETCH_USER,
});

export const fetchUserSuccess = (response: any) => ({
  type: AsyncActions.FETCH_USER_SUCCESS,
  payload: { response },
});

export const fetchUserFailure = (error: any) => ({
  type: AsyncActions.FETCH_USER_FAILURE,
  payload: { error },
});
