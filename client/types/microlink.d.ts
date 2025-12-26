declare module '@microlink/vue' {
    import { DefineComponent } from 'vue'
    const Microlink: DefineComponent<{
        url?: string
        apiKey?: string
        autoPlay?: boolean
        contrast?: boolean
        controls?: boolean
        direction?: string
        lazy?: boolean | object
        loop?: boolean
        media?: string | string[]
        muted?: boolean
        playsInline?: boolean
        prerender?: boolean | string
        size?: string
        theme?: string
    }, {}, any>
    export default Microlink
}
