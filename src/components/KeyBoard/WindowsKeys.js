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

const windowsKeys = {
    mainKeys: [
        {
            name: "Escape",
            text: "esc"
        },
        {
            icon: f1,
            text: "F1",
        },
        {
            icon: f2,
            text: "F2",
        },
        {
            icon: f3,
            text: "F3",
        },
        {
            icon: f4,
            text: "F4",
        },
        {
            text: "F5",
        },
        {
            text: "F6",
        },
        {
            icon: f7,
            text: "F7",
        },
        {
            text: "F8",
        },
        {
            icon: f9,
            text: "F9",
        },
        {
            icon: f10,
            text: "F10",
        },
        {
            text: "F11",
        },
        {
            text: "F12",
        },
        {
            icon: k13,
            name: "⏏"
        },

        // row 2

        {
            shiftTxt: "~",
            text: "`",
        },
        {
            shiftTxt: "!",
            text: "1",
        },
        {
            shiftTxt: "@",
            text: "2",
        },
        {
            shiftTxt: "#",
            text: "3",
        },
        {
            shiftTxt: "$",
            text: "4",
        },
        {
            shiftTxt: "%",
            text: "5",
        },
        {
            shiftTxt: "^",
            text: "6",
        },
        {
            shiftTxt: "&",
            text: "7",
        },
        {
            shiftTxt: "*",
            text: "8",
        },
        {
            shiftTxt: "(",
            text: "9",
        },
        {
            shiftTxt: ")",
            text: "0",
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
            name: "Shift",
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
            name: "Shift",
            text: "shift",
        },
        // row 6
        {
            icon: control,
            text: "control",
        },
        {
            name: "Option",
            icon: alt,
            text: "option",
        },
        {
            name: "Command",
            icon: command,
            text: "command",
        },
        {
            name: " ",
            text: "",
        },
        {
            name: "Command",
            icon: command,
            text: "command",
        },
        {
            name: "Option",
            icon: alt,
            text: "option",
        },
        {
            icon: control,
            text: "control",
        },
    ],
    midKeys: [
        {
            name: "PrintScreen",
            text: "print screen",
        },
        {
            name: "ScrollLock",
            text: "scroll lock",
        },
        {
            name: "Pause",
            text: "pause",
        },
        // row 2

        {
            name: "Insert",
            text: "insert",
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
            name: "ArrowUp",
            text: "↑"
        },
        {
            name: "ArrowLeft",
            text: "←"
        },
        {
            name: "ArrowDown",
            text: "↓"
        },
        {
            name: "ArrowRight",
            text: "→"
        },
    ],
    numPadKeys: [
        {
            name: "NumLock",
            text: "num lock"
        },
        {
            text: "/"
        },
        {
            text: "*"
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

export default windowsKeys