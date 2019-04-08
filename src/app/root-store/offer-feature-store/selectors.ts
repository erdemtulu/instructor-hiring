import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';


import { State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getOfferedInstructorIds = (state: State): any => state.offeredInstructorIds;





export const selectOfferStoreState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('offers');

export const selectOfferStoreError: MemoizedSelector<object, any> = createSelector(
    selectOfferStoreState,
    getError
);

export const selectOfferStoreIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selectOfferStoreState, getIsLoading);


export const selectOfferStoreOfferedInstructorIds: MemoizedSelector<
    object,
    string[]
    > = createSelector(selectOfferStoreState, getOfferedInstructorIds);

