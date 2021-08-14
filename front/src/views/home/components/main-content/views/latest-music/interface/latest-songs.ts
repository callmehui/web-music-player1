import { ITab } from "./index";

export interface ITabsState {
  currentTab: string | number /** 当前歌曲类型 */;
  tabs: ITab[] /** 类型tabs */;
  currentSongId: undefined | number /** 当前歌曲id */;
}
