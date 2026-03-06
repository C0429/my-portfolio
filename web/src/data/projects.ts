export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  imageSrc: string
  href?: string
}

// 项目数据集中维护，方便后续增删改（符合 TECH_DESIGN.md 的数据管理约定）。
export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '个人作品集网站',
    description:
      '使用 React + TypeScript + Tailwind 构建的个人站点，包含项目展示、关于我与联系方式。',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageSrc:
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#d946ef"/>
              <stop offset="0.55" stop-color="#8b5cf6"/>
              <stop offset="1" stop-color="#22d3ee"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="700" fill="#0a0a0a"/>
          <rect x="70" y="70" width="1060" height="560" rx="28" fill="url(#g)" opacity="0.18"/>
          <rect x="90" y="90" width="1020" height="520" rx="22" fill="#0f0f10" stroke="rgba(255,255,255,0.12)"/>
          <text x="120" y="170" fill="white" font-family="ui-sans-serif,system-ui" font-size="46" font-weight="700">Project Screenshot</text>
          <text x="120" y="220" fill="rgba(255,255,255,0.7)" font-family="ui-sans-serif,system-ui" font-size="22">Replace with your real image later</text>
          <circle cx="1020" cy="165" r="10" fill="#ef4444"/>
          <circle cx="1050" cy="165" r="10" fill="#f59e0b"/>
          <circle cx="1080" cy="165" r="10" fill="#22c55e"/>
        </svg>
      `),
    href: '#',
  },
  {
    id: 'dashboard',
    title: '数据看板（示例）',
    description: '响应式布局 + 卡片化信息呈现，适配移动端并支持暗色主题。',
    tech: ['React', 'Tailwind CSS', 'Responsive UI'],
    imageSrc:
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700">
          <defs>
            <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stop-color="#34d399"/>
              <stop offset="0.5" stop-color="#38bdf8"/>
              <stop offset="1" stop-color="#d946ef"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="700" fill="#0a0a0a"/>
          <rect x="70" y="70" width="1060" height="560" rx="28" fill="url(#g2)" opacity="0.16"/>
          <rect x="90" y="90" width="1020" height="520" rx="22" fill="#0f0f10" stroke="rgba(255,255,255,0.12)"/>
          <text x="120" y="170" fill="white" font-family="ui-sans-serif,system-ui" font-size="46" font-weight="700">Dashboard</text>
          <rect x="120" y="230" width="360" height="170" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)"/>
          <rect x="510" y="230" width="360" height="170" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)"/>
          <rect x="900" y="230" width="160" height="170" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)"/>
          <rect x="120" y="420" width="940" height="150" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)"/>
        </svg>
      `),
    href: '#',
  },
]

