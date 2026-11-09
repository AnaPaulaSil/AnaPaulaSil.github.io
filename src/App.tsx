import { useEffect, useRef, useState, type ReactNode } from "react"
import perfil from "./img/perfil.jpg"
import loop from "./img/Loops.png"
import proc from "./img/Procedure.png"
import powerQuery from "./img/PowerQuery.png"
import loopsSql from "./sql/loops.sql?raw"
import procedureSql from "./sql/procedure.sql?raw"
// Vídeos das automações (src/img)
import videoImagemHtml from "./img/img_html.mp4"
import videoDocHtml from "./img/doc_html.mp4"
import videoPonto from "./img/RH ID.mp4"
import videoFormulario from "./img/typeplatform.mp4"
// Bancos de dados: pasta PORTIFOLIO/db (raiz do projeto, fora de src)
import portfolioBak from "../db/portifolio.bak?url"

type Project = {
  id: string
  title: string
  category: string
  year: string
  description: string
  kind: "video" | "dashboard" | "api" | "docs" | "photo" | "file"
  image?: string
  file?: string
  fileName?: string
  mime?: string
  problem?: string
  result?: string
  stack?: string[]
  steps?: string[]
  // Páginas de dados
  script?: string
  scriptLabel?: string
  details?: string[]
  bak?: string
  bakName?: string
}

const portrait = perfil

