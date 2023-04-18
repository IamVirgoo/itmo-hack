import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import * as info from "../slices/location";

import * as meta from '../devtools/meta'

export const DataMiddleware = createApi({
    reducerPath: "data-middleware",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: meta.url
        }),
    endpoints: (builder) => (
        {
            location: builder.query<info.Location, Partial<info.Location>>({
                query: ({...location})  => ({
                    url : meta.url,
                    method : "POST",
                    mode : "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + meta.token
                    },
                    body : JSON.stringify(location)
                })
            })
        }),
});

export const dataApi = DataMiddleware.endpoints.location;
