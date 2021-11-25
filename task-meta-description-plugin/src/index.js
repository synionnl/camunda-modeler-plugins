import { registerBpmnJSPlugin, registerBpmnJSModdleExtension } from "camunda-modeler-plugin-helpers";  
import plugin from "./Plugin";
import moddle from "./moddle.json";

registerBpmnJSPlugin(plugin);
registerBpmnJSModdleExtension(moddle);