import app from "./app";
import "./database";

app.listen(app.get("port"));

console.log(`Server runing on https://localhost:${app.get("port")}`);
