export const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
export const token = "65d121cda8718f5eda8cf0faf31dd3343a7a2335";
export const query = {
    lat: 52.604527,
    lon: 39.586688
};

export const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify(query)
}

