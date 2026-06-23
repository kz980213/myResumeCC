import type { SkillGroup, SkillSummary } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: '主力技能',
    description: '前端核心能力与工程实践，支撑复杂业务系统开发',
    skills: [
      { name: 'Vue3', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'Vue2', level: 'expert' },
      { name: 'Element Plus', level: 'expert' },
      { name: 'Element UI', level: 'expert' },
      { name: 'Vite', level: 'expert' },
      { name: '组件封装', level: 'expert' },
      { name: '复杂表单', level: 'expert' },
      { name: '权限控制', level: 'expert' },
      { name: '接口联调', level: 'expert' },
    ],
  },
  {
    id: 2,
    title: 'AI 应用实践',
    description: '基于 LLM 的应用开发与工程化实践',
    skills: [
      { name: 'Python', level: 'practiced' },
      { name: 'FastAPI', level: 'practiced' },
      { name: 'Pydantic', level: 'practiced' },
      { name: 'SSE 流式输出', level: 'practiced' },
      { name: 'LLM API', level: 'practiced' },
      { name: 'Prompt 工程化', level: 'practiced' },
      { name: '结构化输出', level: 'practiced' },
    ],
  },
  {
    id: 3,
    title: '原型实践 / 学习拓展',
    description: 'AI 能力延伸与前沿技术探索',
    skills: [
      { name: 'RAG', level: 'learning' },
      { name: 'Agent', level: 'learning' },
      { name: '向量数据库', level: 'learning' },
      { name: 'Function Calling', level: 'learning' },
      { name: '文档解析', level: 'learning' },
    ],
  },
  {
    id: 4,
    title: '工程化与工具',
    description: '提升效率、保障质量、支持交付',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'practiced' },
      { name: 'PostgreSQL', level: 'practiced' },
      { name: '环境变量管理', level: 'practiced' },
      { name: '错误处理', level: 'practiced' },
      { name: '项目结构设计', level: 'practiced' },
      { name: 'Linux 基础', level: 'practiced' },
    ],
  },
  {
    id: 5,
    title: '业务与协作能力',
    description: '连接技术与业务，驱动价值落地',
    skills: [
      { name: '需求拆解', level: 'practiced' },
      { name: '风险识别', level: 'practiced' },
      { name: '跨团队沟通', level: 'practiced' },
      { name: '上线验证', level: 'practiced' },
      { name: '问题定位', level: 'practiced' },
      { name: '项目复盘', level: 'practiced' },
    ],
  },
]

export const skillSummaries: SkillSummary[] = [
  {
    icon: '🛡️',
    title: '企业级前端经验',
    description: '4 年 Vue 技术线经验，构建高质量、可维护的前端系统。',
  },
  {
    icon: '🧠',
    title: 'AI 应用实践',
    description: '基于 FastAPI 与 LLM API，构建可用、可扩展的 AI 应用。',
  },
  {
    icon: '🚀',
    title: '工程化思维',
    description: '关注可维护性与可扩展性，打造稳定可靠的工程体系。',
  },
  {
    icon: '👥',
    title: '业务协作能力',
    description: '从需求到上线全流程参与，推动业务价值落地。',
  },
]

export const homeSkillsPreview = [skillGroups[0], skillGroups[1], skillGroups[3]].map(g => ({
  category: g.title,
  skills: g.skills.slice(0, 5).map(s => s.name),
}))
