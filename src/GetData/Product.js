export const getCategoryByParentId = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}category/parent_id/${id}`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
}

export const getProductByParentId = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}product/category_id/${id}`, {
        method: "GET",
    });
    const result = await response.json();

    return result;
}


export const addProduct = async (data) => {

    console.log("data is ",data)
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DATA}product`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({"name":data.name,
        "image":data.image,
        "quantity":data.quantity,
        "warehouse_id":data.warehouse_id,
        "sku_id":data.sku_id,
        "price":data.price,
        "category_id":data.category_id})
    });
    const result = await response.json();


    return result;
}