export default {
    props: {
        symbol: Object
    },
    template: `
    <div>
        <img :src="symbol.image" :alt="symbol.symbol" />
        <span>{{ symbol.location }}</span> -
        {{ symbol.description }}
    </div>`
}
