"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AtSign, Camera, ExternalLink, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

// Types
interface LinkItem {
  title: string
  description?: string
  href: string
  iconUrl?: string
  logoText?: string
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
    href: "https://github.com/BikramMondal5",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/bikram-mondal-a2bb18343",
    logoText: "in",
  },
  {
    title: "Portfolio",
    description: "Explore my work and case studies",
    href: "https://bikram-dot-dev.vercel.app",
    iconUrl: "https://bikram-dot-dev.vercel.app/icons/reactz-logo.png",
  },
  {
    title: "Resume",
    description: "Download my latest resume",
    href: "https://drive.google.com/file/d/10hdAYgZ36zFGJ-kj5-kJE0EF5cJQBbh_/view?usp=drive_link",
    iconUrl: "https://ugc.production.linktr.ee/4c06f002-d396-4ce6-a082-39fd1ec50e7e_image.png",
  },
  {
    title: "GeeksforGeeks",
    description: "Check out my coding solutions",
    href: "https://www.geeksforgeeks.org/profile/codesnip85r2",
    iconUrl: "https://ugc.production.linktr.ee/bfbca0fd-fcf7-4e30-84ab-f3b5ad5f4d32_unnamed-removebg-preview.png",
  },
  {
    title: "LeetCode",
    description: "View my problem-solving journey",
    href: "https://leetcode.com/u/bikrammondal5",
    logoText: "</>",
  },
  {
    title: "Kaggle",
    description: "Explore my data science projects",
    href: "https://www.kaggle.com/BikramMondal5",
    iconUrl: "https://ugc.production.linktr.ee/095d69c6-e573-47a5-9c2e-281a59bfb403_images--3--removebg-preview.png",
  },
]

const socialLinks: SocialItem[] = [
  {
    href: "https://api.whatsapp.com/send?phone=917439589152",
    ariaLabel: "WhatsApp",
    icon: MessageCircle,
    color: "#25D366",
  },
  {
    href: "https://x.com/CSnippets62428",
    ariaLabel: "X",
    icon: AtSign,
    color: "#1DA1F2",
  },
  {
    href: "https://www.instagram.com/code_snippets5",
    ariaLabel: "Instagram",
    icon: Camera,
    color: "#E4405F",
  },
  {
    href: "mailto:codesnippets45@gmail.com",
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
        <div className="relative w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-[#FFF5DB] shadow-[2px_5px_0px_#000000]">
          <Image
            src="/avatar.jpeg"
            alt="Bikram Mondal"
            fill
            sizes="112px"
            className="object-cover"
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
  const shouldEnlargeLogo = item.title !== "GitHub" && item.title !== "Kaggle"

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
        <div className="relative w-12 h-12 rounded-xl bg-[#FF8A00] border-3 border-black flex items-center justify-center flex-shrink-0 p-2.5 shadow-[3px_3px_0px_#000000]">
          {item.logoText ? (
            <span
              aria-hidden="true"
              className={`font-black leading-none text-[#111827] ${item.title === "LinkedIn" ? "text-[1.7rem]" : "text-xl"
                }`}
            >
              {item.logoText}
            </span>
          ) : (
            <span className="relative h-full w-full" aria-hidden="true">
              <Image
                src={item.iconUrl ?? ""}
                alt=""
                fill
                sizes="28px"
                className={`object-contain brightness-0 ${shouldEnlargeLogo ? "scale-125" : ""
                  }`}
              />
            </span>
          )}
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
      className="-mt-2 pb-3 text-center"
    >
      <p className="text-center text-sm font-medium text-[#111827]/60">
        © 2026 Bikram Mondal. All rights reserved.
      </p>
    </motion.footer>
  )
}

// QR Code Component
const LinkTreeQrCode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="origin-bottom-left rounded-2xl border-4 border-dotted border-black bg-[#FFF5DB] p-2"
    >
      <Image
        src="/bikram_linktree_qr.png"
        alt="QR code for Bikram Mondal LinkTree"
        width={208}
        height={208}
        className="h-44 w-44 rounded-xl lg:h-48 lg:w-48"
      />
    </motion.div>
  )
}

// Main Component
const MyLinkTree = () => {
  return (
    <div className="relative min-h-screen bg-[#FDF3B1] py-10 px-4 sm:py-12">
      <div className="absolute bottom-24 left-[clamp(1rem,calc(50%_-_720px),3rem)] hidden lg:block">
        <LinkTreeQrCode />
      </div>

      <div className="max-w-[500px] mx-auto flex flex-col gap-6">
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
