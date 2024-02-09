import extractorSvelte from '@unocss/extractor-svelte'
import {
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

let grays = {
  white: '#FCFFFC',
  100: '#E4E6E4',
  200: '#CACCCA',
  300: '#B1B2B1',
  400: '#979997',
  500: '#7E807E',
  600: '#656665',
  700: '#4C4D4C',
  800: '#323332',
  900: '#191A19',
  black: '#000000',
}

export default {
  theme: {
    colors: {
      grays,
      light: {
        bg: grays.white,
        fg: grays[800],
        em: grays[900],
        hx: grays.black,
        a: '#2B59C3',
        b: '#EF2D56',
        c: '#009B72',
      },
      dark: {
        bg: grays.black,
        fg: grays[200],
        em: grays[100],
        hx: grays.white,
        a: '#72DDF7',
        b: '#E06C9F',
        c: '#45CB85',
      },
    },
  },
  presets: [
    presetUno({ dark: 'class' }),
    presetIcons(),
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
      ...Object.fromEntries(
        ['bg', 'text', 'b'].flatMap(a =>
          ['bg', 'fg', 'em', 'hx', 'a', 'b', 'c'].map(b => [
            `${a}-${b}`,
            `${a}-light-${b} dark:${a}-dark-${b}`,
          ])
        )
      ),
    },
    [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
  ],
  extractors: [extractorSvelte],
}
