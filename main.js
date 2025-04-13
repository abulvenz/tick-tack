import m from "mithril";
import tagl, { mo, time } from "tagl-mithril";
import clock from "./clock";

const { h1, div, p, input, button, select, option, span, table, tr, td, th } =
  tagl(m);
const { trunc } = Math;
setInterval(m.redraw, 10);

const selected = true;

const MINUTE_PAGE_STEP = 10;
const SECOND_PAGE_STEP = 10;
const HOUR_PAGE_STEP = 6;

const clockToFuzzyString = (hour, minute, second) => {
  const hourMap = {
    0: "zwölf",
    1: "eins",
    2: "zwei",
    3: "drei",
    4: "vier",
    5: "fünf",
    6: "sechs",
    7: "sieben",
    8: "acht",
    9: "neun",
    10: "zehn",
    11: "elf",
  };
  const next_hour = hourMap[(hour + 1) % 12];
  const this_hour = hourMap[hour % 12];
  if (minute < 2) {
    return `${this_hour} Uhr`;
  }
  if (minute < 4) {
    return `kurz nach ${this_hour}`;
  }
  if (minute < 8) {
    return `fünf nach ${this_hour}`;
  }
  if (minute < 13) {
    return `zehn nach ${this_hour}`;
  }
  if (minute < 18) {
    return `Viertel nach ${this_hour}`;
  }
  if (minute < 23) {
    return `zwanzig nach ${this_hour}`;
  }
  if (minute < 27) {
    return `fünf vor halb ${next_hour}`;
  }
  if (minute < 29) {
    return `kurz vor halb ${next_hour}`;
  }
  if (minute < 32) {
    return `halb ${next_hour}`;
  }
  if (minute < 35) {
    return `kurz nach halb ${next_hour}`;
  }
  if (minute < 37) {
    return `fünf nach halb ${next_hour}`;
  }
  if (minute < 42) {
    return `zwanzig vor ${next_hour}`;
  }
  if (minute < 47) {
    return `Viertel vor ${next_hour}`;
  }
  if (minute < 52) {
    return `zehn vor ${next_hour}`;
  }
  if (minute < 57) {
    return `fünf vor ${next_hour}`;
  }
  if (minute < 58) {
    return `kurz vor ${next_hour}`;
  }
  if (minute === 58) {
    return `${next_hour} Uhr`;
  }
  if (minute === 59) {
    return `${next_hour} Uhr`;
  }
  return `${this_hour} Uhr`;
};

const state = {
  hour: 0,
  minute: 0,
  second: null,
  size: 120,
  modus: "linear",
  tz: "Europe/Berlin",
};

const resetTime = () => {
  state.hour = null;
  state.minute = null;
  state.second = null;
  m.redraw();
};

const nav = (vnode) => ({
  view: (vnode) => {
    return div.container(
      button({ onclick: () => m.route.set("/") }, "Uhr"),
      button({ onclick: () => m.route.set("/clock") }, "Spielen")
    );
  },
});

const modi = {
  linear: (h, m, s) => {
    return {
      hour: h,
      minute: m,
      second: s,
    };
  },
  clack: (h, m, s) => {
    return {
      hour: trunc(h),
      minute: trunc(m),
      second: trunc(s),
    };
  },
  Sekunden: (h, m, s) => {
    return {
      hour: h,
      minute: m,
      second: trunc(s),
    };
  },
};

const simpleClock = (vnode) => ({
  view: (vnode) => {
    const time_local = new Date();

    const time = new Date(
      time_local.toLocaleString("en-US", {
        timeZone: state.tz,
      })
    );
    //    time.setSeconds(time_local.getSeconds());
    time.setMilliseconds(time_local.getMilliseconds());
    const hor =
      time.getHours() + time.getMinutes() / 60 + time.getSeconds() / 3600;
    const min =
      time.getMinutes() +
      time.getSeconds() / 60 +
      time.getMilliseconds() / 60000;
    const sec = time.getSeconds() + time.getMilliseconds() / 1000;

    const { hour, minute, second } = modi[state.modus](hor, min, sec);

    return div.container(
      h1("Lerne die Uhrzeit"),
      m(nav),
      select(
        {
          onchange: (e) => {
            state.modus = e.target.value;
            m.redraw();
          },
        },
        Object.keys(modi).map((key) => option({ value: key }, key))
      ),
      select(
        { value: state.tz, onchange: (e) => (state.tz = e.target.value) },
        (selected
          ? [
              "Europe/Berlin",
              "Asia/Bangkok",
              "Pacific/Honolulu",
              "America/New_York",
            ]
          : Intl.supportedValuesOf("timeZone")
        ).map((key) => option({ value: key }, key))
      ),
      h1(
        `${trunc(hor).toString().padStart(2, "0")}:${trunc(min)
          .toString()
          .padStart(2, "0")}:${trunc(sec).toString().padStart(2, "0")}`
      ),
      m(clock, { hour, minute, second, size: 120 })
    );
  },
});

const moveHour = (increment) => {
  state.hour = (state.hour + increment + 24) % 24;
};

const moveMinute = (increment) => {
  if (state.minute + increment > 59) {
    moveHour(1);
  }
  if (state.minute + increment < 0) {
    moveHour(-1);
  }
  state.minute = (state.minute + increment + 60) % 60;
};

let interval;

button.addEventListener("touchstart", () => {
  alert("start");
  interval = setInterval(() => {
    // Wert erhöhen
    console.log("Inkrement");
  }, 100);
});

