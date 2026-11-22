const frameProps = {
  viewBox: '0 0 360 240',
  fill: 'none',
  'aria-hidden': true,
  className: 'h-full w-full',
  preserveAspectRatio: 'xMidYMid meet',
}

const lineProps = {
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function BarberArtwork() {
  return (
    <svg {...frameProps}>
      <g {...lineProps}>
        <rect x="18.5" y="18.5" width="323" height="203" strokeOpacity="0.28" />
        <path d="M18.5 48.5h323" strokeOpacity="0.28" />
        <circle cx="33" cy="33.5" r="2.5" fill="currentColor" fillOpacity="0.35" stroke="none" />
        <circle cx="43" cy="33.5" r="2.5" fill="currentColor" fillOpacity="0.2" stroke="none" />
        <circle cx="53" cy="33.5" r="2.5" fill="currentColor" fillOpacity="0.12" stroke="none" />

        <rect x="38.5" y="66.5" width="70" height="136" strokeOpacity="0.28" />
        <path
          d="M52 84h42M52 100h30M52 116h36M52 132h24"
          strokeOpacity="0.28"
        />

        <rect x="126.5" y="66.5" width="196" height="136" strokeOpacity="0.28" />
        <path d="M126.5 94.5h196" strokeOpacity="0.28" />
        <path
          d="M175 66.5v136M224 66.5v136M273 66.5v136M126.5 112.5h196M126.5 150.5h196"
          strokeOpacity="0.14"
        />

        <rect
          x="145"
          y="119"
          width="26"
          height="24"
          fill="currentColor"
          fillOpacity="0.14"
          strokeOpacity="0.5"
        />
        <rect
          x="243"
          y="157"
          width="26"
          height="24"
          fill="currentColor"
          fillOpacity="0.06"
          strokeOpacity="0.28"
        />
        <path d="M140 190h52" strokeOpacity="0.28" />
        <path d="M292 84h14M292 92h8" strokeOpacity="0.35" />
      </g>
    </svg>
  )
}

function StoreArtwork() {
  return (
    <svg {...frameProps}>
      <g {...lineProps}>
        <rect x="18.5" y="18.5" width="323" height="203" strokeOpacity="0.24" />
        <path d="M18.5 48.5h323" strokeOpacity="0.24" />
        <path d="M34 34h38M34 40h22" strokeOpacity="0.3" />

        <path
          d="M306 30h22l-3.5 15h-15L306 30Z"
          strokeOpacity="0.45"
        />
        <path d="M311 30v-3.5a3 3 0 0 1 6 0V30" strokeOpacity="0.45" />

        <rect x="38.5" y="68.5" width="86" height="66" strokeOpacity="0.25" />
        <rect x="138.5" y="68.5" width="86" height="66" strokeOpacity="0.25" />
        <rect x="238.5" y="68.5" width="86" height="66" strokeOpacity="0.25" />
        <rect x="38.5" y="148.5" width="86" height="54" strokeOpacity="0.18" />
        <rect x="138.5" y="148.5" width="86" height="54" strokeOpacity="0.18" />
        <rect x="238.5" y="148.5" width="86" height="54" strokeOpacity="0.18" />

        <circle cx="81" cy="94" r="12" strokeOpacity="0.35" />
        <path d="M54 122h54M54 116h30" strokeOpacity="0.25" />
        <path d="M154 122h54M154 116h24" strokeOpacity="0.25" />
        <path d="M254 122h54M254 116h36" strokeOpacity="0.25" />

        <path d="M52 170h30M52 180h48" strokeOpacity="0.18" />
        <path d="M152 170h30M152 180h48" strokeOpacity="0.18" />
        <path d="M252 170h30M252 180h48" strokeOpacity="0.18" />
      </g>
    </svg>
  )
}

function RunnerArtwork() {
  return (
    <svg {...frameProps}>
      <g {...lineProps}>
        <path
          d="M18 54h324M18 82h324M18 110h324M18 138h324M18 166h324"
          strokeOpacity="0.1"
        />
        <path
          d="M18 178c28-46 52 28 80-18s52 28 80-18 52 28 80-18 44 22 84-14"
          strokeOpacity="0.45"
          strokeDasharray="1 5"
        />
        <path d="M18 198h324" strokeOpacity="0.3" />

        <rect
          x="232"
          y="156"
          width="18"
          height="42"
          fill="currentColor"
          fillOpacity="0.1"
          strokeOpacity="0.45"
        />
        <rect
          x="280"
          y="142"
          width="12"
          height="56"
          fill="currentColor"
          fillOpacity="0.06"
          strokeOpacity="0.3"
        />

        <path
          d="M96 138l34 20-34 20v-40Z"
          fill="currentColor"
          fillOpacity="0.42"
          strokeOpacity="0.6"
        />
        <circle cx="78" cy="146" r="3" fill="currentColor" fillOpacity="0.5" stroke="none" />
        <circle cx="66" cy="160" r="2" fill="currentColor" fillOpacity="0.3" stroke="none" />
        <path d="M40 130h22M28 146h26M44 162h18" strokeOpacity="0.25" />
      </g>
    </svg>
  )
}

function DeliveryArtwork() {
  return (
    <svg {...frameProps}>
      <g {...lineProps}>
        <rect x="136" y="20" width="88" height="200" rx="14" strokeOpacity="0.35" />
        <path d="M166 32h28" strokeOpacity="0.4" />
        <rect x="148" y="48" width="64" height="76" strokeOpacity="0.22" />

        <path
          d="M154 116c14-26 34-4 30-30s-22-18-10-32 22 2 30-8"
          strokeOpacity="0.4"
          strokeDasharray="3 6"
        />
        <circle cx="154" cy="116" r="4" fill="currentColor" fillOpacity="0.5" stroke="none" />
        <path
          d="M204 46c-6 0-10 4-10 9 0 7 10 15 10 15s10-8 10-15c0-5-4-9-10-9Z"
          strokeOpacity="0.6"
        />
        <circle cx="204" cy="55" r="2.5" fill="currentColor" fillOpacity="0.5" stroke="none" />

        <path d="M150 146h60M150 158h40M150 170h52" strokeOpacity="0.25" />
        <rect x="150" y="184" width="60" height="20" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.35" />
        <path d="M160 194h40" strokeOpacity="0.35" />

        <path d="M56 190c22-52 58-24 76-56" strokeOpacity="0.18" strokeDasharray="2 6" />
        <circle cx="56" cy="190" r="3" fill="currentColor" fillOpacity="0.25" stroke="none" />
      </g>
    </svg>
  )
}

function WalletArtwork() {
  return (
    <svg {...frameProps}>
      <g {...lineProps}>
        <rect x="54" y="48" width="252" height="150" rx="10" strokeOpacity="0.3" />
        <path d="M54 82h252" strokeOpacity="0.3" />
        <path d="M72 64h44" strokeOpacity="0.35" />
        <circle cx="282" cy="64" r="8" strokeOpacity="0.35" />

        <rect x="76" y="100" width="64" height="40" rx="4" strokeOpacity="0.3" />
        <path d="M88 114h22M88 124h34" strokeOpacity="0.25" />

        <path d="M180 148v-22M204 148v-34M228 148v-16M252 148v-42" strokeOpacity="0.4" />
        <path d="M172 152h92" strokeOpacity="0.3" />

        <path d="M76 164h58M76 174h34" strokeOpacity="0.18" />
        <circle cx="282" cy="164" r="14" strokeOpacity="0.25" />
        <path d="M276 164h12M282 158v12" strokeOpacity="0.35" />
      </g>
    </svg>
  )
}

const artworks = {
  barber: BarberArtwork,
  store: StoreArtwork,
  runner: RunnerArtwork,
  delivery: DeliveryArtwork,
  wallet: WalletArtwork,
}

export default function IlustracionProyecto({ type }) {
  const Artwork = artworks[type] ?? BarberArtwork
  return <Artwork />
}
