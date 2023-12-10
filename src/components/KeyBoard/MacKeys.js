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
import macFn from "./keys/macFn.png"


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
            code: "Minus"
        },
        {
            shiftTxt: "+",
            text: "=",
            code: "Equal"
        },
        {
            name: "Backspace",
            code: "Backspace",
            text: "delete",
        },
        {
            name: "Tab",
            code: "Tab",
            text: "tab",
        },
        {
            shiftText: "q",
            code: "KeyQ",
            text: "Q",
        },
        {
            shiftText: "w",
            code: "KeyW",
            text: "W",
        },
        {
            shiftText: "e",
            code: "KeyE",
            text: "E",
        },
        {
            shiftText: "r",
            code: "KeyR",
            text: "R",
        },
        {
            shiftText: "t",
            code: "KeyT",
            text: "T",
        },
        {
            shiftText: "y",
            code: "KeyY",
            text: "Y",
        },
        {
            shiftText: "u",
            code: "KeyU",
            text: "U",
        },
        {
            shiftText: "i",
            code: "KeyI",
            text: "I",
        },
        {
            shiftText: "o",
            code: "KeyO",
            text: "O",
        },
        {
            shiftText: "p",
            text: "P",
            code: "KeyP",
        },
        {
            shiftTxt: "{",
            text: "[",
            code: "BracketLeft"
        },
        {
            shiftTxt: "}",
            text: "]",
            code: "BracketRight"
        },
        {
            shiftTxt: "|",
            text: "|",
            code: "Backslash"
        },
        //row 4
        {
            name: "CapsLock",
            code: "CapsLock",
            text: "caps lock"
        },
        {
            shiftText: "a",
            text: "A",
            code: "KeyA",
        },
        {
            shiftText: "s",
            code: "KeyS",
            text: "S",
        },
        {
            shiftText: "d",
            code: "KeyD",
            text: "D",
        },
        {
            shiftText: "f",
            text: "F",
            code: "KeyF",
        },
        {
            shiftText: "g",
            text: "G",
            code: "KeyG",
        },
        {
            shiftText: "h",
            text: "H",
            code: "KeyH",
        },
        {
            shiftText: "j",
            text: "J",
            code: "KeyJ",
        },
        {
            shiftText: "k",
            text: "K",
            code: "KeyK",
        },
        {
            shiftText: "l",
            text: "L",
            code: "KeyL",
        },
        {
            shiftTxt: ":",
            text: ";",
            code: "Semicolon"
        },
        {
            shiftTxt: `"`,
            code: "Quote",
            text: `'`,
        },
        {
            code: "Enter",
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
            code: "KeyZ",
        },
        {
            shiftText: "x",
            text: "X",
            code: "KeyX",
        },
        {
            shiftText: "c",
            text: "C",
            code: "KeyC",
        },
        {
            shiftText: "v",
            text: "V",
            code: "KeyV",
        },
        {
            shiftText: "b",
            text: "B",
            code: "KeyB",
        },
        {
            shiftText: "n",
            text: "N",
            code: "KeyN",
        },
        {
            shiftText: "m",
            text: "M",
            code: "KeyM",
        },
        {
            shiftTxt: "<",
            text: ",",
            code: "Comma"
        },
        {
            shiftTxt: ">",
            text: ".",
            code: "Period"
        },
        {
            shiftTxt: "?",
            text: "/",
            code: "Slash"
        },
        {
            code: "ShiftRight",
            text: "shift",
        },
        // row 6
        {
            code: "ControlLeft",
            icon: macFn,
            text: "fn",
        },
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
            code: "Space",
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
            code: "Insert",
            text: "insert",
        },
        {
            code: "Home",
            text: "home",
        },
        {
            code: "PageUp",
            text: "page up",
        },

        // row 3


        {
            code: "Delete",
            text: "delete",
        },
        {
            code: "End",
            text: "end",
        },
        {
            code: "PageDown",
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
            code: "Clear",
            text: "clear"
        },
        {
            text: "=",
            code: "NumpadEqual"
        },
        {
            text: "/",
            code: "NumpadDivide"
        },
        {
            text: "7",
            code: "Numpad7"
        },
        {
            text: "8",
            code: "Numpad8"
        },
        {
            text: "9",
            code: "Numpad9"
        },
        {
            text: "4",
            code: "Numpad4"
        },
        {
            text: "5",
            code: "Numpad5"
        },
        {
            text: "6",
            code: "Numpad6"
        },
        {
            text: "1",
            code: "Numpad1"
        },
        {
            text: "2",
            code: "Numpad2"
        },
        {
            text: "3",
            code: "Numpad3"
        },
        {
            text: "0",
            code: "Numpad0"
        },
        {
            text: ".",
            code: "NumpadDecimal"
        },
    ]
}


export default macKeys;