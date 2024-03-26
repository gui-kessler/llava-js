# Testes utilizando o modelo llava-13b para identificar imagens

## Requisitos de hardware
- 16gb de RAM
- CPU atual
- GPU (recomendado)

## Requisitos
- Ollama: https://ollama.com/download
- llava-13b: https://ollama.com/library/llava:13b
- Deno
- Node.js

## Instalação dos requisitos
1. Instale o Ollama e faça o download do llava-13b
```bash
$ curl -fsSL https://ollama.com/install.sh | sh
$ ollama pull llava-13b
```

## Rodando

```bash
$ deno run -A main.ts
```
