export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  cover?: { asset: { url: string } }
  publishedAt: string
}
