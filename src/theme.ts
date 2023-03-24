import { extendTheme } from "@chakra-ui/react";
import "@fontsource/pt-sans"

const customTheme = extendTheme({
    fonts: {
        heading: 'PT Sans'
    }
})

export default customTheme