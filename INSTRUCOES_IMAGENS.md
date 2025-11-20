# 📸 Instruções para Adicionar Imagens

Para que o site funcione completamente, você precisa adicionar as seguintes imagens na pasta `public/`:

## 📁 Estrutura de Pastas

```
public/
├── logo.png (ou logo.svg)          # Logo da marca Fidelis & Cota
├── team/
│   ├── rafaela.jpg                 # Foto da advogada Rafaela
│   └── julia.jpg                   # Foto da advogada Julia
└── bh/                             # Imagens de Belo Horizonte (opcional)
    ├── bh-1.jpg
    └── bh-2.jpg
```

## 🖼️ Imagens Necessárias

### 1. Logo da Marca
- **Localização**: `public/logo.png` ou `public/logo.svg`
- **Descrição**: Logo com as letras "F" e "C" entrelaçadas (Fidelis & Cota)
- **Formato recomendado**: PNG com fundo transparente ou SVG
- **Tamanho**: 200x200px ou maior (será redimensionado automaticamente)

### 2. Fotos da Equipe

#### Rafaela Barbosa Fidelis Campos
- **Localização**: `public/team/rafaela.jpg`
- **Descrição**: Foto profissional da advogada Rafaela
- **Formato**: JPG ou PNG
- **Tamanho recomendado**: 400x400px (quadrada) ou proporção 1:1

#### Julia Cota Oliveira
- **Localização**: `public/team/julia.jpg`
- **Descrição**: Foto profissional da advogada Julia
- **Formato**: JPG ou PNG
- **Tamanho recomendado**: 400x400px (quadrada) ou proporção 1:1

### 3. Imagens de Belo Horizonte (Opcional)
- **Localização**: `public/bh/`
- **Uso**: Para backgrounds ou seção de localização
- **Formato**: JPG ou PNG
- **Tamanho recomendado**: 1920x1080px ou maior

## 📝 Como Adicionar

1. **Copie as imagens** que você tem para a pasta `public/` do projeto
2. **Renomeie** conforme os nomes indicados acima
3. **Certifique-se** de que os formatos estão corretos (.jpg, .png, .svg)
4. **Reinicie o servidor** de desenvolvimento se estiver rodando

## ✅ Verificação

Após adicionar as imagens, o site deve:
- Mostrar a logo no header (se adicionada)
- Mostrar as fotos das advogadas na seção "Nossa Equipe"
- Funcionar normalmente mesmo se alguma imagem não for adicionada (fallback automático)

## 🔧 Fallbacks

O site está preparado para funcionar mesmo sem as imagens:
- Se a logo não existir, será exibido apenas o texto "Fidelis & Cota"
- Se as fotos das advogadas não existirem, será exibido um placeholder com "Foto"

## 💡 Dicas

- Use imagens otimizadas para web (menor tamanho de arquivo possível)
- Para fotos de pessoas, use fundo neutro ou transparente
- Mantenha a proporção das imagens para evitar distorções
- O Next.js otimiza automaticamente as imagens em produção

