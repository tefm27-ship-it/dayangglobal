const messages = {
  en: {
    welcome: "Welcome to our website!",
    description: "We focus on providing the best service.",
    submit: "Submit",
    langLabel: "English",
  },
  zh: {
    welcome: "欢迎来到我们的网站！",
    description: "我们专注于为您提供最佳服务。",
    submit: "提交",
    langLabel: "简体中文",
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

function createApp(mainOptions) {
  const Ctor = Vue.extend(mainOptions);
  return new Ctor({ i18n });
}