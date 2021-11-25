import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Address } from "src/app/model/Address";
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map , mergeMap} from 'rxjs/operators';
import { AccountService } from 'src/app/services/address.service';
import { CreateAddressAction, CreateAddressActionSuccess, GetDetailsAddressAction, GetDetailsAddressActionSuccess, UpdateAddressAction, UpdateAddressActionSuccess } from '../actions/address.actions';

@Injectable ()


export class AccountEffects{

    constructor(private actions$ : Actions, private account_service : AccountService){}

    AddAddress$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(CreateAddressAction),
            mergeMap((action) => {
                return this.account_service.addAccount(action.account).pipe(
                    map((data) => {
                        return CreateAddressActionSuccess({ account: action.account});
                    })
                );
            })
        );
    });

    getDetailsAddress$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetDetailsAddressAction),
            mergeMap(() => {
                return this.account_service.getDetailsAccount().pipe(
                    map((data) => {
                        return GetDetailsAddressActionSuccess({ account: data});
                    })
                );
            })
        );
    });

    updateAddress$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(UpdateAddressAction),
            mergeMap((data) => {
                console.log(data.account);
                return this.account_service.updateAccount(data.account).pipe(
                    map((data) => {
                        return UpdateAddressActionSuccess({ account: data});
                    })
                );
            })
        );
    });
}