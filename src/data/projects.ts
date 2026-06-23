import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'ai-chat-stream',
    index: 1,
    title: '企业知识库问答系统',
    category: 'enterprise',
    categoryLabel: '企业系统',
    description:
      '基于混合检索与大模型的企业级知识库问答平台，支持多用户权限隔离、流式回答与结构化引用溯源。',
    techStack: ['Vue3', 'TypeScript', 'FastAPI', 'SSE', 'PostgreSQL + pgvector', 'JWT（PyJWT）', 'BM25 / GIN 索引'],
    highlights: [
      '混合检索 + 两阶段精排：向量检索 × BM25 全文检索经 RRF 融合，再由 Cross-Encoder reranker 精排，兼顾语义召回与关键词精确率',
      '双模型后端可热切换：抽象 EmbedderProtocol / RerankerProtocol 协议层，本地 PyTorch 与 SiliconFlow 远程 API 一键切换，上层业务代码零改动',
      'SQL 层权限隔离：ACL 标签过滤与敏感度分级嵌入 SQL WHERE 层，检索结果物理上不含越权文档，无法被应用层逻辑绕过',
      '全链路流式输出：SSE 边生成边推流，用户消息预提交保证断流不丢数据，助手消息在 finally 块异步落库，三层解耦互不阻塞',
      '多轮对话追问改写：有历史时自动将指代性追问改写为独立检索问题，提升多轮召回质量',
      'LLM 兜底判空，拒绝幻觉：放弃依赖 rerank 绝对分数，改由 LLM 依据参考资料自行判断，prompt 强约束固定话术',
    ],
    result:
      '独立完成企业级 RAG 问答系统全栈开发，涵盖混合检索、权限隔离、多轮记忆等核心模块，已上线部署（Vercel + Render），代码开源。',
    meta: {
      type: '企业系统',
      time: '2024.04 - 2024.05',
      role: '前端 + 后端开发',
      github: 'https://github.com/kz980213/enterprise-kb-qa',
      preview: 'https://enterprisekbqa.evank.me/',
    },
    background:
      '用户对实时对话体验需求提高，传统阻塞式响应无法及时反馈，影响体验。因此采用 SSE（Server-Sent Events）构建流式对话应用，逐段返回模型输出，并确保流式状态与异常可控。',
    responsibilities: [
      '负责前后端整体设计与核心功能开发',
      '设计并实现 SSE 通信方案，保障流式稳定传输',
      '封装 LLM API，统一请求与错误处理',
      '处理异常、超时与重连，优化前端状态管理',
    ],
    coreFeatures: [
      { icon: '≈', title: '流式输出', description: '逐段展示模型返回内容' },
      { icon: 'M', title: '模型 API 封装', description: '统一请求参数与错误调试包装' },
      { icon: '⚠', title: '异常处理', description: '统一错误格式与提示' },
      { icon: '💬', title: '多轮对话', description: '上下文管理与历史记录' },
      { icon: '⟳', title: '状态管理', description: 'Loading / 连接状态管理' },
    ],
    challenges: [
      { title: '流式传输稳定性', solution: '使用 SSE 长连接、设置心跳与自动重连机制' },
      { title: '消息状态一致性', solution: '前端状态机管理消息流转，防止重复渲染' },
      { title: '超时与重试', solution: '后端与 LLM API 设置超时，失败时可重试或降级' },
      { title: '首屏 loading 体验', solution: '优化首屏加载与占位，流式过程中逐段展示' },
    ],
    pitfalls: [
      'EventSource 默认只支持 GET 请求，复杂参数通过 query 传递或改用 fetch + ReadableStream。',
      'SSE 中断时前端需主动关闭连接并清理资源，避免内存泄漏。',
      '后端流式响应需设置正确 media_type（text/event-stream）与编码。',
      'LLM API 常不直接传输结构化前端后，需一层错误包装，便于前端处理。',
      '流式输出过程中需处理 loading、空响应、超时和用户中断等边界情况。',
    ],
    interviewPoints: [
      '为什么选 SSE 而不是 WebSocket？适用场景与权衡。',
      'SSE 中断后如何用 EventSource 实现延迟返回与状态管理？',
      '后端如何封装 LLM API，如何处理超时、重试与异常？',
      '如何设计前后端错误信息格式与返回的一致性？',
      '如果接入 RAG / 知识库，如何扩展整体架构？',
    ],
    codeSnippet: {
      language: 'Python',
      code: `@app.get("/chat/stream")
async def chat_stream(q: str, sessionId: str):
    async def event_generator():
        try:
            async for chunk in llm_stream(q, sessionId):
                data = json.dumps({"type": "token", "data": chunk})
                yield f"data: {data}\\n\\n"
            yield f"data: {json.dumps({'type': 'done'})}\\n\\n"
        except Exception as e:
            err = json.dumps({"type": "error", "message": str(e)})
            yield f"data: {err}\\n\\n"
    return EventSourceResponse(event_generator(), media_type="text/event-stream")`,
    },
    review:
      '本项目完成了从前端输入、后端请求大模型、SSE 流式返回、前端逐段展示的完整闭环。通过这项目，我理解了 AI 应用开发中模型接口封装、流式响应、异常处理和前端状态同步的关键问题。后续可继续扩展工具调用、文件上传、知识库检索和 RAG 能力。',
    reviewTags: ['流式响应', 'SSE', 'LLM API', '状态管理', '异常处理', '可扩展架构'],
  },
  {
    id: 'enterprise-workflow',
    index: 2,
    title: '企业流程审批与权限管理系统',
    category: 'enterprise',
    categoryLabel: '企业系统',
    description:
      '面向企业后台业务场景的管理系统，覆盖流程审批、角色权限、复杂表单和数据管理等功能。',
    techStack: ['Vue2', 'Element UI', 'JavaScript', 'RBAC', '动态路由'],
    highlights: [
      '支持多角色权限控制（RBAC），路由与菜单按角色动态生成',
      '处理复杂业务表单和流程状态，抽象表单配置驱动渲染',
      '参与需求拆解、接口联调和上线验证全流程',
    ],
    result: '提升业务流程线上化程度，减少人工流转成本。',
    meta: {
      type: '企业系统',
      time: '2022.03 - 2024.03',
      role: '前端开发',
    },
    background:
      '企业内部业务流程依赖线下审批，效率低且难以追踪。系统化管理审批流程、角色权限和数据可视化，提升管理效率。',
    responsibilities: [
      '负责核心业务模块的前端开发',
      '实现基于角色的权限控制（RBAC）',
      '开发复杂动态表单与流程状态机',
      '参与需求评审、接口联调与上线验证',
    ],
    challenges: [
      { title: '动态权限路由', solution: '根据角色动态生成菜单与路由，前后端双重校验' },
      { title: '复杂表单联动', solution: '抽象表单配置驱动渲染，减少硬编码' },
      { title: '流程状态管理', solution: '统一状态枚举，前后端约定流转规则' },
    ],
    review:
      '通过该项目积累了企业级前端系统的开发经验，掌握了权限控制、复杂表单和流程管理的落地方案。',
    reviewTags: ['Vue2', 'RBAC', '复杂表单', '流程审批'],
  },
  {
    id: 'structured-output',
    index: 3,
    title: '结构化输出与结果校验系统',
    category: 'ai',
    categoryLabel: 'AI 应用',
    description:
      '基于大模型结构化输出能力，实现稳定的 JSON 格式返回、字段校验和前端可视化展示。',
    techStack: ['FastAPI', 'Pydantic', 'LLM API', 'JSON Schema', 'Vue3'],
    highlights: [
      '使用 Pydantic 定义数据结构，约束 LLM 输出格式',
      '对模型返回结果进行字段校验，统一转换校验错误为前端可读格式',
      '前端展示结构化解析结果，提升模型输出可控性',
    ],
    result: '提升模型输出的可控性，降低前端解析异常率。',
    meta: {
      type: 'AI 应用',
      time: '2024.06 - 2024.07',
      role: '全栈开发',
      github: 'https://github.com/kongzheng',
    },
    background:
      '大模型输出内容不稳定，直接解析 JSON 易出错。通过 Pydantic Schema 约束输出格式，结合校验层保障数据质量。',
    responsibilities: [
      '设计 Pydantic 数据模型与 JSON Schema',
      '封装 LLM 结构化输出调用接口',
      '开发前端结果展示与错误提示',
    ],
    challenges: [
      { title: '模型输出不稳定', solution: '多次重试与 fallback 降级策略' },
      { title: '字段校验失败处理', solution: 'Pydantic 校验错误统一转换为前端可读格式' },
    ],
    review:
      '掌握了结构化输出的工程化落地方案，为后续 RAG 和 Agent 系统的数据层设计打下基础。',
    reviewTags: ['结构化输出', 'Pydantic', 'JSON Schema', 'LLM'],
  },
  {
    id: 'rag-knowledge-base',
    index: 4,
    title: '知识库问答 RAG 原型系统',
    category: 'learning',
    categoryLabel: '学习实践',
    description:
      '基于 RAG 思路构建的知识库问答原型，探索文档检索、上下文增强和大模型生成的结合。',
    techStack: ['Python', 'FastAPI', 'pgvector', 'LLM API', 'Embedding API'],
    highlights: [
      '支持文档解析与向量化，实现语义检索',
      '支持上下文注入与知识问答生成',
      '验证 RAG 基础链路，为生产级系统积累经验',
    ],
    result: '完成 RAG 基础链路验证，为后续文档问答系统扩展做准备。',
    meta: {
      type: '学习实践',
      time: '2024.08 - 2024.09',
      role: '独立开发',
      github: 'https://github.com/kongzheng',
    },
    background:
      '探索如何将私有文档与大模型结合，实现基于文档内容的精准问答，而非依赖模型本身的参数知识。',
    responsibilities: [
      '搭建文档解析与向量化流程',
      '实现向量检索与上下文拼接',
      '集成 LLM API 生成最终回答',
    ],
    challenges: [
      { title: '文档切片策略', solution: '按段落切分，保留上下文语义完整性' },
      { title: '检索相关性', solution: '结合语义检索与关键词过滤提升精度' },
    ],
    review:
      '通过 RAG 原型验证了检索增强生成的完整链路，为后续生产级知识库系统的设计积累了实践经验。',
    reviewTags: ['RAG', '向量检索', '文档解析', 'LLM'],
  },
]

export const featuredProjects = projects.slice(0, 3)
