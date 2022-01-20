import React, {useState, useEffect} from 'react';
import axios from './axios';

import UserProductContainer from "../Components/UserProductContainer"
import UserShopContainer from "../Components/UserShopContainer"


export const ProductsAdapter = ({fetchProducts, userProducts, strains, token, displayItemForEdit, editProducts, displayItemForDelete, storeproducts}) => {



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
     return <UserProductContainer fromAdpater="yes" storeproducts={storeproducts} displayItemForDelete={displayItemForDelete} displayItemForEdit={displayItemForEdit} editProducts={editProducts} products={products} strains={strains} token={token}/>
    }
}

export const StoresAdapter = ({fetchStores, user, token, displayStoreForEdit, deleteStoreRequest, displayStoreForDelete, handleViewStoreProfile}) => {

    const [stores, setStores] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchStores, {
  headers: {
    'Authorization': token
  }
})
            console.log(request, "this is the adapter speaking");
            setStores(request.data)
            return request;
        }
        fetchData();

    }, [fetchStores]);



    if (stores === null) {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    } else {
     return <UserShopContainer fromAdpater="yes" handleViewStoreProfile={handleViewStoreProfile} displayStoreForEdit={displayStoreForEdit} deleteStoreRequest={deleteStoreRequest} user={user} stores={stores} />
    }
}
