import m from "mithril";
import tagl, { mo, time } from "tagl-mithril";
import clock from "./clock";

const { h1, div, br, p, input, button, select, option, span, table, tr, td, th, pre } =
    tagl(m);
const { trunc } = Math;

const mapit = {
    "AD": {
        solution: "D",
        next: "BI"
    },
    "BI": {
        solution: "E",
        next: "BK"
    },
    "BK": {
        solution: "I",
        next: "AE"
    },
    "AE": {
        solution: "C",
        next: "HO"
    },
    "HO": {
        solution: "H",
        next: "KL"
    },


    "KL": {
        solution: "K",
        next: "JH"
    },
    "JH": {
        solution: "L",
        next: "QP"
    },
    "QP": {
        solution: "A",
        next: "GI"
    },
    "GI": {
        solution: "G",
        next: "CG"
    },

    "CG": {
        solution: "B",
        next: "JF"
    },
    "JF": {
        solution: "D",
        next: "EF"
    },
    "EF": {
        solution: "J",
        next: "Fertig!"
    },


}

const state = {
    input1: "",
    input2: "",
    next: ""
}

const check = () => {
    const coord = mapit[state.input1];
    console.log()
    if (!coord) {
        state.next = "Erst richtige Koordinaten eingeben";
        return;
    }
    if (coord.solution === state.input2) {
        state.next = "Sehr gut! Sucht jetzt bei " + coord.next;
    } else {
        console.log(coord.solution, state.input2)
        state.next = "Warte auf den richtigen grünen Buchstaben"
    }

};

m.mount(document.body, {
    view: vnode => [
        "Gebt die Koordinaten ein: ",
        input({ value: state.input1, oninput: e => { state.input1 = e.target.value; check(); } }), br(),
        "Gebt den grünen Buchstaben ein: "
        , input({ value: state.input2, oninput: e => { state.input2 = e.target.value; check(); } }), br(),
        //  pre(JSON.stringify(state))
        , h1(state.next)
    ]
})