import Root from "./components";
import link from "@frontity/html2react/processors/link";

const smvFrontityTheme = {
  name: "smv-frontity-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};

export default smvFrontityTheme;