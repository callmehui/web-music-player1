import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import { lazyLoad } from "@/common/js/util/index";

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
        path: "playlistDetail/:id",
        name: "PlaylistDetail",
        component: lazyLoad(
          "home/components/main-content/views/playlist-detail/index"
        ),
      },
    ],
  },
];

const router = createRouter({
  // 本地使用hash模式，使用history模式刷新会404
  history:
    process.env.NODE_ENV === "production"
      ? createWebHistory(process.env.BASE_URL)
      : createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
