import { baseURL, environment, isLocal, isWorking, title } from "./config.env";

export default {
  get BASE(): string {
    return baseURL;
  },

  get ENV(): string {
    return environment;
  },

  get IS_LOCAL(): boolean {
    return Boolean(isLocal);
  },

  get IS_WORKING(): boolean {
    return isWorking;
  },

  get TITLE(): string {
    return title;
  }
};
