import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as offerActions from './actions';
import { FakeBackendService } from '../../service/fake-backend.service';

@Injectable()
export class OfferStoreEffects {
    constructor(private backendService: FakeBackendService, private actions$: Actions) { }

    @Effect()
    loadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<offerActions.LoadRequestAction>(
            offerActions.ActionTypes.LOAD_REQUEST
        ),
        startWith(new offerActions.LoadRequestAction()),
        switchMap(action =>
            this.backendService
                .getOfferedInstructorIds()
                .pipe(
                    map(
                        items =>
                            new offerActions.LoadSuccessAction({
                                offeredInstructorIds: items
                            })
                    ),
                    catchError(error =>
                        observableOf(new offerActions.LoadFailureAction({ error }))
                    )
                )
        )
    );


    @Effect()
    addOfferEffect$: Observable<Action> = this.actions$.pipe(
        ofType<offerActions.AddOffer>(
            offerActions.ActionTypes.ADD_OFFER
        ),
        switchMap(action =>
            this.backendService
                .createOffer(action.payload.offer)
                .pipe(
                    map(
                        item =>
                            new offerActions.AddOfferSuccess({
                                offeredInstructorId: item.instructor_id
                            })
                    ),
                    catchError(error =>
                        observableOf(new offerActions.AddOfferFailureAction({ error }))
                    )
                )
        )
    );
}
