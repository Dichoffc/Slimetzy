// No Enc? Buy : 6285718275389
// Harga : 65K
// Script By : SlimexTzy

const fs = require('fs')

global.storename = "SlimexTzy"
global.botname = "6285718275389"
global.ownername = "SlimexTzy"
global.owner = "SlimexTzy"

global.packname = "-"
global.author = "© Slimexztzy"
global.web = "https://linktr.ee/slimextzy"
global.wm = "SlimexTzy Version 3.0.0" //Gusah Diganti
global.chjid = "120363298283745417"

global.sessionName = "session"
global.prefix = "."
global.botNumber = "-" 

global.sch = "https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x"
global.sgc = "https://chat.whatsapp.com/KcOsY5C3KzuD9PQ396vRfq"
global.stg = "https://linktr.ee/slimextzy"
global.syt = "https://linktr.ee/slimextzy"
global.sig = "https://linktr.ee/slimextzy"
global.thumb = "https://telegra.ph/file/11db4f1998be29d1635bd.jpg"

global.qris = "https://telegra.ph/file/5cc93d16370028a062728.jpg"
global.dana = "085715430424"
global.gopay = "085691419758"
global.ovo = false
global.pulsa = "-"
global.rek = "-"

// Apikey nya
global.gtds = "GataDios" //Isi Apikey Kalian
global.xyro = "5dRkJDWvIG" //Isi Apikey Kalian
global.nlkey = "AdpStore" //Isi Apikey Kalian
global.skizapi = "SanTampan" //Isi Apikey Kalian
global.neoxrapi = "sanolan" //Isi Apikey Kalian
global.ariekey = "DVMsILTHCnP2lTz8kqUIN7vjFQrnEMPg" //Isi Apikey Kalian

// Buat cpanel
global.domain = "-" // domain panel lu
global.apikey = "-" // ptla panel lu
global.capikey = "-" // ptlc panel lu
global.eggs = "15"
global.locc = "1"
global.apido = "-" // Api digital ocean lu

global.autotyping = false
global.autoread = false
global.autobio = false
global.anticall = false
global.antispam = true
global.antibot = false
global.welcome = false // welcome+left

global.gamewaktu = 60
global.limit = 15

global.bejir = (a, b) => {
let bjir = 
{key: {remoteJid: 'status@broadcast', 
participant: '0@s.whatsapp.net'}, 
message: {orderMessage: {itemCount: 1000, 
status: 1, surface: 1, 
message: a, orderTitle: '', thumbnail: b, 
sellerJid: '0@s.whatsapp.net'}}};
return bjir
}

// NOTE
// true aktif & false nonaktif

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
