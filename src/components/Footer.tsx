"use client"

import React from "react"
import Link from "next/link"
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
import { BrandLogo } from "@/components/common/BrandLogo"

export function Footer() {
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

  const contactEmails = [
    "hello@example.com",
    "info@example.com",
    "support@example.com"
  ];

  return (
    <footer className="bg-white border-t border-black/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="h-12 flex items-center">
              <Link href="/">
                <BrandLogo 
                  className="h-12 md:h-14 w-auto"
                  width={180}
                  height={56}
                />
              </Link>
            </div>
            <p className="text-sm font-medium text-black/50 leading-relaxed max-sm">
              Crafting premium digital experiences that bridge the gap between vision and reality. We empower brands with high-performance web solutions and strategic digital marketing.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Youtube, href: "https://youtube.com" }
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
                <div className="space-y-2">
                  {contactEmails.map((email) => (
                    <a 
                      key={email}
                      href={`mailto:${email}`} 
                      className="flex items-center gap-3 text-black/50 hover:text-black transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center group-hover:bg-[#f5b800]/10 shrink-0">
                        <Mail className="w-3.5 h-3.5 text-black/40 group-hover:text-[#f5b800]" />
                      </div>
                      <span className="text-[12px] font-semibold lowercase truncate">{email}</span>
                    </a>
                  ))}
                </div>
                
                <a href="tel:+15550000000" className="flex items-center gap-3 text-black/50 hover:text-black transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center group-hover:bg-[#f5b800]/10 shrink-0">
                    <Phone className="w-3.5 h-3.5 text-black/40 group-hover:text-[#f5b800]" />
                  </div>
                  <span className="text-[13px] font-semibold">+1 (555) 000-0000</span>
                </a>
                <div className="flex items-center gap-3 text-black/50 group">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-black/40" />
                  </div>
                  <span className="text-[13px] font-semibold">123 Innovation Way, Tech City, Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-black/30 uppercase tracking-[0.1em]">
            <span>© {currentYear} Smileo Group. All rights reserved.</span>
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
