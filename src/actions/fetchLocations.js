export const fetchLocations = () => {
    return (dispatch) => {

        dispatch({ type: 'LOADING_LOCATIONS' })
        fetch('http://localhost:3000/api/v1/locations')
        .then(response => response.json())
        .then(responseJSON => {
            const locations = responseJSON.data.map(location => {
                return location.attributes
            });
            return dispatch({ type: 'ADD_LOCATIONS', locations})
        })
    }
}

