import { Mail } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-stone-100 dark:bg-zinc-950">
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Let's Work Together</h2>
      <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
        I'm always open to new projects and opportunities.
      </p>
      <a
        href="mailto:your.email@example.com"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Mail className="h-5 w-5" />
        Get in Touch
      </a>
    </div>
  </section>
  )
}

export default Contact