function automationPoster(title: string, index = 0) {
  const safeTitle = title.replace(/[<>&"']/g, "")
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#18291f"/><path d="M0 70H800M0 140H800M0 210H800M0 280H800M0 350H800M0 420H800M100 0V450M200 0V450M300 0V450M400 0V450M500 0V450M600 0V450M700 0V450" stroke="#ffffff" stroke-opacity=".035"/><rect x="52" y="48" width="696" height="354" rx="12" fill="#23372a" stroke="#5b7052"/><path d="M52 93H748" stroke="#5b7052"/><circle cx="77" cy="71" r="5" fill="#b5594f"/><circle cx="94" cy="71" r="5" fill="#c6aa69"/><circle cx="111" cy="71" r="5" fill="#a2ba7b"/><text x="142" y="76" fill="#d4ddba" font-family="monospace" font-size="13">${["reports.py", "organizer.py", "sync.py", "extract.py"][index % 4]}</text><text x="84" y="135" fill="#b8ca95" font-family="monospace" font-size="16">$ python automation.py</text><text x="84" y="177" fill="#f6f1e5" font-family="monospace" font-size="17">${safeTitle}</text><text x="84" y="212" fill="#91a588" font-family="monospace" font-size="13">[01] Conectando às fontes de dados...</text><text x="84" y="241" fill="#91a588" font-family="monospace" font-size="13">[02] Processando e validando registros...</text><text x="84" y="270" fill="#91a588" font-family="monospace" font-size="13">[03] Exportando resultado...</text><rect x="84" y="305" width="632" height="4" rx="2" fill="#40543c"/><rect x="84" y="305" width="632" height="4" rx="2" fill="#b8ca95"/><text x="84" y="356" fill="#d4ddba" font-family="monospace" font-size="14">✓ Fluxo concluído com sucesso.</text><text x="620" y="76" fill="#91a588" font-family="monospace" font-size="10">DEMO / PYTHON</text></svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const initialProjects: Project[] = [
  {
    id: "relatorios",
    title: "Bot Discord - Conversão de imagem em HTML, com conexão IA",
    category: "AUTOMAÇÃO COM IA",
    year: "2026",
    kind: "video",
    image: automationPoster("Relatórios sem esforço", 0),
    file: videoImagemHtml,
    problem:
      "A codificação manual de peças visuais para e-mail marketing é lenta e complexa, exigindo estruturas rígidas em tabelas e CSS inline para não quebrar em leitores como Outlook e Gmail.",
    result:
      "Bot para Discord em Python integrado a uma IA multimodal que analisa a imagem da peça publicitária e gera automaticamente o código HTML/CSS inline compatível com os principais provedores de e-mail.",
    description:
      "Projeto: Bot Discord, conectado com Python, que transforma imagens de layouts de e-mail marketing em HTML configurado e imagens anexadas automaticamente no FTP.",
    stack: ["Python", "Discord", "OpenAI", "FTP"],
    steps: [
      "O Bot do Discord é vinculado a um servidor do sistema. Junto a ele, roda uma automação em Python configurada para receber as imagens e transformá-las em HTML.",
      "Tenho duas versões da automação que gera os HTMLs. A primeira não possui conexão com nenhuma IA e é pensada para modelos de e-mail marketing sem variáveis a serem preenchidas na arte, ou seja, em que não há necessidade de transformar parte da arte em texto. Nesse caso, o modelo é apenas segmentado em blocos de imagens cortadas em tamanho predeterminado. Depois de cortadas, as imagens são enviadas ao FTP e ao Discord, e é retornado somente o HTML pronto, com os links de referência das imagens. A segunda versão se conecta à OpenAI para que a inteligência artificial reconheça o que deve ser cortado e transformado em imagem, para ser referenciado no código, e o que deve ser transformado em texto, configurado conforme o modelo enviado.",
      "Como medida de proteção na versão com conexão à IA, o Bot do Discord responde somente a um comando específico e a mensagens cadastradas via código. Caso o usuário envie qualquer outro tipo de mensagem, o Bot responde informando o comando que reconhece.",
      'Funcionamento: ao ser cadastrado no servidor, o Bot fixa automaticamente uma mensagem com as informações e regras para o seu funcionamento. Em seguida, ao receber a imagem junto ao comando "!fatiar {nome_projeto (mesmo do FTP)} {nome_campanha (nome que será cadastrado no FTP e retornado no HTML)}", a primeira conexão feita é com a OpenAI. Por meio de um prompt cadastrado, a IA identifica o que deve ser cortado em imagem, formando um único bloco, e o que deve se tornar texto, adequando fonte, cor e fundo conforme o modelo anexado. Por padrão, a IA transforma em texto as partes de fundo sólido ou com palavras entre hashtags, pois identifica que elas representam palavras que se tornarão variáveis no e-mail. Após a segmentação da imagem recebida, os blocos de imagem são cadastrados no FTP da empresa. Para acessar a pasta correta, é coletado o nome do projeto informado no comando do Bot. Dentro do FTP, é criada uma pasta com as imagens, identificada pelo mesmo nome informado no comando. Assim que as imagens são cadastradas no FTP, o HTML é formatado conforme o configurado na automação, com largura fixa de 700px, configuração de pré-header e estruturação em tabelas dos textos e imagens.',
    ],
  },
  {
    id: "organizador",
    title: "Bot Discord - Conversão de documento (.docx) em HTML",
    category: "AUTOMAÇÃO DE CONTEÚDO WEB",
    year: "2026",
    kind: "video",
    image: automationPoster("Arquivos no lugar certo", 1),
    file: videoDocHtml,
    problem:
      "A conversão manual de documentos .docx para HTML é lenta e faz perder formatação e hiperlinks, principalmente em textos longos como regulamentos e termos de uso.",
    result:
      "Bot para Discord com script Python que converte o .docx em HTML, preservando a formatação e aplicando novos hiperlinks em todo o texto de uma só vez.",
    description:
      "Projeto: Bot Discord, conectado com Python, que transforma documentos em HTML pronto para uso em plataformas digitais.",
    stack: ["Python", "Discord"],
    steps: [
      "Bot Discord, conectado a um script Python, que converte documentos .docx em HTML pronto para publicação. O usuário envia o arquivo no servidor e o script lê todo o conteúdo, identificando a formatação aplicada (como títulos, negrito, itálico, listas e parágrafos) e os hiperlinks já cadastrados no documento. Em seguida, o bot pergunta ao usuário se há palavras ou expressões que devem receber hiperlinks. Para cada uma delas, o link informado é aplicado em todas as ocorrências do texto, o que evita a revisão manual palavra por palavra. Ao final, o bot retorna o arquivo HTML gerado, que pode ser publicado diretamente no site ou enviado ao banco de dados. A automação é indicada para documentos institucionais de uso recorrente, como regulamentos de site, termos de uso e políticas de privacidade, que passam por atualizações frequentes e precisam manter a formatação original.",
    ],
  },
  {
    id: "integracao",
    title: "Ajuste de Ponto Eletrônico com Playwright",
    category: "AUTOMAÇÃO DE PROCESSOS COM RPA",
    year: "2026",
    kind: "video",
    image: automationPoster("Sistemas que conversam", 2),
    file: videoPonto,
    problem:
      "A equipe de RH precisava acessar o cadastro de cada colaborador, um por vez, para identificar batidas de ponto não registradas e preencher manualmente o horário faltante. Sem integração via API com o site, o processo era lento, repetitivo e sujeito a erros.",
    result:
      "Automação em Python com Playwright que, uma vez por semana, verifica os registros de todos os colaboradores, preenche automaticamente os horários faltantes conforme regras definidas e avisa o RH por e-mail sobre cada alteração.",
    description:
      "Projeto: Executável que preenche pagina web com correção de ponto eletrônico não marcado pelos colaboradores",
    stack: ["Python", "Playwright", "Pywin32"],
    steps: [
      "Automação em Python com Playwright que ajusta os pontos eletrônicos não batidos diretamente no site de controle de ponto, simulando a navegação de um usuário do RH. Como a plataforma não oferece integração por API, o Playwright acessa o site, pesquisa o nome de cada colaborador de uma lista cadastrada e analisa os registros do período, que vai do primeiro ao último dia da semana. A execução acontece uma vez por semana, de forma agendada.",
      "A identificação do horário faltante segue regras de negócio definidas para três situações. Se não há batida antes das 11:00, a automação registra a entrada às 09:00 e informa que o colaborador deixou de marcá-la. Se não há batida entre 11:01 e 16:30, considera que o colaborador esqueceu a entrada ou a saída do almoço: a automação olha a última batida do dia e soma uma hora, desde que o resultado não ultrapasse o limite de 16:30. Por exemplo, com uma única batida às 15:40, o registro é feito às 14:40, pois somar uma hora passaria do limite. Por fim, se não há batida a partir das 16:31, a saída é registrada às 18:00.",
      "Como medidas de proteção, todo registro feito pela automação recebe, no campo de observação da plataforma, a indicação de que foi gerado automaticamente. Ao final da execução, a automação envia um e-mail, pelo Outlook cadastrado na máquina, ao responsável do RH com o nome completo de todos os colaboradores que tiveram o ponto alterado, permitindo conferir cada ajuste.",
    ],
  },
  {
    id: "extracao",
    title: "Preenchimento de formulário com Playwright",
    category: "AUTOMAÇÃO DE PROCESSOS COM RPA",
    year: "2026",
    kind: "video",
    image: automationPoster("Da web para a planilha", 3),
    file: videoFormulario,
    problem:
      "A central de atendimento preenchia toda semana, manualmente, o mesmo formulário de disparos de WhatsApp, repetindo os mesmos dados e alterando apenas a base de contatos. O processo era repetitivo, demorado e sujeito a erros, além de exigir o cálculo manual do horário de envio.",
    result:
      "Automação em Python com Playwright que preenche o formulário, anexa a base e calcula o horário de envio disponível. A equipe só atualiza a base na pasta da rede e executa o programa.",
    description:
      "Projeto: Automação em Python com Playwright que cadastra os disparos semanais de WhatsApp da central de atendimento, preenchendo o formulário, anexando a base e calculando o horário de envio.",
    stack: ["Python", "Playwright", "Formulário WEB"],
    steps: [
      "Automação em Python com Playwright que cadastra, em um formulário web, os disparos de comunicação via WhatsApp feitos pela central de atendimento. O script acessa a plataforma, preenche todos os campos necessários, realiza o upload da base de contatos e finaliza o cadastro, simulando a navegação de um usuário.",
      "Como a plataforma só aceita agendamentos a cada 30 minutos, a automação calcula o horário disponível mais próximo e o utiliza no cadastro. Os textos de envio e os demais dados de preenchimento, que se repetem a cada semana, ficam pré-cadastrados no código, e a única informação que muda é a base de contatos.",
      "A execução foi pensada para ser simples para quem não é da área técnica. A equipe da central atualiza a base na pasta da rede correta e clica no executável. O processo roda sem acompanhamento e, ao terminar, quem o iniciou recebe apenas um pop-up informando que a rotina foi finalizada.",
    ],
  },
  {
    id: "dashboard",
    title: "SQL - Loops",
    category: "Loop - While",
    year: "2026",
    kind: "dashboard",
    image: loop,
    description:
      "Projeto de exemplo: Procedure com Loop de bonificação de participantes ativos, que são aniversariantes do mês e possuem download do app",
    stack: ["SQL", "Loops"],
    script: loopsSql,
    scriptLabel: "loops.sql",
    details: [
      "Escreva aqui o primeiro parágrafo explicando a lógica da procedure.",
      "Escreva aqui o segundo parágrafo explicando tabelas, loop e regras de negócio.",
    ],
    bak: portfolioBak,
    bakName: "portifolio.bak",
  },
  {
    id: "api",
    title: "SQL - Stored Procedure",
    category: "Procedure",
    year: "2026",
    kind: "api",
    image: proc,
    description:
      "Projeto de exemplo: Procedure para alimentar dados para o Power BI, retornando os dados relevantes com conexões já executadas",
    stack: ["SQL", "Procedures"],
    script: procedureSql,
    scriptLabel: "procedure.sql",
    details: [
      "Escreva aqui o detalhamento da procedure que alimenta o Power BI.",
    ],
    bak: portfolioBak,
    bakName: "portifolio.bak",
  },
  {
    id: "documentacao",
    title: "Power Query",
    category: "Excel",
    year: "2026",
    kind: "docs",
    image: powerQuery,
    description:
      "Projeto de exemplo: Relatório de acompanhamento de resgates efetuados.",
    stack: ["SQL", "Excel", "Power Query"],
    details: [
      "Escreva aqui o detalhamento do relatório em Power Query.",
    ],
    bak: portfolioBak,
    bakName: "portifolio.bak",
  },
]

type IconProps = {
  name?: string
  size?: number
}

function Icon({ name = "arrow", size = 20 }: IconProps) {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    right: <path d="M4 12h16m-6-6 6 6-6 6" />,
    left: <path d="M20 12H4m6-6-6 6 6 6" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H5v18h14V8l-5-5Z" />
        <path d="M14 3v5h5M8 13h8M8 17h5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    star: (
      <>
        <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  )
}

function Artwork({ project }: { project: Project }) {
  if (project.image)
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        draggable={false}
      />
    )
  if (project.kind === "dashboard")
    return (
      <div className="dashboard-art">
        <div className="mini-app-bar">
          <span className="mini-app-logo">
            pulse<span>.</span>
          </span>
          <span>OVERVIEW / 2025</span>
        </div>
        <div className="mini-app-heading">Os dados contam uma história.</div>
        <div className="mini-metrics">
          <div>
            <span>PROCESSADOS</span>
            <strong>1.248</strong>
          </div>
          <div>
            <span>SUCESSO</span>
            <strong>99,8%</strong>
          </div>
        </div>
        <div className="mini-chart">
          {[38, 54, 42, 72, 60, 84, 70, 92, 80, 100].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className="mini-app-caption">MENOS RUÍDO. MAIS INSIGHTS.</span>
      </div>
    )
  if (project.kind === "api")
    return (
      <div className="api-art">
        <Icon name="code" size={38} />
        <strong>
          connect<span>_</span>
        </strong>
        <span className="api-subtitle">DIFERENTES SISTEMAS. UM SÓ FLUXO.</span>
        <div className="api-route">
          <span>GET</span> /api/v1/integrations <b>200 OK</b>
        </div>
      </div>
    )
  if (project.kind === "docs")
    return (
      <div className="docs-art">
        <div className="docs-page">
          <span>README.md</span>
          <h4># dev notes</h4>
          <p>
            Uma boa solução começa
            <br />
            com uma boa documentação.
          </p>
          <div className="docs-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="docs-flow">
            <span>input</span>
            <Icon name="right" size={14} />
            <span>process</span>
            <Icon name="right" size={14} />
            <span>output</span>
          </div>
          <small>BUILD. DOCUMENT. IMPROVE.</small>
        </div>
      </div>
    )
  return (
    <div className="file-art">
      <Icon name="file" size={48} />
      <span>{project.fileName || "Anexo do projeto"}</span>
    </div>
  )
}

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard indisponível */
    }
  }
  return (
    <div className="code-block">
      <div className="code-block-bar">
        <span>{label}</span>
        <button type="button" onClick={copy}>
          {copied ? "Copiado ✓" : "Copiar código"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

function Carousel({
  children,
  label,
  count,
}: {
  children: ReactNode
  label: string
  count: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, start: 0, scroll: 0, moved: false })
  const [progress, setProgress] = useState(0)
  return (
    <div className="carousel-wrap">
      <div
        className="carousel"
        ref={ref}
        aria-label={label}
        onScroll={() => {
          const el = ref.current!
          setProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth || 1))
        }}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || e.button !== 0) return
          drag.current = {
            active: true,
            start: e.clientX,
            scroll: ref.current!.scrollLeft,
            moved: false,
          }
        }}
        onPointerMove={(e) => {
          if (!drag.current.active) return
          const delta = e.clientX - drag.current.start
          if (Math.abs(delta) > 6) {
            drag.current.moved = true
            ref.current!.scrollLeft = drag.current.scroll - delta
          }
        }}
        onPointerUp={() => {
          drag.current.active = false
        }}
        onPointerLeave={() => {
          drag.current.active = false
        }}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault()
            e.stopPropagation()
            drag.current.moved = false
          }
        }}
      >
        {children}
      </div>
      <div className="carousel-footer">
        <span className="drag-hint">
          ARRASTE PARA EXPLORAR <span>↔</span>
        </span>
        <div className="track">
          <div style={{ transform: `translateX(${progress * 200}%)` }} />
        </div>
        <div className="carousel-actions">
          <span>
            01 <span className="muted">/ {String(count).padStart(2, "0")}</span>
          </span>
          <button
            aria-label="Projetos anteriores"
            onClick={() =>
              ref.current?.scrollBy({ left: -420, behavior: "smooth" })
            }
          >
            <Icon name="left" />
          </button>
          <button
            aria-label="Próximos projetos"
            onClick={() =>
              ref.current?.scrollBy({ left: 420, behavior: "smooth" })
            }
          >
            <Icon name="right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const projects = initialProjects
  const [hash, setHash] = useState(window.location.hash)
  const [filter, setFilter] = useState("Todos")
  useEffect(() => {
    const change = () => {
      setHash(window.location.hash)
      if (window.location.hash.startsWith("#projeto/")) window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", change)
    return () => window.removeEventListener("hashchange", change)
  }, [])
  useEffect(() => {
    if (!hash || hash.startsWith("#projeto/")) return
    const frame = requestAnimationFrame(() =>
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" }),
    )
    return () => cancelAnimationFrame(frame)
  }, [hash])

  const selected = hash.startsWith("#projeto/")
    ? projects.find((p) => p.id === hash.slice(9))
    : undefined
  const videos = projects.filter((p) => p.kind === "video")
  const dataProjects = projects.filter((p) => p.kind !== "video")
  // Os filtros agora são gerados a partir das categorias reais dos cards
  const filterOptions = [
    "Todos",
    ...Array.from(new Set(dataProjects.map((p) => p.category))),
  ]
  const works = dataProjects.filter(
    (p) => filter === "Todos" || p.category === filter,
  )

  return (
    <>
      <header className="header">
        <span className="logo" aria-hidden="true">
          <Icon name="code" size={32} />
        </span>
        <nav aria-label="Navegação principal">
          <a href="#automacoes">Automações</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
        </nav>
        <a className="header-contact" href="#contato">
          Vamos conversar <Icon size={16} />
        </a>
      </header>
      {selected ? (
        <main className="detail page-width">
          <a
            className="back-link"
            href={selected.kind === "video" ? "#automacoes" : "#projetos"}
          >
            <Icon name="left" /> Voltar ao portfólio
          </a>

          {selected.kind === "video" ? (
            <>
              <div className="detail-top">
                <span className="eyebrow">
                  {selected.category} / {selected.year}
                </span>
                <h1>{selected.title}</h1>
                <p>{selected.description}</p>
              </div>
              <div className={`detail-media ${selected.kind}`}>
                {selected.file ? (
                  <video
                    key={selected.id}
                    controls
                    playsInline
                    src={selected.file}
                  >
                    Seu navegador não suporta vídeo.
                  </video>
                ) : (
                  <div className="demo-preview">
                    <img
                      src={selected.image}
                      alt={`Prévia ilustrativa de ${selected.title}`}
                    />
                    <div className="demo-preview-note">
                      <Icon name="code" />
                      <span>
                        Projeto de exemplo — adicione o vídeo da sua automação
                        para ver a demonstração aqui.
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="detail-info">
                <div>
                  <span className="eyebrow">SOBRE A AUTOMAÇÃO</span>
                  <h2>Como essa automação funciona</h2>
                  <p>{selected.description}</p>
                  {selected.problem && (
                    <div className="automation-detail-row">
                      <span>01 / O PROBLEMA</span>
                      <p>{selected.problem}</p>
                    </div>
                  )}
                  {selected.result && (
                    <div className="automation-detail-row">
                      <span>02 / O RESULTADO</span>
                      <p>{selected.result}</p>
                    </div>
                  )}
                  {selected.steps && (
                    <div className="automation-detail-row">
                      <span>03 / COMO FUNCIONA</span>
                      <ol>
                        {selected.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
                <dl>
                  <dt>Ano</dt>
                  <dd>{selected.year}</dd>
                  <dt>Categoria</dt>
                  <dd>{selected.category}</dd>
                  <dt>Desenvolvimento</dt>
                  <dd>Ana Paula Silveira</dd>
                  {selected.stack && (
                    <>
                      <dt>Tecnologias</dt>
                      <dd className="detail-stack">
                        {selected.stack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </>
          ) : (
            <div className="data-detail">
              <div className="detail-top">
                <span className="eyebrow">
                  {selected.category} / {selected.year}
                </span>
                <h1>{selected.title}</h1>
              </div>

              {/* 1. Imagem */}
              <div className={`detail-media ${selected.kind}`}>
                {selected.mime === "application/pdf" ? (
                  <iframe title={selected.title} src={selected.file} />
                ) : (
                  <Artwork project={selected} />
                )}
              </div>

              {/* 2. Texto resumo + ficha técnica */}
              <section className="data-block data-summary">
                <div>
                  <span className="eyebrow">01 / RESUMO</span>
                  <p>{selected.description}</p>
                </div>
                <dl>
                  <dt>Ano</dt>
                  <dd>{selected.year}</dd>
                  <dt>Categoria</dt>
                  <dd>{selected.category}</dd>
                  <dt>Desenvolvimento</dt>
                  <dd>Ana Paula Silveira</dd>
                  {selected.stack && (
                    <>
                      <dt>Tecnologias</dt>
                      <dd className="detail-stack">
                        {selected.stack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </dd>
                    </>
                  )}
                </dl>
              </section>

              {/* 3. Script SQL */}
              {selected.script && (
                <section className="data-block">
                  <span className="eyebrow">02 / SCRIPT</span>
                  <CodeBlock
                    code={selected.script}
                    label={selected.scriptLabel || "script.sql"}
                  />
                </section>
              )}

              {/* 4. Detalhamento */}
              {selected.details && (
                <section className="data-block">
                  <span className="eyebrow">03 / DETALHAMENTO</span>
                  {selected.details.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </section>
              )}

              {/* 5. Arquivo .bak para download */}
              {selected.bak && (
                <section className="data-block">
                  <span className="eyebrow">04 / BANCO DE DADOS</span>
                  <a
                    className="primary-button download"
                    href={selected.bak}
                    download={selected.bakName}
                  >
                    Baixar {selected.bakName}
                    <Icon name="down" />
                  </a>
                </section>
              )}
            </div>
          )}

          <a
            className="next-project"
            href={`#projeto/${projects[(projects.findIndex((p) => p.id === selected.id) + 1) % projects.length].id}`}
          >
            Próximo projeto <Icon name="right" />
          </a>
        </main>
      ) : (
        <main id="inicio">
          <section className="hero page-width" id="sobre">
            <div className="hero-copy">
              <h1>
                Ana Paula
                <br />
                <em>Silveira.</em>
                <span className="heading-star">
                  <Icon name="code" size={38} />
                </span>
              </h1>
              <p className="hero-subtitle">
                Tecnologia para simplificar o que importa.
              </p>
              <p className="hero-description">
                Sou profissional de TI e gosto de transformar problemas em
                soluções. Crio automações, conecto sistemas e uso dados para
                tornar o dia a dia mais inteligente.
              </p>
              <div className="creative-tags" aria-label="Áreas de atuação">
                <span>Python</span>
                <span>SQL</span>
                <span>Analises e Automações</span>
              </div>
              <div className="hero-buttons">
                <a href="#automacoes" className="primary-button">
                  Explore as automações <Icon name="down" size={17} />
                </a>
                <a href="#contato" className="text-link">
                  Vamos criar juntos <Icon size={16} />
                </a>
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait">
                <img src={portrait} alt="Retrato de Ana Paula Silveira" />
              </div>
            </div>
          </section>
          <div className="intro-strip page-width">
            <span>
              MENOS REPETIÇÃO <Icon name="code" size={22} />
            </span>
            <span>
              MAIS POSSIBILIDADES <Icon name="code" size={22} />
            </span>
            <span>
              TECNOLOGIA COM PROPÓSITO <Icon name="code" size={22} />
            </span>
          </div>
          <section className="section page-width video-section" id="automacoes">
            <div className="section-heading">
              <div>
                <span className="eyebrow section-number">
                  01 — ROTINAS MAIS INTELIGENTES
                </span>
                <h2>
                  Automações<span>.</span>
                </h2>
                <p>Problemas do dia a dia, automatizados com código.</p>
              </div>
            </div>
            <Carousel label="Automações em Python" count={videos.length}>
              {videos.map((p) => (
                <a
                  key={p.id}
                  href={`#projeto/${p.id}`}
                  className="project-card video-card"
                  draggable={false}
                >
                  <div className="card-visual">
                    <video
                      key={p.id}
                      preload="metadata"
                      muted
                      playsInline
                      poster={p.image}
                      src={p.file}
                      aria-label={`Vídeo da automação ${p.title}`}
                    />
                    <span className="preview-label">
                      {p.file ? "VER DEMONSTRAÇÃO" : "PRÉVIA ILUSTRATIVA"}
                    </span>
                    <span className="play-button">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        aria-hidden="true"
                      >
                        <path d="m5 3 11 7-11 7Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="automation-card-body">
                    <div className="card-title">
                      <h3>{p.title}</h3>
                      <Icon size={17} />
                    </div>
                    <p className="automation-line">
                      <span>Problema</span>
                      {p.problem || "Descreva a tarefa repetitiva."}
                    </p>
                    <p className="automation-line result-line">
                      <span>Resultado</span>
                      {p.result || "Descreva o resultado da automação."}
                    </p>
                    <div className="automation-card-footer">
                      <span className="python-tag">
                        <Icon name="code" size={13} />
                        Python
                      </span>
                      <span>
                        Ver detalhes <Icon name="right" size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </Carousel>
          </section>
          <section className="work-section" id="projetos">
            <div className="page-width section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow section-number">
                    02 — SOLUÇÕES QUE SAEM DO PAPEL
                  </span>
                  <h2>
                    Dados<span>.</span>
                  </h2>
                  <p>Aplicações, análises e documentação.</p>
                </div>
              </div>
              <div className="filters" aria-label="Filtrar projetos">
                {filterOptions.map((f) => (
                  <button
                    key={f}
                    className={filter === f ? "active" : ""}
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="work-grid">
                {works.map((p) => (
                  <a
                    key={p.id}
                    className={`project-card work-card ${p.kind}`}
                    href={`#projeto/${p.id}`}
                  >
                    <div className="card-visual">
                      <Artwork project={p} />
                      <span className="work-open">
                        <Icon size={19} />
                      </span>
                    </div>
                    <div className="card-title">
                      <h3>{p.title}</h3>
                      <Icon size={16} />
                    </div>
                    <span className="card-meta">
                      {p.category.toUpperCase()} <span>·</span> {p.year}
                      {p.bakName && " · BANCO .BAK"}
                    </span>
                  </a>
                ))}
              </div>
              <div className="work-footnote">
                <Icon name="file" size={15} />
                <span>Banco de Dados.</span>
                <span>APLICAÇÕES · DADOS · DOCUMENTAÇÃO</span>
              </div>
            </div>
          </section>
          <section className="skills-section page-width" id="habilidades">
            <div className="skills-intro">
              <span className="eyebrow section-number">
                03 — O QUE TRAGO COMIGO
              </span>
              <h2>
                Lógica para resolver.
                <br />
                <em>Curiosidade para ir além.</em>
              </h2>
              <p>
                Ferramentas mudam. A vontade de aprender, investigar e construir
                soluções melhores continua.
              </p>
              <Icon name="code" size={49} />
            </div>
            <div className="skills-list">
              {[
                {
                  n: "01",
                  title: "Python & automação",
                  desc: "Scripts, tarefas repetitivas e fluxos inteligentes",
                  tags: ["Python", "Pandas", "Selenium"],
                },
                {
                  n: "02",
                  title: "Desenvolvimento & integrações",
                  desc: "Aplicações, APIs e sistemas conectados",
                  tags: ["FastAPI", "REST APIs", "Git"],
                },
                {
                  n: "03",
                  title: "Dados & resolução de problemas",
                  desc: "Análise, consultas e informação que faz sentido",
                  tags: ["SQL", "Excel", "Power BI"],
                },
              ].map((skill) => (
                <div className="skill" key={skill.n}>
                  <span className="skill-index">{skill.n}</span>
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.desc}</p>
                    <div className="skill-tags">
                      {skill.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="contact-section" id="contato">
            <div className="page-width contact-inner">
              <div>
                <span className="eyebrow">04 — VAMOS CONVERSAR</span>
                <h2>
                  Boas ideias começam
                  <br />
                  com uma <em>conversa.</em>
                </h2>
                <p>
                  Tem um processo para automatizar ou uma solução para
                  construir?
                  <br />
                  Vou adorar ouvir você.
                </p>
                <a
                  className="email-link"
                  href="mailto:anapaulasilveirapro@gmail.com"
                >
                  anapaulasilveirapro@gmail.com <Icon size={27} />
                </a>
              </div>
              <div className="contact-right">
                <Icon name="code" size={75} />
                <div className="social-links">
                  <a
                    href="https://github.com/AnaPaulaSil"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <Icon size={17} />
                  </a>
                  <a href="mailto:anapaulasilveirapro@gmail.com">
                    E-mail
                    <Icon size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ana-paulasilveira"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <Icon size={17} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      <footer className="footer page-width">
        <span>© {new Date().getFullYear()} by Ana Paula Silveira.</span>
        <a href="#inicio">
          De volta ao topo <Icon name="arrow" size={15} />
        </a>
      </footer>
    </>
  )
}
