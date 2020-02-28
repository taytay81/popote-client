const { createWorker } = require("tesseract.js");
const worker = createWorker();

class TesseractObject {
  constructor() {
    this.name = "TesseractObject";
  }

  async getTextFromImage() {
    console.log(this.name);
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    let result = await worker.detect("./image/ticket1.jpg");
    console.log("detect", result.data);
    result = await worker.recognize("./image/ticket1.jpg");
    console.log("recognize", result.data);

    await worker.terminate();
    //return text;
  }
}

export default new TesseractObject();
