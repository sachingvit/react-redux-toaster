const toastList = {
    toast: [
    ]
};

export default (state = toastList, { type, payload }) => {
    switch (type) {
        case "ADD_TOAST":
            return {
                ...state,
                toast: [
                    payload,
                    ...state.toast
                ]
            };
        case "REMOVE_TOAST":
            const updatedToast = Object.assign([], state.toast);
            updatedToast.splice(payload, 1);
            return {
                ...state,
                toast: updatedToast
            };

        default:
            return state;
    }
}