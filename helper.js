import vowSymbol, { symbols } from "./symbol.js";

const getSymbol = symbol => symbols.find(s => s.symbol === symbol);

Vue.createApp({
    components: {
        vowSymbol
    },
    data() {
        return {
            symbols,
            symbol1Val: null,
            symbol2Val: null,
            symbol3Val: null
        }
    },
    computed: {
        symbol1() {
            return getSymbol(this.symbol1Val);
        },
        symbol2() {
            return getSymbol(this.symbol2Val);
        },
        symbol3() {
            return getSymbol(this.symbol3Val);
        }
    }
}).mount("#app");
