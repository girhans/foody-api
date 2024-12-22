/**
 * Build request data for the API call.
 * @param {number} latitude - The latitude.
 * @param {number} longitude - The longitude.
 * @returns {Object} The request data object.
 */
export const buildRequestData = (latitude, longitude) => {
    const filter = {
        partner_types: [2],
        rating_score_min: 4,
        rating_score_max: 5,
        store_tags: [],
        store_tags_logic: 1,
        store_categories_logic: 1,
        dish_tags: [],
        is_pickup_supported: 0,
    };

    const algo_property = JSON.stringify({
        circle_id: "90116",
        display_name: "Sekitarmu",
        city_id: 101380696896948,
        location: 0,
        PageType: "foody_home",
        PageSection: "",
        TargetType: "home_circle",
    });

    return {
        longitude,
        latitude,
        page_num: 1,
        page_size: 20,
        filter,
        need_group_stores: true,
        collection_publish_id: "",
        content_id: "83785",
        source: 2,
        algo_property,
        listing_type: 1,
        from_source: "",
        sub_content_ids: null,
        is_quick_filter_enabled: true,
        quick_filter_ids: ["16", "12", "15", "11", "19"],
        is_first_entry: true,
        business_type: 1,
    };
};
