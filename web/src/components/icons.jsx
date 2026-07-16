/*
  icons.jsx — a small set of inline line icons for Reelo.
  Stroke 1.5px, currentColor, 24px viewBox, geometric and minimal.
  Tint them with CSS (muted by default, accent on hover).
*/

function Svg({ children, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export const Play = (p) => (
  <Svg {...p}><path d="M8 5.2v13.6a.6.6 0 0 0 .92.5l10.6-6.8a.6.6 0 0 0 0-1L8.92 4.7A.6.6 0 0 0 8 5.2z" /></Svg>
)

export const Film = (p) => (
  <Svg {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4" /></Svg>
)

export const Layers = (p) => (
  <Svg {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 16.5l9 5 9-5" /></Svg>
)

export const Bolt = (p) => (
  <Svg {...p}><path d="M13 2.5L4.5 13.5a.5.5 0 0 0 .4.8H10l-1 8 8.6-11a.5.5 0 0 0-.4-.8H12l1-7.5z" /></Svg>
)

export const Target = (p) => (
  <Svg {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></Svg>
)

export const Hook = (p) => (
  <Svg {...p}><path d="M16 4v9a5 5 0 0 1-10 0" /><path d="M3 10l3 3 3-3" /></Svg>
)

export const Pen = (p) => (
  <Svg {...p}><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" /><path d="M14.5 6.5l3 3" /></Svg>
)

export const Chat = (p) => (
  <Svg {...p}><path d="M20 4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v4l4.2-4H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" /></Svg>
)

export const Scissors = (p) => (
  <Svg {...p}><circle cx="6" cy="6" r="2.6" /><circle cx="6" cy="18" r="2.6" /><path d="M8.1 7.6L20 16M8.1 16.4L20 8M8.4 8.4l4 3.6" /></Svg>
)

export const Chart = (p) => (
  <Svg {...p}><path d="M4 4v16h16" /><path d="M7.5 14.5l3.5-4 3 3 5-6.5" /></Svg>
)

export const Grid = (p) => (
  <Svg {...p}><rect x="3.5" y="3.5" width="7" height="7" rx="1.3" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.3" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.3" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.3" /></Svg>
)

export const Flask = (p) => (
  <Svg {...p}><path d="M9.5 3h5M10.5 3v6l-5 8.4A1.2 1.2 0 0 0 6.6 19h10.8a1.2 1.2 0 0 0 1.1-1.6l-5-8.4V3" /><path d="M7.6 14.5h8.8" /></Svg>
)

export const Refresh = (p) => (
  <Svg {...p}><path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" /><path d="M20.5 4v5h-5" /></Svg>
)

export const Mic = (p) => (
  <Svg {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M12 17v4M9 21h6" /></Svg>
)

export const Folder = (p) => (
  <Svg {...p}><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.2H19.5A1.5 1.5 0 0 1 21 8.7V17.5A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" /></Svg>
)

export const Sparkle = (p) => (
  <Svg {...p}><path d="M12 3.5l1.9 5.4a1 1 0 0 0 .6.6l5.4 1.9-5.4 1.9a1 1 0 0 0-.6.6L12 19.3l-1.9-5.4a1 1 0 0 0-.6-.6L4.1 11.4l5.4-1.9a1 1 0 0 0 .6-.6z" /></Svg>
)

export const ArrowRight = (p) => (
  <Svg {...p}><path d="M4 12h15M13 6l6 6-6 6" /></Svg>
)

/* Name lookup so data arrays can reference icons by string key. */
export const Icons = {
  Play, Film, Layers, Bolt, Target, Hook, Pen, Chat, Scissors,
  Chart, Grid, Flask, Refresh, Mic, Folder, Sparkle, ArrowRight,
}

export function Icon({ name, size = 24 }) {
  const C = Icons[name]
  return C ? <C size={size} /> : null
}
