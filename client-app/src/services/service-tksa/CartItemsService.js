import axios from "axios";

const CART_ITEM_BASE_URL = "http://localhost:8080/api/v1/cartModels";

class CartItemsService {
    getCartItems(){
        return axios.get(CART_ITEM_BASE_URL);
    }

    deleteCartItem(cardItemId){
        return axios.delete(CART_ITEM_BASE_URL + '/' + cardItemId);
    } 

}

export default new CartItemsService;