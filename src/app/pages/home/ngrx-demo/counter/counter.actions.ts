/**
 * Created by JetBrains WebStorm.
 * Author: zzh
 * Date: 19-2-18
 * Time: 下午5:22
 * Desc:
 */
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[Counter Component] Reset',
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}
