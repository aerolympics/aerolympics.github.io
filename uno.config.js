import extractorSvelte from '@unocss/extractor-svelte'
import {
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        head: 'M PLUS 1:800',
        body: 'Archivo:300,600',
        mono: 'Fira Code:400,700',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: ['aspect-video', 'aspect-portrait', 'aspect-square'],
  rules: [],
  shortcuts: [
    {
      screen: 'w-screen h-screen',
      full: 'w-full h-full',
      'max-full': 'max-w-full max-h-full',
      'max-screen': 'max-w-screen max-h-screen',
    },
    [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
  ],
  extractors: [extractorSvelte],
  theme: {
    colors: {
      light: {
        bg: '#FCFFFC',
        fg: '#000000',
        a: '#2B59C3',
        b: '#F75590',
        c: '#13C4A3',
      },
      dark: {
        bg: '#000000',
        fg: '#FCFFFC',
        a: '#F75590',
        b: '#2B59C3',
        c: '#13C4A3',
      },
    },
  },
}
