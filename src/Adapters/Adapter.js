import React, {useState, useEffect} from 'react';
import axios from './axios';

import UserProductContainer from "../Components/UserProductContainer"


export default function ProductsAdapter({fetchProducts, userProducts, strains, token, displayItemForEdit, editProducts, displayItemForDelete}){



    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchProducts, {
  headers: {
    'Authorization': token
  }
})
            console.log(request, "this is the adapter speaking");
            setProducts(request.data)
            return request;
        }
        fetchData();


    }, [fetchProducts]);



    if (products === null) {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    } else {
     return <UserProductContainer fromAdpater="yes" displayItemForDelete={displayItemForDelete} displayItemForEdit={displayItemForEdit} editProducts={editProducts} products={products} strains={strains} token={token}/>
    }
}
