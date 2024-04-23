export const getEthnicRecord = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}ethnic-monitoring`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
}