import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        lunathanael
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          CTO @ <Link href="https://www.linkedin.com/company/letspark/about/" className="underline duration-500 hover:text-zinc-300">LetsPark</Link>
        </h2>
      </div>
      
      <div className="fixed bottom-0 left-0 m-4 animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
            <a className="inline-flex items-center leading-tight group" aria-label="View Full Resume" href="/Nathanael_Lu_Resume_2025.pdf">
              <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-zinc-300 motion-reduce:transition-none">
                  View Resume
                  </span>
                  <span className="whitespace-nowrap">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd">
                          </path>
                      </svg>
                  </span>
              </span>
            </a>
        </h2>
      </div>

      <div className="fixed bottom-0 right-0 m-4 animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Built with{" "}
          <Link
            target="_blank"
            href="https://nextjs.org/"
            className="font-bold duration-500 hover:text-zinc-300"
          >
            Next.js
          </Link>,{" "}
          <Link
            target="_blank"
            href="https://tailwindcss.com/"
            className="font-bold duration-500 hover:text-zinc-300"
          >
           Tailwind CSS
          </Link>, and{" "}
          <Link
            target="_blank"
            href="https://upstash.com/"
            className="font-bold duration-500 hover:text-zinc-300"
          >
            Upstash for Redis
          </Link>; Deployed with{" "}
          <Link
            target="_blank"
            href="https://vercel.com/"
            className="font-bold duration-500 hover:text-zinc-300"
          >
            Vercel
          </Link>.

          </h2>
        </div>
    </div>
  );

}
