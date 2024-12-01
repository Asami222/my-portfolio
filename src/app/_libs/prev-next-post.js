export function prevNextPost(allIds,currentId) {
    const numberOfPosts = allIds.length
    const index = allIds.findIndex(
        (content) => content.id === currentId,
    )
    const prevPost = 
    index + 1 === numberOfPosts
    ? {id: ''}
    : allIds[index + 1]

    const nextPost = 
    index === 0
    ? {id: ''}
    : allIds[index - 1]

    return [prevPost, nextPost]
}


