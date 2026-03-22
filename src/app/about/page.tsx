"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, X, Phone, Instagram } from "lucide-react";

export default function AboutPage() {
    const [isConsumptionModalOpen, setIsConsumptionModalOpen] = useState(false);
    const experiences = [
        {
            role: "UI/UX Engineer",
            company: "You-Source",
            period: "Jan 2024 - Current",
            points: [
                "Designed UI for 2 production mobile applications (digital health and food & beverage), contributing to MVP development and core user flows.",
                "Built reusable UI components and design systems and implemented production-ready UI pages using Flutter, translating Figma designs into responsive interfaces.",
                "Collaborated with PMs, developers, and QA in an Agile workflow to iterate on UI features and improve product usability.",
                "Conducted usability testing with 5+ participants for a food & beverage mobile app, identifying usability issues and delivering UX recommendations.",
                "Led prototype design for an ERP system for an Australia-based welding company, aligning interface solutions with business requirements.",
                "Designed and developed 5+ Webflow landing pages supporting marketing campaigns.",
                "Produced marketing visuals and infographics to support product launches.",
                "Designed 50+ screens for an MVP digital health mobile app prototype.",
                "Developed functional prototypes using AI-assisted development workflows (Stitch, MCP, and agent-based tools)."
            ]
        }
    ];

    const skills = {
        uiux: ["UX Research", "Usability Testing", "Wireframing", "Journey Mapping", "Prototyping", "Design Systems", "UI Design", "Interaction Design"],
        technical: ["HTML/CSS", "Flutter", "Tailwind CSS", "AI-Assisted UI Development", "Prompt Engineering for Design"],
        tools: ["Figma", "Stitch by Google", "Google AI Studio", "NotebookLM", "ChatGPT", "Github Copilot", "VSCode", "Webflow", "Framer", "Notion", "Adobe Firefly", "Canva", "Agent Skills"]
    };

    const cinemaTv = [
        { genre: "Sci-Fi", titles: "Star Wars (Prequels & Original Trilogy), Interstellar, Arrival, The Martian, Project Hail Mary" },
        { genre: "Comedy", titles: "The Hangover Trilogy, Superbad, 21 & 22 Jump Street" },
        { genre: "Romance", titles: "The Before Trilogy, Love & Other Drugs, Past Lives" },
        { genre: "Inspirational", titles: "The Pursuit of Happyness, Good Will Hunting, Dead Poets Society" },
        { genre: "Musical", titles: "Wicked, The Greatest Showman, Cabaret" },
        { genre: "Animated", titles: "Spider-Verse (Into & Across), Tangled, A Silent Voice, Shrek, WALL-E" },
        { genre: "Superhero", titles: "The Batman (2022), Marvel's The Avengers, Guardians of the Galaxy Vol. 3, Superman (2025), Captain America, Spider-Man: No Way Home" },
        { genre: "Television", titles: "Breaking Bad, The Clone Wars, The Mandalorian, The Office, Modern Family, Brooklyn Nine-Nine" }
    ];

    const literature = [
        { genre: "Adventure", titles: "Percy Jackson, Magnus Chase, The Heroes of Olympus, The Kane Chronicles, The Trials of Apollo" },
        { genre: "Young Adult", titles: "The Hate U Give, All American Boys, All the Bright Places" },
        { genre: "Mystery/Thriller", titles: "A Good Girl's Guide to Murder (Trilogy)" },
        { genre: "Sci-Fi", titles: "Project Hail Mary" }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-inter">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.5em] hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                    Back to Works
                </Link>
                <span className="font-oswald text-xl uppercase tracking-tighter">Josef / About</span>
            </nav>

            {/* Hero Header */}
            <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24 border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block mb-6 px-1 border-l border-white/20">Professional Dossier</span>
                    <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.8] tracking-tighter mb-12 italic">
                        WORK & <br /> EXPERIENCE
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground font-light leading-relaxed tracking-wide mb-8">
                        A <span className="text-white font-medium">UI/UX Engineer</span> specialized in building production-ready interfaces and high-fidelity design systems. Below is a detailed breakdown of my professional journey and technical arsenal.
                    </p>
                </motion.div>
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Experience Column */}
                <section className="lg:col-span-7 p-6 md:p-16 lg:p-24 border-r border-white/5">
                    <h2 className="font-oswald text-4xl uppercase tracking-tighter mb-16 border-b border-white/10 pb-4">Work Experience</h2>

                    <div className="flex flex-col gap-24">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="flex flex-col gap-8">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-oswald uppercase tracking-tight">{exp.role}</h3>
                                        <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">{exp.company}</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{exp.period}</span>
                                </div>

                                <ul className="flex flex-col gap-4">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-4">
                                            <span className="text-zinc-700 font-mono mt-1">[{String(i + 1).padStart(2, '0')}]</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills & Education Column */}
                <aside className="lg:col-span-5 flex flex-col">

                    {/* Skills */}
                    <section className="p-6 md:p-16 lg:p-24 border-b border-white/5">
                        <h2 className="font-oswald text-4xl uppercase tracking-tighter mb-12">Arsenal</h2>

                        <div className="flex flex-col gap-12">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6">Design & Strategy</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.uiux.map(s => (
                                        <span key={s} className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-white/10 hover:border-white transition-colors cursor-default">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6">Technical Core</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.technical.map(s => (
                                        <span key={s} className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-white/10 hover:border-white transition-colors cursor-default">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6">Tools & Platforms</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map(s => (
                                        <span key={s} className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-white/10 hover:border-white transition-colors cursor-default">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="p-6 md:p-16 lg:p-24 flex-grow">
                        <h2 className="font-oswald text-4xl uppercase tracking-tighter mb-12">Education</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-oswald uppercase tracking-tight">FEU Institute of Technology</h3>
                                    <p className="text-sm text-zinc-300 font-medium mt-2">Bachelor of Science in Computer Science</p>
                                    <p className="text-xs text-muted-foreground mt-1">Specialization in Software Engineering</p>
                                </div>
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">2019 — 2024</span>
                            </div>
                        </div>
                    </section>

                    {/* Social connections */}
                    <section className="p-6 md:p-16 lg:p-24 border-t border-white/5">
                        <h2 className="font-oswald text-4xl uppercase tracking-tighter mb-12">Let's Connect</h2>
                        <div className="flex flex-col">
                            {[
                                { name: "+63-977-738-9118", icon: <Phone className="w-4 h-4" />, href: "tel:+639777389118" },
                                { name: "andreinicolas0816@gmail.com", icon: <Mail className="w-4 h-4" />, href: "mailto:andreinicolas0816@gmail.com" },
                                { name: "linkedin.com/in/andreinclas", icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/andreinclas" },
                                { name: "instagram.com/sitcho_pages", icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/sitcho_pages" },
                            ].map((link, i) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors"
                                >
                                    <span className="text-sm font-medium">{link.name}</span>
                                    <div className="text-muted-foreground group-hover:text-white transition-colors duration-300">
                                        {link.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                </aside>
            </div>

            {/* Curated Consumption Button */}
            <section className="p-6 md:p-16 lg:p-24 border-t border-white/5 flex justify-center items-center">
                <button
                    onClick={() => setIsConsumptionModalOpen(true)}
                    className="group relative overflow-hidden rounded-full py-4 pr-6 pl-8 bg-zinc-900 border border-white/10 text-white font-oswald uppercase tracking-[0.2em] text-sm hover:border-white transition-colors duration-300"
                >
                    <span className="relative z-10 flex items-center gap-4">
                        Off Duty <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
            </section>

            {/* The Modal */}
            <AnimatePresence>
                {isConsumptionModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-zinc-950 border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl p-8 md:p-16 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setIsConsumptionModalOpen(false)}
                                className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-16 max-w-2xl">
                                <h2 className="font-oswald text-4xl md:text-5xl uppercase tracking-tighter mb-6 italic text-white">Off Duty</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed font-light border-l border-white/20 pl-6">
                                    I like watching movies and reading whenever I can. I rarely miss an opening weekend at the cinema, securing tickets in advance for the first screening of compelling films. Below is a log of my favorite stories across mediums.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
                                {/* Cinema & TV */}
                                <div className="flex-[1.5]">
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Cinema & Television
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                                        {cinemaTv.map((item) => (
                                            <div key={item.genre} className="group">
                                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">{item.genre}</span>
                                                <p className="text-sm text-zinc-300 leading-relaxed font-light">{item.titles}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Literature */}
                                <div className="flex-1">
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Literature
                                    </h3>
                                    <div className="flex flex-col gap-10">
                                        {literature.map((item) => (
                                            <div key={item.genre} className="group">
                                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">{item.genre}</span>
                                                <p className="text-sm text-zinc-300 leading-relaxed font-light">{item.titles}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
