/* ==========================================================================
   Instituto Semeador — aplicação (roteamento, views, galeria, lightbox)
   ========================================================================== */

const app = document.getElementById('app');
const $ = (s, e = document) => e.querySelector(s);
const $$ = (s, e = document) => [...e.querySelectorAll(s)];

/* ------------------------------- ÍCONES ------------------------------- */
const ICO = {
  coracao: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 22l7.8-8.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z"/>',
  livro: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  estrela: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>',
  maos: '<path d="M11 12 8.5 9.5a2 2 0 0 0-3 2.6l4 5a4 4 0 0 0 3 1.4h3a4 4 0 0 0 4-4v-4a2 2 0 0 0-4 0"/><path d="M15 11V6a2 2 0 0 0-4 0v5"/><path d="M11 11V4a2 2 0 0 0-4 0v9"/>',
  seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  setaEsq: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
  relogio: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  calendario: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  fone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  camera: '<path d="M14.5 4h-5L8 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4l-1.5-2Z"/><circle cx="12" cy="13" r="4"/>',
  lupa: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  insta: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  usuario: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  grupo: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  wpp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>'
};
const ico = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICO[n] || ''}</svg>`;
const icoCheio = (n) => `<svg viewBox="0 0 24 24" fill="currentColor">${ICO[n] || ''}</svg>`;

/* ------------------------------ UTILIDADES ------------------------------ */
const num = (n) => String(n).padStart(2, '0');
const fotoGrande = (slug, i) => `assets/fotos/${slug}/${num(i)}.jpg`;
const fotoMini = (slug, i) => `assets/fotos/${slug}/t${num(i)}.jpg`;
const acha = (slug) => PROGRAMAS.find(p => p.slug === slug);
const porCategoria = (c) => PROGRAMAS.filter(p => p.categoria === c);
const totalFotos = (p) => p.galerias.reduce((s, g) => s + g.total, 0);
const TOTAL_GERAL = PROGRAMAS.reduce((s, p) => s + totalFotos(p), 0);

function capa(p) {
  if (p.galerias.length) {
    const g = p.galerias[0];
    return fotoMini(g.slug, g.capa || 1);
  }
  if (p.cartazes.length) return `assets/cartazes/t-${p.cartazes[0]}.jpg`;
  return 'assets/logo.png';
}

/* Links de WhatsApp */
$$('#wpp-topo,#wpp-drawer,#wpp-rodape,#wpp-flutuante').forEach(a => {
  a.href = wpp('Olá! Vim pelo site do Instituto Semeador e gostaria de mais informações.');
});
$('#ano').textContent = new Date().getFullYear();

/* Rodapé dinâmico */
$('#rodape-cursos').innerHTML = porCategoria('curso')
  .map(p => `<li><a href="#/p/${p.slug}">${p.titulo}</a></li>`).join('');
$('#rodape-servicos').innerHTML = porCategoria('servico')
  .map(p => `<li><a href="#/p/${p.slug}">${p.titulo}</a></li>`).join('');

/* ============================ COMPONENTES ============================ */

function cardPrograma(p, i = 0) {
  const cat = CATEGORIAS[p.categoria];
  const n = totalFotos(p);
  const ehCartaz = !p.galerias.length;
  return `
  <a class="card rev rev-${(i % 6) + 1}" href="#/p/${p.slug}">
    <div class="card-foto${ehCartaz ? ' cartaz' : ''}">
      <img src="${capa(p)}" alt="${p.titulo}" loading="lazy">
      ${p.situacao ? `<span class="selo${/aberta/i.test(p.situacao) ? ' aberto' : ''}">${p.situacao}</span>` : ''}
      ${n ? `<span class="selo selo-qtd">${ico('camera')} ${n} fotos</span>` : ''}
    </div>
    <div class="card-corpo">
      <span class="card-cat">${cat.singular}</span>
      <h3 class="h-card">${p.titulo}</h3>
      <p>${p.resumo}</p>
      <span class="card-link">Ver detalhes ${ico('seta')}</span>
    </div>
  </a>`;
}

function blocoGaleria(p, g, densa = false) {
  const fotos = Array.from({ length: g.total }, (_, k) => k + 1);
  return `
  <section class="galeria-bloco rev">
    <div class="galeria-cab">
      <div>
        <h3>${g.titulo}</h3>
        ${g.texto ? `<p>${g.texto}</p>` : ''}
      </div>
      <span class="cont">${g.total} fotos</span>
    </div>
    <div class="foto-grade${densa ? ' densa' : ''}">
      ${fotos.map(i => `
        <button class="foto" data-gal="${g.slug}" data-idx="${i - 1}" aria-label="Ampliar foto ${i} de ${g.titulo}">
          <img src="${fotoMini(g.slug, i)}" alt="${p.titulo} — ${g.titulo}, foto ${i}" loading="lazy" decoding="async">
          <span class="lupa">${ico('lupa')}</span>
        </button>`).join('')}
    </div>
  </section>`;
}

function faixaContato(titulo, texto) {
  return `
  <section class="faixa-cta">
    <div class="wrap">
      <div class="rev">
        <span class="olho claro">Fale com o Instituto</span>
        <h2>${titulo}</h2>
        <p>${texto}</p>
        <div class="btns">
          <a class="btn btn-wpp" href="${wpp('Olá! Vim pelo site do Instituto Semeador e gostaria de mais informações.')}" target="_blank" rel="noopener">${icoCheio('wpp')} Chamar no WhatsApp</a>
          <a class="btn btn-ghost" href="#/contato">Ver endereço e mapa ${ico('seta')}</a>
        </div>
      </div>
      <div class="contato-cartao rev rev-2">
        <div class="contato-linha">
          <span class="contato-ico">${ico('pin')}</span>
          <div><strong>Endereço</strong><a href="${INSTITUTO.mapa}" target="_blank" rel="noopener">${INSTITUTO.enderecoCurto}<br>${INSTITUTO.bairro} — ${INSTITUTO.cidade}/${INSTITUTO.uf}</a></div>
        </div>
        <div class="contato-linha">
          <span class="contato-ico">${ico('fone')}</span>
          <div><strong>Telefone e WhatsApp</strong><a href="tel:+55${INSTITUTO.whatsapp}">${INSTITUTO.telefone}</a></div>
        </div>
        <div class="contato-linha">
          <span class="contato-ico">${ico('insta')}</span>
          <div><strong>Instagram</strong><a href="${INSTITUTO.instagram}" target="_blank" rel="noopener">${INSTITUTO.instagramUser}</a></div>
        </div>
        <div class="contato-linha">
          <span class="contato-ico">${ico('usuario')}</span>
          <div><strong>Diretoria</strong><span>${INSTITUTO.presidente} · ${INSTITUTO.vice}</span></div>
        </div>
      </div>
    </div>
  </section>`;
}

/* ============================== VIEW: HOME ============================== */
function viewHome() {
  const cursos = porCategoria('curso');
  const servicos = porCategoria('servico');
  const acoes = porCategoria('acao');

  return `
  <section class="hero">
    <div class="wrap hero-grade">
      <div>
        <span class="hero-badge"><b>OSC</b> Compensa 1 · Manaus/AM</span>
        <h1 class="h-hero">Semear oportunidades,<br>colher <em>transformação</em>.</h1>
        <p class="hero-sub">O Instituto Semeador leva educação, saúde, cultura e assistência para quem mais precisa — com cursos, atendimentos profissionais e ações sociais <strong style="color:#fff">inteiramente gratuitos</strong>.</p>
        <div class="hero-acoes">
          <a class="btn btn-primario" href="#/cursos">Ver cursos abertos ${ico('seta')}</a>
          <a class="btn btn-ghost" href="${wpp('Olá! Vim pelo site do Instituto Semeador e gostaria de mais informações.')}" target="_blank" rel="noopener">${icoCheio('wpp')} Falar no WhatsApp</a>
        </div>
        <div class="hero-nums">
          <div><strong data-conta="${cursos.length}">0</strong><span>Cursos e capacitações</span></div>
          <div><strong data-conta="${servicos.length}">0</strong><span>Serviços gratuitos</span></div>
          <div><strong data-conta="${acoes.length}">0</strong><span>Projetos e ações</span></div>
          <div><strong>100%</strong><span>Gratuito para a comunidade</span></div>
        </div>
      </div>

      <div class="hero-mosaico">
        <div class="hero-selo"><img src="assets/logo.png" alt="Logo do Instituto Semeador"></div>
        ${HERO_FOTOS.map(f => `
          <figure>
            <img src="assets/fotos/${f.src}" alt="${f.legenda}" loading="eager">
            <figcaption>${f.legenda}</figcaption>
          </figure>`).join('')}
      </div>
    </div>
  </section>

  <section class="pilares">
    <div class="wrap pilares-grade">
      ${INSTITUTO.pilares.map((p, i) => `
        <article class="pilar rev rev-${i + 1}">
          <span class="pilar-ico">${ico(p.icone)}</span>
          <h3>${p.titulo}</h3>
          <p>${p.texto}</p>
        </article>`).join('')}
    </div>
  </section>

  <section class="secao alt" id="sobre">
    <div class="wrap sobre-grade">
      <div class="sobre-texto rev">
        <span class="olho">Quem somos</span>
        <h2 class="h-secao" style="margin:14px 0 18px">Uma casa aberta no coração da Compensa</h2>
        <p>O Instituto Semeador é uma Organização da Sociedade Civil dedicada a promover oportunidades, inclusão e transformação social na comunidade da Compensa 1, em Manaus.</p>
        <p>Por meio de projetos e ações sociais, atendemos pessoas de toda a cidade com serviços gratuitos, atividades comunitárias, cursos, capacitações e iniciativas de saúde, educação, cultura e assistência.</p>
        <p>Nosso propósito é levar oportunidade para quem mais precisa, contribuindo com o desenvolvimento pessoal e profissional e fortalecendo os vínculos com a comunidade.</p>
        <div class="sobre-destaque">
          <strong>Transformando vidas através de oportunidades</strong>
          <span>Presidente ${INSTITUTO.presidente} · Vice-presidente ${INSTITUTO.vice}</span>
        </div>
      </div>
      <div class="sobre-fotos rev rev-2">
        <figure><img src="${fotoMini('janeiro-branco', 4)}" alt="Palestra de saúde mental" loading="lazy"></figure>
        <figure><img src="${fotoMini('servico-social', 1)}" alt="Atendimento do Serviço Social" loading="lazy"></figure>
        <figure><img src="${fotoMini('bem-viver', 2)}" alt="Grupo Bem Viver em atividade" loading="lazy"></figure>
        <figure><img src="${fotoMini('acao-terra-preta', 2)}" alt="Ação social no Ramal Terra Preta" loading="lazy"></figure>
      </div>
    </div>
  </section>

  <section class="secao">
    <div class="wrap">
      <div class="secao-topo rev">
        <div class="txt">
          <span class="olho">${CATEGORIAS.curso.nome}</span>
          <h2 class="h-secao">${CATEGORIAS.curso.chamada}</h2>
          <p>${CATEGORIAS.curso.texto}</p>
        </div>
        <a class="btn btn-linha" href="#/cursos">Ver todos ${ico('seta')}</a>
      </div>
      <div class="grade-programas">
        ${cursos.map((p, i) => cardPrograma(p, i)).join('')}
      </div>
    </div>
  </section>

  <section class="secao alt">
    <div class="wrap">
      <div class="secao-topo rev">
        <div class="txt">
          <span class="olho">${CATEGORIAS.servico.nome}</span>
          <h2 class="h-secao">${CATEGORIAS.servico.chamada}</h2>
          <p>${CATEGORIAS.servico.texto}</p>
        </div>
        <a class="btn btn-linha" href="#/servicos">Ver todos ${ico('seta')}</a>
      </div>
      <div class="grade-programas">
        ${servicos.map((p, i) => cardPrograma(p, i)).join('')}
      </div>
    </div>
  </section>

  <section class="secao">
    <div class="wrap">
      <div class="secao-topo rev">
        <div class="txt">
          <span class="olho">${CATEGORIAS.acao.nome}</span>
          <h2 class="h-secao">${CATEGORIAS.acao.chamada}</h2>
          <p>${CATEGORIAS.acao.texto}</p>
        </div>
        <a class="btn btn-linha" href="#/acoes">Ver todas ${ico('seta')}</a>
      </div>
      <div class="grade-programas tres">
        ${acoes.map((p, i) => cardPrograma(p, i)).join('')}
      </div>
    </div>
  </section>

  <section class="secao alt">
    <div class="wrap">
      <div class="secao-topo rev">
        <div class="txt">
          <span class="olho">Como participar</span>
          <h2 class="h-secao">Três passos e você já está dentro</h2>
          <p>Não tem burocracia, não tem taxa e não precisa de indicação. É chegar e conversar com a equipe.</p>
        </div>
      </div>
      <div class="passos">
        <article class="passo rev rev-1">
          <h3>Escolha o que você precisa</h3>
          <p>Curso, atendimento ou projeto: veja aqui no site o que está com inscrições abertas e qual horário cabe na sua rotina.</p>
        </article>
        <article class="passo rev rev-2">
          <h3>Separe os documentos</h3>
          <p>Para os cursos, leve xerox de RG, CPF e comprovante de residência. Para os atendimentos, é só chegar e agendar na recepção.</p>
        </article>
        <article class="passo rev rev-3">
          <h3>Venha até a sede</h3>
          <p>As inscrições são presenciais na Rua Joraci Camargo, nº 100, Compensa 1. Na dúvida, chame antes no WhatsApp: ${INSTITUTO.telefone}.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="secao">
    <div class="wrap">
      <div class="secao-topo rev">
        <div class="txt">
          <span class="olho">Registros</span>
          <h2 class="h-secao">${TOTAL_GERAL} fotos, cada uma no seu lugar</h2>
          <p>A galeria do Instituto é organizada por curso, serviço e ação — sem bagunça, sem foto solta. Escolha um tema e veja tudo o que aconteceu.</p>
        </div>
        <a class="btn btn-linha" href="#/galeria">Abrir galeria ${ico('seta')}</a>
      </div>
      <div class="foto-grade densa rev">
        ${['formatura-eja/t04', 'dia-das-criancas/t04', 'mesa-brasil/t02', 'informatica/t03', 'bem-viver/t02',
           'trancista/t02', 'prova-eja/t05', 'janeiro-branco/t04', 'psicologia/t02', 'acao-terra-preta/t02']
          .map(f => `<a class="foto" href="#/galeria"><img src="assets/fotos/${f}.jpg" alt="Registro das atividades do Instituto Semeador" loading="lazy"><span class="lupa">${ico('seta')}</span></a>`).join('')}
      </div>
    </div>
  </section>

  ${faixaContato('Pronto para dar o próximo passo?', 'Fale com a equipe do Instituto Semeador pelo WhatsApp ou venha até a sede na Compensa 1. O atendimento é gratuito e a porta está aberta.')}
  `;
}

/* =========================== VIEW: LISTA (categoria) =========================== */
function viewLista(catKey) {
  const cat = CATEGORIAS[catKey];
  const lista = porCategoria(catKey);
  const fotos = lista.reduce((s, p) => s + totalFotos(p), 0);

  return `
  <section class="p-hero">
    <div class="wrap">
      <a class="voltar" href="#/">${ico('setaEsq')} Início</a>
      <span class="olho claro">${cat.nome}</span>
      <h1 style="margin-top:14px">${cat.chamada}</h1>
      <p class="p-resumo">${cat.texto}</p>
      <div class="chips">
        <span class="chip">${ico('grupo')} ${lista.length} ${lista.length === 1 ? cat.singular.toLowerCase() : cat.nome.toLowerCase()}</span>
        <span class="chip">${ico('camera')} ${fotos} fotos</span>
        <span class="chip">${ico('pin')} ${INSTITUTO.bairro} — ${INSTITUTO.cidade}/${INSTITUTO.uf}</span>
      </div>
    </div>
  </section>

  <section class="secao">
    <div class="wrap">
      <div class="grade-programas">
        ${lista.map((p, i) => cardPrograma(p, i)).join('')}
      </div>
    </div>
  </section>

  ${faixaContato('Ficou com dúvida sobre ' + cat.nome.toLowerCase() + '?', 'A equipe responde no WhatsApp e as inscrições são feitas presencialmente na sede, na Compensa 1.')}
  `;
}

/* =========================== VIEW: PROGRAMA =========================== */
function viewPrograma(slug) {
  const p = acha(slug);
  if (!p) return viewHome();
  const cat = CATEGORIAS[p.categoria];
  const lista = PROGRAMAS.filter(x => x.categoria === p.categoria);
  const pos = lista.indexOf(p);
  const prox = lista[(pos + 1) % lista.length];

  return `
  <section class="p-hero">
    <div class="wrap">
      <a class="voltar" href="#/${cat.slug}">${ico('setaEsq')} ${cat.nome}</a>
      <h1>${p.titulo}</h1>
      ${p.subtitulo ? `<p class="p-sub">${p.subtitulo}</p>` : ''}
      <p class="p-resumo">${p.resumo}</p>
      ${p.lema ? `<div class="p-lema">“${p.lema}”</div>` : ''}
      <div class="chips">
        ${p.situacao ? `<span class="chip">${ico('check')} ${p.situacao}</span>` : ''}
        ${totalFotos(p) ? `<span class="chip">${ico('camera')} ${totalFotos(p)} fotos</span>` : ''}
        <span class="chip">${ico('pin')} ${INSTITUTO.enderecoCurto}</span>
      </div>
      <div class="p-hero-acoes">
        <a class="btn btn-wpp" href="${wpp(p.cta + ' — vim pelo site do Instituto Semeador.')}" target="_blank" rel="noopener">${icoCheio('wpp')} ${p.cta}</a>
        <a class="btn btn-ghost" href="#/contato">Como chegar ${ico('seta')}</a>
      </div>
    </div>
  </section>

  <section class="p-corpo">
    <div class="wrap p-grade">
      <div class="p-texto rev">
        <span class="olho">Sobre ${p.categoria === 'acao' ? 'a ação' : p.categoria === 'servico' ? 'o serviço' : 'o curso'}</span>
        <h2 class="h-secao" style="font-size:clamp(1.5rem,2.6vw,2.1rem);margin:12px 0 18px">O que acontece aqui</h2>
        ${p.descricao.map(t => `<p>${t}</p>`).join('')}
        <ul class="p-itens">
          ${p.itens.map(i => `<li>${ico('check')} <span>${i}</span></li>`).join('')}
        </ul>
      </div>

      <aside>
        <div class="painel rev rev-2">
          <div class="painel-topo">
            <strong>Informações</strong>
            <span>${cat.singular} · Instituto Semeador</span>
          </div>
          <dl>
            ${p.destaques.map(d => `<dt>${d.rotulo}</dt><dd>${d.valor}</dd>`).join('')}
            <dt>Local</dt><dd>${INSTITUTO.enderecoCurto}<br>${INSTITUTO.bairro} — ${INSTITUTO.cidade}/${INSTITUTO.uf}</dd>
            <dt>Contato</dt><dd>${INSTITUTO.telefone}</dd>
          </dl>
          <div class="painel-cta">
            <a class="btn btn-wpp" href="${wpp(p.cta + ' — vim pelo site do Instituto Semeador.')}" target="_blank" rel="noopener">${icoCheio('wpp')} Falar agora</a>
          </div>
        </div>

        ${p.cartazes.length ? `
        <div class="cartaz-bloco rev rev-3">
          <h4>Cartaz oficial</h4>
          <div class="cartazes">
            ${p.cartazes.map((c, i) => `
              <button data-cartaz="${c}" data-cartaz-titulo="${p.titulo}" aria-label="Ampliar cartaz de ${p.titulo}">
                <img src="assets/cartazes/t-${c}.jpg" alt="Cartaz oficial — ${p.titulo}" loading="lazy">
              </button>`).join('')}
          </div>
        </div>` : ''}
      </aside>
    </div>

    ${p.galerias.length ? `
    <div class="wrap" style="margin-top:clamp(20px,3vw,40px)">
      <div class="secao-topo rev" style="margin-bottom:8px">
        <div class="txt">
          <span class="olho">Registros</span>
          <h2 class="h-secao" style="font-size:clamp(1.6rem,2.8vw,2.3rem);margin-top:12px">Fotos de ${p.titulo}</h2>
          <p>Todas as imagens organizadas por momento — clique em qualquer foto para ampliar.</p>
        </div>
      </div>
      ${p.galerias.map(g => blocoGaleria(p, g)).join('')}
    </div>` : ''}

    <div class="wrap" style="margin-top:clamp(40px,5vw,64px)">
      <a class="card rev" href="#/p/${prox.slug}" style="flex-direction:row;align-items:center;padding:0;overflow:hidden">
        <div class="card-foto" style="width:180px;aspect-ratio:1;flex:none">
          <img src="${capa(prox)}" alt="${prox.titulo}" loading="lazy">
        </div>
        <div class="card-corpo" style="padding:22px 26px">
          <span class="card-cat">Próximo ${CATEGORIAS[prox.categoria].singular.toLowerCase()}</span>
          <h3 class="h-card">${prox.titulo}</h3>
          <span class="card-link">Ver ${ico('seta')}</span>
        </div>
      </a>
    </div>
  </section>

  ${faixaContato('Quer participar de ' + p.titulo + '?', 'Chame no WhatsApp ou venha até a sede do Instituto, na Compensa 1. O atendimento é gratuito.')}
  `;
}

/* =========================== VIEW: GALERIA =========================== */
let filtroAtual = 'tudo';

function viewGaleria() {
  const total = TOTAL_GERAL;
  return `
  <section class="p-hero">
    <div class="wrap">
      <a class="voltar" href="#/">${ico('setaEsq')} Início</a>
      <span class="olho claro">Galeria</span>
      <h1 style="margin-top:14px">Tudo o que já aconteceu aqui</h1>
      <p class="p-resumo">${total} registros organizados por curso, serviço e ação. Cada bloco é um capítulo do Instituto — nada de foto solta.</p>
      <div class="chips">
        <span class="chip">${ico('camera')} ${total} fotos</span>
        <span class="chip">${ico('grupo')} ${PROGRAMAS.filter(p => p.galerias.length).length} temas</span>
      </div>
    </div>
  </section>

  <section class="secao">
    <div class="wrap">
      <div class="filtros" id="filtros">
        <button class="filtro${filtroAtual === 'tudo' ? ' ativo' : ''}" data-filtro="tudo">Tudo <span>${total}</span></button>
        ${Object.entries(CATEGORIAS).map(([k, c]) => {
          const n = porCategoria(k).reduce((s, p) => s + totalFotos(p), 0);
          return `<button class="filtro${filtroAtual === k ? ' ativo' : ''}" data-filtro="${k}">${c.nome} <span>${n}</span></button>`;
        }).join('')}
      </div>
      <div id="galeria-conteudo">${galeriaConteudo()}</div>
    </div>
  </section>

  ${faixaContato('Viu algo que combina com você?', 'Fale com a equipe pelo WhatsApp e descubra como participar dos cursos, atendimentos e ações do Instituto.')}
  `;
}

function galeriaConteudo() {
  const lista = PROGRAMAS.filter(p => p.galerias.length && (filtroAtual === 'tudo' || p.categoria === filtroAtual));
  return lista.map(p => `
    <div class="galeria-bloco rev">
      <div class="galeria-cab">
        <div>
          <span class="card-cat">${CATEGORIAS[p.categoria].singular}</span>
          <h3>${p.titulo}</h3>
          <p>${p.resumo}</p>
        </div>
        <a class="btn btn-linha btn-sm" href="#/p/${p.slug}">Ver detalhes ${ico('seta')}</a>
      </div>
      ${p.galerias.map(g => `
        <div style="margin-top:22px">
          ${p.galerias.length > 1 ? `<div class="galeria-cab" style="margin-bottom:14px"><h3 style="font-size:1.1rem;color:var(--tinta-2)">${g.titulo}</h3><span class="cont">${g.total} fotos</span></div>` : ''}
          <div class="foto-grade densa">
            ${Array.from({ length: g.total }, (_, k) => k + 1).map(i => `
              <button class="foto" data-gal="${g.slug}" data-idx="${i - 1}" aria-label="Ampliar foto ${i} de ${p.titulo}">
                <img src="${fotoMini(g.slug, i)}" alt="${p.titulo} — ${g.titulo}, foto ${i}" loading="lazy" decoding="async">
                <span class="lupa">${ico('lupa')}</span>
              </button>`).join('')}
          </div>
        </div>`).join('')}
    </div>`).join('');
}

/* =========================== VIEW: CONTATO =========================== */
function viewContato() {
  return `
  <section class="p-hero">
    <div class="wrap">
      <a class="voltar" href="#/">${ico('setaEsq')} Início</a>
      <span class="olho claro">Contato</span>
      <h1 style="margin-top:14px">Venha tomar um café na Compensa</h1>
      <p class="p-resumo">As inscrições dos cursos e os agendamentos dos atendimentos são feitos presencialmente, na sede do Instituto. Antes de vir, se preferir, chame no WhatsApp.</p>
      <div class="p-hero-acoes">
        <a class="btn btn-wpp" href="${wpp('Olá! Vim pelo site do Instituto Semeador e gostaria de mais informações.')}" target="_blank" rel="noopener">${icoCheio('wpp')} Chamar no WhatsApp</a>
        <a class="btn btn-ghost" href="${INSTITUTO.mapa}" target="_blank" rel="noopener">Abrir no Google Maps ${ico('seta')}</a>
      </div>
    </div>
  </section>

  <section class="secao">
    <div class="wrap p-grade">
      <div class="rev">
        <span class="olho">Onde estamos</span>
        <h2 class="h-secao" style="font-size:clamp(1.5rem,2.6vw,2.1rem);margin:12px 0 20px">Rua Joraci Camargo, nº 100</h2>
        <div class="mapa">
          <iframe
            src="https://maps.google.com/maps?q=Rua+Joraci+Camargo,+100+-+Compensa,+Manaus+-+AM&z=17&output=embed"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa do Instituto Semeador"></iframe>
        </div>
        <ul class="p-itens" style="margin-top:24px">
          <li>${ico('check')} <span>Inscrições dos cursos: presenciais, com RG, CPF e comprovante de residência (xerox)</span></li>
          <li>${ico('check')} <span>Atendimentos de psicologia, fisioterapia, neuropsicopedagogia e serviço social: agendamento na recepção</span></li>
          <li>${ico('check')} <span>Todos os serviços do Instituto são gratuitos</span></li>
        </ul>
      </div>

      <aside>
        <div class="painel rev rev-2">
          <div class="painel-topo">
            <strong>Instituto Semeador</strong>
            <span>${INSTITUTO.tipo}</span>
          </div>
          <dl>
            <dt>Endereço</dt><dd>${INSTITUTO.enderecoCurto}<br>${INSTITUTO.bairro} — ${INSTITUTO.cidade}/${INSTITUTO.uf}</dd>
            <dt>Telefone e WhatsApp</dt><dd><a href="tel:+55${INSTITUTO.whatsapp}">${INSTITUTO.telefone}</a></dd>
            <dt>Instagram</dt><dd><a href="${INSTITUTO.instagram}" target="_blank" rel="noopener">${INSTITUTO.instagramUser}</a></dd>
            <dt>Presidente</dt><dd>${INSTITUTO.presidente}</dd>
            <dt>Vice-presidente</dt><dd>${INSTITUTO.vice}</dd>
          </dl>
          <div class="painel-cta">
            <a class="btn btn-wpp" href="${wpp('Olá! Vim pelo site do Instituto Semeador e gostaria de mais informações.')}" target="_blank" rel="noopener">${icoCheio('wpp')} Falar agora</a>
          </div>
        </div>
      </aside>
    </div>
  </section>
  `;
}

/* ============================== LIGHTBOX ============================== */
const LB = {
  fotos: [], idx: 0, titulo: '',
  el: $('#lightbox'), img: $('#lb-img'), tit: $('#lb-titulo'),
  cont: $('#lb-contador'), leg: $('#lb-legenda'), pontos: $('#lb-pontos')
};

function abrirLightbox(fotos, idx, titulo) {
  LB.fotos = fotos; LB.idx = idx; LB.titulo = titulo;
  LB.el.classList.add('aberto');
  document.body.style.overflow = 'hidden';
  LB.pontos.innerHTML = fotos.length <= 24
    ? fotos.map(() => '<span class="lb-ponto"></span>').join('') : '';
  pintarLightbox();
}
function pintarLightbox() {
  const f = LB.fotos[LB.idx];
  LB.img.src = f.src;
  LB.img.alt = f.legenda || LB.titulo;
  LB.tit.textContent = LB.titulo;
  LB.cont.textContent = `Foto ${LB.idx + 1} de ${LB.fotos.length}`;
  LB.leg.textContent = f.legenda || '';
  $$('.lb-ponto', LB.pontos).forEach((p, i) => p.classList.toggle('on', i === LB.idx));
  // pré-carrega vizinhas
  [LB.idx + 1, LB.idx - 1].forEach(i => {
    const v = LB.fotos[(i + LB.fotos.length) % LB.fotos.length];
    if (v) new Image().src = v.src;
  });
}
function moverLightbox(d) {
  LB.idx = (LB.idx + d + LB.fotos.length) % LB.fotos.length;
  pintarLightbox();
}
function fecharLightbox() {
  LB.el.classList.remove('aberto');
  document.body.style.overflow = '';
}

$('#lb-fechar').onclick = fecharLightbox;
$('#lb-ant').onclick = () => moverLightbox(-1);
$('#lb-prox').onclick = () => moverLightbox(1);
LB.el.addEventListener('click', e => { if (e.target === LB.el || e.target.classList.contains('lb-palco')) fecharLightbox(); });
document.addEventListener('keydown', e => {
  if (!LB.el.classList.contains('aberto')) return;
  if (e.key === 'Escape') fecharLightbox();
  if (e.key === 'ArrowRight') moverLightbox(1);
  if (e.key === 'ArrowLeft') moverLightbox(-1);
});
let tx = 0;
LB.el.addEventListener('touchstart', e => { tx = e.changedTouches[0].clientX; }, { passive: true });
LB.el.addEventListener('touchend', e => {
  const d = e.changedTouches[0].clientX - tx;
  if (Math.abs(d) > 55) moverLightbox(d < 0 ? 1 : -1);
}, { passive: true });

/* Delegação de clique nas fotos */
document.addEventListener('click', e => {
  const btnFoto = e.target.closest('.foto[data-gal]');
  if (btnFoto) {
    const gal = btnFoto.dataset.gal;
    const idx = +btnFoto.dataset.idx;
    const prog = PROGRAMAS.find(p => p.galerias.some(g => g.slug === gal));
    const g = prog.galerias.find(g => g.slug === gal);
    const fotos = Array.from({ length: g.total }, (_, k) => ({
      src: fotoGrande(gal, k + 1),
      legenda: `${prog.titulo} — ${g.titulo}`
    }));
    abrirLightbox(fotos, idx, prog.titulo);
    return;
  }
  const btnCartaz = e.target.closest('[data-cartaz]');
  if (btnCartaz) {
    abrirLightbox(
      [{ src: `assets/cartazes/${btnCartaz.dataset.cartaz}.jpg`, legenda: 'Cartaz oficial do Instituto Semeador' }],
      0, btnCartaz.dataset.cartazTitulo
    );
  }
});

/* ============================== EFEITOS ============================== */
function ativarRevelacao() {
  const alvos = $$('.rev:not(.visivel)');
  if (!('IntersectionObserver' in window)) { alvos.forEach(a => a.classList.add('visivel')); return; }
  const obs = new IntersectionObserver((ents, o) => {
    ents.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visivel'); o.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: .05 });
  alvos.forEach(a => obs.observe(a));
}

function ativarContadores() {
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('[data-conta]').forEach(el => {
    const alvo = +el.dataset.conta;
    if (reduz) { el.textContent = alvo; return; }
    let i = 0;
    const passo = Math.max(1, Math.round(alvo / 22));
    const t = setInterval(() => {
      i += passo;
      if (i >= alvo) { i = alvo; clearInterval(t); }
      el.textContent = i;
    }, 34);
  });
}

/* ============================== ROTEADOR ============================== */
function rota() {
  const h = location.hash.replace(/^#\/?/, '') || '';
  const partes = h.split('/').filter(Boolean);

  let html, chaveNav = '';
  if (partes[0] === 'p' && partes[1]) {
    const p = acha(partes[1]);
    html = viewPrograma(partes[1]);
    chaveNav = p ? CATEGORIAS[p.categoria].slug : '';
  } else if (partes[0] === 'cursos') { html = viewLista('curso'); chaveNav = 'cursos'; }
  else if (partes[0] === 'servicos') { html = viewLista('servico'); chaveNav = 'servicos'; }
  else if (partes[0] === 'acoes') { html = viewLista('acao'); chaveNav = 'acoes'; }
  else if (partes[0] === 'galeria') { html = viewGaleria(); chaveNav = 'galeria'; }
  else if (partes[0] === 'contato') { html = viewContato(); chaveNav = 'contato'; }
  else { html = viewHome(); chaveNav = ''; }

  app.innerHTML = html;
  document.body.classList.remove('menu-aberto');
  fecharLightbox();

  $$('#nav a,.drawer a').forEach(a => {
    const alvo = a.getAttribute('href').replace(/^#\/?/, '');
    a.classList.toggle('ativo', alvo === chaveNav);
  });

  if (!sessionStorage.getItem('ancora')) window.scrollTo({ top: 0, behavior: 'instant' });
  sessionStorage.removeItem('ancora');

  ativarRevelacao();
  ativarContadores();
  ativarFiltros();
}

function ativarFiltros() {
  const cx = $('#filtros');
  if (!cx) return;
  cx.addEventListener('click', e => {
    const b = e.target.closest('.filtro');
    if (!b) return;
    filtroAtual = b.dataset.filtro;
    $$('.filtro', cx).forEach(f => f.classList.toggle('ativo', f === b));
    $('#galeria-conteudo').innerHTML = galeriaConteudo();
    ativarRevelacao();
  });
}

/* Menu mobile */
$('#menu-btn').onclick = () => document.body.classList.toggle('menu-aberto');

/* Sombra do cabeçalho */
const cab = $('#cabecalho');
addEventListener('scroll', () => cab.classList.toggle('rolado', scrollY > 12), { passive: true });

/* Início */
addEventListener('hashchange', rota);
rota();
