import {defineQuery} from 'next-sanity'

/**
 * Fetch exactly one post by its slug.
 */
export const postBySlugQuery = defineQuery(/* groq */ `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    cover { asset->{ url } },
    body,
    publishedAt
  }
`)
