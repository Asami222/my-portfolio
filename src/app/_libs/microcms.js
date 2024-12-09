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

export const getBlogDetail = async (contentId, queries) => {
    const detailData = await client.getListDetail({
        endpoint: "blog",
        contentId,
        queries,
    });
    return detailData;
};

export const getAllContentsIDAndTitle = async (limit = 100, offset = 0) => {
    const data = await client.get({
      endpoint: 'blog',
      queries: { limit: limit, offset: offset, fields: 'id,title' },
    })

    if (data.offset + data.limit < data.totalCount) {
        const contents = await getAllContentsIDAndTitle(
          data.limit,
          data.offset + data.limit,
        )
        return [...data.contents, ...contents]
      } 
      return data.contents
}

export const getCategoryDetail = async( contentId, queries) => {
    const detailData = await client.getListDetail({
        endpoint: "categories",
        contentId,
        queries,
    });
    return detailData;
};

export const getAllBlogList = async() => {
    const listData = await client.getAllContents({
        endpoint: "blog",
    });
    return listData;
}

export const getAllCategoryList = async() => {
    const listData = await client.getAllContents({
        endpoint: "categories",
    });
    return listData;
};
