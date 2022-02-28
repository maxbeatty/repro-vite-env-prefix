import { isLocal } from "./config.env";

export default {
  get IS_LOCAL(): boolean {
    return Boolean(isLocal);
  }
};
