import { MetadataRoute } from "next";
import { getAllCategoryList, getAllBlogList } from "./_libs/microcms";

const buildUrl = (path) => `https://asami-portfolio.vercel.app${path ?? ""}`;

export default async function sitemap() {
    const blogContents = await getAllBlogList();
    const categoryContents = await getAllCategoryList();

    const blogUrls = 
    blogContents.map((content) => ({
        url: buildUrl(`/blog/${content.id}`),
        lastModified: content.revisedAt,
    }));
    const categoryUrls = 
    categoryContents.map((content) => ({
        url: buildUrl(`/blog/category/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const now = new Date();

    return [
        {
            url: buildUrl(),
            lastModified: now,    
        },
        {
            url: buildUrl("/projects"),
            lastModified: now,    
        },
        {
            url: buildUrl("/illusts"),
            lastModified: now,    
        },
        {
            url: buildUrl("/blog"),
            lastModified: now,    
        },
        {
            url: buildUrl("/about"),
            lastModified: now,    
        },
        {
            url: buildUrl("/contact"),
            lastModified: now,    
        },
        ...blogUrls,
        ...categoryUrls,
    ];
}