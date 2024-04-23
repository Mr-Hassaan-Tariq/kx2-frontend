
export const getCatagoryRecord = async () => {

    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}category`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
}
export const addCatagoryRecord = async (id,data) => {

    const response = await fetch( `${process.env.REACT_APP_BACKEND_DATA}category`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'name':data.name,'parent_id':id})
    });
    const result = await response.json();


    return result;
}