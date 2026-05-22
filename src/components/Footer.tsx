"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowUp, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Founder", href: "/founder" },
      { label: "Career", href: "/career" },
    ],
    services: [
      { label: "Web Development", href: "/services" },
      { label: "App Development", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
      { label: "SEO Optimization", href: "/services" },
      { label: "Content Creation", href: "/services" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/#faq" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ]
  };

  return (
    <footer className="bg-white border-t border-black/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block transition-transform active:scale-95">
              <div className="relative h-8 w-40">
                <Image
                  src={logo?.imageUrl || '/webwrite-logo.webp'}
                  alt="WebWrite Services Logo"
                  fill
                  className="object-contain object-left"
                  data-ai-hint="company logo"
                />
              </div>
            </Link>
            <p className="text-sm font-medium text-black/50 leading-relaxed max-sm">
              Crafting premium digital experiences that bridge the gap between vision and reality. We empower brands with high-performance web solutions and strategic digital marketing.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/webwrite-services/" },
                { icon: Instagram, href: "https://www.instagram.com/webwriteservices" },
                { icon: Twitter, href: "https://x.com/webwrite_co_in" },
                { icon: Facebook, href: "https://www.facebook.com/webwrite.services/" },
                { icon: Youtube, href: "https://www.youtube.com/@webwriteservices" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  className="w-10 h-10 rounded-full bg-black/[0.03] border border-black/[0.05] flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                >
                  <social.icon className="w-4 h-4 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-[13px] font-semibold text-black/40 hover:text-[#f5b800] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-[13px] font-semibold text-black/40 hover:text-[#f5b800] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-[13px] font-semibold text-black/40 hover:text-[#f5b800] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Get in Touch</h4>
              <div className="space-y-4">
                <a href="mailto:support@webwrite.co.in" className="flex items-center gap-3 text-black/50 hover:text-black transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center group-hover:bg-[#f5b800]/10">
                    <Mail className="w-3.5 h-3.5 text-black/40 group-hover:text-[#f5b800]" />
                  </div>
                  <span className="text-[13px] font-semibold">support@webwrite.co.in</span>
                </a>
                <a href="tel:+917906627288" className="flex items-center gap-3 text-black/50 hover:text-black transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center group-hover:bg-[#f5b800]/10">
                    <Phone className="w-3.5 h-3.5 text-black/40 group-hover:text-[#f5b800]" />
                  </div>
                  <span className="text-[13px] font-semibold">+91-7906627288</span>
                </a>
                <div className="flex items-center gap-3 text-black/50 group">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-black/40" />
                  </div>
                  <span className="text-[13px] font-semibold">Etawah, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-black/30 uppercase tracking-[0.1em]">
            <span>© {currentYear} WebWrite Services. All rights reserved.</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.05] hover:bg-black hover:text-white transition-all group"
          >
            <span className="text-[9px] font-black uppercase tracking-widest">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
