# Instituto Semeador — site institucional

**No ar em:** https://institutosemeador.com.br
**Repositório:** https://github.com/kevinizin/instituto-semeador (GitHub Pages, branch `main`, raiz `/`)
**Feito por:** Kevin (AZVEN) — Manaus/AM

> Este arquivo é o documento de entrega do projeto. Quem abrir o repositório
> depois — pessoa ou IA — consegue entender e continuar o trabalho só com o que
> está aqui, sem depender do histórico da conversa em que o site foi criado.

---

## 1. O que é

Site institucional do **Instituto Semeador**, uma Organização da Sociedade Civil
do bairro Compensa 1, em Manaus (AM), que oferece cursos, capacitações,
atendimentos profissionais e ações sociais — tudo gratuito para a comunidade.

O site não é uma página única de rolagem: é uma aplicação de página única (SPA)
com roteamento por hash, onde cada curso, serviço e ação tem sua própria página
interna, e a galeria é organizada por tema.

### Dados oficiais do Instituto (fonte da verdade)

| Campo | Valor |
|---|---|
| Endereço | Rua Joraci Camargo, nº 100 — Compensa 1, Manaus/AM |
| Telefone / WhatsApp | (92) 99192-6235 |
| Instagram | [@instituto\_\_semeador](https://www.instagram.com/instituto__semeador) |
| Google Maps | https://maps.app.goo.gl/MjTrsjYmSybkjswz5 |
| Presidente | Ieda Veras |
| Vice-presidente | Paulo Tomate |
| Parcerias citadas | CETAM, SEJUSC, Mesa Brasil |

Esses dados foram extraídos dos **cartazes oficiais** do Instituto (pasta
`cads/` no material de origem), não de suposição. Ao alterar qualquer
informação de curso, horário ou documento exigido, confira antes com o
Instituto ou com um cartaz atualizado.

---

## 2. Estrutura do repositório

```
site/
├─ index.html            estrutura fixa: topo, cabeçalho, menu, rodapé, lightbox
├─ css/style.css         todo o design system (um arquivo só)
├─ js/
│  ├─ data.js            TODO O CONTEÚDO do site (textos, cursos, galerias)
│  └─ app.js             roteamento, montagem das telas, galeria, lightbox
├─ assets/
│  ├─ logo.png           logo recortada em círculo, fundo transparente
│  ├─ logo-192.png       ícone para celular
│  ├─ favicon.png        ícone da aba
│  ├─ fotos/<tema>/      NN.jpg (grande, 1400px) + tNN.jpg (miniatura, 700px)
│  └─ cartazes/          cartazes oficiais: nome.jpg + t-nome.jpg (miniatura)
├─ ferramentas/
│  ├─ processar-fotos.ps1  gera todas as imagens do site a partir dos originais
│  └─ imgutil.cs           código auxiliar de redimensionamento (usado pelo .ps1)
├─ CNAME                 amarra o domínio próprio ao GitHub Pages
├─ .nojekyll             impede o GitHub de processar o site como Jekyll
└─ README.md             este arquivo
```

**Não há build, nem dependências, nem npm.** É HTML, CSS e JavaScript puro.
Para rodar local, sirva a pasta por HTTP (não abra o `index.html` direto pelo
sistema de arquivos, senão o roteamento por hash e as imagens quebram):

```bash
python -m http.server 8899
```

Depois abra `http://localhost:8899`.

---

## 3. Como o conteúdo é organizado (`js/data.js`)

Praticamente **toda edição de texto do site acontece nesse arquivo**. O `app.js`
só lê o que está ali e monta as telas.

### `INSTITUTO`
Dados de contato, endereço, diretoria e os quatro "pilares" mostrados na home.

### `PROGRAMAS`
Uma lista onde cada item é um curso, serviço ou ação. Formato de um item:

```js
{
  slug: 'trancista',              // vira a URL: #/p/trancista
  categoria: 'curso',             // 'curso' | 'servico' | 'acao'
  titulo: 'Curso de Trancista',
  subtitulo: 'Qualificação profissional em tranças',
  resumo: 'Frase curta que aparece no card.',
  situacao: 'Inscrições abertas', // vira o selo no card (opcional)
  lema: 'Frase do cartaz oficial',// aspas no topo da página (opcional)
  descricao: ['parágrafo 1', 'parágrafo 2'],
  destaques: [                    // vira o painel lateral "Informações"
    { rotulo: 'Idade mínima', valor: '16 anos' }
  ],
  itens: ['bullet 1', 'bullet 2'],
  cartazes: ['trancista'],        // nomes dos arquivos em assets/cartazes/
  galerias: [
    { slug: 'trancista',          // pasta em assets/fotos/
      titulo: 'Aulas práticas',
      total: 3,                   // QUANTAS fotos existem na pasta
      capa: 2,                    // qual delas é a capa do card
      texto: 'legenda do bloco' }
  ],
  cta: 'Quero me inscrever no Curso de Trancista'  // vira a mensagem do WhatsApp
}
```

Pontos de atenção:

- **`total` precisa bater com a quantidade real de arquivos na pasta.** Se
  estiver a mais, aparece foto quebrada; a menos, some foto da galeria.
- As fotos são numeradas `01.jpg`, `02.jpg`… e as miniaturas `t01.jpg`,
  `t02.jpg`… O código monta o caminho sozinho a partir do `slug` e do número.
- Um programa pode ter **mais de uma galeria** (o EJA tem "Dia de prova" e
  "Formatura") ou **nenhuma** (Assistente Administrativo, que só tem cartaz —
  nesse caso o cartaz vira a capa do card automaticamente).
- `cta` é a frase que já vai escrita na conversa do WhatsApp quando a pessoa
  clica no botão daquela página.

### `CATEGORIAS`
Título e texto de apresentação de cada uma das três seções (Cursos, Serviços,
Ações).

### `HERO_FOTOS`
As quatro fotos do mosaico da primeira tela.

---

## 4. Como fazer as tarefas mais comuns

### Adicionar fotos novas a um tema que já existe
1. Coloque as fotos originais na pasta correspondente em
   `Desktop/instituto semeador/<nome da pasta>`.
2. Rode `powershell -File ferramentas\processar-fotos.ps1` — ele regera tudo e
   imprime o novo total de cada tema.
3. Atualize o campo `total` daquela galeria em `js/data.js`.
4. Commit e push (veja a seção 7).

### Criar um curso, serviço ou ação novo
1. Crie a pasta de fotos e rode o script (ou pule, se não houver fotos).
2. Acrescente um item em `PROGRAMAS` no `js/data.js`, na categoria certa.
3. Só isso — os cards da home, a página de listagem, o menu do rodapé, a
   galeria e a navegação "próximo" se atualizam sozinhos a partir da lista.

### Trocar a foto de capa de um card
Mude o campo `capa` da galeria para o número da foto desejada.

### Mudar telefone, endereço ou Instagram
Só no objeto `INSTITUTO` do `js/data.js` — **exceto** o topo azul escuro e o
rodapé, que estão escritos direto no `index.html` (procure por `99192-6235`).
Se mudar o contato, altere nos dois lugares.

---

## 5. Como o site funciona por dentro (`js/app.js`)

Roteamento por hash, sem biblioteca nenhuma:

| URL | Tela |
|---|---|
| `#/` | Home |
| `#/cursos`, `#/servicos`, `#/acoes` | Listagem da categoria |
| `#/p/<slug>` | Página de um programa específico |
| `#/galeria` | Galeria geral com filtros |
| `#/contato` | Contato e mapa |

A função `rota()` decide qual tela montar, joga o HTML dentro de `<main id="app">`,
marca o item ativo no menu e reativa os efeitos. As telas são funções que
devolvem string de HTML (`viewHome()`, `viewPrograma()`, etc.).

Outros pontos:

- **Lightbox:** um único componente no `index.html`, controlado pelo objeto `LB`.
  Abre por delegação de clique em qualquer `.foto[data-gal]`. Suporta setas do
  teclado, Esc, deslize no celular e pré-carrega as fotos vizinhas.
- **Revelação ao rolar:** classe `.rev` + `IntersectionObserver`. O CSS que
  esconde o elemento está dentro de `@media (prefers-reduced-motion: no-preference)`,
  ou seja, em máquina com animações reduzidas **tudo já nasce visível** — isso é
  proposital, não mexa (já causou elemento invisível para sempre em outro projeto).
- **Contadores da home:** animam, mas respeitam `prefers-reduced-motion`.

---

## 6. Design

Paleta tirada da própria logo (círculo azul, coração vermelho). Todas as cores,
sombras, raios e a fonte estão como variáveis no `:root` do `css/style.css` —
mudando ali, muda o site inteiro.

- Fonte: Plus Jakarta Sans (Google Fonts).
- Fotos em grades uniformes com proporção 3:4 e `object-fit: cover`, para que
  nenhuma imagem apareça em tamanho diferente das outras. Esse foi um pedido
  explícito do cliente: **fotos organizadas por tema, nada de foto solta.**
- Responsivo em três quebras: 1080px, 860px (vira menu hambúrguer) e 620px.

### Armadilhas já resolvidas (não repita)

- **Nome de classe repetido:** a classe `.foto` da galeria colidia com o selo
  `.selo.foto` dos cards e explodia o layout. O selo hoje se chama `.selo-qtd`.
  Ao criar classe nova, confira se o nome já existe no CSS.
- **`backdrop-filter` nos selos** borrava a imagem inteira em alguns
  renderizadores. Foi trocado por fundo sólido semitransparente.
- **`.nojekyll` é obrigatório** — sem ele o GitHub Pages tentava processar o site
  como Jekyll e o build falhava.

---

## 7. Publicação

O site é servido pelo GitHub Pages direto da branch `main`. Publicar = dar push:

```bash
git add -A
git commit -m "descrição da mudança"
git push origin main
```

O Pages reconstrói sozinho em cerca de um minuto.

### Domínio próprio

`institutosemeador.com.br` foi registrado no Registro.br (titular Kevin Costa,
expira em 15/08/2028) e usa os servidores DNS do próprio Registro.br.

Zona DNS configurada (modo avançado do Registro.br):

| Tipo | Nome | Dados |
|---|---|---|
| A | institutosemeador.com.br | 185.199.108.153 |
| A | institutosemeador.com.br | 185.199.109.153 |
| A | institutosemeador.com.br | 185.199.110.153 |
| A | institutosemeador.com.br | 185.199.111.153 |
| CNAME | www.institutosemeador.com.br | kevinizin.github.io. |

Detalhes que custaram tempo e vale registrar:

- **Não existe CNAME no domínio raiz.** A raiz precisa dos quatro registros A;
  só o `www` é CNAME. O Registro.br chega a aceitar a entrada errada, mas ela
  conflita com os registros A.
- O arquivo **`CNAME` na raiz do repositório** é o que amarra o domínio ao
  Pages. Se ele for removido, o site volta para `kevinizin.github.io/instituto-semeador`.
  E o contrário também vale: com o `CNAME` presente e o DNS ainda não apontando,
  o endereço `github.io` passa a redirecionar para um domínio que não resolve —
  ou seja, o site fica fora do ar até o DNS propagar.
- HTTPS está ativo (certificado emitido pelo GitHub) e o `http://` redireciona
  para `https://` automaticamente.

---

## 8. Material de origem

Fica na pasta acima desta (`Desktop/instituto semeador/`), fora do repositório:

- uma pasta por tema, com as fotos originais em alta;
- `cads/` — os cartazes oficiais em alta. **É a fonte dos dados dos cursos**
  (horários, idade mínima, período, documentos, nome da psicóloga e CRP);
- `logo/` — a logo original em JPG com fundo preto;
- `sobre o instituto/instituto informações .txt` — textos institucionais
  escritos pelo próprio Instituto.

Os originais não foram commitados: o repositório guarda apenas as versões
otimizadas geradas pelo script.

---

## 9. Estado atual e ideias de continuação

Está pronto e no ar. O que ficou mapeado como possível próximo passo:

- Nenhuma foto do curso de **Assistente Administrativo** (hoje o card usa o
  cartaz). Quando houver, é só criar a pasta, rodar o script e adicionar a
  galeria no `data.js`.
- A data da aula inaugural do **EnvelheSER 60+** (02/07/2026) está escrita como
  informação fixa; depois que o evento passar, vale revisar esse texto.
- O site não tem formulário nem back-end: todo contato vai para o WhatsApp do
  Instituto. Se um dia precisar de inscrição on-line, será preciso um serviço
  externo (o GitHub Pages só serve arquivos estáticos).
