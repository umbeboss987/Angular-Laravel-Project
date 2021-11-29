import { Actions, ofType,createEffect } from '@ngrx/effects';
import { Address } from "src/app/model/Address";
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map , mergeMap} from 'rxjs/operators';
import { AddressService } from 'src/app/services/address.service';
import { CreateAddressAction, CreateAddressActionSuccess, GetAddressAction, GetAddressActionSuccess, GetAddressByIdAction, GetAddressByIdActionSuccess, UpdateAddressAction, UpdateAddressActionSuccess } from '../actions/address.actions';

@Injectable ()


export class AccountEffects{

    constructor(private actions$ : Actions, private account_service : AddressService){}

    addAddress$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(CreateAddressAction),
            mergeMap((action) => {
                return this.account_service.addAddress(action.address).pipe(
                    map((data) => {
                        return CreateAddressActionSuccess({ address: action.address});
                    })
                );
            })
        );
    });

    getDetailsAddress$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetAddressAction),
            mergeMap(() => {
                return this.account_service.getUserAddress().pipe(
                    map((data) => {
                        return GetAddressActionSuccess({ address: data});
                    })
                );
            })
        );
    });

    updateAddress$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(UpdateAddressAction),
            mergeMap((data) => {
                return this.account_service.updateAddress(data.address).pipe(
                    map((data) => {
                        return UpdateAddressActionSuccess({ address: data});
                    })
                );
            })
        );
    });

    getAddressById$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetAddressByIdAction),
            mergeMap((data) => {
                return this.account_service.getAddressById(data.id).pipe(
                    map((data) => {
                        return GetAddressByIdActionSuccess({ address: data});
                    })
                );
            })
        );
    });


}