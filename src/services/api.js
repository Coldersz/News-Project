import Base from "./baseURL";

export default {
  install(app) {
    app.config.globalProperties.$news = Base;
  }
};