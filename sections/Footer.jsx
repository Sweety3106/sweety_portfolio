import { portfolioData } from "../data/portfolio"

export default function Footer() {
  return (
    <footer className="bg-background text-slate-500 dark:text-gray-400 text-center py-6 border-t border-glass-border transition-colors duration-300">
      <p>
        {portfolioData.footer.copyright}
      </p>
    </footer>
  )
}
