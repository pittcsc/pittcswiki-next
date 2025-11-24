import Link from "next/link"
// @ts-ignore
import academicsGuide from "@/data/guides/academics/index.md"
// @ts-ignore
import careerGuide from "@/data/guides/career/index.md"
// @ts-ignore
import skillsGuide from "@/data/guides/skills/index.md"
// @ts-ignore
import ztoGuide from "@/data/guides/zero-to-offer/index.md"
import { getMDFrontMatter } from "@/utils/frontmatter-parser"

const importedGuides: string[] = [
  academicsGuide.toString(),
  careerGuide.toString(),
  skillsGuide.toString(),
  ztoGuide.toString(),
]

let posts = []

for (let guide of importedGuides) {
  let guideData = getMDFrontMatter(guide)
  guideData["href"] =
    "guides/" + guideData.title.toLowerCase().replaceAll(" ", "-")
  posts.push(guideData)
}

const guides = posts.map((post, index) => (
  <Link
    className="inline-block p-1 w-full text-gray-800 dark:text-gray-100 px-4 py-4 md:w-1/2"
    href={post.href}
    key={`g_${index}`}
  >
    <div className="border border-gray-300 dark:border-[#404040] bg-gray-200 dark:bg-[#2a2a2a] shadow-sm h-64 p-4 transition-all duration-300 ease-out hover:border-l-4 hover:border-l-[#FFB81C] dark:hover:bg-[#333333] hover:shadow-md hover:-translate-y-0.5 rounded-lg group">
      <h1 className="dark:text-white group-hover:dark:text-[#FFB81C] transition-colors duration-200">{post.title}</h1>
      <div className="dark:text-gray-300">{post.guides_blurb}</div>
    </div>
  </Link>
))

const GuidesListing = () => {
  return <div className="flex flex-wrap -mx-4 -mt-4">{guides}</div>
}

export default GuidesListing
