import Image from "next/image";
import Logo from "../_components/monogram/Logo";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e10] text-white">
      {/* --- HERO -------------------------------------------------- */}
      <section className="flex flex-col items-center px-8 pt-24 pb-20 text-center">
        <div className="w-24 h-24 hover:drop-shadow-[0_0_10px_#ed85ca] transition-all duration-300">
          <Logo />
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-bold">
          Travis Adams
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-300">
          Full‑stack engineer turning big ideas into clean, performant products —
          currently living and coding from Indonesia.
        </p>

        {/* subtle scroll cue */}
        <svg
          className="mt-14 w-6 animate-bounce opacity-70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#arrowGrad)"
          strokeWidth="2"
        >
          <defs>
            <linearGradient id="arrowGrad" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#ed85ca" />
              <stop offset="100%" stopColor="#78c6f2" />
            </linearGradient>
          </defs>
          <path d="M12 5v14m0 0l-5-5m5 5l5-5" />
        </svg>
      </section>

      {/* --- CONTENT SECTIONS ------------------------------------- */}
      <main className="flex flex-col items-center px-8">
        {/* developer journey */}
        <section
          id="indonesia"
          className="max-w-4xl w-full py-16 border-t border-[#15151a] grid gap-8 lg:grid-cols-2 items-center"
        >
          {/* text column */}
          <div>
            <span className="block w-32 h-0.5 gradient-bar mb-6"></span>
            <h2 className="section-heading">Life in Indonesia</h2>

            <p className="mt-4 leading-relaxed text-gray-300">
              In June 2025, my wife and I relocated to East Java, settling in a quiet mountain village
              surrounded by jungle, mist, and the occasional roaming cow. We made the move for the adventure,
              the scenery, and the space to live more deliberately.
              <br />
              <br />
              Day to day, I work remotely with U.S.-based teams from a fiber-connected home office. Living
              abroad has deepened my appreciation for asynchronous workflows, clear communication, and software
              that performs well—even on less-than-perfect networks.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
              <li>Timezone UTC+7 (Jakarta), flexible during work hours</li>
              <li>U.S. citizen · Dallas mailing address</li>
              <li>Permanent remote setup · fiber + 5G failover</li>
            </ul>
          </div>

          {/* image column */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/bromo.jpg"
              alt="Mount Bromo at sunrise"
              width={800}
              height={600}
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL="/images/bromo-blur.jpg" // optional: tiny blurred version
              priority
            />

          </div>
        </section>
        <section className="max-w-4xl w-full py-16 border-t border-[#15151a]">
          <span className="block w-32 h-0.5 gradient-bar mb-6"></span>
          <h2 className="section-heading">The Journey</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            I started tinkering with the web in a college basement lab, building
            little MVC apps for fun. Nine years later I’ve shipped e‑commerce
            portals, inventory systems, and green‑field SaaS dashboards for
            teams across the U.S. My focus has stayed the same: small,
            accessible pieces that scale.
          </p>
        </section>

        {/* values & work style */}
        <section className="max-w-4xl w-full py-16 border-t border-[#15151a]">
          <span className="block w-32 h-0.5 gradient-bar mb-6"></span>
          <h2 className="section-heading">How I Work</h2>
          <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
            <li>Async‑first, feedback‑driven collaboration</li>
            <li>Automated tests before launch, performance budgets after</li>
            <li>Bias toward shipping—iterate once real users react</li>
            <li>Docs or it didn’t happen</li>
          </ul>
        </section>

        {/* life outside code */}
        <section className="max-w-4xl w-full py-16 border-t border-[#15151a]">
          <span className="block w-32 h-0.5 gradient-bar mb-6"></span>
          <h2 className="section-heading">Outside the Editor</h2>
          <p className="mt-4 text-gray-300">
            If I’m not chasing refactors, I’m chasing waves (badly), ripping
            around on a motorcycle, or scribbling weird horror shorts. Live
            music, heavy weights, and black coffee are my fuel.
          </p>
        </section>

        {/* call‑to‑action */}
        <section className="max-w-4xl w-full py-20 flex flex-col items-center gap-6">
          <h2 className="section-heading">Let’s Build Something</h2>
          <a
            href="mailto:you@example.com"
            className="inline-block px-6 py-3 border-2 border-transparent rounded-md
                       font-medium bg-gradient-to-r from-[#ed85ca] to-[#78c6f2]
                       text-black hover:opacity-90 transition"
          >
            Get in touch
          </a>
        </section>
      </main>
    </div>
  );
}