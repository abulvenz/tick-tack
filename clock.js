import m from "mithril";
import tagl from "tagl-mithril";

// prettier-ignore
const { address, aside, footer, header, h1, h2, h3, h4, h5, h6, hgroup, main, nav, section, article, blockquote, dd, dir, div, dl, dt, figcaption, figure, hr, li, ol, p, pre, ul, a, abbr, b, bdi, bdo, br, cite, code, data, dfn, em, i, kdm, mark, q, rb, rp, rt, rtc, ruby, s, samp, small, span, strong, sub, sup, time, tt, u, wbr, area, audio, img, map, track, video, embed, iframe, noembed, object, param, picture, source, canvas, noscript, script, del, ins, caption, col, colgroup, table, tbody, td, tfoot, th, thead, tr, button, datalist, fieldset, form, formfield, input, label, legend, meter, optgroup, option, output, progress, select, textarea, details, dialog, menu, menuitem, summary, content, element, slot, template } = tagl(m);
const { svg, circle, title, g, path, defs, use, style } = tagl(m);

export default (vnode) => {
  return {
    view(vnode) {
      const { hour, minute, second } = vnode.attrs;

      return [
        svg(
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "-1024 -1024 2048 2048",
            width: "600",
            height: "600",
          },
          [
            title("Swiss Railway Clock"),
            style(
              { type: "text/css" },
              " .bg {stroke: none; fill: #aaa;} .fc {stroke: none; fill: black;} .h3 {stroke: none; fill: black;} .h2 {stroke: none; fill: #0000aa;} .h1 {stroke: none; fill: #aa0000;} "
            ),
            defs([
              path({ id: "mark1", d: "M -20,-1000 l 40,0 0,100 -40,0 z" }),
              path({ id: "mark2", d: "M -40,-1000 l 80,0 0,240 -80,0 z" }),
              path({ id: "mark3", d: "M -40,-1000 l 80,0 0,300 -80,0 z" }),
              path({
                id: "handh",
                d: "M -50,-600  l 50,-50 50,50 0,800  -100,0 z",
              }),
              path({
                id: "handm",
                d: "M -40,-900  l 40,-40 40,40 0,1180 -80,0  z",
              }),
              g({ id: "hands" }, [
                path({
                  d: "M -10,-910 l  10,-10 10,10 2,300 -24,0 z\n               M -13,-390 l  26,0         7,690 -40,0 z",
                }),
                path({
                  d: "M   0,-620 a 120,120 0 0 1 0,240\n                          a 120,120 0 0 1 0,-240 z\n               M   0,-560 a  60,60  0 0 0 0,120\n                          a  60,60  0 0 0 0,-120 z",
                }),
              ]),
              g({ id: "face1" }, [
                use({ "xlink:href": "#mark1", transform: "rotate(06)" }),
                use({ "xlink:href": "#mark1", transform: "rotate(12)" }),
                use({ "xlink:href": "#mark1", transform: "rotate(18)" }),
                use({ "xlink:href": "#mark1", transform: "rotate(24)" }),
              ]),
              g({ id: "face2" }, [
                use({ "xlink:href": "#face1" }),
                use({ "xlink:href": "#face1", transform: "rotate(30)" }),
                use({ "xlink:href": "#face1", transform: "rotate(60)" }),
                use({ "xlink:href": "#mark3" }),
                use({ "xlink:href": "#mark2", transform: "rotate(30)" }),
                use({ "xlink:href": "#mark2", transform: "rotate(60)" }),
              ]),
              g({ id: "face" }, [
                use({ "xlink:href": "#face2" }),
                use({ "xlink:href": "#face2", transform: "rotate(90)" }),
                use({ "xlink:href": "#face2", transform: "rotate(180)" }),
                use({ "xlink:href": "#face2", transform: "rotate(270)" }),
              ]),
            ]),
            circle({ class: "bg", r: "1024" }),
            use({ class: "fc", "xlink:href": "#face" }),
            hour == null
              ? null
              : use({
                  class: "h1",
                  "xlink:href": "#handh",
                  transform: `rotate(${(hour * 360) / 12})`,
                }),
            minute == null
              ? null
              : use({
                  class: "h2",
                  "xlink:href": "#handm",
                  transform: `rotate(${(minute * 360) / 60})`,
                }),
            second == null
              ? null
              : use({
                  class: "h3",
                  "xlink:href": "#hands",
                  transform: `rotate(${(second * 360) / 60})`,
                }),
          ]
        ),
      ];
    },
  };
};
