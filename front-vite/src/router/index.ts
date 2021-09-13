import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import { lazyLoad } from "@/common/js/util";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("home/Home"),
    children: [
      {
        path: "/",
        name: "Personal",
        component: lazyLoad(
          "home/components/main-content/views/personal-recommends/index"
        ),
      },
      {
        path: "/playlist",
        name: "Playlist",
        component: lazyLoad(
          "home/components/main-content/views/playlist/index"
        ),
      },
      {
        path: "playlistDetail/:id",
        name: "PlaylistDetail",
        component: lazyLoad(
          "home/components/main-content/views/playlist-detail/index"
        ),
      },
      {
        path: "rankList",
        name: "RankList",
        component: lazyLoad(
          "home/components/main-content/views/rank-list/index"
        ),
      },
      {
        path: "artistList",
        name: "ArtistList",
        component: lazyLoad(
          "home/components/main-content/views/artist-list/index"
        ),
      },
      {
        path: "latestMusic",
        name: "LatestMusic",
        component: lazyLoad(
          "home/components/main-content/views/latest-music/index"
        ),
      },
      {
        path: "albumDetail/:id",
        name: "AlbumDetail",
        component: lazyLoad(
          "home/components/main-content/views/album-detail/index"
        ),
      },
      {
        path: "artistRankList",
        name: "ArtistRankList",
        component: lazyLoad(
          "home/components/main-content/views/artist-rank-list/index"
        ),
      },
      {
        path: "artist/:id",
        name: "Artist",
        component: lazyLoad(
          "home/components/main-content/views/artist-detail/index"
        ),
      },
      {
        path: "exclusive-broadcast",
        name: "ExclusiveBroadcast",
        component: lazyLoad(
          "home/components/main-content/views/exclusive-broadcast/index"
        ),
      },
    ],
  },
  {
    path: "/mv/:id",
    name: "MVDetail",
    component: lazyLoad("home/components/mv-detail/index"),
  },
];

const router = createRouter({
  // 本地使用hash模式，使用history模式刷新会404
  history:
    import.meta.env.MODE === "production"
      ? createWebHistory(import.meta.env.BASE_URL)
      : createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;