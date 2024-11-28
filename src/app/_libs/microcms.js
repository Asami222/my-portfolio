import { createClient } from "microcms-js-sdk";

if(!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if(!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async(queries) => {
    const listData = await client
    .getList({
        endpoint: "blog",
        queries,
    });
    return listData;
};
