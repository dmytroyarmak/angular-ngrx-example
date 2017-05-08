import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD = '[Followers] Load';
export const LOAD_SUCCESS = '[Followers] Load Success';
export const LOAD_FAIL = '[Followers] Load Fail';


export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: {login: string}) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: {login: string, followers: User[]}) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: {login: string}) { }
}

export type Actions =
  LoadAction |
  LoadSuccessAction |
  LoadFailAction;
