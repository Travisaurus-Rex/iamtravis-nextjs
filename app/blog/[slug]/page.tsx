import { PortableText } from '@portabletext/react';
import { client } from '../../../sanity/lib/client';
import CodeBlock from '@/app/_components/utils/CodeBlock';
import Image from 'next/image';

const ptComponents = {
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
  // Add other fields you need
}`;


export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)] blog-page">
      <main className="mx-auto max-w-3xl space-y-12 py-16">
      <h1>{post.title}</h1>
      <PortableText value={post.body} components={ptComponents}/>
    </main>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`);
  return slugs.map((slug) => ({ slug }));
}