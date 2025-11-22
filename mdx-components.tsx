import type { MDXComponents } from "mdx/types"
import CourseGraph from "@/components/Courses/CourseGraph"

const components: MDXComponents = { CourseGraph }

export function useMDXComponents(): MDXComponents {
  return components
}
