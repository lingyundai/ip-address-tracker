const geoInitalState = {
    loading: false,
    data: [],
    error: '',
}

const geoReducer = (state = geoInitalState, action) => {
    switch(action.type) {
        case FETCH_GEO_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_GEO_SUCCEEDED:
            return {
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_GEO_FAILED:
            return {
                loading: false,
                data: [],
                error: action.payload,
            }
    }
}