# foody-sdk
unofficial nodejs shopeefood api

# Installing
using yarn
```bash
yarn add foody-sdk
```
using npm 
```bash
npm i foody-sdk
```

# Usage
using foody sdk
```js
const { Foody } = require('foody-sdk')

async function fetchRestaurantDetails(latlng) {
    const foody = new Foody();
    try {
        const restaurantDetails = await foody.getRestaurant(latlng);
        console.log(restaurantDetails);
    } catch (error) {
        console.error("Error fetching restaurant details:", error);
    }
}

const latlng = "-6.327988,106.8652313";
fetchRestaurantDetails(latlng);
