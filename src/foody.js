import axios from "axios";
import UserAgent from "user-agents";
import { parseCoordinates } from "./utils/parseCoordinates.js";
import { buildRequestData } from "./utils/buildRequestData.js";

export default class Foody {
    constructor() {
        this.baseURL = "https://foody.shopee.co.id/api";
        this.userAgent = new UserAgent({ deviceCategory: "mobile" });
        this.headers = {
            "User-Agent": this.userAgent.toString(),
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    getRestaurantUrl() {
        return `${this.baseURL}/buyer/listing-detail`;
    }

    async getRestaurant(latlng) {
        try {
            const url = this.getRestaurantUrl();
            const { latitude, longitude } = parseCoordinates(latlng);
            const requestData = buildRequestData(latitude, longitude);
            const response = await axios.post(url, requestData, {
                headers: this.headers,
            });
            return response.data.data.store_cards;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
