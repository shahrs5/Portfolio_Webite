import { Github, Linkedin, MessageCircle, ArrowUpRight, Star } from "lucide-react";
import { siteConfig } from "../data/content";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    color: "bg-neo-accent",
    desc: "Let's connect",
  },
  {
    icon: MessageCircle,
    label: "Message Me",
    href: siteConfig.socials.whatsapp,
    color: "bg-neo-secondary",
    desc: "Chat on WhatsApp",
  },
  {
    icon: Github,
    label: "GitHub",
    href: siteConfig.socials.github,
    color: "bg-neo-muted",
    desc: "See my code",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-b-4 border-black bg-neo-accent/20 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <div className="-rotate-1 border-4 border-black bg-neo-accent px-5 py-2 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              06
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
            Let's Talk
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Left — CTA Text */}
          <div className="flex flex-col gap-6 lg:w-[50%]">
            <h3 className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl">
              Let's Build
              <br />
              <span className="inline-block rotate-1 border-4 border-black bg-neo-secondary px-3 py-1 shadow-neo-sm">
                Something
              </span>
              <br />
              Together.
            </h3>

            <p className="max-w-lg text-lg font-bold leading-relaxed sm:text-xl">
              I'm always open to new opportunities and interesting problems. Whether you're hiring, need AI automation, or just want to say hi — let's connect.
            </p>

            <Star
              className="hidden h-12 w-12 animate-spin-slow fill-neo-secondary lg:block"
              strokeWidth={3}
            />
          </div>

          {/* Right — Contact Cards */}
          <div className="flex flex-col gap-4 lg:w-[50%]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 border-4 border-black ${link.color} p-5 shadow-neo-md transition-all duration-200 hover:-translate-y-1 hover:shadow-neo-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-black bg-white">
                  <link.icon className="h-7 w-7" strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <span className="text-xl font-black uppercase tracking-tight">
                    {link.label}
                  </span>
                  <p className="text-sm font-bold text-black/60">
                    {link.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={3}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
