import type { Article } from '../types'

export const profile = {
  name: '孔政',
  nameEn: 'Kong Zheng',
  title: '前端开发工程师',
  direction: 'AI 应用开发方向',
  bio: '4 年前端开发经验，熟悉 Vue 技术栈与 TypeScript 工程化开发，具备企业级系统从 0 到 1 的落地经验。近期专注于 AI 应用开发，围绕 FastAPI、SSE 流式输出、LLM API 封装、结构化输出与 RAG 构建了多个实践项目。',
  bio2: '我关注技术与业务的结合，善于将复杂需求拆解为可落地的工程方案。无论是独立承担模块开发，还是跨团队协作推进，都具备良好的沟通与交付能力。',
  expectedCities: '上海 / 远程 / 混合办公',
  email: 'wanyumei784@gmail.com',
  github: 'github.com/kongzheng',
  githubUrl: 'https://github.com/kongzheng',
  blog: 'kongzheng.dev',
  blogUrl: 'https://kongzheng.dev',
}

export const heroTechTags = [
  'Vue3', 'TypeScript', 'FastAPI', 'LLM API', 'SSE 流式输出', '结构化输出', 'RAG 原型实践', '企业后台系统',
]

export const stats = [
  { icon: '📅', value: '4', label: '年前端经验' },
  { icon: '📦', value: '10+', label: '企业业务模块' },
  { icon: '🧠', value: 'AI', label: '应用开发实践中' },
  { icon: '📚', value: 'Vue / FastAPI / LLM', label: '主要技术方向' },
]

export const aboutPoints = [
  { label: '前端开发经验', desc: '熟悉 Vue3 + TypeScript，组件化与工程化实践' },
  { label: '企业系统经验', desc: '复杂表单、权限控制、流程审批、数据可视化' },
  { label: '集成与协作', desc: '对接多种 API 与第三方服务，保障系统高效稳定' },
  { label: 'AI 应用实践', desc: '基于 FastAPI、SSE、LLM API 构建智能应用，实现结构化输出与 RAG 原型实践' },
]

export const interestTopics = ['前端开发', 'AI 应用开发', '大模型应用', '企业项目实践']

export const interestBanner = {
  title: '欢迎交流前端开发、AI 应用开发、企业项目实践',
  desc: '我关注技术创新与工程落地，擅长将复杂需求转化为高质量、可维护的产品方案。无论是技术探讨、项目合作，还是团队协作机会，期待与您链接。',
}

export const hiringRoles = ['前端开发工程师', 'AI 应用开发工程师', '大模型应用开发方向岗位']

export const articles: Article[] = [
  {
    id: 'vue3-ts-best-practices',
    title: 'Vue3 + TypeScript 工程化最佳实践',
    date: '2024.03',
    tags: ['Vue3', 'TypeScript', 'Composable'],
    summary: '从组件设计模式、类型安全到 Composable 封装，系统梳理 Vue3 项目工程化落地过程中的关键决策与实践经验。涵盖 defineProps 泛型、provide/inject 类型推导、useXxx 封装原则等常见问题的解法。',
    readTime: '12 min',
  },
  {
    id: 'sse-streaming-production',
    title: 'SSE 流式输出：从原理到生产落地',
    date: '2024.05',
    tags: ['SSE', 'FastAPI', 'LLM'],
    summary: '对比 EventSource vs fetch + ReadableStream 的适用场景，深入分析断流处理、消息预提交、finally 块落库等生产级 SSE 方案的工程细节。结合企业知识库问答系统的实际案例说明。',
    readTime: '15 min',
  },
  {
    id: 'rag-architecture-design',
    title: 'RAG 知识库系统架构设计',
    date: '2024.06',
    tags: ['RAG', '混合检索', 'pgvector'],
    summary: '深入讲解混合检索（BM25 + 向量检索）、RRF 分数融合、Cross-Encoder reranker 两阶段精排的设计原理与实现要点。分析单一检索策略的局限性，以及如何通过协议层抽象实现后端热切换。',
    readTime: '18 min',
  },
  {
    id: 'fastapi-llm-engineering',
    title: 'FastAPI + LLM API 工程化实践',
    date: '2024.07',
    tags: ['FastAPI', 'Pydantic', '结构化输出'],
    summary: '从协议层抽象、Pydantic 结构化输出校验、SQL 层权限隔离到生产部署配置，全面梳理基于 FastAPI 构建 LLM 应用后端的工程化方案。包含常见陷阱与解决思路。',
    readTime: '14 min',
  },
]
