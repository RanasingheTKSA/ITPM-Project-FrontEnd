import axios from "axios";

const CARD_PAYMENT_DETAILS_BASE_URL =
  "http://localhost:8080/api/v3/cardDetails";

class CardPaymentDetailsService {
  getCardDetails() {
    return axios.get(CARD_PAYMENT_DETAILS_BASE_URL);
  }

  addCardDetails(cardDetails) {
    return axios.post(CARD_PAYMENT_DETAILS_BASE_URL, cardDetails);
  }

  getCardDetailsById(cardPaymentID) {
    return axios.get(CARD_PAYMENT_DETAILS_BASE_URL + "/" + cardPaymentID);
  }

  updateCardDetail(cardDetails, cardPaymentID) {
    return axios.put(
      CARD_PAYMENT_DETAILS_BASE_URL + "/" + cardPaymentID,
      cardDetails
    );
  }
}

export default new CardPaymentDetailsService();
