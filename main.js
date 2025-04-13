import m from "mithril";
import tagl, { mo, time } from "tagl-mithril";
import clock from "./clock";

const { h1, div, p, input, button, select, option, span } = tagl(m);
const { trunc } = Math;
setInterval(m.redraw, 10);

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
        Intl.supportedValuesOf("timeZone").map((key) =>
          option({ value: key }, key)
        )
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
  state.minute = (state.minute + increment + 60) % 60;
  if (state.minute === 0 && increment > 0) {
    moveHour(1);
  }
  if (state.minute === 59 && increment < 0) {
    moveHour(-1);
  }
};

const moveSecond = (increment) => {
  state.second = (state.second + increment + 60) % 60;
  if (state.second === 0 && increment > 0) {
    moveMinute(1);
  }
  if (state.second === 59 && increment < 0) {
    moveMinute(-1);
  }
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
      m(nav),
      button({ onclick: () => (state.hour = (state.hour + 12) % 24) }, "+"),
      input({
        type: "number",
        value: state.hour,
        onkeydown: hour_keydown,
        oninput: (e) => (state.hour = (+e.target.value + 24) % 24),
      }),
      input({
        type: "number",
        value: state.minute,
        onkeydown: minute_keydown,
        oninput: (e) =>
          (state.minute =
            e.target.value !== "" ? (+e.target.value + 60) % 60 : null),
      }),
      input({
        type: "number",
        value: state.second,
        onkeydown: second_keydown,
        oninput: (e) =>
          (state.second =
            e.target.value !== "" ? (+e.target.value + 60) % 60 : null),
      }),
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
      // p('With the help of tagl'),
      m(clock, { hour, minute, second, size: state.size })
    );
  },
});

m.route(document.body, "/", {
  "/": simpleClock,
  "/clock": clockComponent,
});
