
export interface State {
    offeredInstructorIds: string[];
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = {
    offeredInstructorIds: [] as string[],
    isLoading: false,
    error: null
};

