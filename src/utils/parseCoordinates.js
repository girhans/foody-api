export const parseCoordinates = (coordinateString) => {
    const [latitude, longitude] = coordinateString.split(",");
    return {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
    };
};
