import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    theme: {
        colors: {
            "background": "#131214",
            "accent": "#33EA92",
            "box": "#18181B",
            "dark-white": "#2C2B2D",
        }
    },
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                'sans': 'Space Grotesk'
            }
        })
    ]
})
