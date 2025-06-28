import {defineQuery} from 'next-sanity'

/**
 * Returns the 20 most‑recent published posts that have a slug.
 * ⚠️ If you draft‑preview, 'perspective' is handled later when we call sanityFetch.
 */
export const postListQuery = defineQuery(/* groq */ `
  *[_type == "post" && defined(slug.current)]
    | order(publishedAt desc)[0...20]{
      _id,
      title,
      slug,
      excerpt,
      cover      {
        asset->{
          _id,
          url
        }
      },
      publishedAt
    }
`)
