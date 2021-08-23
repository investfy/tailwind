# `@investfy/tailwind`

> Configuração do [TailwindCSS][tailwind] para o Design System dos produtos Investfy.

## Instalação

### Processo padrão

O Tailwind fornece boas instruções de instalação sobre como configurar suas ferramentas, que você pode encontrar [aqui][tailwind-installation].

Com os imports do Tailwind implementados, você pode aproveitar a configuração desta biblioteca da seguinte maneira:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@investfy/tailwind')],
};
```

### Arquivo pré-compilado

Para os casos em que você não deseja configurar o PostCSS ou o Tailwind CLI, uma versão pré-compilada do TailwindCSS está incluída neste pacote. Observe que, com essa abordagem, você provavelmente perderá a capacidade de analisar estaticamente seus templates e remover quaisquer classes CSS não utilizadas.

Importação direta:

```javascript
import '@investfy/tailwind/dist/tailwind.css';
```

Importação tag link:

```html
<link
  rel="stylesheet"
  href="url/to/@investfy/tailwind/dist/tailwind.min.css"
/>
```

### Fontes

Independentemente de qual abordagem você adotar para incluir o TailwindCSS em sua aplicação, você _também_ deve adicionar um link para as definições de fonte que usamos como parte da biblioteca:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap"
/>
```

[tailwind]: https://tailwindcss.com
[tailwind-installation]: https://tailwindcss.com/docs/installation
[unpkg]: https://unpkg.com
