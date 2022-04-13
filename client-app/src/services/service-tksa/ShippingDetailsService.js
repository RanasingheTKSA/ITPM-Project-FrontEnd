import axios from "axios";

const SHIPPING_DETAILS_BASE_URL = "http://localhost:8080/api/v2/shippingDetails";

class ShippingDetailsService{
    getShippingDetails(){
        return axios.get(SHIPPING_DETAILS_BASE_URL);
    }

    addShippingDetails( shippingDetails ){
        return axios.post(SHIPPING_DETAILS_BASE_URL, shippingDetails)
    }

    getShippingDetailsById(shippingID){
        return axios.get(SHIPPING_DETAILS_BASE_URL + '/' + shippingID);
    }

    updateShippingAddress(shippingDetails, shippingID){
        return axios.put(SHIPPING_DETAILS_BASE_URL + '/' + shippingID, shippingDetails);
    }
   
}

export default new ShippingDetailsService;
