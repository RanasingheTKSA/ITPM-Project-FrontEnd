import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";

class CustomerService {
    getCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    getCustomerById(customerID){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerID);
    }

    updateCustomer(customer,customerID){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerID,customer);
    }

    deleteCustomer(customerID){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerID);
    }
}

export default new CustomerService;