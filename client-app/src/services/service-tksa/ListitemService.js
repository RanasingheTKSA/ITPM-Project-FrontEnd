import axios from'axios';

const ITEM_API_BASE_URL="http://localhost:8090/api/v1/additems";
class ListItemService{

    getAddItems(){
        return axios.get(ITEM_API_BASE_URL);
    }
    createAdditem(additem){
        return axios.post(ITEM_API_BASE_URL,additem);
    }
    getAddItemById(additemId){
        return axios.get(ITEM_API_BASE_URL + '/'+ additemId);
    }
    updateAddItem(additem,additemId){
         return axios.put(ITEM_API_BASE_URL + '/'+ additemId,additem);
    }
    deleteAdditem(additemId){
        return axios.delete(ITEM_API_BASE_URL + '/'+ additemId);
}
}

export default new ListItemService()