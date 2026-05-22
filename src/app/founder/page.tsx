"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Phone, 
  Globe, 
  Mail, 
  Award, 
  Briefcase, 
  Wrench,
  ChevronRight
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { founders } from "@/constants/founder"

export default function FounderPage() {
  const founder = founders[0]

  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-12">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Sidebar: Profile Info - Sticky on Desktop */}
            <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 h-fit">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5"
              >
                <Image 
                  src={founder.image || founder.fallbackImage}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black text-black tracking-tighter uppercase leading-none">{founder.name}</h1>
                  <p className="text-xs font-bold text-[#f5b800] uppercase tracking-[0.3em] mt-2">{founder.role}</p>
                </div>

                <p className="text-[11px] font-medium text-black/50 leading-relaxed italic">
                  "Founder & CEO at WebWrite Services | Full Stack Web Developer | Entrepreneur ( Business Mindset Personality )"
                </p>

                <div className="space-y-4 pt-4 border-t border-black/5">
                  <a href="tel:+917906627288" className="flex items-center gap-3 text-black/60 group hover:text-black transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#f5b800]/20 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] font-semibold">+91-7906627288</span>
                  </a>
                  <a href="https://webwrite.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-black/60 group hover:text-black transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#f5b800]/20 transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] font-semibold">webwrite.co.in</span>
                  </a>
                  <a href="mailto:therishitiwari@gmail.com" className="flex items-center gap-3 text-black/60 group hover:text-black transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#f5b800]/20 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] font-semibold text-black/80">therishitiwari@gmail.com</span>
                  </a>
                  <a href="mailto:rishi@webwrite.co.in" className="flex items-center gap-3 text-black/60 group hover:text-black transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#f5b800]/20 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] font-semibold text-black/80">rishi@webwrite.co.in</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-black/5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-black/20">Experience:</span>
                  <span className="text-[10px] font-black uppercase text-[#f5b800]">3+ Years</span>
                </div>

                <div className="flex gap-2 pt-2">
                  {[
                    { icon: Twitter, href: "https://x.com/webwrite_co_in" },
                    { icon: Facebook, href: "https://www.facebook.com/webwrite.services/" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/webwrite-services/" },
                    { icon: Instagram, href: "https://www.instagram.com/webwriteservices" }
                  ].map((social, idx) => (
                    <a key={idx} href={social.href} target="_blank" className="w-9 h-9 rounded-full bg-black/[0.03] flex items-center justify-center hover:bg-black hover:text-white transition-all">
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Biography Section */}
              <section className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Biography</span>
                </div>
                <h2 className="text-3xl font-black text-black tracking-tighter uppercase leading-none">The Story of Rishi Tiwari</h2>
                <div className="space-y-4 text-sm md:text-base text-black/60 font-medium leading-relaxed">
                  <p>
                    Rishi Tiwari is the visionary founder and CEO of WebWrite Services, a dynamic digital solutions firm specializing in full-stack development and custom web applications. With a deep-rooted passion for technology and problem-solving, Rishi has built WebWrite into a leading agency known for its innovative, high-performance digital products and cutting-edge web solutions.
                  </p>
                  <p>
                    Hailing from a tech-savvy background, Rishi’s fascination with computers and coding began at an early age, sparking his journey into the world of software development. His natural curiosity for how things work led him to explore a wide range of programming languages, frameworks, and platforms, laying the groundwork for his future success in the full-stack development field.
                  </p>
                  <p>
                    Throughout his career, Rishi has been driven by a mission to leverage technology to solve complex business challenges. His leadership at WebWrite Services reflects this commitment, as he guides his team in delivering bespoke solutions that push the boundaries of innovation, helping clients enhance their digital presence and achieve sustainable growth in a competitive marketplace.
                  </p>
                </div>
              </section>

              {/* Experience Timeline */}
              <section className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <Briefcase className="w-3.5 h-3.5 text-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Experience</span>
                </div>
                
                <div className="space-y-12">
                  {[
                    {
                      date: "Apr 2023 - Present",
                      role: "Founder & CEO",
                      company: "WebWrite Services",
                      desc: "Leading-edge firm specializing in web development, IT consulting, and bespoke digital solutions."
                    },
                    {
                      date: "Sep 2024 - Present",
                      role: "Tech Head",
                      company: "Akshita Sales",
                      desc: "Managing technical operations for a leading consumer electronics provider specializing in mobile and smart tech."
                    },
                    {
                      date: "Apr 2024 - Aug 2024",
                      role: "Chief Technology Officer",
                      company: "Effortless Esports",
                      desc: "Architecting technical infrastructure for a dedicated esports organization hosting global events."
                    },
                    {
                      date: "Oct 2023 - Apr 2024",
                      role: "Founder",
                      company: "Buyify Clothing",
                      desc: "Built and managed an e-commerce brand for custom designed apparel."
                    }
                  ].map((exp, idx) => (
                    <div key={idx} className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#f5b800] z-10" />
                      <div className="absolute left-0.5 top-2 bottom-0 w-px bg-black/[0.05] group-last:hidden" />
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#f5b800]">{exp.date}</span>
                        <h4 className="text-xl font-black text-black uppercase tracking-tight">{exp.role}</h4>
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{exp.company}</p>
                        <p className="text-xs md:text-sm text-black/50 font-medium leading-relaxed pt-2 max-w-2xl">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certificates */}
              <section className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <Award className="w-3.5 h-3.5 text-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Certificates</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "MTA Certificate", issuer: "Microsoft", date: "Oct 2023", desc: "Microsoft Technology Associate: entry-level IT skills demonstration." },
                    { title: "Java Foundation", issuer: "Great Learning", date: "Jan 2023", desc: "Certified in Java concepts and practical hands-on development." },
                    { title: "Startup India", issuer: "Invest India", date: "Jan 2024", desc: "Entrepreneurship program by GOI initiative in collaboration with UpGrad." }
                  ].map((cert, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-black/[0.02] border border-black/[0.04] space-y-4 hover:bg-black hover:text-white transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shadow-sm group-hover:bg-[#f5b800]">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[11px] font-black uppercase tracking-tight">{cert.title}</h4>
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-70">{cert.issuer} • {cert.date}</p>
                        <p className="text-[10px] font-medium opacity-50 group-hover:opacity-80 pt-2 leading-tight">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <Wrench className="w-3.5 h-3.5 text-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Skills & Tools</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Figma", "HTML", "Illustrator", "Framer", "Shopify", "WordPress", "Next.js", "React", "Node.js", "TypeScript"].map((skill, idx) => (
                    <div key={idx} className="px-5 py-2.5 rounded-full bg-black/[0.03] border border-black/[0.05] flex items-center gap-2 hover:border-[#f5b800] transition-colors group">
                      <div className="w-1 h-1 rounded-full bg-black/20 group-hover:bg-[#f5b800]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/70 group-hover:text-black">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
