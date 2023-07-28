const FilesRouter = require("express").Router();
const fs = require("fs/promises");

async function createFile(data = null) {
  try {
    const content = new Date().toString().replace(/[:.]/g, "-");
    const path = `./files/${content}.txt`;
    await fs.writeFile(path, data ? data : content);
  } catch (err) {
    console.log(err);
  }
}

FilesRouter.post("/createDefaultFile", (request, response, next) => {
  console.log("REQUEST HIT");
  createFile();
  return response.status(200).json({
    message: "Request hit",
  });
});

module.exports = FilesRouter;
