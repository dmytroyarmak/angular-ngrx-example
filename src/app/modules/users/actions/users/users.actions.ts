import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD = '[Users] Load';
export const LOAD_SUCCESS = '[Users] Load Success';
export const LOAD_FAIL = '[Users] Load Fail';


export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: {users: User[]}) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor() { }
}

export type Actions =
  LoadAction |
  LoadSuccessAction |
  LoadFailAction;
