import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'hotnews',
    index: 1,
    title: '今日热搜（HotNews）',
    category: 'personal',
    categoryLabel: '个人项目',
    description:
      '聚合微博、知乎、B 站等 21 个平台的实时热搜数据，一屏看全网热点。单日独立完成，已上线部署。',
    techStack: ['Vue3', 'TypeScript', 'Vite', 'DailyHotApi', 'Git Submodule', 'concurrently'],
    highlights: [
      '接入 DailyHotApi（git submodule 管理），适配 21 个平台接口响应结构，统一转换为内部数据格式',
      '平台选择器支持分类勾选与 LocalStorage 持久化；新增平台仅补拉缺失数据，不重置已有缓存',
      '每 10 分钟自动刷新 + 手动刷新；watchEffect 驱动每秒 tick，实时展示"X 秒前 / X 分钟前"',
      'API 不可用时自动静默降级到内置 mock 数据（微博、知乎、B 站兜底），页面不报错、不白屏',
    ],
    result:
      '单日独立完成，覆盖 21 个主流平台热搜聚合，已上线部署，支持持久化平台配置与 API 降级容错。',
    meta: {
      type: '个人项目',
      time: '2026-06-03',
      role: '独立开发（全栈）',
      github: 'https://github.com/kz980213/HotNews',
      preview: 'https://myresume.evank.me/',
    },
    background:
      '热搜数据分散在各平台，需频繁切换 App 才能掌握全网热点。借助 DailyHotApi 开源数据源，构建统一聚合视图，一屏看全网。',
    responsibilities: [
      '以 git submodule 集成 DailyHotApi，适配并统一 21 个平台的接口响应格式',
      '设计平台选择器：分类勾选、LocalStorage 持久化、新增平台仅增量拉取',
      '实现自动（10 min）+ 手动双刷新，watchEffect 驱动每秒 tick 展示相对时间',
      '编写三平台内置 mock 数据，静默降级确保 API 不可用时页面正常显示',
    ],
    coreFeatures: [
      { icon: '📡', title: '21 平台聚合', description: '微博、知乎、B站等热搜统一展示' },
      { icon: '⚙️', title: '按需加载缓存', description: '新增平台只拉缺失，不重置已有数据' },
      { icon: '🔄', title: '双模式刷新', description: '10 分钟自动刷新 + 手动触发' },
      { icon: '⏱️', title: '实时相对时间', description: 'watchEffect 驱动每秒更新时间显示' },
      { icon: '🛡️', title: 'Mock 静默降级', description: 'API 不可用时自动切换内置兜底数据' },
    ],
    challenges: [
      {
        title: '多服务启动与跨域',
        solution: 'concurrently 并发启动前端与 API 两个独立进程，Vite proxy 将 /api 转发到 localhost:6688，彻底规避跨域',
      },
      {
        title: '按需加载与缓存一致性',
        solution: 'useHotList 内部维护 hotListMap，watch(selectedIds) 仅对新增平台触发 fetchMissing，切换平台不重复请求已有数据',
      },
    ],
    pitfalls: [
      'git submodule 更新需手动执行 git submodule update --remote，部署流水线需额外配置 --recurse-submodules。',
      'Vite proxy 仅在 dev 环境生效，生产部署需在 Nginx 或托管平台单独配置反向代理。',
      'DailyHotApi 各平台返回字段不统一，统一 adapter 层是维护多平台适配的关键。',
      'watchEffect 驱动每秒 tick 需注意在组件卸载时清理 interval，防止内存泄漏。',
    ],
    review:
      '单日完成从 submodule 接入到 21 平台适配的全量开发，核心收获在于多服务本地联调的工程化思路（concurrently + Vite proxy），以及 Vue 响应式系统在按需缓存场景的精细控制。后续可考虑 WebSocket 推送替换轮询，或增加收藏 / 历史趋势功能。',
    reviewTags: ['Vue3', 'Git Submodule', '按需加载', '缓存策略', '降级容错', 'Vite Proxy'],
  },
  {
    id: 'enterprise-kb-qa',
    index: 2,
    title: '企业知识库智能问答系统',
    category: 'ai',
    categoryLabel: 'AI 应用',
    description:
      '基于 RAG 架构的企业级知识库问答平台，支持多格式文档异步入库、ACL 权限管控与流式对话，部署于 Render + Vercel。',
    techStack: [
      'Vue3', 'TypeScript', 'FastAPI', 'SQLAlchemy 2.0 Async',
      'PostgreSQL + pgvector', 'SiliconFlow API（bge-m3 / reranker）',
      'DeepSeek API', 'PyMuPDF', 'Google Cloud Vision', 'SSE',
    ],
    highlights: [
      '完整 RAG 全链路：文档解析 → 结构感知分块 → bge-m3 向量化 → 混合检索（pgvector + BM25 + RRF 融合）→ 交叉编码器精排 → DeepSeek 流式生成 + 引用溯源',
      '多格式异步文档入库（PDF / Word / Markdown），Google Cloud Vision OCR 将扫描件处理速度从 10–30 s/页降至 0.3–0.8 s/页；asyncio.gather 并发向量化批次提速约 6 倍',
      '基于 ACL 标签 + 密级的文档权限模型，检索层通过 pgvector && 操作符物理过滤，保证用户只能召回有权限内容，无法被应用层逻辑绕过',
      '对接 SiliconFlow 远程 API 实现 Torch-free 生产镜像，去除约 4 GB PyTorch 依赖；SSE token 级流式输出，前端实时展示入库各阶段滚动进度',
    ],
    result:
      '独立全栈完成企业级 RAG 系统全链路，已上线部署（Vercel + Render），代码开源。',
    meta: {
      type: 'AI 应用',
      time: '2025 年',
      role: '独立全栈开发',
      github: 'https://github.com/kz980213/enterprise-kb-qa',
      preview: 'https://enterprisekbqa.evank.me',
    },
    background:
      '企业内部知识分散在大量 PDF、Word 等文档中，传统关键词检索缺乏语义理解，跨文档问答效率低。采用 RAG 架构将私有文档结构化入库，结合 LLM 实现精准可溯源的知识问答，同时通过 ACL 权限管控保障多用户隔离。',
    responsibilities: [
      '设计并实现完整 RAG 全链路：文档解析、结构感知分块、向量化、混合检索、精排、流式生成',
      '构建多格式异步文档入库流水线，接入 Google Cloud Vision OCR 处理扫描件，asyncio.gather 并发批次向量化',
      '设计 ACL 权限模型，在检索层通过 pgvector && 操作符实现物理权限隔离',
      '对接 SiliconFlow + DeepSeek API，实现 Torch-free 生产部署与 SSE token 级流式输出',
    ],
    coreFeatures: [
      { icon: '🔍', title: '混合检索 + 精排', description: 'pgvector 余弦 + BM25 经 RRF 融合，reranker 两阶段精排' },
      { icon: '📄', title: '多格式异步入库', description: 'PDF / Word / Markdown，OCR 处理速度提升 40×' },
      { icon: '🔐', title: 'ACL 权限管控', description: 'ACL 标签 + 密级双维度，检索层物理隔离' },
      { icon: '💬', title: 'SSE 流式对话', description: 'token 级推送，[1][2] 引用标记精确溯源原文' },
      { icon: '🚀', title: 'Torch-free 部署', description: '去除 4 GB PyTorch，SiliconFlow 远程 API 接管推理' },
    ],
    challenges: [
      {
        title: 'Reranker 对概括型问题误判',
        solution: 'SiliconFlow reranker 对概括型问题打分极低（0.009–0.06），旧阈值 0.15 将有效答案误判为"无内容"。将语义判断权移交 LLM（NO_CONTENT_REPLY 提示词约束），rerank 仅做排序，阈值降至 0.001 兜底过滤纯噪音',
      },
      {
        title: 'asyncio Session 并发写入冲突',
        solution: 'asyncio.to_thread 中多个 _set_stage 并发操作同一 AsyncSession 触发 SessionTransactionState 错误。引入 asyncio.Lock 串行化写入，to_thread 返回后 acquire 一次确保所有挂起更新排干再推进下一阶段',
      },
      {
        title: '混合检索引用溯源对齐',
        solution: 'reranker 重排后 LLM 输出中 [1][2] 引用标记需精确映射回 chunk_id，顺序变化会导致引用错位。prompt 构建时固定 rank 编号，生成后正则提取并二次校验 chunk_id 存在性',
      },
      {
        title: 'SSE 流式输出与助手消息异步持久化',
        solution: '流式生成边推 token 边关闭响应，完整回复需在流结束后落库。采用 fire-and-forget：HTTP 响应流关闭后 asyncio.create_task 后台持久化；SSE 事件严格分为 token / citation / done 三类，前端按 event 字段分类处理',
      },
      {
        title: '企业 PDF 页眉页脚噪声检测',
        solution: '统计方法：扫描所有页面首尾各 3 行，对在超过 60% 页面出现的短字符串（2–80 字符）判定为噪声并批量删除，无需版式元数据，对 CJK 文档同样有效',
      },
      {
        title: 'Vite 开发代理与生产 baseURL 断层',
        solution: '本地 /api/v1 由 Vite proxy 转发正常，上线 Vercel 无 proxy 导致请求被 SPA rewrite 吞成 index.html，POST 返回 405。引入 VITE_API_BASE 环境变量，本地回退空字符串由 proxy 接管，生产设置后端域名',
      },
    ],
    pitfalls: [
      'pydantic-settings v2 中 list[str] 字段会先尝试 json.loads() 再走 field_validator，逗号分隔 env var（CORS_ORIGINS=a.com,b.com）直接 JSONDecodeError；改为 str 字段在调用处手动 split(",") 解析。',
      'pgvector && 操作符（数组包含）在 SQLAlchemy ORM 中无内置支持，需用 text() 或自定义 TypeDecorator 封装。',
      'SiliconFlow Embedding API 有并发限制，asyncio.gather 无限并发批次会触发 429；需引入 Semaphore 控制最大并发数。',
      'Google Cloud Vision API 按页计费，扫描件入库前需判断文档是否含文字层，有文字层优先走 PyMuPDF，降低 OCR 成本。',
    ],
    review:
      '这是工程复杂度最高的独立项目，核心收获在三处：其一，reranker 误判迫使我将"内容判断"职责从检索层移交 LLM，澄清了 RAG 各组件的职责边界；其二，asyncio 并发与 SQLAlchemy AsyncSession 的冲突加深了对异步会话生命周期的理解；其三，页眉页脚噪声统计方法验证了"不依赖版式元数据的鲁棒性思路"在 CJK 文档场景的实用价值。',
    reviewTags: ['RAG', '混合检索', 'RRF', 'pgvector', 'SSE', 'ACL 权限', 'asyncio', 'Torch-free'],
  },
  {
    id: 'china-university-map',
    index: 3,
    title: '全国高校地图查询系统',
    category: 'personal',
    categoryLabel: '个人项目',
    description:
      '基于高德地图的交互式全国高校分布平台，支持省→市→学校三级下钻、多维筛选与 AI 问答助手。',
    techStack: [
      'Vue3', 'TypeScript', 'Vite',
      'FastAPI', 'SQLAlchemy 2.0', 'PostgreSQL', 'Supabase',
      '高德地图 JS API v2.0', 'DataV GeoJSON',
      'Claude API', 'DeepSeek API', 'SSE',
      'Vercel', 'Render',
    ],
    highlights: [
      '高德地图 Polygon 实现省→市→学校三级下钻，choropleth 着色（校数多深少浅）；学校层以彩色小圆点 + 标签渲染，点击调起详情抽屉',
      '支持 985/211/双一流标签、本科/专科层次、学校类型、省份等多维组合筛选，右侧分页列表与地图高亮实时联动',
      'AI 问答助手对接 Claude API + DeepSeek API，按问题中省份/标签关键词提取上下文，SSE 流式返回，支持多轮对话历史',
      'FastAPI 服务端代理 DataV GeoJSON（urllib + lru_cache 进程内缓存），绕过 Referer ACL 限制；Vercel rewrite 将 /api/* 转发到 Render 后端',
    ],
    result:
      '独立完成全栈开发，已上线部署（Vercel + Render + Supabase），覆盖全国高校数据，支持三级地图下钻与 AI 辅助问答。',
    meta: {
      type: '个人项目',
      time: '2025 年',
      role: '独立开发（全栈）',
      github: 'https://github.com/kz980213/China_university_map',
      preview: 'https://chinauniversitymap.evank.me/',
    },
    background:
      '高校信息分散，缺乏直观的地理视角浏览方式。借助高德地图 Polygon + DataV 边界数据，将全国高校以地图可视化形式呈现，并叠加 AI 问答让用户能以自然语言查询学校信息。',
    responsibilities: [
      '设计并实现全国→省→市→学校三级 choropleth 地图下钻交互',
      '构建多维度筛选系统，地图高亮与右侧分页列表实时联动',
      '对接 Claude API + DeepSeek API，实现基于上下文检索的 SSE 流式 AI 问答',
      '实现 FastAPI 服务端代理 DataV GeoJSON，配置 Vercel rewrite 解决生产环境跨域与 ACL 问题',
    ],
    coreFeatures: [
      { icon: '🗺️', title: '三级地图下钻', description: '全国→省→市→学校，choropleth 着色 + 详情抽屉' },
      { icon: '🔍', title: '多维度筛选', description: '985/211/双一流/层次/类型/省份组合过滤' },
      { icon: '🤖', title: 'AI 问答助手', description: 'Claude + DeepSeek，上下文检索 + SSE 流式回答' },
      { icon: '📡', title: 'GeoJSON 代理缓存', description: 'lru_cache 进程内缓存，绕过 Referer ACL' },
      { icon: '🔗', title: '前后端分离部署', description: 'Vercel（前端）+ Render + Supabase（后端）' },
    ],
    challenges: [
      {
        title: 'DataV GeoJSON 生产环境 403',
        solution: '浏览器请求携带 Referer 被 DataV ACL 拒绝，fetch referrerPolicy: no-referrer 无效。在 FastAPI 新增代理端点，用 urllib.request 发起服务端请求（无 Referer），@lru_cache(maxsize=64) 进程内缓存 + Cache-Control: max-age=86400；配置 Vercel rewrite 将 /api/* 转发 Render，避免被 SPA catch-all 拦截',
      },
      {
        title: '多层 Polygon 叠加遮挡底图',
        solution: '市级 polygon 设透明后，其下方省级 polygon（zIndex 10，opacity 0.85）仍覆盖底图。维护 provincePolygonMap（省全名 → countryPolygon 列表），点击市时同时将市 polygon + 对应省 countryPolygon 的 fillOpacity 设为 0，存入 selectedCityPolygons，返回时统一恢复',
      },
      {
        title: 'Tooltip 高频闪烁抖动',
        solution: 'AMap.InfoWindow DOM 自身截获 mouseover/mouseout 事件，导致 tooltip 反复开关。对 hideTooltip 加 150ms 防抖延迟，showTooltipAt 时先 clearTimeout 取消待执行的 hide，鼠标在 InfoWindow 短暂停留时不触发关闭',
      },
      {
        title: 'choropleth 配色负数索引崩溃',
        solution: '省份校数为 0 而 min > 0 时，t = (0 − min)/(max − min) 为负，Math.floor(t * N) 得负索引，COLOR_STOPS[-1] 为 undefined 抛出 TypeError。加 Math.max(0, Math.min(idx, stops.length - 2)) 边界保护',
      },
    ],
    pitfalls: [
      '高德地图 JS API v2.0 Polygon 事件在 Vue 组件卸载时需手动 polygon.destroy()，否则地图实例持有引用导致内存泄漏。',
      'Vercel catch-all rewrite（/* → /index.html）必须排在 /api/* rewrite 之后；顺序颠倒会导致 API 请求被 SPA 吞掉，返回 HTML。',
      'lru_cache 缓存绑定进程，Render 多实例部署时各实例缓存独立，冷启动后首次请求仍会回源。生产建议改用 Redis 或 Supabase 缓存。',
      '高德地图异步加载完成前调用 AMap.Map() 会抛出未定义错误；需等待 AMapLoader.load() Promise resolve 后再初始化。',
    ],
    review:
      '这是第一个把地图可视化、多维筛选与 AI 问答整合在一起的全栈项目。最有价值的收获是理解了"第三方 CDN Referer ACL"这类环境差异引发的隐性 bug，以及地图层叠状态管理的复杂性（选中/恢复需要统一维护引用列表）。AI 问答部分验证了上下文检索 + SSE 的前后端协作模式，与企业知识库项目形成互补。',
    reviewTags: ['高德地图', 'choropleth', 'GeoJSON 代理', 'SSE', 'Claude API', 'lru_cache', 'Vercel rewrite'],
  },
]

export const featuredProjects = projects.slice(0, 3)
