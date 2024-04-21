import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import Image from "next/image";

const ScratchEmbed = () => {
  const embedUrl = `https://scratch.mit.edu/projects/104837895/embed`;

  return (
    <iframe
    src={embedUrl}
    width="485"
    height="402"
    allowFullScreen
    className="hidden lg:block border-none bg-black"
    ></iframe>
  );
};

const ResumeFooter = () => {

    return (
    <div className="mt-12">
        <a className="inline-flex items-center leading-tight text-zinc-200 font-semibold group" aria-label="View Full Resume" href="/Nathanael_Lu_Resume_2024.pdf">
            <span>
                <span className="text-lg border-b border-transparent pb-px transition group-hover:border-zinc-300 motion-reduce:transition-none">
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
    </div>
    );
}



export default async function AboutPage() {
  return (
    <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <div className="max-w-5xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    About Me
                </h2>
                <p className="mt-4 text-zinc-400">
                    Welcome to my personal journey in software development! I'm an 18-year-old enthusiast from Michigan, 
                    currently diving deep into Computer Science as a Freshman at MSU. In the digital realm, you might encounter me as lunathanael, 
                    a username that's become a part of my identity in this fascinating world of technology.
                </p>

                <p className="mt-4 text-zinc-400">
                    My passion for coding sparked at age 10, fueled by an avid interest in video games. 
                    The idea of being able to create my own games, coding them into existence, was a thrilling prospect. 
                    It was the beginning of my fascination with how computers, through simple yet swift calculations, could produce incredible outcomes.
                </p>

                <div className="flex mt-4 items-center space-x-8">
                    <div>
                        <p className="text-zinc-400">
                            This journey began with <Link href="https://scratch.mit.edu/" className="underline duration-500 hover:text-zinc-300">Scratch</Link>, my first foray into coding. 
                            It was here that I developed <Link href="https://scratch.mit.edu/" className="underline duration-500 hover:text-zinc-300">exciting 8 bit shooters</Link>
                            , <Link href="https://scratch.mit.edu/projects/111662917/" className="underline duration-500 hover:text-zinc-300">engaging story-driven games</Link>
                            , and even tackled the challenge of <Link href="https://scratch.mit.edu/projects/398434574/" className="underline duration-500 hover:text-zinc-300">Brute-Forcing SHA-256</Link>. 
                        </p>
                        <p className="mt-4 text-zinc-400">
                            Scratch wasn't just a platform for me; it was a foundational experience that opened my eyes to what's possible with code. 
                            I explored the basics, learning about variables and the efficiency of reusable "Blocks." 
                            Most significantly, I discovered my genuine interest in the field through my experiments with animations and game development.
                        </p>
                        <p className="mt-4 text-zinc-400">
                            Displayed on the right is one of my initial projects – an 8-bit shooter that, despite its elementary-school origins, 
                            I'm quite proud of. It's a reflection of my early creativity and learning process. 
                            While I realized that Scratch had its limitations, it set the stage for my next step in 
                            coding: <Link href="https://www.python.org/" className="underline duration-500 hover:text-zinc-300">Python</Link>. 
                            My journey continues, away from drag-and-drop, as I delve deeper into Python, 
                            aiming to bring more complex and refined ideas to life. 
                        </p>
                    </div>
                    <ScratchEmbed/>
                </div>  


                <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-16">
                    From Python to C++
                </h2>

                <p className="mt-4 text-zinc-400">
                    Embarking on my Python journey, I started with the basics, much like everyone else,
                    dabbling in creating calculators and beginning with a <Link href="https://replit.com/@lunathanael/Factorize" className="underline duration-500 hover:text-zinc-300">Brent factorization program</Link>.
                    This initial foray sparked a realization: I could harness Python's capabilities to assist with my homework.
                    It was a game-changer; using Python to find roots and perform other static calculations was not only efficient 
                    but also incredibly empowering. Witnessing how swiftly and repeatedly a calculator could execute mundane math was a revelation.
                </p>

                <p className="mt-4 text-zinc-400">
                    The adventure escalated when I ventured into developing a tic-tac-toe game and its accompanying AI. 
                    It was exhilarating to code an AI that played flawlessly and quickly. 
                    This experience piqued my interest in the realm of artificial intelligence. 
                    The realization that, in theory, every move made by the computer could be replicated by a human,
                    yet the computer executed these steps with unparalleled speed, was captivating.
                </p>

                <p className="mt-4 text-zinc-400">
                    Following this, I tackled creating a <Link href="https://replit.com/@lunathanael/Sodoku-1" className="underline duration-500 hover:text-zinc-300">Sudoku Solver</Link>. 
                    This project was a turning point; it exposed Python's limitations in speed. Motivated by this insight, 
                    I began to explore C++. I re-implemented the Sudoku Solver in C++, and further challenged myself by developing
                    a program to find Sudoku puzzles with specific numbers of hints.
                </p>
                

                <p className="mt-4 text-zinc-400">
                    My fascination with Game Theory led me to embark on coding a chess game in Python, 
                    integrating an Alpha-Beta AI. However, the AI's sluggishness in Python spurred me to transition to C++. 
                    Hours spent coding in C++ rapidly advanced my proficiency. This journey from Python to C++ was 
                    not just about learning different programming languages, but also about understanding and leveraging their unique 
                    strengths for various computational challenges.
                </p>
            </div>

            <div className="flex justify-center items-start gap-10">
                <div className="flex flex-col items-center w-full max-w-sm">
                    <img src="https://leetcard.jacoblin.cool/lunathanael?theme=dark&font=Ubuntu%20Mono&ext=contest" alt="LeetCode Stats" className="w-full" />
                </div>
                <div className="flex flex-col items-center w-full max-w-sm gap-5">
                    <img src="https://github-readme-stats.vercel.app/api?username=lunathanael&theme=github_dark" alt="GitHub Stats" className="w-full" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lunathanael&layout=compact&theme=github_dark" alt="Most Used Languages" className="w-full" />
                </div>
            </div>



            <ResumeFooter/>
        </div>
    </div>
  );
}
