export const addToast = () => {
    return {
        type: "ADD_TOAST",
        payload: {
            id: Math.random(),
            message: Math.random()
        }
    }
}

export const removeToast = (index) => {
    return {
        type: "REMOVE_TOAST",
        payload: index
    }
}

