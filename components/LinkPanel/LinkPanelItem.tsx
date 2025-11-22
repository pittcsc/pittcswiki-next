"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, Compass, Briefcase, BookOpen, Map } from "lucide-react"

const iconMap = {
  BarChart3,
  Compass,
  Briefcase,
  BookOpen,
  Map,
}

export type LinkPanelItemType = {
  path: string
  icon: keyof typeof iconMap
  iconAlt: string
  description: string
  title: string
}

const LinkPanelItem = ({
  path,
  icon,
  iconAlt,
  description,
  title,
}: LinkPanelItemType) => {
  const router = useRouter()

  return (
    <div
      className="link-panel-item m-3 max-w-xs text-center text-sm flex-[1_1_30%] flex-col text-black dark:text-[#cccccc] hover:cursor-pointer bg-white dark:bg-[#333333] border border-transparent dark:border-[#404040] rounded-lg transition-all duration-300 overflow-hidden"
      style={{
        boxShadow: '0 4px 12px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.1)'
      }}
      onClick={() => router.push(path)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(path)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className="h-2"
        style={{
          background: 'linear-gradient(90deg, #FFB81C 0%, #1e3a5f 100%)'
        }}
      />
      <div className="p-4 pt-6">
        {icon &&
          (() => {
            const IconComponent = iconMap[icon]
            return (
              <IconComponent
                size={40}
                className="mx-auto mb-3 text-gray-800 dark:text-[#e0e0e0] ease-in-out duration-300 transition-colors"
                aria-label={iconAlt}
              />
            )
          })()
        }
        <h3 className="mb-1 font-bold dark:text-white">{title}</h3>
        <p className="flex-[1_0_auto]">
          {description} <Link href={path} style={{color: 'inherit'}} className="dark:text-[#4A9EFF] hover:underline">Learn more.</Link>
        </p>
      </div>
    </div>
  )
}

export default LinkPanelItem
