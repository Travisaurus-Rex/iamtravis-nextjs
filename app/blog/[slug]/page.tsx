"use server"

import { PortableText } from '@portabletext/react';
import { client } from '../../../sanity/lib/client';
import CodeBlock from '@/app/_components/utils/CodeBlock';
import Image from 'next/image';

const components = {
  block: {
    // Ex. 1: customizing common block types
    h3: ({children}) => <h3 className="text-2xl mt-10 mb-5">{children}</h3>,
    normal: ({children}) => <p className="mb-4">{children}</p>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          height={value.height || 500}
          width={value.width || 500}
          src={value}
          style={{
            width: '100%',
            marginBottom: '24px',
          }}
        />
      )
    },
    code: ({ value }: any) => {
      return <CodeBlock value={value} />
    },
  },
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  "authorName": author->name,
  "imageUrl": mainImage.asset->url,
  publishedAt,
}`;


export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }
  
  const dateObj = new Date(post.publishedAt);
  const monthName = dateObj.toLocaleString('default', { month: 'long' });
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)] blog-page">
      <main className="mx-auto max-w-3xl space-y-12 py-16">
      <h1 className="text-6xl font-bold">{post.title}</h1>
      <Image 
        src={post.imageUrl} 
        alt="Main image"
        width={800}
        height={300} />
      <div className="text-3xl mb-0">written by {post.authorName}</div>
      <div className="text-lg">{monthName} {date}, {year}</div>
      <PortableText value={post.body} components={components}/>
    </main>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`);
  return slugs.map((slug) => ({ slug }));
}