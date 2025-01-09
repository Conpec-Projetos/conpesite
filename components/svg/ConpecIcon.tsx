// por causa da colisão de IDs, apenas um ícone com a mask pode ser utilizado por página. Isso
// poderia ser resolvido com o uso de uma <img/> svg, mas enfim.

import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  hasMask?: boolean
}

export default function ConpecIcon({ hasMask, ...props }: Props) {
  const maskSvg = (
    <> <mask id="mask" style={{ maskType: 'alpha' }}><use href="#iconeConpec" /></mask>
      <g mask="url(#mask)" filter="url(#gaussian)">
        <ellipse cx="377.952" cy="85.5305" rx="65.8959" ry="105.18" transform="rotate(-37.7459 377.952 85.5305)" fill="#FFC9A4" />
        <circle cx="76.866" cy="156.753" r="94.1973" fill="#FFC9A4" />
        <ellipse cx="389" cy="230.648" rx="26.435" ry="94.1973" transform="rotate(45 389 230.648)" fill="#D35F10" />
      </g>
      <defs>
        <filter id="gaussian" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="80.25" />
        </filter>
      </defs>
    </>
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 514 321"
      fill="var(--laranja-conpec)"
      {...props}
    >
      <g id={hasMask ? 'iconeConpec' : undefined}>
        <path d="M481.596 117.298L442.007 78.076C442 78.0691 441.993 78.0625 441.986 78.0625L442.007 78.076C427.416 63.6312 403.78 63.6451 389.21 78.076L362.811 104.226L395.803 136.909C406.737 147.741 406.737 165.3 395.803 176.125L375.995 195.749C362.495 209.098 354.126 227.614 354.142 248.071C354.142 267.835 361.966 285.795 374.745 299.04L376.011 300.289L481.596 195.743C503.468 174.079 503.468 138.962 481.596 117.298Z" />
        <path d="M442.01 78.0758L441.989 78.0622L389.215 25.7822C374.629 11.3374 350.986 11.3513 336.418 25.7822L125.252 234.964C123.438 236.767 121.483 238.293 119.423 239.68C104.931 249.18 85.2254 247.585 72.4546 234.964L125.248 287.251C139.833 301.675 163.456 301.675 178.042 287.251L389.215 78.0829C403.784 63.6451 427.42 63.631 442.01 78.0758Z" />
        <path d="M151.645 208.822L118.653 176.125C107.716 165.3 107.716 147.742 118.653 136.91L138.45 117.299C167.604 88.4232 167.604 41.5871 138.45 12.7114L32.8595 117.299C10.9954 138.963 10.9954 174.073 32.8595 195.743L72.4575 234.965C85.2241 247.586 104.933 249.181 119.426 239.681C121.485 238.294 123.436 236.768 125.251 234.965L151.645 208.822Z" />
      </g>

      {hasMask && maskSvg}
    </svg>
  )
}
