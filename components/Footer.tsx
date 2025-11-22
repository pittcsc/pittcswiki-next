/**
 * Footer Component
 *
 * @author varughese
 * @author Steven-Jarmell
 */

import Link from "next/link"

const Footer = (): JSX.Element => {
  return (
    <footer className="md:flex mt-auto text-center p-8 bg-gray-100 dark:bg-gray-900">
      <div className="m-auto text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()}, Built with ❤️ by{" "}
        <Link
          className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-600 dark:hover:text-blue-400"
          href="https://pittcsc.org"
          target="_blank"
        >
          PittCSC
        </Link>
        .{` `}
        <p className="mb-0 text-sm">
          <Link href="/about/" className="mr-2 hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="mailto:pittcsc+wiki@gmail.com" className="mr-2 hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
          <Link href="/sitemap/" className="mr-2 hover:text-blue-600 dark:hover:text-blue-400">
            Sitemap
          </Link>
          <Link href="/feedback/" className="mr-2 hover:text-blue-600 dark:hover:text-blue-400">
            Feedback
          </Link>
          <Link href="https://github.com/PittCSWiki/pittcswiki" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
