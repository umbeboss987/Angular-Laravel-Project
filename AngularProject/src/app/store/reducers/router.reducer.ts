import {ActivatedRouteSnapshot} from "@angular/router";
import {Action} from "@ngrx/store";


interface BaseRouterStoreState {
    url: string
  }


enum RouterState {
    Full,
    Minimal
}

interface SerializedRouterStateSnapshot extends BaseRouterStoreState {
    root: ActivatedRouteSnapshot
    url: string
}

type RouterReducerState<T extends BaseRouterStoreState = SerializedRouterStateSnapshot> = {
    state: T;
    navigationId: number;
};


export function routerReducer<RouterState extends BaseRouterStoreState = SerializedRouterStateSnapshot, Result = RouterReducerState<RouterState>>(state: Result, action: Action): Result