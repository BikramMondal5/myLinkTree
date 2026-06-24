"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AtSign, Camera, ExternalLink, Mail, MessageCircle } from "lucide-react"

// Types
interface LinkItem {
  title: string
  description?: string
  href: string
  iconUrl: string
}

interface SocialItem {
  href: string
  ariaLabel: string
  icon: React.ElementType
  color: string
}

// Data
const linksData: LinkItem[] = [
  {
    title: "GitHub",
    description: "View my projects and open source contributions",
    href: "https://github.com/bikrammondal",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://linkedin.com/in/bikrammondal",
    iconUrl: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png",
  },
  {
    title: "Portfolio",
    description: "Explore my work and case studies",
    href: "https://bikrammondal.dev",
    iconUrl: "https://bikram-dot-dev.vercel.app/icons/reactz-logo.png",
  },
  {
    title: "Resume",
    description: "Download my latest resume",
    href: "/resume.pdf",
    iconUrl: "https://ugc.production.linktr.ee/4c06f002-d396-4ce6-a082-39fd1ec50e7e_image.png",
  },
  {
    title: "GeeksforGeeks",
    description: "Check out my coding solutions",
    href: "https://auth.geeksforgeeks.org/user/bikrammondal",
    iconUrl: "https://ugc.production.linktr.ee/bfbca0fd-fcf7-4e30-84ab-f3b5ad5f4d32_unnamed-removebg-preview.png",
  },
  {
    title: "LeetCode",
    description: "View my problem-solving journey",
    href: "https://leetcode.com/bikrammondal",
    iconUrl: "https://ugc.production.linktr.ee/e6b6fe81-6e09-4127-9ab2-ded94bd643c8_LeetCode-Sharing.png",
  },
  {
    title: "Kaggle",
    description: "Explore my data science projects",
    href: "https://kaggle.com/bikrammondal",
    iconUrl: "https://ugc.production.linktr.ee/095d69c6-e573-47a5-9c2e-281a59bfb403_images--3--removebg-preview.png",
  },
]

const socialLinks: SocialItem[] = [
  {
    href: "https://wa.me/1234567890",
    ariaLabel: "WhatsApp",
    icon: MessageCircle,
    color: "#25D366",
  },
  {
    href: "https://twitter.com/bikrammondal",
    ariaLabel: "Twitter",
    icon: AtSign,
    color: "#1DA1F2",
  },
  {
    href: "https://instagram.com/bikrammondal",
    ariaLabel: "Instagram",
    icon: Camera,
    color: "#E4405F",
  },
  {
    href: "mailto:bikram@example.com",
    ariaLabel: "Email",
    icon: Mail,
    color: "#EA4335",
  },
]

// Profile Card Component
const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div className="w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-[#FFF5DB] shadow-[6px_6px_0px_#000000]">
          <img
            src="/avatar.jpeg"
            alt="Bikram Mondal"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="text-center">
        <h1 className="text-4xl font-black text-[#111827] mb-2">
          Bikram Mondal
        </h1>
        <p className="text-base font-medium text-[#111827] mb-2">
          Full Stack Web Developer • AIML Engineer • Open Source Contributor
        </p>
        <p className="text-sm font-normal text-[#111827]/80">
          I love solving problems and building things through code. Programming isn&apos;t just my profession, it&apos;s my passion.
        </p>
      </div>
    </motion.div>
  )
}

// Social Icons Component
const SocialIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex items-center justify-center gap-3"
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={index}
            href={social.href}
            aria-label={social.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-12 h-12 rounded-full bg-[#FF8A00] border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] transition-all"
            style={{
              backgroundColor: "#FF8A00",
            }}
          >
            <Icon className="w-5 h-5 text-[#111827]" />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

// Link Card Component
interface LinkCardProps {
  item: LinkItem
  index: number
}

const LinkCard = ({ item, index }: LinkCardProps) => {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="block w-full bg-[#FFF5DB] border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#FF8A00] border-3 border-black flex items-center justify-center flex-shrink-0 p-2.5 shadow-[3px_3px_0px_#000000]">
          <img
            src={item.iconUrl}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain brightness-0"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-[#111827] mb-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm font-normal text-[#111827]/70 line-clamp-1">
              {item.description}
            </p>
          )}
        </div>

        <ExternalLink className="w-5 h-5 text-[#111827]/50 flex-shrink-0" />
      </div>
    </motion.a>
  )
}

// Footer Component
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="text-center py-6"
    >
      <p className="text-sm font-medium text-[#111827]/60">
        © 2024 Bikram Mondal. All rights reserved.
      </p>
    </motion.footer>
  )
}

// Main Component
const MyLinkTree = () => {
  return (
    <div className="min-h-screen bg-[#FDF3B1] py-12 px-4">
      <div className="max-w-[500px] mx-auto space-y-8">
        <ProfileCard />
        <SocialIcons />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          {linksData.map((item, index) => (
            <LinkCard key={index} item={item} index={index} />
          ))}
        </motion.div>

        <Footer />
      </div>
    </div>
  )
}

export default MyLinkTree
