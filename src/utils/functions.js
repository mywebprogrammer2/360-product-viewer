export const FormIkErrorHandler = (errors, setFieldError) => {
    if (errors) {
        Object.keys(errors).forEach((field) => {
            setFieldError(field, errors[field][0]);
        });
    } else {
        console.error(error);
    }
}
export const getFromLocalStorage = (key) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return localStorage.getItem(key)
}