import symbol from "./symbol.js";

const symbols = [
    { "symbol": "Pyramid", "image": "symbols/pyramid-captioned.png", "location": "After Disciples Bog, before 1st encounter", "description": "Immeadiately after you drop down into the Pyramid, the door is the opposite direction of the 1st encounter. The switch is right next to the door." },
    { "symbol": "Give", "image": "symbols/give-captioned.png", "location": "After Disciples Bog, before 1st encounter", "description": "In the room immeadiately before the first encounter, the room with frozen silhouettes. The Door is on the left side of the room, if you're facing the main exit. The switch is right next to the door." },
    { "symbol": "Darkness", "image": "symbols/darkness-captioned.png", "location": "1st encounter room", "description": "In the first encounter room. The Switch is between the crystal sphynx's legs on the pyramid side, and the door is in the wall next to the sphynx." },
    { "symbol": "Traveler", "image": "symbols/traveler-captioned.png", "location": "Between 1st and 2nd encounters", "description": "This is in the room called The Collection, the room just before the 2nd encounter. The switch is above the door on a purple glowing ledge. The door location is to your left as you are looking at 2nd encounter." },
    { "symbol": "Worship", "image": "symbols/worship-captioned.png", "location": "Between 2nd and 3rd encounters", "description": "It appears at the end of the second encounter, in the boss' Final Stand hallway. The switch is on the left of the hallway, but it opens the door opposite to it, on the right side." },
    { "symbol": "Light", "image": "symbols/light-captioned.png", "location": "Between 2nd and 3rd encounters", "description": "The door and switch are in the first ad clearing room during the jumping puzzle. The Switch floats above the statue's head directly across from the jumping puzzle switch. The door it opens is to the right of the statue." },
    { "symbol": "Stop", "image": "symbols/stop-captioned.png", "location": "Between 2nd and 3rd encounters", "description": "This is in the 3rd ad clearing room during the jumping puzzle, directly after the secret chest. The switch is on a ledge in the back of the room with gold boxes on it. The door is along the right wall directly next to the switch." },
    { "symbol": "Guardian", "image": "symbols/guardian-captioned.png", "location": "Between 3rd and 4th encounters", "description": "This occurs after the third encounter. Take the stairs on the left side when you exit the encounter area, then go to the left outside edge of the area for the switch. The door is on a ledge, behind the pillar as you go back towards 3rd encounter, directly opposite the top of the stairs you took to find the switch." },
    { "symbol": "Kill", "image": "symbols/kill-captioned.png", "location": "Between 3rd and 4th encounters", "description": "As you are going to 4th encounter, you'll get to a climbing section where enemies spawn, and there are three floors. The switch is floating against the back wall, and the door is on the right side of the top floor." }
];

const getSymbol = symbol => symbols.find(s => s.symbol === symbol);

Vue.createApp({
    components: {
        symbol
    },
    data() {
        return {
            symbols,
            symbol1: null,
            symbol2: null,
            symbol3: null
        }
    },
    methods: {
        symbol(symbol) {
            return getSymbol(symbol).symbol;
        },
        symbolImage(symbol) {
            return getSymbol(symbol).image;
        },
        symbolLocation(symbol) {
            return getSymbol(symbol).location;
        },
        symbolDescription(symbol) {
            return getSymbol(symbol).description;
        }
    }
}).mount("#app");