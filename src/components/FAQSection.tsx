"use client"

import React from "react"
import { motion } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What digital services does Smileo Group specialize in?",
    answer: "We specialize in end-to-end digital solutions including full-stack web development, high-performance mobile applications, strategic digital marketing (Meta & Google Ads), and premium video editing for brand storytelling."
  },
  {
    question: "How long does a typical web development project take?",
    answer: "A standard corporate website usually takes 3-6 weeks, while complex custom web applications or e-commerce platforms can take 8-12 weeks depending on the specific requirements and integrations needed."
  },
  {
    question: "Do you provide SEO and marketing as part of website builds?",
    answer: "Yes, all our websites are built with SEO best practices at their core. We also offer dedicated performance marketing and advanced SEO packages to help you dominate search results and drive quality traffic after launch."
  },
  {
    question: "What information do I need to provide for a consultation?",
    answer: "Ideally, a brief overview of your business goals, target audience, and any existing digital assets. Don't worry if you're not tech-savvy; our strategy experts will guide you through the process during our free consultation."
  },
  {
    question: "Do you offer support after the project is launched?",
    answer: "Absolutely. We offer ongoing maintenance, security updates, and performance monitoring to ensure your digital products continue to run smoothly and scale as your business grows."
  },
  {
    question: "Is your pricing fixed or project-based?",
    answer: "We offer both. For clearly defined projects, we provide fixed-price quotes. For ongoing collaborations or evolving digital needs, we offer flexible retainer models tailored to your monthly goals."
  }
]

export function FAQSection() {
  const CTASection = () => (
    <div className="p-6 rounded-[2rem] bg-black/[0.02] border border-dashed border-black/10">
      <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Still have questions?</p>
      <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-black hover:text-[#f5b800] transition-colors underline decoration-[#f5b800]/30 underline-offset-4">
        Get in touch with us on WhatsApp →
      </a>
    </div>
  )

  return (
    <section className="bg-white pt-20 pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden border-t border-black/[0.03]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Heading Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <HelpCircle className="w-3.5 h-3.5 text-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Support Center</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                  COMMON <br />
                  <span className="text-[#f5b800]">QUESTIONS</span>
                </h2>
                <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
              </div>
              
              <p className="text-sm md:text-lg text-black/50 font-medium leading-relaxed max-sm">
                Everything you need to know about our process, pricing, and how we help your brand grow.
              </p>

              {/* CTA visible only on desktop in this column */}
              <div className="pt-4 hidden lg:block">
                <CTASection />
              </div>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-black/[0.05] rounded-2xl px-6 py-2 data-[state=open]:bg-black/[0.01] data-[state=open]:border-[#f5b800]/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left group">
                      <span className="text-sm md:text-base font-black text-black uppercase tracking-tight group-hover:text-[#f5b800] transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-black/50 text-sm md:text-base font-medium leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* CTA visible only on mobile at the end of the section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:hidden"
            >
              <CTASection />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
