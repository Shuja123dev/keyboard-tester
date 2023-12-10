import f1 from "./keys/f1.svg"
import f2 from "./keys/f2.svg"
import f3 from "./keys/f3.svg"
import f4 from "./keys/f4.svg"
import f7 from "./keys/f7.svg"
import f9 from "./keys/f9.svg"
import f10 from "./keys/f10.svg"
import k13 from "./keys/k13.png"
import control from "./keys/control.svg"
import command from "./keys/command.svg"
import alt from "./keys/alt.svg"


const macKeys = {
    mainKeys: [
        {
            code: "Escape",
            text: "esc"
        },
        {
            code: "F1",
            icon: f1,
            text: "F1",
        },
        {
            icon: f2,
            text: "F2",
            code: "F2",
        },
        {
            icon: f3,
            text: "F3",
            code: "F3",
        },
        {
            icon: f4,
            text: "F4",
            code: "F4",
        },
        {
            text: "F5",
            code: "F5",
        },
        {
            text: "F6",
            code: "F6",
        },
        {
            icon: f7,
            text: "F7",
            code: "F7",
        },
        {
            text: "F8",
            code: "F8",
        },
        {
            icon: f9,
            text: "F9",
            code: "F9",
        },
        {
            icon: f10,
            text: "F10",
            code: "F10",
        },
        {
            code: "F11",
            text: "F11",
        },
        {
            text: "F12",
            code: "F12",
        },
        {
            icon: k13,
            name: "⏏"
        },

        // row 2

        {
            code: "Backquote",
            shiftTxt: "~",
            text: "`",
        },
        {
            shiftTxt: "!",
            text: "1",
            code: "Digit1"
        },
        {
            shiftTxt: "@",
            text: "2",
            code: "Digit2"
        },
        {
            shiftTxt: "#",
            text: "3",
            code: "Digit3"
        },
        {
            shiftTxt: "$",
            text: "4",
            code: "Digit4"
        },
        {
            shiftTxt: "%",
            text: "5",
            code: "Digit5"
        },
        {
            shiftTxt: "^",
            text: "6",
            code: "Digit6"
        },
        {
            shiftTxt: "&",
            text: "7",
            code: "Digit7"
        },
        {
            shiftTxt: "*",
            text: "8",
            code: "Digit8"
        },
        {
            shiftTxt: "(",
            text: "9",
            code: "Digit9"
        },
        {
            shiftTxt: ")",
            text: "0",
            code: "Digit0"
        },
        {
            shiftTxt: "_",
            text: "-",
        },
        {
            shiftTxt: "+",
            text: "=",
        },
        {
            name: "Backspace",
            text: "delete",
        },
        {
            name: "Tab",
            text: "tab",
        },
        {
            shiftText: "q",
            text: "Q",
        },
        {
            shiftText: "w",
            text: "W",
        },
        {
            shiftText: "e",
            text: "E",
        },
        {
            shiftText: "r",
            text: "R",
        },
        {
            shiftText: "t",
            text: "T",
        },
        {
            shiftText: "y",
            text: "Y",
        },
        {
            shiftText: "u",
            text: "U",
        },
        {
            shiftText: "i",
            text: "I",
        },
        {
            shiftText: "o",
            text: "O",
        },
        {
            shiftText: "p",
            text: "P",
        },
        {
            shiftTxt: "{",
            text: "[",
        },
        {
            shiftTxt: "}",
            text: "]",
        },
        {
            shiftTxt: "|",
            text: "|",
        },
        //row 4
        {
            name: "CapsLock",
            text: "caps lock"
        },
        {
            shiftText: "a",
            text: "A",
        },
        {
            shiftText: "s",
            text: "S",
        },
        {
            shiftText: "d",
            text: "D",
        },
        {
            shiftText: "f",
            text: "F",
        },
        {
            shiftText: "g",
            text: "G",
        },
        {
            shiftText: "h",
            text: "H",
        },
        {
            shiftText: "j",
            text: "J",
        },
        {
            shiftText: "k",
            text: "K",
        },
        {
            shiftText: "l",
            text: "L",
        },
        {
            shiftTxt: ":",
            text: ";",
        },
        {
            shiftTxt: `"`,
            text: `'`,
        },
        {
            name: "Enter",
            text: "return",
        },
        //row 5
        {
            code: "ShiftLeft",
            text: "shift",
        },
        {
            shiftText: "z",
            text: "Z",
        },
        {
            shiftText: "x",
            text: "X",
        },
        {
            shiftText: "c",
            text: "C",
        },
        {
            shiftText: "v",
            text: "V",
        },
        {
            shiftText: "b",
            text: "B",
        },
        {
            shiftText: "n",
            text: "N",
        },
        {
            shiftText: "m",
            text: "M",
        },
        {
            shiftTxt: "<",
            text: ",",
        },
        {
            shiftTxt: ">",
            text: ".",
        },
        {
            shiftTxt: "?",
            text: "/",
        },
        {
            code: "ShiftRight",
            text: "shift",
        },
        // row 6
        {
            code: "ControlLeft",
            icon: control,
            text: "control",
        },
        {
            code: "AltLeft",
            icon: alt,
            text: "option",
        },
        {
            code: "MetaLeft",
            icon: command,
            text: "command",
        },
        {
            name: " ",
            text: "",
        },
        {
            code: "MetaRight",
            icon: command,
            text: "command",
        },
        {
            code: "AltRight",
            icon: alt,
            text: "option",
        },
        {
            code: "ControlRight",
            icon: control,
            text: "control",
        },
    ],
    midKeys: [
        {
            text: "F13",
            code: "F13",
        },
        {
            text: "F14",
            code: "F14",
        },
        {
            text: "F15",
            code: "F15",
        },
        // row 2

        {
            name: "Insert",
            text: "fn",
        },
        {
            name: "Home",
            text: "home",
        },
        {
            name: "PageUp",
            text: "page up",
        },

        // row 3


        {
            name: "Delete",
            text: "delete",
        },
        {
            name: "End",
            text: "end",
        },
        {
            name: "PageDown",
            text: "page down",
        },
    ],
    arrowKeys: [
        {
            code: "ArrowUp",
            text: "↑"
        },
        {
            code: "ArrowLeft",
            text: "←"
        },
        {
            code: "ArrowDown",
            text: "↓"
        },
        {
            code: "ArrowRight",
            text: "→"
        },
    ],
    numPadKeys: [
        {
            name: "Clear",
            text: "clear"
        },
        {
            text: "="
        },
        {
            text: "/"
        },
        {
            text: "7"
        },
        {
            text: "8"
        },
        {
            text: "9"
        },
        {
            text: "4"
        },
        {
            text: "5"
        },
        {
            text: "6"
        },
        {
            text: "1"
        },
        {
            text: "2"
        },
        {
            text: "3"
        },
        {
            text: "0"
        },
        {
            text: "."
        },
    ]
}


export default macKeys;