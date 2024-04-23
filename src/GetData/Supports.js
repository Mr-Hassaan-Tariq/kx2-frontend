
export const getAdditionalSupport = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}additional-support
        `, {
        method: "GET",
    });
    const result = await response.json();

    return result;
}