import { Action } from '@ngrx/store';
import { Offer } from '../../models/offer';


export enum ActionTypes {
    LOAD_REQUEST = '[Offer] Load Request',
    LOAD_FAILURE = '[Offer] Load Failure',
    LOAD_SUCCESS = '[Offer] Load Success',

    ADD_OFFER = '[Offer] Add Offer',
    ADD_OFFER_SUCCESS = '[Offer] Add Offer Success',
    ADD_OFFER_FAILURE = '[Offer] Add Offer Failure',
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: { offeredInstructorIds: string[] }) { }
}

export class AddOffer implements Action {
    readonly type = ActionTypes.ADD_OFFER;
    constructor(public payload: { offer: Offer }) { }
}

export class AddOfferSuccess implements Action {
    readonly type = ActionTypes.ADD_OFFER_SUCCESS;
    constructor(public payload: { offeredInstructorId: string }) { }
}

export class AddOfferFailureAction implements Action {
    readonly type = ActionTypes.ADD_OFFER_FAILURE;
    constructor(public payload: { error: string }) { }
}

export type OfferActions = LoadRequestAction | LoadFailureAction | LoadSuccessAction | AddOffer | AddOfferSuccess | AddOfferFailureAction;
