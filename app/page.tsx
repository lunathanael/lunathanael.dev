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
          {/* I'm building{" "}
          <Link
            target="_blank"
            href="https://lunathanael.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            lunathanael.dev
          </Link> for my portfolio. */}
          I'm developing a{" "}
          <Link
            target="_blank"
            href="https://github.com/lunathanael/visualizing-sorting"
            className="underline duration-500 hover:text-zinc-300"
          >
            Sorter Visualizer
          </Link>
          {" with "}
          <Link
            target="_blank"
            href="https://eggsontoast1672.github.io/"
            className="underline duration-500 hover:text-zinc-300"
          >
            Paul Zupan
          </Link> in C++.
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
