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
    description: "View my projects",
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
    description: "Explore my work",
    href: "https://bikram-dot-dev.vercel.app",
    iconUrl: "https://bikram-dot-dev.vercel.app/icons/reactz-logo.png",
  },
  {
    title: "Resume",
    description: "View & download my latest resume",
    href: "https://drive.google.com/file/d/10hdAYgZ36zFGJ-kj5-kJE0EF5cJQBbh_/view?usp=drive_link",
    iconUrl: "https://ugc.production.linktr.ee/4c06f002-d396-4ce6-a082-39fd1ec50e7e_image.png",
  },
  {
    title: "LeetCode",
    description: "View my problem-solving skills",
    href: "https://leetcode.com/u/bikrammondal5",
    logoText: "</>",
  },
  {
    title: "GeeksforGeeks",
    description: "Check out my coding solutions",
    href: "https://www.geeksforgeeks.org/profile/codesnip85r2",
    iconUrl: "https://ugc.production.linktr.ee/bfbca0fd-fcf7-4e30-84ab-f3b5ad5f4d32_unnamed-removebg-preview.png",
  },
  {
    title: "Kaggle",
    description: "Explore my ML projects",
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
      className="flex flex-col items-center gap-4 lg:gap-5"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-black bg-[#FFF5DB] shadow-[2px_5px_0px_#000000] lg:h-32 lg:w-32">
          <Image
            src="/avatar.jpeg"
            alt="Bikram Mondal"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="text-center">
        <h1 className="mb-2 text-4xl font-black text-[#111827] lg:mb-3 lg:text-5xl">
          Bikram Mondal
        </h1>
        <p className="mb-2 text-base font-medium text-[#111827] lg:mb-3 lg:text-lg">
          Full Stack Web Developer • AIML Engineer • Open Source Contributor
        </p>
        <p className="mx-auto max-w-[540px] text-sm font-normal text-[#111827]/80 lg:max-w-[620px] lg:text-base">
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
      className="flex items-center justify-center gap-3 lg:gap-4"
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
            className="relative flex h-12 w-12 items-center justify-center rounded-full border-3 border-black bg-[#FF8A00] shadow-[4px_4px_0px_#000000] transition-all hover:shadow-[6px_6px_0px_#000000] lg:h-14 lg:w-14"
            style={{
              backgroundColor: "#FF8A00",
            }}
          >
            <Icon className="h-5 w-5 text-[#111827] lg:h-6 lg:w-6" />
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
      className="block w-full cursor-pointer rounded-2xl border-4 border-black bg-[#FFF5DB] p-5 shadow-[6px_6px_0px_#000000] transition-all hover:shadow-[8px_8px_0px_#000000] lg:p-6"
      style={{ backgroundColor: "#FFF5DB" }}
    >
      <div className="flex items-center gap-4 lg:gap-5">
        <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-3 border-black bg-[#FF8A00] p-2.5 shadow-[3px_3px_0px_#000000] lg:h-14 lg:w-14 lg:p-3">
          {item.logoText ? (
            <span
              aria-hidden="true"
              className={`font-black leading-none text-[#111827] ${item.title === "LinkedIn" ? "text-[1.7rem] lg:text-[1.95rem]" : "text-xl lg:text-2xl"
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
                sizes="(min-width: 1024px) 28px, 24px"
                className={`object-contain brightness-0 ${shouldEnlargeLogo ? "scale-125" : ""
                  }`}
              />
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="mb-1 text-lg font-bold text-[#111827] lg:text-xl">
            {item.title}
          </h3>
          {item.description && (
            <p className="line-clamp-1 text-sm font-normal text-[#111827]/70 lg:text-base">
              {item.description}
            </p>
          )}
        </div>

        <ExternalLink className="h-5 w-5 flex-shrink-0 text-[#111827]/50 lg:h-6 lg:w-6" />
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
      <p className="text-center text-sm font-medium text-[#111827]/60 lg:text-base">
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
      className="origin-bottom-left rounded-2xl border-4 border-dotted border-[#111827] bg-[#FFF5DB] p-2"
    >
      <Image
        src="/bikram_linktree_qr.png"
        alt="QR code for Bikram Mondal LinkTree"
        width={224}
        height={224}
        className="h-48 w-48 rounded-xl lg:h-52 lg:w-52"
      />
    </motion.div>
  )
}

// Main Component
const MyLinkTree = () => {
  return (
    <div className="relative min-h-screen bg-[#FDF3B1] px-4 py-8 sm:py-10 lg:py-12">
      <div className="absolute bottom-24 left-[clamp(2.5rem,calc(50%_-_680px),5rem)] hidden lg:block">
        <LinkTreeQrCode />
      </div>

      <div className="mx-auto flex w-full max-w-[500px] flex-col gap-6 lg:max-w-[580px] lg:gap-7">
        <ProfileCard />
        <SocialIcons />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4 lg:space-y-5"
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
