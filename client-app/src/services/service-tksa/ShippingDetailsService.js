import axios from "axios";

const SHIPPING_DETAILS_BASE_URL = "http://localhost:8080/api/v2/shippingDetils";

class ShippingDetailsService{
    getShippingDetails(){
        return axios.get(SHIPPING_DETAILS_BASE_URL);
    }
}

export default new ShippingDetailsService;
