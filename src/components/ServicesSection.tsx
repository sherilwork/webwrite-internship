
"use client";

import { motion } from "framer-motion";
import {
  Search,
  LineChart,
  Mail,
  Link2,
  Globe,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "SEO",
    description:
      "Enhance visibility, authority, and important keyword rankings.",
    icon: Search,
  },
  {
    title: "SEM",
    description:
      "Data-optimized campaigns designed to attract ready-to-buy audiences.",
    icon: LineChart,
  },
  {
    title: "Email marketing & automation",
    description:
      "Nurture leads and convert subscribers with timely campaigns.",
    icon: Mail,
  },
  {
    title: "Link building & authority outreach",
    description:
      "Secure high-quality backlinks that enhance your SEO.",
    icon: Link2,
  },
  {
    title: "Local SEO & Google business optimization",
    description:
      "Help local customers discover your offers, fast and frequently.",
    icon: Globe,
  },
  {
    title: "Analytics & conversion optimization",
    description:
      "Collect data to convert clicks into customers & optimize every dollar spent.",
    icon: BarChart3,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,black_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-24 h-fit"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-[#c7fff1] px-4 py-2 text-xs font-medium tracking-wide text-black">
              Services overview
            </div>

            <h2 className="max-w-[500px] text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-7xl">
              Our
              <br />
              performance-
              <br />
              focused services.
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-black/50">
              Smart, creative, and targeted growth systems — tailored to empower your brand digitally.
            </p>

            <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#111111] active:scale-[0.98]">
              View full services breakdown
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </button>
          </motion.div>

          {/* Right Cards */}
          <div className="relative">
            <div className="flex flex-col gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_10px_50px_rgba(0,0,0,0.04)] transition-all duration-500"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c7fff1]/0 via-[#c7fff1]/30 to-[#c7fff1]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-[#fafafa] text-black transition-all duration-500 group-hover:scale-110 group-hover:border-[#c7fff1] group-hover:bg-[#c7fff1]">
                          <Icon size={24} strokeWidth={1.7} />
                        </div>

                        <div>
                          <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#111111]">
                            {service.title}
                          </h3>

                          <p className="mt-2 max-w-xl text-sm leading-7 text-black/50">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black text-white transition-all duration-300 group-hover:rotate-45"
                      >
                        <ArrowUpRight size={18} strokeWidth={2.2} />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Feature Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid gap-10 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            "Deep audit & discovery.",
            "Campaign planning & execution.",
            "Weekly optimization cycles.",
            "Conversion-focused reporting.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#8eff57]" />
              <p className="text-sm leading-7 text-black/60">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
