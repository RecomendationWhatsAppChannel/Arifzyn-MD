/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require("fs");
const chalk = require("chalk");

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = ""; // https://api.lolhuman.xyz
global.xzn = ""; // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = "6288971908991"; // Owner Utama
global.owner = ["6288971908991"]; // Owner Lainnya
global.namaowner = "Arifzyn."; // Nama Owner
global.premium = ["6288971908991"]; // Premium User
global.nobot = "6283138029719";
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = "ZUMI🍀🌷"; // NickBot
global.typemenu = "v2"; // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = "v1"; // 'v1' > 'v2'
global.autoread = false; // ReadChat
global.autobio = false; // AutoBio
global.autoblok212 = true; // AutoBlock Nomer +212
global.onlyindo = false; // AutoBlock Selain Nomer Indo
global.packname = "Sticker Ini DiBuat Oleh ZumiBot "; // Watermark Sticker
global.author = "Link Grup ZumiBOT : https://chat.whatsapp.com/CyxGJfOds7y4WFofFgj5nR"; // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
  done: "Berhasil!✅",
  prem: "> Fitur Ini Hanya Untuk Premium!",
  admin: "*There's Nothing In Here*",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "Feature Only for _*owner*_",
  group: "Feature Only for _*Group Chat*_",
  private: "Feature Only for _*Private Chat*_",
  wait: "Wait a Moment, for Process",
  error: "_*Sorry Features Error*_",
};
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync("./media/quoted.jpg");
global.menu = fs.readFileSync("./media/menu.jpg");
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = "https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ";
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
