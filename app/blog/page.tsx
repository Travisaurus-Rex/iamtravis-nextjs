import Link            from 'next/link'
import Image           from 'next/image'
import {draftMode}     from 'next/headers'
import { sanityFetch } from '@/sanity/lib/live'
import { postListQuery } from '@/sanity/lib/queries/postListQuery'
import { Post } from '../types/post'

export const revalidate = 60   // ISR: regenerate after 1 min

export default async function Blog() {
  // Enable previews if you're looking at a draft
  const {isEnabled} = await draftMode()

  const {data: posts} = await sanityFetch({
    query:       postListQuery,
    perspective: isEnabled ? 'previewDrafts' : 'published',
  })

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)] blog-page">
      <main className="mx-auto max-w-3xl space-y-12 py-16">
        {posts.map((post: Post) => (
          <article key={post._id} className="space-y-4">
            {post.cover?.asset?.url && (
              <Link href={`/posts/${post.slug.current}`}>
                <Image
                  src={post.cover.asset.url + '?w=800&auto=format'}
                  alt=""
                  width={800}
                  height={450}
                  priority
                  className="rounded-lg"
                />
              </Link>
            )}

            <h2 className="text-2xl font-semibold">
              <Link href={`/posts/${post.slug.current}`}>{post.title}</Link>
            </h2>

            {post.excerpt && <p className="text-muted-foreground">{post.excerpt}</p>}

            <p className="text-sm opacity-70">
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                dateStyle: 'long',
              })}
            </p>
          </article>
        ))}
      </main>
    </div>
  )
}
