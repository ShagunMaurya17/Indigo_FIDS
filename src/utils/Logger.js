import { isProduction } from "./config";

export class Logger {
  static log(comment, ...data) {
    if (!isProduction) {
      console.log(comment, ...data);
    }
  }
  static error(comment, err) {
    if (!isProduction) {
      console.error(comment, err);
    }
  }
}
