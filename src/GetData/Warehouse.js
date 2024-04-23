
export const getWarehouseData = async () => {

    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}warehouse`, {
        method: "GET",
    });
    const result = await response.json();

    return result.results.data;
}

export const insertWarehouseData = async (warehouse) =>{
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}warehouse`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(warehouse)
    });
    const json = await response.json();
    return json;
}