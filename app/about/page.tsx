export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)] about-page">
      <main className="max-w-xl w-full flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-lg text-center">
          Hi! I’m a passionate software engineer with experience in building modern web applications using React, Next.js, and other technologies.
        </p>
        <p className="text-base text-center">
          I enjoy solving complex problems, learning new tools, and collaborating with others to create impactful digital experiences. 
        </p>
        <p className="text-base text-center">
          Feel free to explore my portfolio and reach out if you’d like to connect!
        </p>
      </main>
    </div>
  );
}