# =============================================================================
#  Instituto Semeador — processamento de fotos
#
#  Le as pastas de fotos originais (uma pasta por tema), gera duas versoes de
#  cada imagem dentro de assets/fotos/<slug>/ e mostra quantas fotos ficaram
#  em cada tema (numero que precisa ser copiado para o campo "total" em
#  js/data.js).
#
#     NN.jpg   -> versao grande (max 1400px), usada no visualizador
#     tNN.jpg  -> miniatura (max 700px), usada nas grades
#
#  Uso:  powershell -File ferramentas\processar-fotos.ps1
# =============================================================================

$ErrorActionPreference = 'Stop'

# Raiz do projeto = pasta acima desta
$site   = Split-Path -Parent $PSScriptRoot
$origem = Split-Path -Parent $site      # "Desktop\instituto semeador"

Add-Type -TypeDefinition (Get-Content "$PSScriptRoot\imgutil.cs" -Raw) -ReferencedAssemblies System.Drawing

# pasta original  ->  slug usado no site (precisa bater com js/data.js)
$map = [ordered]@{
  'atendimento-neuropsipedagoga'        = 'neuropsicopedagogia'
  'ação social - ramal terra preta'     = 'acao-terra-preta'
  'curso de informatica basica - cetam' = 'informatica'
  'curso de trancista'                  = 'trancista'
  'dia das crianças'                    = 'dia-das-criancas'
  'dia das maes'                        = 'dia-das-maes'
  'fisioterapia'                        = 'fisioterapia'
  'formatura eja'                       = 'formatura-eja'
  'grupo bem viver'                     = 'bem-viver'
  'mesa brasil'                         = 'mesa-brasil'
  'palestra - janeiro branco'           = 'janeiro-branco'
  'prova do eja'                        = 'prova-eja'
  'psicologia'                          = 'psicologia'
  'serviço social'                      = 'servico-social'
}

# Foto que aparece duplicada em duas pastas: fica so na prova do EJA
$ignorar = @('d756df4e-c402-42af-bd6c-43ac1f31e12d.jpg')

foreach ($pasta in $map.Keys) {
  $slug  = $map[$pasta]
  $files = Get-ChildItem "$origem\$pasta" -Filter *.jpg | Sort-Object Name
  if ($slug -eq 'informatica') {
    $files = $files | Where-Object { $ignorar -notcontains $_.Name }
  }

  $i = 0
  foreach ($f in $files) {
    $i++
    $n = '{0:D2}' -f $i
    [ImgUtil]::Resize($f.FullName, "$site\assets\fotos\$slug\$n.jpg", 1400, 80)
    [ImgUtil]::Resize($f.FullName, "$site\assets\fotos\$slug\t$n.jpg", 700, 74)
  }
  Write-Output "$slug -> total: $i   (conferir em js/data.js)"
}

# ---- Cartazes oficiais (pasta "cads") ----
$cartazes = @{
  '6025d5e7-0048-49c9-bc53-db445a56f4a4' = 'eja'
  '6a444448-b101-4737-ab62-b4a0e2120e77' = 'eja-matricula'
  '7352f572-1e3f-485a-8129-2ccc8e1b37c1' = 'envelheser'
  '90a3db94-f28b-4def-9a52-b3fc16836747' = 'trancista'
  'a3058682-cbc1-4cf9-abfd-cc749fe1b960' = 'informatica'
  'a9009011-e2f4-4982-9a56-2dbfca44d2b1' = 'assistente-administrativo'
  'ace794bb-6cf7-41e3-a549-4ebfd9f58f0c' = 'psicologia'
}
foreach ($k in $cartazes.Keys) {
  $nome = $cartazes[$k]
  [ImgUtil]::Resize("$origem\cads\$k.jpg", "$site\assets\cartazes\$nome.jpg", 1200, 82)
  [ImgUtil]::Resize("$origem\cads\$k.jpg", "$site\assets\cartazes\t-$nome.jpg", 620, 76)
  Write-Output "cartaz $nome"
}

# ---- Logo: recorta o circulo e salva em PNG com fundo transparente ----
$logo = (Get-ChildItem "$origem\logo" -Filter *.jpg)[0].FullName
[ImgUtil]::CircleLogo($logo, "$site\assets\logo.png", 512)
[ImgUtil]::CircleLogo($logo, "$site\assets\logo-192.png", 192)
[ImgUtil]::CircleLogo($logo, "$site\assets\favicon.png", 64)
Write-Output 'logo ok'
