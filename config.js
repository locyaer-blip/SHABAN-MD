const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lqOEVGTlpzZWwyR2ZwOWl1dHliWGppcFhqY1pWZjhzbStWQlcxelZWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjhLTzA4cEZ6WkpJcTZoM09ldUMxU3l5U2VKYWZMQk92OXIzTEVFL2RoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSi8wWG11NlE3RE12WXIxOXd2Sk9wS04vc3FMQXhrdDRYejlQVmJIVFVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZVk3SWpaczE2Z2FjUnF6QitZYVFkWUkwV3h0Rm5NL0JDcEl4cVBOM2hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPUllOT2E0U1dyY1NLMGFEOS9nMDV4amhNeHd5V3NkdHE3ZTQxODlEVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9pRFdWN3cyRS9zWElaTThzVzErMnkxQ2liUXowa2prN2paZnZjWFlzRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUwwWUVLUGJzYzJ6RDZHSkNGdGhJMFc1QmJ5cHhKWFQ4dFk2cUtZNVhYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnFCbk42MEhpcHNKS0VKMnR0dVYvK1RNaU5DdWxQMDE3OFZKaFZUU2Z3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im94WGdwdWxmc09NOUtxZ1ZXUXNFZkxNc0p5THI5dFBIR2VIQVpTYnd2bU85SE56dHdIazlLNVBuYS9TWlgzV24rWVNmNnpPUVU2c3ZyN3ptZHJ5aEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJ4U1R2cXovMUNGQ1Z0ZkZQaG1Gc1E1b3VBMmIzZDB1MytLT1dLZ0JKWHNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTAwODE3ODg0OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0NDOUIyQUFDNTVCMkM2RUE3Q0NERkNBMDAzQUY3MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxODE1OTUyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJNOTY1RVhNTCIsIm1lIjp7ImlkIjoiOTE5MDA4MTc4ODQ5Ojk4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTk5NjEzNDIwMjAwMTE0Ojk4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlhscWZ3SEVJamJqTWdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUERldmVSK25xbkh0TmtyWG5DeEczNTZBdE5Obk8vTDR4eWg5ZGxsNTdoTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZGdCQmhsNUtVTWVUQ1NKRXNndjN6RGI0TTFBMmVIaUNPS1ZHeSszUEJ3UW9XK1o3MGhmditVQndrN2l0a3Rha0JHNzlYVTgyVFR3dUl6aitOZ1FwQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkhNQnV4aVBOeDBkWDZDMDRnY0JzTS9Cc28xb3kwczRVUnNJMElTSWdjUmNQcWE5V29jemFaZ3RCSUJHYjA3VDNSNlZiemlEaWVmWkRuN1lrTnllZERRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MDA4MTc4ODQ5Ojk4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR3M3Iza2ZwNnB4N1RaSzE1d3NSdCtlZ0xUVFp6dnkrTWNvZlhaWmVlNFQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTgxNTk0OCwibGFzdFByb3BIYXNoIjoiMk1GS1BRIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Locy-Bot 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "false", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/gbzTd8WF/shaban-md.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "LOCY-BOT",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "LOCY",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "919008178849",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗟𝗼𝗰𝘆 𝗕𝗼𝘁",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Locy Bot*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/gbzTd8WF/shaban-md.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "919008178849",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
