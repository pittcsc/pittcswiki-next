"use client"

import { useRouter } from "next/navigation"
import { BarChart3, Compass, Briefcase, BookOpen, Map, Users } from "lucide-react"

const iconMap = {
  BarChart3,
  Compass,
  Briefcase,
  BookOpen,
  Map,
  Users,
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
      className="link-panel-item text-center text-sm text-black dark:text-gray-100 hover:cursor-pointer bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 overflow-hidden focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB81C] flex flex-col h-64 w-full md:flex-shrink-0"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 12px, rgba(0, 0, 0, 0.04) 0px 1px 4px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onClick={() => router.push(path)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          router.push(path)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={title}
    >
      <div
        className="h-2"
        style={{
          background: 'linear-gradient(90deg, #FFB81C 0%, #1e3a5f 100%)',
          transition: 'box-shadow 300ms ease'
        }}
      />
      <div className="p-6 pt-8 flex flex-col flex-1 pointer-events-none">
        {icon &&
          (() => {
            const IconComponent = iconMap[icon]
            return (
              <div className="flex justify-center mb-4" style={{height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <IconComponent
                  size={32}
                  className="text-gray-800 dark:text-gray-100 ease-in-out duration-300 transition-all"
                  aria-label={iconAlt}
                  role="img"
                />
              </div>
            )
          })()
        }
        <h3 className="mb-2 font-bold dark:text-white text-base leading-tight">{title}</h3>
        <p className="text-xs leading-relaxed mb-3">
          {description}
        </p>
        <span className="inline-block text-[#4A9EFF] dark:text-[#4A9EFF] font-medium">
          Learn more →
        </span>
      </div>
    </div>
  )
}

export default LinkPanelItem
