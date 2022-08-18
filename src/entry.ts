import { App } from "vue";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import MyButton from "./button";

export { MyButton, SFCButton, JSXButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