button.addEventListener("touchend", () => {
  clearInterval(interval);
});

button.addEventListener("touchcancel", () => {
  clearInterval(interval);
});

const moveSecond = (increment) => {
  if (state.second + increment > 59) {
    moveMinute(1);
  }
  if (state.second + increment < 0) {
    moveMinute(-1);
  }
  state.second = (state.second + increment + 60) % 60;
};
const hour_keydown = (e) => {
  if (e.key === "ArrowUp") {
    moveHour(1);
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    moveHour(-1);
    e.preventDefault();
  } else if (e.key === "Delete" || e.key === "Backspace") {
    state.hour = null;
    e.preventDefault();
  }
  m.redraw();
};
const minute_keydown = (e) => {
  if (e.key === "ArrowUp") {
    moveMinute(1);
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    moveMinute(-1);
    e.preventDefault();
  } else if (e.key === "Delete" || e.key === "Backspace") {
    state.minute = null;
    e.preventDefault();
  }
  m.redraw();
  //  e.preventDefault();
};
const second_keydown = (e) => {
  if (e.key === "PageUp") {
    moveSecond(SECOND_PAGE_STEP);
    e.preventDefault();
  } else if (e.key === "PageDown") {
    moveSecond(-SECOND_PAGE_STEP);
    e.preventDefault();
  }
  if (e.key === "ArrowUp") {
    moveSecond(1);
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    moveSecond(-1);
    e.preventDefault();
  } else if (e.key === "Delete" || e.key === "Backspace") {
    state.second = null;
    e.preventDefault();
  }
  m.redraw();
};

const clockComponent = (vnode) => ({
  view: (vnode) => {
    const time = new Date();
    //   console.log(time, state);
    let second =
      state.second === null
        ? time.getSeconds() + time.getMilliseconds() / 1000
        : state.second;
    second =
      (state.hour != null || state.minute != null) && state.second == null
        ? null
        : second;
    const minute =
      (state.minute === null ? time.getMinutes() : state.minute) +
      (second % 60) / 60;
    const hour =
      (state.hour === null ? time.getHours() : state.hour) + (minute % 60) / 60;
    return div.container(
      h1("Spiele rund um die Uhr"),

      m(nav),
      button({ onclick: () => (state.hour = (state.hour + 12) % 24) }, "+"),
      table(
        tr(th("Stunde"), th("Minute"), th("Sekunde")),
        tr(
          td(button.fw({ onmousedown: (e) => moveHour(HOUR_PAGE_STEP) }, "++")),
          td(
            button.fw(
              { onmousedown: (e) => moveMinute(MINUTE_PAGE_STEP) },
              "++"
            )
          ),
          td(
            button.fw(
              { onmousedown: (e) => moveSecond(SECOND_PAGE_STEP) },
              "++"
            )
          )
        ),
        tr(
          td(button.fw({ onmousedown: (e) => moveHour(1) }, "+")),
          td(button.fw({ onmousedown: (e) => moveMinute(1) }, "+")),
          td(button.fw({ onmousedown: (e) => moveSecond(1) }, "+"))
        ),

        tr(
          td(
            input({
              type: "number",
              value: state.hour,
              onkeydown: hour_keydown,
              oninput: (e) => (state.hour = (+e.target.value + 24) % 24),
            })
          ),
          td(
            input({
              type: "number",
              value: state.minute,
              onkeydown: minute_keydown,
              oninput: (e) =>
                (state.minute =
                  e.target.value !== "" ? (+e.target.value + 60) % 60 : null),
            })
          ),
          td(
            input({
              type: "number",
              value: state.second,
              onkeydown: second_keydown,
              oninput: (e) =>
                (state.second =
                  e.target.value !== "" ? (+e.target.value + 60) % 60 : null),
            })
          )
        ),

        tr(
          td(button.fw({ onmousedown: (e) => moveHour(-1) }, "-")),
          td(button.fw({ onmousedown: (e) => moveMinute(-1) }, "-")),
          td(button.fw({ onmousedown: (e) => moveSecond(-1) }, "-"))
        ),
        tr(
          td(
            button.fw({ onmousedown: (e) => moveHour(-HOUR_PAGE_STEP) }, "--")
          ),
          td(
            button.fw(
              { onmousedown: (e) => moveMinute(-MINUTE_PAGE_STEP) },
              "--"
            )
          ),
          td(
            button.fw(
              { onmousedown: (e) => moveSecond(-SECOND_PAGE_STEP) },
              "--"
            )
          )
        )
      ),

      button({ onclick: () => resetTime() }, "×"),
      h1(
        span(
          { style: "color:#cc0000" },
          `${trunc((hour + 12) % 24)
            .toString()
            .padStart(2, "0")}`
        ),
        span(":"),
        span(
          { style: "color:#0000bb" },
          `${trunc(minute).toString().padStart(2, "0")}`
        )
      ),

      h1(
        span(
          { style: "color:#cc0000" },
          `${trunc(hour).toString().padStart(2, "0")}`
        ),
        span(":"),
        span(
          { style: "color:#0000bb" },
          `${trunc(minute).toString().padStart(2, "0")}`
        )
      ),

      h1(clockToFuzzyString(trunc(hour), trunc(minute), trunc(second))),
      // p('With the help of tagl'),
      m(clock, { hour, minute, second, size: state.size })
    );
  },
});

m.route(document.body, "/", {
  "/": simpleClock,
  "/clock": clockComponent,
});
