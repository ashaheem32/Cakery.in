/**
 * The Cakery leaf mark, redrawn as vector from the @the_cakery.in profile
 * image so it stays crisp at any size and can be recoloured with `currentColor`.
 */
export function LeafMark({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Leaf blade — tip at upper right, tapering down toward the left */}
      <path
        d="M80 12c-20 6-36 20-41 35-4 13 6 21 17 15C69 54 79 33 80 12Z"
        fill="currentColor"
      />
      {/* Stem curl sweeping open beneath the blade */}
      <path
        d="M36 45C17 57 18 80 39 86c11 3 21-1 26-8"
        stroke="currentColor"
        strokeWidth="12.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Mark + wordmark lockup, as it appears on their post creatives. */
export function Logo({ className = '', markClass = 'w-7 h-7', textClass = 'text-xl' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LeafMark className={markClass} />
      <span className={`font-display font-normal tracking-tight ${textClass}`}>
        The Cakery
      </span>
    </span>
  )
}
