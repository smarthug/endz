import create from "zustand";
import produce from "immer";

const setting = {
  darkTheme: false,
  font: {
    size: 100,
    family: "'Noto Serif KR', serif",
    familyName: "Noto Serif"
  }
};
const localSetting = localStorage.getItem("settings")

const parseSetting = localSetting? JSON.parse(localSetting):{}
export const [useStore] = create(set => ({
  ...setting,
  ...parseSetting,
  set: fn => set(produce(fn))
}));
