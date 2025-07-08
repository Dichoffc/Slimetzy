/*SC INI DI JUAL RESMI OLEH SLIMEXTZY

BASE : SlimexTzy
CREATE : SlimexTzy

HARGA SC SLIMEXTZY :

NO ENC : 65kK
ENC     : 45K

TELEGRAM : t.me/sl1mecrash
YT : youtube.com/slimedevoloper
*/


require("./lib/settings/settings")
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
InteractiveMessage,
proto, delay
} = require('@whiskeysockets/baileys')
const axios = require('axios');
const archiver = require('archiver');
const beta = require('betabotz-tools')
const bochil = require('@bochilteam/scraper');
const chalk = require('chalk');
const cheerio = require('cheerio')
const cookie = require('cookie')
const crypto = require('crypto')
const dylux = require('api-dylux')
const didyoumean = require('didyoumean');
const gtts = require('node-gtts')
const fs = require('fs');
const fetch = require('node-fetch')
const FormData = require("form-data");
const { sizeFormatter } = require("human-readable");
const format = sizeFormatter()
const jimp = require("jimp");
const ms = require("parse-ms");
const moment = require('moment-timezone');
const nou = require("node-os-utils");
const os = require('os')
const { Client } = require('ssh2');
const path = require('path')
const request = require('request')
const similarity = require('similarity')
const speed = require('performance-now')
const stream = require('stream');
const util = require('util');
const threshold = 0.72
const { fromBuffer } = require('file-type')
const { exec, spawn, execSync } = require('child_process')
const { performance } = require('perf_hooks')
const { promisify } = require('util');

//==========================

const own = JSON.parse(fs.readFileSync('./data/owner.json').toString())
const prem = require("./lib/general/premium");
const res = JSON.parse(fs.readFileSync('./data/reseller.json').toString())
const { addGold, minGold, cekGold } = require('./lib/general/funcgold')
const { addSaldo, minSaldo, cekSaldo } = require('./lib/general/funcsaldo')
const { addLimit, minLimit, cekLimit } = require('./lib/general/funclimit')
let saldo = JSON.parse(fs.readFileSync("./data/saldo.json"));
let premium = JSON.parse(fs.readFileSync('./data/premium.json'));
let db_gold = JSON.parse(fs.readFileSync("./data/gold.json"));
let db_saldo = JSON.parse(fs.readFileSync("./data/saldo.json"));
let db_limit = JSON.parse(fs.readFileSync("./data/limit.json"));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/general/respon-list');
let db_respon_list = JSON.parse(fs.readFileSync('./data/list-message.json'));
const { uptotelegra } = require('./lib/general/upload')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, createSerial } = require('./lib/general/register')
const { casinoSave, setCasino, deleteCasino } = require("./lib/game/casino");
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, aMonay, kMonay, cMonay } = require('./lib/general/funcmonay')
let db_monay = JSON.parse(fs.readFileSync("./data/monay.json"));


//==========================

const { pinterest } = require('./lib/general/pinterest')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot/clone')
const antispam = require("./lib/general/antispam");
const { sticker5 } = require('./lib/general/sticker')
let nplink = JSON.parse(fs.readFileSync('./data/antilink.json'));
let nplinkgc = JSON.parse(fs.readFileSync('./data/antilinkgc.json'));
const { UploadFileUgu, webp2mp4File } = require('./lib/general/uploader')

//==========================

const { convertAngka, text2img, scsearch, capcutdl, igdown, twiterdl, snapsave, GDriveDl, snapsavev2, youtubedlv2, convertv2, jadwalSholat, findKodeDaerah, downloadCapcut, searchTemplates, detailTemplates, GoogleImage, mediafireDl, stickerSearch } = require('./lib/general/scrape')
const api = require('btch-downloader')
const { Downloader } = require("@tobyg74/tiktok-api-dl")
const { mega } = require('megajs')
const { tiktokdl } = require('tiktokdl') 
const { y2mateplay, y2matemp3, y2matemp4 } = require('./lib/general/y2mate')
const yts = require('yt-search');

//==========================

const family100 = {}
const suit = {}
const tictactoe = {}
const petakbom = {}
const tebakgambar = {}
const tebakkalimat = {}
const tebakkata = {}
const tebaklirik = {}
const tebakanime = {}
const tebaklagu = {}
const kuis = {}
const tebakkimia = {}
const tebakbendera = {}
const siapakahaku = {}
const asahotak = {}
const susunkata = {}
const caklontong = {}
const kuismath = {}
const tebakgame = {}
const permintaan = {}
const laporan = {}
const userSessions = {};

//==========================

module.exports = slimecode = async (slimecode, m, chatUpdate, mek, store) => {
try {

const { type, quotedMsg } = m
const { toFirstCase, isNumber, formatp, parseMention, getRandom, generateProfilePicture, getCase, runtime, h2k, makeid, kyun, jsonformat, isUrl, fetchJson, sleep, getBuffer, msToDate, smsg, getGroupAdmins, getTime, TelegraPh, bytesToSize } = require("./lib/general/myfunc");

var body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = prefix ? isCommand : isCommand2
const pushname = m.pushName || "No Name"
const botNumber = await slimecode.decodeJid(slimecode.user.id)
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")

const isCreator = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner ? true : prem.checkPremiumUser(m.sender, premium)
const isReseller = [owner, ...res].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')
const usedPrefix = prefix + command;
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = (quoted.msg || quoted)
const isGroup = from.endsWith('@g.us')
const sender = m.key.fromMe ? (slimecode.user.id.split(':')[0]+'@s.whatsapp.net' || slimecode.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await slimecode.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupMembers = isGroup ? groupMetadata.participants : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const tag = `${m.sender.split('@')[0]}`
const usere = `${m.sender.split('@')[0]}`+'@s.whatsapp.net'
const nomore = m.sender.replace(/[^0-9]/g, '')
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isAntiLink = nplink.includes(m.chat) ? true : false
const isAntiLinkgc = nplinkgc.includes(m.chat) ? true : false

if (!slimecode.public) {
if (!isOwner && !m.key.fromMe) return
}

const contacts = JSON.parse(fs.readFileSync("./data/contacts.json"))
const isContacts = contacts.includes(sender)

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function monospace(string) {
return '```' + string + '```'
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

if (wibTime < "23:59:59"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if (wibTime < "14:59:59"){ var ucapanWaktu = 'Selamat siang'}
if (wibTime < "10:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if (wibTime < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'}

try {
const currentTimee = Date.now();
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('daftar' in user)) user.daftar = false
if (!('nama' in user)) user.nama = `${pushname}`
if (!('otp' in user)) user.otp = '-'
if (!('email' in user)) user.email = '-'
if (!('serial' in user)) user.serial = '-'
if (!('Slimextzy' in user)) user.nolan = false
if (!('lastUnregTime' in user)) user.lastUnregTime = currentTimee
} else global.db.data.users[m.sender] = {
daftar: false,
nama: `${pushname}`,
otp: '-',
email: '-',
serial: '-',
Slimextzy: false,
lastUnregTime: currentTimee
}
} catch (err){
console.log(err)
}

try {
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antilinkgc' in chats)) chats.antilinkgc = false
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
antilink: false,
antilinkgc: false,
mute: false
}
} catch (err){
console.log(err)
}

fs.writeFileSync('./data/slimecode-db/database.json', JSON.stringify(global.db.data, null, 2))

var levelRole = cekSaldo(m.sender, db_saldo)
var role = 'New'
if (levelRole <= 1) {
role = 'Newbie'
} else if (levelRole <= 500) {
role = 'Bronze 1'
} else if (levelRole <= 2000) {
role = 'Bronze 2'
} else if (levelRole <= 4000) {
role = 'Bronze 3'
} else if (levelRole <= 6000) {
role = 'Silver 1'
} else if (levelRole <= 8000) {
role = 'Silver 2'
} else if (levelRole <= 10000) {
role = 'Silver 3'
} else if (levelRole <= 12000) {
role = 'Gold 1'
} else if (levelRole <= 14000) {
role = 'Gold 2'
} else if (levelRole <= 16000) {
role = 'Gold 3'
} else if (levelRole <= 18000) {
role = 'Platinum 1'
} else if (levelRole <= 20000) {
role = 'Platinum 2'
} else if (levelRole <= 22000) {
role = 'Platinum 3'
} else if (levelRole <= 24000) {
role = 'Platinum 4'
} else if (levelRole <= 26000) {
role = 'Platinum 5'
} else if (levelRole <= 28000) {
role = 'Diamond 1'
} else if (levelRole <= 30000) {
role = 'Diamond 2'
} else if (levelRole <= 32000) {
role = 'Diamond 3'
} else if (levelRole <= 34000) {
role = 'Diamond 4'
} else if (levelRole <= 36000) {
role = 'Diamond 5'
} else if (levelRole <= 38000) {
role = 'Master'
} else if (levelRole <= 40000) {
role = 'Master ✩'
} else if (levelRole <= 50000) {
role = 'Master ✩✩'
} else if (levelRole <= 60000) {
role = 'Master ✩✩✩'
} else if (levelRole <= 70000) {
role = 'Master ✯'
} else if (levelRole <= 80000) {
role = 'Master ✯✯'
} else if (levelRole <= 100000) {
role = 'Master ✯✯✯'
} else if (levelRole <= 110000) {
role = 'GrandMaster'
} else if (levelRole <= 120000) {
role = 'GrandMaster ✩'
} else if (levelRole <= 130000) {
role = 'GrandMaster ✩✩'
} else if (levelRole <= 140000) {
role = 'GrandMaster ✩✩✩'
} else if (levelRole <= 150000) {
role = 'GrandMaster ✯'
} else if (levelRole <= 160000) {
role = 'GrandMaster ✯✯'
} else if (levelRole <= 200000) {
role = 'GrandMaster ✯✯✯'
} else if (levelRole <= 200000000) {
role = 'Mr. Greatest'
} else if (levelRole <= 230000000) {
role = 'Mr. Greatest ✩'
} else if (levelRole <= 260000000) {
role = 'Mr. Greatest ✩✩'
} else if (levelRole <= 290000000) {
role = 'Mr. Greatest ✩✩✩'
} else if (levelRole <= 240000000) {
role = 'Mr. Greatest ✯'
} else if (levelRole <= 280000000) {
role = 'Mr. Greatest ✯✯'
} else if (levelRole <= 360000000) {
role = 'Mr. Greatest ✯✯✯'
} else if (levelRole <= 1000000000) {
role = 'Level Max'
}

slimecode.autoshalat = slimecode.autoshalat ? slimecode.autoshalat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? slimecode.user.id : m.sender
let id = m.chat 
if (id in slimecode.autoshalat) {
return false
}
let jadwalSholat = {
shubuh: '04:29',
terbit: '05:44',
dhuha: '06:02',
dzuhur: '12:02',
ashar: '15:15',
magrib: '17:52',
isya: '19:01',
}
const datek = new Date((new Date).toLocaleString("en-US", {
timeZone: "Asia/Jakarta"
}));
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `Hai!, kini waktu *${sholat}* telah tiba...\nAmbilah air dan segeralah sholat 😇\n\n*${waktu}*\n_tuk wilayah Jakarta dan sekitarnya_`
slimecode.autoshalat[id] = [
m.reply(caption),
setTimeout(async () => {
delete slimecode.autoshalat[m.chat]
}, 57000)]
}}

slimecode.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
slimecode.sendTeks = async(chatId, text = '', quoted = '', opts = {}) => {
return slimecode.sendMessage(chatId, { text: text, mentions: await slimecode.ments(text), ...opts}, {quoted: quoted})
};
slimecode.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return slimecode.sendMessage(jid, {poll: { name, values, selectableCount }})
};

const reply = (teks) => {
return slimecode.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  slimecode.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  slimecode.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [m.sender]}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `0@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${db.data.users[m.sender].nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const ftext = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {extendedTextMessage: {text: `${prefix+command} ${q}`,thumbnailUrl: thumb}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": "", }, "title": `Payment by ${ownername}`,"description": null, "currencyCode": "IDR", "priceAmount1000": "30000000", "retailerId": `Powered by Slimextzy`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
const floc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered by SlimexTzy`,jpegThumbnail: ""}}}

async function slimecodereply(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `SlimexTzy`,
body: ``,
previewType: "VIDEO",
thumbnailUrl: 'https://telegra.ph/file/65d5ed2e0edeea8363919.jpg', 
sourceUrl: sch, 
},
},
text: teks,
};
return slimecode.sendMessage(m.chat, nedd, {quoted: m,});
}

async function slimecodereply2(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `SlimexTzy`,
body: ``,
previewType: "VIDEO",
thumbnailUrl: "https://telegra.ph/file/65d5ed2e0edeea8363919.jpg", 
sourceUrl: syt, 
},
},
text: teks,
};
return slimecode.sendMessage(m.chat, nedd, {quoted: m,});
}

if (isAntiLink) {
if (budy.match('chat.whatsapp', 'wa.me', 't.me')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await slimecode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await slimecode.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

if (isAntiLinkgc) {
if (budy.match('chat.whatsapp')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await slimecode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await slimecode.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('slimecode.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

async function tiktokSearchVideo(query) {
return new Promise(async (resolve, reject) => {
axios("https://tikwm.com/api/feed/search", {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
cookie: "current_language=en",
"User-Agent":
"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
},
data: {
keywords: query,
count: 12,
cursor: 0,
web: 1,
hd: 1,
},
method: "POST",
}).then((res) => {
resolve(res.data.data);
});
});
}

async function searchSpotifyTracks(query) {
const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const getToken = async () => {
const response = await fetch('https://accounts.spotify.com/api/token', {
method: 'POST',
timeout: 60000,
body: new URLSearchParams({
grant_type: 'client_credentials'
}),
headers: {
Authorization: `Basic ${auth}`
},
});
return (
await response.json()).access_token;
};

const accessToken = await getToken();
const offset = 10;
const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
const response = await fetch(searchUrl, {
  headers: {
Authorization: `Bearer ${accessToken}`
  },
});
const data = await response.json();
return data.tracks.items;
}

function happymod(query) {
return new Promise((resolve, reject) => {
axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("div.pdt-app-box").each(function(c, d) {
let name = $(d).find("a").text().trim();
let icon = $(d).find("img.lazy").attr('data-original');
let link = $(d).find("a").attr('href');
let link2 = `https://www.happymod.com${link}`
const Data = {
icon: icon,
name: name,
link: link2
}
hasil.push(Data)
})
resolve(hasil);
}).catch(reject)
});
}

async function loading () {
var nln = [
"LX • • •",
"LX • • • • •",
"LX • • • • • • •",
"LX • • • • •",
"LX • • •",
"LX • • • • •",
"LX • • • • • • •",
]
let { key } = await slimecode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(700, 900)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await slimecode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await slimecode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await slimecode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await slimecode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await slimecode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit5 (tex1, tex2, tex3, tex4, tex5) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`,
`${tex4}`,
`${tex5}`
]
let { key } = await slimecode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(900, 1500)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await slimecode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function ditt(...texts) {
let { key } = await slimecode.sendMessage(from, {text: 'Loading...'}, { quoted: m });
let duh = randomNomor(500, 800);
for (let i = 0; i < texts.length; i++) {
await sleep(duh);
await slimecode.sendMessage(from, {text: texts[i], edit: key}, { quoted: m });
}}

async function buttonurl(chat, teks, url1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
}
],
})})
}}
}, { quoted: jm })

await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttonurl2(chat, teks, url1, url2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
},
{
"name": "cta_url",
"buttonParamsJson": url2
}
],
})})
}}
}, { quoted: jm })

await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply2(chat, teks, quick1, quick2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
},
{
"name": "quick_reply",
"buttonParamsJson": quick2
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
},
businessMessageForwardInfo: {
businessOwnerJid: slimecode.decodeJid(slimecode.user.id)
},
externalAdReply: {
title: `${ucapanWaktu} kak`,
body: `${bulan} ${tahun}`,
thumbnailUrl: global.thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
fileName: "SlimexTzyV3",
}, {
upload: slimecode.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut2(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
fileName: "SlimexTzyV3",
}, {
upload: slimecode.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttoncopy(chat, teks, copynye, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": copynye
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function sendbutton(chat, teks, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}]
})})
}}
}, { quoted: jm})
await slimecode.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}

if (body && full_args && isPc) {
if (db.data.users[m.sender].nolan) {
if (!m.fromMe) {
try {
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${skizapi}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Slimextzy%20Project%20yang%20diciptakan%20oleh%20Sanjaya%20tugasmu%20membantu%20user%20Slimextzy%20Project%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gue%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(full_args)}`);
const noll = `${result.result}`;
m.reply(noll);
} catch (err) {
console.log(err);
}}}
}

async function streamToBuffer(stream) {
return new Promise((resolve, reject) => {
let chunks = [];
stream.on('data', chunk => chunks.push(chunk));
stream.on('end', () => resolve(Buffer.concat(chunks)));
stream.on('error', reject);
});
}

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

async function resize(buffer, width, height) {
var oyy = await Jimp.read(buffer);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

try {
var ppuser = await slimecode.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/65d5ed2e0edeea8363919.jpg'}
let ppnyauser = await getBuffer(ppuser)

const nebal = (angka) => {
return Math.floor(angka)
}

const downloadMp4 = async (Link) => {
try{
let yutub = await y2matemp4(Link)
//if (yutub.size < 104857600) {
const Cap = `*${yutub.title}*\n\nID: ${yutub.vid}`;
await slimecode.sendMessage(m.chat, { video: { url: yutub.video["360"].url }, caption: Cap,gifPlayback: false},{quoted: m})
/*} else {
await m.reply(`File video ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch(err) {
m.reply(`${err}`)
}}

const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await slimecode.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "YOUTUBE - PLAY",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: m })
/*} else {
await m.reply(`File audio ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch (err){
console.log(color(err))
}}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
slimecode.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
slimecode.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}}

let list = []
for (let i of own) {
list.push({
displayName: await slimecode.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await slimecode.getName(i + '@s.whatsapp.net')}\n
FN:${await slimecode.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:slimextzyhelp@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://slimecode.com
item3.X-ABLabel:Channel\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//==========================

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
m.reply(`*GAME FAMILY 100*\nJawaban kamu benar!\n\nJawaban: ${i}\n\n${jawaban.length < 1 ? 'Semua jawaban sudah tertebak!\nHadiah: 12 limit' : 'Sisa yang belum ditebak : '+jawaban.length}`)
}}
if (jawaban.length < 1){
addLimit(usere, 12, db_limit)
clearTimeout(waktu);
delete family100[from];
}}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?.nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi invalid',
0: 'Posisi invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game telah berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game telah berakhir` : `Ketik .nyerah tuk menyerah`}`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await slimecode.sendText(room.x, str, m, { mentions: parseMention(str) } )
await slimecode.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}}

let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'Wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
pokl = `@${roof.p2.split('@')[0]} menolak suit, S
suit dibatalkan!`
await slimecode.sendTeks(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

1. @${roof.p.split('@')[0]}
2. @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"`
await slimecode.sendTeks(from, ggy, fkontak)
if (!roof.pilih) await slimecode.sendTeks(roof.p, teksbbb+'\n\n• Gunting\n• Batu\n• Kertas', m)
if (!roof.pilih2) await slimecode.sendTeks(roof.p2, teksbbb+'\n\n• Gunting\n• Batu\n• Kertas', m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await slimecode.sendMessage(from, {text: `Kedua pemain tidak niat bermain\nSuit dibatalkan!`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir!`
await slimecode.sendTeks(from, sffp, fkontak)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /^(.gunting|gunting)/i
let b = /^(.batu|batu)/i
let k = /^(.kertas|kertas)/i
let reg = /^(.gunting|.batu|.kertas|gunting|batu|kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await slimecode.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fkontak})
if (!roof.pilih2) await slimecode.sendMessage(roof.p2, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await slimecode.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await slimecode.sendMessage(roof.p, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await slimecode.sendTeks(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? 'Menang' : 'Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? 'Menang' : 'Kalah'}`, bejir('HASIL SUIT PVP', null))
delete suit[roof.id]
}}

let pilih = "◽", bomb = "💣";
if (petakbom[m.sender]) {
if (!/^[1-9]|10$/i.test(body)) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 2) {
petakbom[m.sender].board[parseInt(body) - 1] = bomb;
petakbom[m.sender].pick++;
petakbom[m.sender].bomb--;
petakbom[m.sender].nyawa.pop();

let brd = petakbom[m.sender].board;
if (petakbom[m.sender].nyawa.length < 1) {
await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bom!\n\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}`);
delete petakbom[m.sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bom!\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nNyawa: ${petakbom[m.sender].nyawa}`);
return !0;
}
if (petakbom[m.sender].petak[parseInt(body) - 1] === 0) {
petakbom[m.sender].petak[parseInt(body) - 1] = 1;
petakbom[m.sender].board[parseInt(body) - 1] = pilih;
petakbom[m.sender].pick++;
petakbom[m.sender].lolos--;
let brd = petakbom[m.sender].board;
if (petakbom[m.sender].lolos < 1) {
await m.reply(`*KAMU MENANG*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa Nyawa: ${petakbom[m.sender].nyawa}\nBom: ${petakbom[m.sender].bomb}`);
delete petakbom[m.sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa Nyawa: ${petakbom[m.sender].nyawa}\nBom: ${petakbom[m.sender].bomb}`)
}}

if (fs.existsSync(`./data/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'n') {
slimecode.sendMessage(m.chat, { text: `*GAME DIBATALKAN*\n\n• @${casinoo.Y.split("@")[0]} Membatalkan game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenang: [ @${casinoo.Z} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
slimecode.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addSaldo(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), db_saldo)
await minSaldo(`${casinoo.Y}`, nebal(casinoo.nominal), db_saldo)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenang: [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
slimecode.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addSaldo(`${casinoo.Y}`, nebal(casinoo.nominal), db_saldo)
await minSaldo(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), db_saldo)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Hasil draw, tidak ada pemenang!`
slimecode.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}}
}

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakgambar[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakgambar[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[m.chat];
}else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkalimat[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkata[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkata[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebaklirik[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebaklirik[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakanime[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakanime[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebaklagu[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebaklagu[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuis[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete kuis[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete siapakahaku[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete siapakahaku[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkimia[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakbendera[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakbendera[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete asahotak[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete asahotak[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete susunkata[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete susunkata[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete caklontong[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete caklontong[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
slimecode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuismath[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
slimecode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete kuismath[m.chat];
} else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

const JwbTrue = (tebak, hadiah) => {
return`*🎮 ${tebak} 🎮*\n\nJawaban Benar! 🎉\n+ ${hadiah} Limit`
}
const waktuHabis = (jawaban) => {
return `*WAKTU HABIS!*\nJawaban: ${jawaban}`
}

if (tebakgame[m.chat] && !m.fromMe) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (body.toLowerCase() == jawaban && !m.fromMe) {
await addLimit(m.sender, tebakgame[m.chat][2], db_limit) 
await m.reply(JwbTrue("TEBAK GAME", tebakgame[m.chat][2]) + `\n\nKetik .tebakgame untuk bermain lagi...`)
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (body.toLowerCase().includes('.nyerah', '. nyerah')) {
m.reply('Yahh, masa nyerah :)')
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe)
m.reply(`Waduh, sedikit lagi tuh!`)
else if (!m.fromMe) {
slimecode.sendMessage(m.chat, {react: { text: "🔴",key: m.key,}})
}}

const totalFitur = () =>{
var mytext = fs.readFileSync("slimecode.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

if (isCmd && autotyping) {
if (command) { slimecode.readMessages([m.key])}
slimecode.sendPresenceUpdate('composing', from)
}

if (isCmd && autoread) {
const readkey = { remoteJid: m.chat, id: m.key.id, participant: m.isGroup ? m.key.participant : undefined }
await slimecode.readMessages([readkey]); }

if (autobio) {
const status = `${botname} Online`;
slimecode.updateProfileStatus(status).catch(_ => _);
}

if (isCmd && !m.key.fromMe && antispam) {
if (antispam.isFiltered(m.sender)) return m.reply('*( Anti Spam )* Tolong berikan jeda 5 detik.')
antispam.addFilter(m.sender)
}

if (body && budy && antibot) {
if (mek.key.id.startsWith('B1EY') && mek.key.id.length === 20) {
if (mek.key.fromMe) return !0
reply(`*( Anti Bot )* Grup akan ditutup sementara.`)
if (!isBotAdmins) return !0
await slimecode.sendMessage(m.chat, { delete: m.key })
slimecode.groupSettingUpdate(from, 'announcement')
}
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
if (mek.key.fromMe) return !0
reply(`*( Anti Bot )* Grup akan ditutup sementara.`)
if (!isBotAdmins) return !0
await slimecode.sendMessage(m.chat, { delete: m.key })
slimecode.groupSettingUpdate(from, 'announcement')
}
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 22) {
if (mek.key.fromMe) return !0
reply(`*( Anti Bot )* Grup akan ditutup sementara.`)
if (!isBotAdmins) return !0
await slimecode.sendMessage(m.chat, { delete: m.key })
slimecode.groupSettingUpdate(from, 'announcement')
}}

if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('B1EY') && mek.key.id.length === 20) return
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 22) return

const jir = ['😀', '😃', '😄', '😁','😆','😅','😂','🤣', '😉', '😑', '😐']
const emji = jir[Math.floor(Math.random() * jir.length)]

const onlyOwn = () => {
m.reply('Fitur khusus owner!')
}
const onlyPrem = () => {
m.reply('Fitur khusus premium!')
}
const onlyOp = () => {
m.reply('Fitur khusus owner dan premium!')
}
const onlyOr = () => {
m.reply('Fitur khusus owner dan reseller!')
}
const onlyGrup = () => {
m.reply('Fitur khusus grup chat!')
}
const onlyPrivat = () => {
m.reply('Fitur khusus privat chat!')
}
const onlyAdmin = () => {
m.reply('Fitur khusus admin!')
}
const onlyBotAdmin = () => {
m.reply('Bot bukan admin!')
}

let banned = JSON.parse(fs.readFileSync('./data/banned.json'))
const isBan = banned.includes(m.sender)
if (isCmd && !isOwner && !m.key.fromMe) {
if (isBan) return m.reply('Akun kamu dibanned.')

if (m.isGroup && db.data.chats[m.chat].mute) {
if (!isAdmins && !isOwner) return
}}

switch (command) {

// ==========================

case 'menu': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `Perkenalan Saya Adalah Bot WhatsApp *SlimexTzy* Yang Siap Membantu Anda!

⊑ *INFORMATION* ⊒
ꆜ *Nama* : ${botname}
ꆜ *Owner* : ${ownername}
ꆜ *Prefix* : Multi Prefix
ꆜ *Versi* : 3.0.0 New
ꆜ *Platfrom* : Chrome ( Ubuntu )`
const bet = {
title: "MENU",
sections: [
{
title: `List menu yang sering dipakai`, 
highlight_label: `Populer`,
rows: [
{
title: "ALL MENU",
description: "Menampilkan All Menu",
id: `${prefix}allmenu-nl`, 
},
]},
{
title: `List menu yang dipisahkan`, 
highlight_label: ``,
rows: [
{
title: "MAIN MENU",
description: "Menampilkan Main Menu",
id: `${prefix}mainmenu-nl`, 
},
{
title: "OWNER MENU",
description: "Menampilkan Owner Menu",
id: `${prefix}ownermenu-nl`, 
},
{
title: "GROUP MENU",
description: "Menampilkan Group Menu",
id: `${prefix}groupmenu-nl`, 
},
{
title: "GAMES MENU",
description: "Menampilkan Games Menu",
id: `${prefix}gamesmenu-nl`, 
},
{
title: "MENFES MENU",
description: "Menampilkan Menfes Menu",
id: `${prefix}menfesmenu-nl`, 
},
{
title: "DOWNLOAD MENU",
description: "Menampilkan Donlod Menu",
id: `${prefix}donlodmenu-nl`, 
},
{
title: "CHATAI MENU",
description: "Menampilkan Chatai Menu",
id: `${prefix}chataimenu-nl`, 
},
{
title: "SEARCH MENU",
description: "Menampilkan Search Menu",
id: `${prefix}searchmenu-nl`, 
},
{
title: "OTHERS MENU",
description: "Menampilkan Others Menu",
id: `${prefix}othersmenu-nl`, 
},
]},
{
title: `Menu SlimexTzy`, 
highlight_label: ``,
rows: [
{
title: "PPOB INDONESIA",
description: "Menampilkan PPOB Indonesia",
id: `${prefix}ppobindonesia-nl`, 
},
{
title: "DIGITAL OCEAN",
description: "Menampilkan Digital Ocean",
id: `${prefix}digitalocean-nl`, 
},
{
title: "INSTAL PANEL",
description: "Menampilkan Install Panel",
id: `${prefix}installpanel-nl`, 
},
{
title: "NGEPUSH MENU",
description: "Menampilkan Ngepush Menu",
id: `${prefix}ngepushmenu-nl`, 
},
{
title: "CPANEL MENU",
description: "Menampilkan Cpanel Menu",
id: `${prefix}cpanelmenu-nl`, 
},
{
title: "STORE MENU",
description: "Menampilkan Store Menu",
id: `${prefix}storemenu-nl`, 
},
]},
{
title: `Informasi Tentang Bot`, 
highlight_label: ``,
rows: [
{
title: "SCRIPT",
description: "Beli script ini dengan harga murah",
id: `${prefix}script`, 
},
{
title: "CREDIT",
description: "Orang yang telah membantu mengembangkan",
id: `${prefix}credit`, 
},
{
title: "INFO BOT",
description: "Informasi total fitur dan lainnya",
id: `${prefix}infobot`, 
},
]},
]};

listbut2(m.chat, teks, bet, m)
}
break

case 'allmenu':
case 'allmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *INFO BOT* ⊒
┃ꆜ *Nama* : ${botname}
┃ꆜ *Owner* : ${ownername}
┃ꆜ *Prefix* : Multi Prefix
┃ꆜ *Versi* : 3.0.0 New
┃ꆜ *Platfrom* : Chrome ( Ubuntu )
┗━━━━━━━━━━━━━━
┏━ ⊑ *INFO USER* ⊒
┃ꆜ *Nama* : ${db.data.users[m.sender].nama}
┃ꆜ *Profil* : ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
┃ꆜ *Status* : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
┃ꆜ *Saldo* : Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
┃ꆜ *Limit* : ${cekLimit(m.sender, db_limit)} Limit
┗━━━━━━━━━━━━━━
`+readmore+`
┏━ ⊑ *MAIN MENU* ⊒
┃ ${prefix}regis
┃ ${prefix}unregis
┃ ${prefix}nickname
┃ ${prefix}infome
┃ ${prefix}infobot
┃ ${prefix}channel
┃ ${prefix}script
┃ ${prefix}credit
┃ ${prefix}qris
┃ ${prefix}gold
┃ ${prefix}saldo
┃ ${prefix}limit
┃ ${prefix}cekgold
┃ ${prefix}ceksaldo
┃ ${prefix}ceklimit
┃ ${prefix}tfsaldo
┃ ${prefix}owner
┃ ${prefix}ping
┃ ${prefix}runtime
┃ ${prefix}payment
┃ ${prefix}totalfitur
┃ ${prefix}report
┃ ${prefix}reply
┃ ${prefix}reports
┃ ${prefix}delreports
┃ ${prefix}cekreports
┗━━━━━━━━━━━━━━
┏━ ⊑ *OWNER  MENU* ⊒
┃ ${prefix}addcase
┃ ${prefix}delcase
┃ ${prefix}getcase
┃ ${prefix}cekcase
┃ ${prefix}listcase
┃ ${prefix}addfunc
┃ ${prefix}delfunc
┃ ${prefix}getfunc
┃ ${prefix}cekfunc
┃ ${prefix}addlet
┃ ${prefix}dellet
┃ ${prefix}getlet
┃ ${prefix}addconst
┃ ${prefix}getdep
┃ ${prefix}gantifile
┃ ${prefix}sendfitur
┃ ${prefix}backup
┃ ${prefix}getsession
┃ ${prefix}delsession
┃ ${prefix}ambilsc
┃ ${prefix}sendsc
┃ ${prefix}addres
┃ ${prefix}delres
┃ ${prefix}listres
┃ ${prefix}addprem
┃ ${prefix}delprem
┃ ${prefix}listprem
┃ ${prefix}addowner
┃ ${prefix}delowner
┃ ${prefix}listowner
┃ ${prefix}addgold
┃ ${prefix}mingold
┃ ${prefix}addsaldo
┃ ${prefix}minsaldo
┃ ${prefix}addlimit
┃ ${prefix}minlimit
┃ ${prefix}sampah
┃ ${prefix}delsampah
┃ ${prefix}delsampah2
┃ ${prefix}clearsesi
┃ ${prefix}ddos-hent
┃ ${prefix}ddos-mix
┃ ${prefix}getdb
┃ ${prefix}getfolder
┃ ${prefix}getfile
┃ ${prefix}getfile2
┃ ${prefix}getfile3
┃ ${prefix}addfolder
┃ ${prefix}addfile
┃ ${prefix}delfolder
┃ ${prefix}delfile
┃ ${prefix}bcgc
┃ ${prefix}bcimg
┃ ${prefix}bcvid
┃ ${prefix}adduserdb
┃ ${prefix}deluserdb
┃ ${prefix}block
┃ ${prefix}unblock
┃ ${prefix}listblock
┃ ${prefix}public
┃ ${prefix}self
┃ ${prefix}restart
┃ ${prefix}join
┃ ${prefix}setnamabot
┃ ${prefix}setbiobot
┃ ${prefix}setppbot
┃ ${prefix}delppbot
┃ ${prefix}autotyping
┃ ${prefix}autoread
┃ ${prefix}autobio
┃ ${prefix}anticall
┃ ${prefix}antispam
┃ ${prefix}antibot
┃ ${prefix}ban
┃ ${prefix}unban
┃ ${prefix}listban
┗━━━━━━━━━━━━━━
┏━ ⊑ *GROUP  MENU* ⊒
┃ ${prefix}add
┃ ${prefix}kick
┃ ${prefix}linkgc
┃ ${prefix}revoke
┃ ${prefix}promote
┃ ${prefix}demote
┃ ${prefix}open
┃ ${prefix}close
┃ ${prefix}opentime
┃ ${prefix}closetime
┃ ${prefix}setsubjek
┃ ${prefix}setdesk
┃ ${prefix}setppgc
┃ ${prefix}delppgc
┃ ${prefix}getnamagc
┃ ${prefix}getdeskgc
┃ ${prefix}getppgc
┃ ${prefix}getname
┃ ${prefix}getpp
┃ ${prefix}infogc
┃ ${prefix}topglobal
┃ ${prefix}toplocal
┃ ${prefix}leavegc
┃ ${prefix}quoted
┃ ${prefix}antilink
┃ ${prefix}antilinkgc
┃ ${prefix}mute
┗━━━━━━━━━━━━━━
┏━ ⊑ *GAMES  MENU* ⊒
┃ ${prefix}family100
┃ ${prefix}suitpvp
┃ ${prefix}tictactoe
┃ ${prefix}delttt
┃ ${prefix}petakbom
┃ ${prefix}delpetakbom
┃ ${prefix}casino
┃ ${prefix}delcasino
┃ ${prefix}werewolf
┃ ${prefix}wikwik
┃ ${prefix}ngojek
┃ ${prefix}tebakgambar
┃ ${prefix}tebakkalimat
┃ ${prefix}tebakkata
┃ ${prefix}tebaklirik
┃ ${prefix}tebakanime
┃ ${prefix}tebaklagu
┃ ${prefix}kuis
┃ ${prefix}tebakkimia
┃ ${prefix}tebakbendera
┃ ${prefix}siapakahaku
┃ ${prefix}asahotak
┃ ${prefix}susukata
┃ ${prefix}caklontong
┃ ${prefix}math
┃ ${prefix}tebakgame
┃ ${prefix}slot
┗━━━━━━━━━━━━━━
┏━ ⊑ *STORE  MENU* ⊒
┃ ${prefix}tambah
┃ ${prefix}kurang
┃ ${prefix}kali
┃ ${prefix}bagi
┃ ${prefix}buygold
┃ ${prefix}buysaldo
┃ ${prefix}buy1gb
┃ ${prefix}buy2gb
┃ ${prefix}buy3gb
┃ ${prefix}buy4gb
┃ ${prefix}buy5gb
┃ ${prefix}list
┃ ${prefix}addlist
┃ ${prefix}dellist
┃ ${prefix}update
┗━━━━━━━━━━━━━━
┏━ ⊑ *MENFES  MENU* ⊒
┃ ${prefix}anonymous
┃ ${prefix}start
┃ ${prefix}mulai
┃ ${prefix}leave
┃ ${prefix}keluar
┃ ${prefix}next
┃ ${prefix}lanjut
┃ ${prefix}confess
┃ ${prefix}menfess
┃ ${prefix}balasmenfess
┃ ${prefix}tolakmenfess
┃ ${prefix}stopmenfess
┗━━━━━━━━━━━━━━
┏━ ⊑ *INSTALL PANEL  MENU* ⊒
┃ ${prefix}installpanel
┃ ${prefix}uninstallpanel
┃ ${prefix}installthema
┃ ${prefix}startwings 
┗━━━━━━━━━━━━━━
┏━ ⊑ *CPANEL  MENU* ⊒
┃ ${prefix}listserver
┃ ${prefix}delserver
┃ ${prefix}listuser
┃ ${prefix}deluser
┃ ${prefix}addadmin
┃ ${prefix}deladmin
┃ ${prefix}listadmin
┃ ${prefix}1gb
┃ ${prefix}2gb
┃ ${prefix}3gb
┃ ${prefix}4gb
┃ ${prefix}5gb
┃ ${prefix}6gb
┃ ${prefix}7gb
┃ ${prefix}8gb
┃ ${prefix}9gb
┃ ${prefix}10gb
┃ ${prefix}unli
┃ ${prefix}suspend
┃ ${prefix}unsuspend
┃ ${prefix}reinstall
┃ ${prefix}startsrv
┃ ${prefix}stopsrv
┃ ${prefix}restartsrv
┗━━━━━━━━━━━━━━
┏━ ⊑ *DIGITAL  OCEAN* ⊒
┃ ${prefix}sisadroplet
┃ ${prefix}deldroplet
┃ ${prefix}cekdroplet
┃ ${prefix}listdroplet
┃ ${prefix}vps1g1c
┃ ${prefix}vps1g2c
┃ ${prefix}vps2g2c
┃ ${prefix}vps4g2c
┃ ${prefix}vps8g4c
┃ ${prefix}turnon
┃ ${prefix}turnoff
┃ ${prefix}restartvps
┃ ${prefix}rebuild
┃ ${prefix}sendvps
┗━━━━━━━━━━━━━━
┏━ ⊑ *NGEPUSH  MENU* ⊒
┃ ${prefix}pushkontak
┃ ${prefix}pushkontak2
┃ ${prefix}pushkontakid
┃ ${prefix}pushkontakgc
┃ ${prefix}pushkontakidjd
┃ ${prefix}pushkontakgcjd
┃ ${prefix}savecontact
┃ ${prefix}savecontact2
┃ ${prefix}save
┃ ${prefix}cekidgc
┗━━━━━━━━━━━━━━
┏━ ⊑ *PPOB  INDONESIA* ⊒
┃ ${prefix}topup-dana
┃ ${prefix}topup-gopay
┃ ${prefix}topup-ovo
┃ ${prefix}pulsa-axis
┃ ${prefix}pulsa-indosat
┃ ${prefix}pulsa-tsel
┃ ${prefix}pulsa-tri
┃ ${prefix}pulsa-xl
┃ ${prefix}tshopeepay
┗━━━━━━━━━━━━━━
┏━ ⊑ *DONLOD  MENU* ⊒
┃ ${prefix}mediafire
┃ ${prefix}tiktok
┃ ${prefix}facebook
┃ ${prefix}instagram
┃ ${prefix}twitter
┃ ${prefix}capcut
┃ ${prefix}gdrive
┃ ${prefix}mega
┃ ${prefix}tinyurl
┃ ${prefix}happymod
┃ ${prefix}apks
┗━━━━━━━━━━━━━━
┏━ ⊑ *CHATAI  MENU* ⊒
┃ ${prefix}slimekai
┃ ${prefix}ai2
┃ ${prefix}ai3
┃ ${prefix}ai4
┃ ${prefix}simi
┃ ${prefix}luminai
┃ ${prefix}min
┃ ${prefix}gptpro
┃ ${prefix}slimek
┃ ${prefix}bocchi
┃ ${prefix}lora
┗━━━━━━━━━━━━━━
┏━ ⊑ *SEARCH  MENU* ⊒
┃ ${prefix}google
┃ ${prefix}gimage
┃ ${prefix}ytsearch
┃ ${prefix}play
┃ ${prefix}ytmp4
┃ ${prefix}ytmp3
┃ ${prefix}ttsearch
┃ ${prefix}ttget
┃ ${prefix}spotifys
┃ ${prefix}pin
┗━━━━━━━━━━━━━━
┏━ ⊑ *OTHERS  MENU* ⊒
┃ ${prefix}jadibot
┃ ${prefix}stopjadibot
┃ ${prefix}listjadibot
┃ ${prefix}ceknickff
┃ ${prefix}ceknickml
┃ ${prefix}hdimg
┃ ${prefix}hdvid
┃ ${prefix}tourl
┃ ${prefix}qcstik
┃ ${prefix}qckode
┃ ${prefix}stiker
┃ ${prefix}smeme
┃ ${prefix}swm
┃ ${prefix}gtts
┃ ${prefix}gtts2
┃ ${prefix}readvo
┃ ${prefix}getvideo
┃ ${prefix}getmusic
┃ ${prefix}cekkhodam
┗━━━━━━━━━━━━━━

SlimexTzy V3 Version`
const beton = {
title: "DAFTAR",
sections: [
{
title: `Daftar menggunakan email`, 
highlight_label: ``,
rows: [
{
title: "EMAIL",
description: "Metode email v1",
id: `${prefix}emailcara`, 
},
]},
{
title: `Daftar menggunakan captcha`, 
highlight_label: ``,
rows: [
{
title: "CAPTCHA",
description: "Metode daftar v2",
id: `${prefix}regis -captcha`, 
},
]},
{
title: `Daftar secara otomatis`, 
highlight_label: ``,
rows: [
{
title: "OTOMATIS",
description: "Metode daftar v3",
id: `${prefix}regis -auto`, 
},
]},
]};

listbut(m.chat, teks, beton, m)
}
break

case 'mainmenu':
case 'mainmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *MAIN MENU* ⊒
┃ ${prefix}regis
┃ ${prefix}unregis
┃ ${prefix}nickname
┃ ${prefix}infome
┃ ${prefix}infobot
┃ ${prefix}channel
┃ ${prefix}script
┃ ${prefix}credit
┃ ${prefix}qris
┃ ${prefix}gold
┃ ${prefix}saldo
┃ ${prefix}limit
┃ ${prefix}cekgold
┃ ${prefix}ceksaldo
┃ ${prefix}ceklimit
┃ ${prefix}tfsaldo
┃ ${prefix}owner
┃ ${prefix}ping
┃ ${prefix}runtime
┃ ${prefix}payment
┃ ${prefix}totalfitur
┃ ${prefix}report
┃ ${prefix}reply
┃ ${prefix}reports
┃ ${prefix}delreports
┃ ${prefix}cekreports
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'ownermenu':
case 'ownermenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *OWNER  MENU* ⊒
┃ ${prefix}addcase
┃ ${prefix}delcase
┃ ${prefix}getcase
┃ ${prefix}cekcase
┃ ${prefix}listcase
┃ ${prefix}addfunc
┃ ${prefix}delfunc
┃ ${prefix}getfunc
┃ ${prefix}cekfunc
┃ ${prefix}addlet
┃ ${prefix}dellet
┃ ${prefix}getlet
┃ ${prefix}addconst
┃ ${prefix}getdep
┃ ${prefix}gantifile
┃ ${prefix}sendfitur
┃ ${prefix}backup
┃ ${prefix}getsession
┃ ${prefix}delsession
┃ ${prefix}ambilsc
┃ ${prefix}sendsc
┃ ${prefix}addres
┃ ${prefix}delres
┃ ${prefix}listres
┃ ${prefix}addprem
┃ ${prefix}delprem
┃ ${prefix}listprem
┃ ${prefix}addowner
┃ ${prefix}delowner
┃ ${prefix}listowner
┃ ${prefix}addgold
┃ ${prefix}mingold
┃ ${prefix}addsaldo
┃ ${prefix}minsaldo
┃ ${prefix}addlimit
┃ ${prefix}minlimit
┃ ${prefix}sampah
┃ ${prefix}delsampah
┃ ${prefix}delsampah2
┃ ${prefix}clearsesi
┃ ${prefix}ddos-hent
┃ ${prefix}ddos-mix
┃ ${prefix}getdb
┃ ${prefix}getfolder
┃ ${prefix}getfile
┃ ${prefix}getfile2
┃ ${prefix}getfile3
┃ ${prefix}addfolder
┃ ${prefix}addfile
┃ ${prefix}delfolder
┃ ${prefix}delfile
┃ ${prefix}bcgc
┃ ${prefix}bcimg
┃ ${prefix}bcvid
┃ ${prefix}adduserdb
┃ ${prefix}deluserdb
┃ ${prefix}block
┃ ${prefix}unblock
┃ ${prefix}listblock
┃ ${prefix}public
┃ ${prefix}self
┃ ${prefix}restart
┃ ${prefix}join
┃ ${prefix}setnamabot
┃ ${prefix}setbiobot
┃ ${prefix}setppbot
┃ ${prefix}delppbot
┃ ${prefix}autotyping
┃ ${prefix}autoread
┃ ${prefix}autobio
┃ ${prefix}anticall
┃ ${prefix}antispam
┃ ${prefix}antibot
┃ ${prefix}ban
┃ ${prefix}unban
┃ ${prefix}listban
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'groupmenu':
case 'groupmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *GROUP  MENU* ⊒
┃ ${prefix}add
┃ ${prefix}kick
┃ ${prefix}linkgc
┃ ${prefix}revoke
┃ ${prefix}promote
┃ ${prefix}demote
┃ ${prefix}open
┃ ${prefix}close
┃ ${prefix}opentime
┃ ${prefix}closetime
┃ ${prefix}setsubjek
┃ ${prefix}setdesk
┃ ${prefix}setppgc
┃ ${prefix}delppgc
┃ ${prefix}getnamagc
┃ ${prefix}getdeskgc
┃ ${prefix}getppgc
┃ ${prefix}getname
┃ ${prefix}getpp
┃ ${prefix}infogc
┃ ${prefix}topglobal
┃ ${prefix}toplocal
┃ ${prefix}leavegc
┃ ${prefix}quoted
┃ ${prefix}antilink
┃ ${prefix}antilinkgc
┃ ${prefix}mute
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'gamesmenu':
case 'gamesmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *GAMES  MENU* ⊒
┃ ${prefix}family100
┃ ${prefix}suitpvp
┃ ${prefix}tictactoe
┃ ${prefix}delttt
┃ ${prefix}petakbom
┃ ${prefix}delpetakbom
┃ ${prefix}casino
┃ ${prefix}delcasino
┃ ${prefix}werewolf
┃ ${prefix}wikwik
┃ ${prefix}ngojek
┃ ${prefix}tebakgambar
┃ ${prefix}tebakkalimat
┃ ${prefix}tebakkata
┃ ${prefix}tebaklirik
┃ ${prefix}tebakanime
┃ ${prefix}tebaklagu
┃ ${prefix}kuis
┃ ${prefix}tebakkimia
┃ ${prefix}tebakbendera
┃ ${prefix}siapakahaku
┃ ${prefix}asahotak
┃ ${prefix}susukata
┃ ${prefix}caklontong
┃ ${prefix}math
┃ ${prefix}tebakgame
┃ ${prefix}slot
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'storemenu':
case 'storemenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *STORE  MENU* ⊒
┃ ${prefix}tambah
┃ ${prefix}kurang
┃ ${prefix}kali
┃ ${prefix}bagi
┃ ${prefix}buygold
┃ ${prefix}buysaldo
┃ ${prefix}buy1gb
┃ ${prefix}buy2gb
┃ ${prefix}buy3gb
┃ ${prefix}buy4gb
┃ ${prefix}buy5gb
┃ ${prefix}list
┃ ${prefix}addlist
┃ ${prefix}dellist
┃ ${prefix}update
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'menfesmenu':
case 'menfesmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *MENFES  MENU* ⊒
┃ ${prefix}anonymous
┃ ${prefix}start
┃ ${prefix}mulai
┃ ${prefix}leave
┃ ${prefix}keluar
┃ ${prefix}next
┃ ${prefix}lanjut
┃ ${prefix}confess
┃ ${prefix}menfess
┃ ${prefix}balasmenfess
┃ ${prefix}tolakmenfess
┃ ${prefix}stopmenfess
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'cpanelmenu':
case 'cpanelmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *CPANEL  MENU* ⊒
┃ ${prefix}listserver
┃ ${prefix}delserver
┃ ${prefix}listuser
┃ ${prefix}deluser
┃ ${prefix}addadmin
┃ ${prefix}deladmin
┃ ${prefix}listadmin
┃ ${prefix}1gb
┃ ${prefix}2gb
┃ ${prefix}3gb
┃ ${prefix}4gb
┃ ${prefix}5gb
┃ ${prefix}6gb
┃ ${prefix}7gb
┃ ${prefix}8gb
┃ ${prefix}9gb
┃ ${prefix}10gb
┃ ${prefix}unli
┃ ${prefix}suspend
┃ ${prefix}unsuspend
┃ ${prefix}reinstall
┃ ${prefix}startsrv
┃ ${prefix}stopsrv
┃ ${prefix}restartsrv
┗━━━━━━━━━━━━━━

SlimexTzy V3 Version`
sendbutton(m.chat, teks, m)
}
break

case 'digitalocean':
case 'digitalocean-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *DIGITAL  OCEAN* ⊒
┃ ${prefix}sisadroplet
┃ ${prefix}deldroplet
┃ ${prefix}cekdroplet
┃ ${prefix}listdroplet
┃ ${prefix}vps1g1c
┃ ${prefix}vps1g2c
┃ ${prefix}vps2g2c
┃ ${prefix}vps4g2c
┃ ${prefix}vps8g4c
┃ ${prefix}turnon
┃ ${prefix}turnoff
┃ ${prefix}restartvps
┃ ${prefix}rebuild
┃ ${prefix}sendvps
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'installpanel-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *INSTALL PANEL* ⊒
┃ ${prefix}installpanel
┃ ${prefix}uninstallpanel
┃ ${prefix}installthema
┃ ${prefix}startwings 
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'ngepushmenu':
case 'ngepushmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *NGEPUSH  MENU* ⊒
┃ ${prefix}pushkontak
┃ ${prefix}pushkontak2
┃ ${prefix}pushkontakid
┃ ${prefix}pushkontakgc
┃ ${prefix}pushkontakidjd
┃ ${prefix}pushkontakgcjd
┃ ${prefix}savecontact
┃ ${prefix}savecontact2
┃ ${prefix}save
┃ ${prefix}cekidgc
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'ppobindonesia':
case 'ppobindonesia-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *PPOB  INDONESIA* ⊒
┃ ${prefix}topup-dana
┃ ${prefix}topup-gopay
┃ ${prefix}topup-ovo
┃ ${prefix}pulsa-axis
┃ ${prefix}pulsa-indosat
┃ ${prefix}pulsa-tsel
┃ ${prefix}pulsa-tri
┃ ${prefix}pulsa-xl
┃ ${prefix}tshopeepay
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'donlodmenu':
case 'donlodmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *DONLOD  MENU* ⊒
┃ ${prefix}mediafire
┃ ${prefix}tiktok
┃ ${prefix}facebook
┃ ${prefix}instagram
┃ ${prefix}twitter
┃ ${prefix}capcut
┃ ${prefix}gdrive
┃ ${prefix}mega
┃ ${prefix}tinyurl
┃ ${prefix}happymod
┃ ${prefix}apks
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'chataimenu':
case 'chataimenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *CHATAI  MENU* ⊒
┃ ${prefix}slimekai
┃ ${prefix}ai2
┃ ${prefix}ai3
┃ ${prefix}ai4
┃ ${prefix}simi
┃ ${prefix}luminai
┃ ${prefix}min
┃ ${prefix}gptpro
┃ ${prefix}slimek
┃ ${prefix}bocchi
┃ ${prefix}lora
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'searchmenu':
case 'searchmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *SEARCH  MENU* ⊒
┃ ${prefix}google
┃ ${prefix}gimage
┃ ${prefix}ytsearch
┃ ${prefix}play
┃ ${prefix}ytmp4
┃ ${prefix}ytmp3
┃ ${prefix}ttsearch
┃ ${prefix}ttget
┃ ${prefix}spotifys
┃ ${prefix}pin
┗━━━━━━━━━━━━━━

slimecode V3 Version`
sendbutton(m.chat, teks, m)
}
break

case 'othersmenu':
case 'othersmenu-nl': {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *OTHERS  MENU* ⊒
┃ ${prefix}jadibot
┃ ${prefix}stopjadibot
┃ ${prefix}listjadibot
┃ ${prefix}ceknickff
┃ ${prefix}ceknickml
┃ ${prefix}hdimg
┃ ${prefix}hdvid
┃ ${prefix}tourl
┃ ${prefix}qcstik
┃ ${prefix}qckode
┃ ${prefix}stiker
┃ ${prefix}smeme
┃ ${prefix}swm
┃ ${prefix}gtts
┃ ${prefix}gtts2
┃ ${prefix}readvo
┃ ${prefix}getvideo
┃ ${prefix}getmusic
┃ ${prefix}cekkhodam
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

// === Main Menu

case 'daftar':
case 'regis':
case 'register': {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
if (!text) return m.reply(`*METODE DAFTAR*\n#1: ${prefix+command} -email youremail@gmail.com\n#2: ${prefix+command} -captcha\n#3: ${prefix+command} -auto`)
if (args[0] === "-email" && args[1]) {
const email = args[1];
var otp = await randomNomor(1000, 9999);
db.data.users[m.sender].otp = otp;
db.data.users[m.sender].email = `${email}`
try {
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'nolanverifikasiotp12@gmail.com',
pass: 'wayr mpju coni obwt'
}});
let mailOptions = {
from: 'slimecode',
to: email,
subject: 'Kode Verifikasi OTP',
html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #333;">Kode Verifikasi OTP</h2>
                <p style="text-align: center; font-size: 18px; color: #333;">Kode OTP kamu adalah:</p>
                <div style="text-align: center; font-size: 29px; font-weight: bold; color: #4caf50; margin: 20px 0;">
                    ${otp}
                </div>
                <p style="text-align: center; color: #666; font-size: 15px;">Silakan masukkan kode ini dalam obrolan kamu dengan bot.</p>
                <p style="text-align: center; color: #666; font-size: 15px;">Jika kamu tidak meminta kode ini, abaikan email ini.</p>
                <p style="text-align: center; color: #999; margin-top: 20px; font-size: 14px;">&copy; 2024 slimecode. Seluruh hak cipta dilindungi.</p>
            </div>
        </div>
`};
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.log('Error: ' + error);
m.reply('Gagal mengirim kode OTP ke email kamu');
} else {
m.reply('Kode OTP berhasil terkirim ke email kamu');
}});
} catch (err) {
m.reply('Terjadi kesalahan saat mengirim email.');
}} else if (args[0] === "-captcha") {
var angka = await randomNomor(1000, 9999)
db.data.users[m.sender].otp = angka
db.data.users[m.sender].email = '-'
try {
const { CaptchaGenerator } = require("captcha-canvas");
const captcha = new CaptchaGenerator()
.setDimension(250, 450) 
.setCaptcha({text: `${angka}`, size: 60, color: "blue"})
.setDecoy({opacity: 0.5})
.setTrace({color: "blue"});
const buffer = captcha.generateSync();
const uploadFile = { upload: slimecode.waUploadToServer };
var imageMessage = await prepareWAMessageMedia(
{
image: buffer,
},
uploadFile,
);
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: `\nMasukkan kode verifikasi kamu\nSesuai seperti yang ada digambar...`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `${monospace("CAPTCHA CODE")}`,
subtitle: '',
imageMessage: imageMessage.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: 'Jgn diedit'}],
})})}
}}, { quoted: m })
slimecode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
} catch (err) {
m.reply('Terjadi kesalahan')
}} else if (args[0] === "-auto") {
const srlnye = createSerial(5)
var angk = await randomNomor(20, 700)
edit2("Mendaftar secara otomatis...", `*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angk}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angk}`
db.data.users[m.sender].email = '-'
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angk}`, srlnye)
}}
break

case 'unregis':
case 'unregister': {
if (!db.data.users[m.sender].daftar) return m.reply('Kamu belum terdaftar!')
if (!args[0]) return m.reply(`Contoh: ${prefix+command} serial\n\nKetik ${prefix}infome untuk cek serial`)
if (args[0] === `${db.data.users[m.sender].serial}`) {
const lastUnregisTime = db.data.users[m.sender].lastUnregisTime || 0;
const currentTime = Date.now();
const sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
if (currentTime - lastUnregisTime < sixHoursInMilliseconds) {
const remainingTime = sixHoursInMilliseconds - (currentTime - lastUnregisTime);
const hours = Math.floor(remainingTime / (60 * 60 * 1000));
const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
return m.reply(`Kamu hanya bisa unregis setiap 6 jam sekali. Coba lagi dalam ${hours} jam dan ${minutes} menit.`);
}
edit2("Menghapus data...", "Sukses menghapus data!")
db.data.users[m.sender].daftar = false
db.data.users[m.sender].nama = `${pushname}`
db.data.users[m.sender].otp = `0`
db.data.users[m.sender].serial = `0`
db.data.users[m.sender].lastUnregisTime = currentTime;
}}
break

case 'cn':
case 'nickname': {
if (!db.data.users[m.sender].daftar) return m.reply('Kamu belum terdaftar!')
edit2("Mengubah nama...", "Sukses mengubah nama!")
db.data.users[m.sender].nama = `${text}`

}
break

case 'infome': {
let teks = `乂 ${monospace("INFORMASI  AKUN")}
 Nama: ${db.data.users[m.sender].nama}
 Profil: ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
 Status: ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
 Level: ${role}
 Serial: ${db.data.users[m.sender].serial}
 
乂 ${monospace("INFORMASI  CUAN")}
 Gold: ${cekGold(m.sender, db_gold)} gold
 Saldo: Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
 Limit: ${cekLimit(m.sender, db_limit)} limit`
let bud = `{\"display_text\":\"COPY SERIAL\",\"id\":\"P\",\"copy_code\":\"${db.data.users[m.sender].serial}\"}`;
buttoncopy(m.chat, teks, bud, m)
}
break

case 'infobot': {
let teks = `乂 ${monospace("INFORMASI  LUAR")}
 Nama: ${botname}
 Owner: ${ownername}
 Prefix: Multi Prefix
 Versi: 2.0 New
 
乂 ${monospace("INFORMASI  DALAM")}
 Platform: Chrome (Ubuntu)
 Type: Cjs (case)
 Total fitur: ${totalFitur()}
 Total error: 2
 Total user: ${Object.values(db.data.users).length} Users`
slimecodereply(teks)
}
break

case 'channel': {
slimecodereply(' *Channel WhatsApp:* https://linktr.ee/slimextzy')
}
break

case 'emailcara': {
let nyo =  `{\"display_text\":\"DAFTAR EMAIL\",\"url\":\"https://wa.me/+${botNumber}?text=.daftar%20-email%20emailkamu@gmail.com\",\"merchant_url\":\"https://www.google.com\"}`
buttonurl(m.chat, teks, nyo, m)
}
break

case 'credit': {
let teks = `${monospace("SCRIPT CREDITS")}\n• SlimexTzy\n•Penyedia api dan dev. bot lainnya...*`
sendbutton(m.chat, teks, m)
}
break

case 'qris': {
m.reply('Qris tidak tersedia!')
}
break

case 'gold': {
m.reply(`*Info gold kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Gold: ${cekGold(m.sender, db_gold)}`)
}
break

case 'saldo': {
m.reply(`*Info limit kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Saldo: Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}`)
}
break

case 'limit': {
m.reply(`*Info limit kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Limit: ${cekLimit(m.sender, db_limit)}`)
}
break

case 'cekgold': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekGold(froms, db_gold) == undefined) return m.reply('Dia gak punya gold sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}gold aja`)
let txt = `${monospace("CEK GOLD")}\nNama: ${slimecode.getName(froms)}\nGold: ${toRupiah(cekGold(froms, db_gold))}`
m.reply(txt)
}
break

case 'ceksaldo': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekSaldo(froms, db_saldo) == undefined) return m.reply('Dia gak punya saldo sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}saldo aja`)
let txt = `${monospace("CEK SALDO")}\nNama: ${slimecode.getName(froms)}\nSaldo: ${toRupiah(cekSaldo(froms, db_saldo))}`
m.reply(txt)
}
break

case 'ceklimit': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekLimit(froms, db_limit) == undefined) return m.reply('Dia gak punya limit sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}limit aja`)
let txt = `${monospace("CEK LIMIT")}\nNama: ${slimecode.getName(froms)}\nLimit: ${toRupiah(cekLimit(froms, db_limit))}`
m.reply(txt)
}
break

case 'tfsaldo': {
if (!m.mentionedJid[0] && !m.quoted) return m.reply('Tag/kutip pesan seseorang!')
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`)
let receiver = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let amount = parseInt(args[1])
let senderSaldo = cekSaldo(m.sender, db_saldo)
if (isNaN(args[1]) || args[1] <= 1000) return m.reply('Minimal tfsaldo: 1.000');
if (senderSaldo < amount) {
return m.reply(`Saldo tidak cukup. Saldo kamu: Rp. ${toRupiah(senderSaldo)}`)
}
minSaldo(m.sender, amount, db_saldo)
addSaldo(receiver, amount, db_saldo)
m.reply(`*TRANSFER SALDO BERHASIL*
- Pengirim: ${m.sender.split('@')[0]}
- Penerima: ${receiver.split('@')[0]}
- Jumlah: Rp. ${toRupiah(amount)}`)
}
break

case 'owner': {
await slimecode.sendMessage(from, { 
contacts: { 
displayName: `${list.length} kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 99999999, 
isForwarded: true,
mentionedJid: null
}}, {quoted: m})
}
break

case 'ping': {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `*INFO SERVER*
• OS: ${tio}
• IP Address: ${nou.os.ip()}
• Type OS: ${nou.os.type()}

*RAM*
• Total: ${formatp(os.totalmem())}
• Digunakan: ${formatp(os.totalmem() - os.freemem())}

*PENYIMPANAN*
• Total: ${tot.totalGb} GB
• Digunakan: ${tot.usedGb} GB > ${tot.usedPercentage}%
• Tersedia: ${tot.freeGb} GB > ${tot.freePercentage}%

• Ping: ${latensi.toFixed(4)} detik`
slimecode.sendMessage(m.chat, {text: respon }, {quoted: ftext})
}
break

case 'runtime': {
m.reply(`Bot runtime: ${runtime(process.uptime())}`)
}
break

case 'payment': {
let yow = `${monospace("ALL  PAYMENT")}

*(E-WALLET)*

1. DANA
- ${dana}
2. Gopay
- ${gopay}
3. OVO
- ${ovo}

© ${storename}`
slimecode.sendMessage(m.chat, {text: yow }, {quoted: ftext})
}
break

case 'totalfeature':
case 'totalfitur': {
m.reply(`${monospace("TOTAL  FITUR")}\nTotal: ${totalFitur()}`)
}
break

case 'request':
case 'saran': {
if (!text) return m.reply('Berikan penjelasan, apa yang ingin kamu sarankan.');
let senderNumber = m.sender.split("@")[0];
let requestId = Date.now().toString(); 
permintaan[requestId] = {
sender: senderNumber,
text: text,
timestamp: new Date(),
status: 'Dibuat'
};
slimecode.sendMessage(owner + "@s.whatsapp.net", {text: `*Permintaan dari user*\nID: ${requestId}\nNomor: ${senderNumber}\nTeks: ${text}`}, {quoted: fkontak});
await m.reply('Permintaan berhasil terkirim!');
}
break;

case 'cekrequest':
case 'ceksaran': {
let requestId = text.trim();
if (!permintaan[requestId]) return m.reply('ID permintaan tidak ditemukan atau permintaan sudah tidak valid.');
let request = permintaan[requestId];
let permintaanText = `Detail Permintaan:\n\nID: ${requestId}\nNomor: ${request.sender}\nTeks: ${request.text}\nWaktu: ${request.timestamp}\nStatus: ${request.status}`;
m.reply(permintaanText);
}
break;

case 'lapor':
case 'report': {
if (!text) return m.reply('Berikan penjelasan, bug apa yang kamu temui');
let senderNumber = m.sender.split("@")[0];
let reportId = Date.now().toString(); 
laporan[reportId] = {
sender: senderNumber,
text: text,
timestamp: new Date(),
status: 'Dibuat'
};
slimecode.sendMessage(owner + "@s.whatsapp.net", {text: `*Laporan dari user*\nID: ${reportId}\nNomor: ${senderNumber}\nTeks: ${text}`}, {quoted: fkontak})
await m.reply('Laporan berhasil terkirim!')
}
break

case 'balas':
case 'reply': {
let args = text.split(' ')
let reportId = args[0]
let replyText = args.slice(1).join(' ')
if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
let recipient = laporan[reportId].sender + '@s.whatsapp.net'
slimecode.sendMessage(recipient, {text: `Balasan dari pemilik bot:\n${replyText}`}, {quoted: fkontak})
await m.reply('Balasan terkirim!')
delete laporan[reportId]
slimecode.sendMessage(owner + "@s.whatsapp.net", {text: `Balasan terkirim ke user dengan ID laporan: ${reportId} dan laporan telah dihapus dari database.`}, {quoted: fkontak})
}
break

case 'laporan':
case 'reports': {
let laporanText = 'Laporan yang belum dibalas:\n\n'
for (let id in laporan) {
if (laporan[id].status === 'Dibuat') {
laporanText += `ID: ${id}\nNomor: ${laporan[id].sender}\nTeks: ${laporan[id].text}\nWaktu: ${laporan[id].timestamp}\n\n`
}}
m.reply(laporanText)
}
break

case 'hapuslaporan':
case 'delreports': {
let reportId = text.trim();
if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
delete laporan[reportId]
m.reply('Laporan berhasil dihapus!')
}
break

case 'ceklaporan':
case 'cekreports': {
let reportId = text.trim();
if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
let report = laporan[reportId]
let laporanText = `Detail Laporan:\n\nID: ${reportId}\nNomor: ${report.sender}\nTeks: ${report.text}\nWaktu: ${report.timestamp}\nStatus: ${report.status}`
m.reply(laporanText)
}
break

// === Owner Menu

case 'addcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'slimecode.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return m.reply('Sukses menambahkan case!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'delcase': {
if (!isOwner) return onlyOwner();
if (!text) return m.reply(`Contoh: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case tidak ditemukan atau sudah dihapus.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Sukses menghapus case!');
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}}
dellCase('./slimecode.js', q);
break;
}

case 'getcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Format tidak valid. Contoh: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const mode = parseInt(match[1], 10);
const caseNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && caseNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu case name. Contoh: ${prefix+command} 1 caseName`);
}
if (mode === 2 && (caseNames.length < 1 || caseNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua case names. Contoh: ${prefix+command} 2 caseName1 caseName2`);
}
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./slimecode.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const getCases = async (caseNames) => {
try {
const casePromises = caseNames.map(caseName => getCase(caseName));
const cases = await Promise.all(casePromises);
return cases.join('\n\n');
} catch (error) {
return m.reply(`Terjadi kesalahan: ${error.message}`);
}};

getCases(caseNames)
.then(caseCode => m.reply(caseCode))
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
break;
}

case 'cekcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`);
const caseName = text.trim();
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`);
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./slimecode.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const caseLines = match[0].split('\n');
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kon = `{\"display_text\":\"YA\",\"id\":\"${prefix}getcase 1 ${text}\"}`
quickreply1(m.chat, message, kon, m)
userSessions[m.sender] = { caseToRetrieve: result, caseName };
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`);
}
break;
}

case 'listcase': {
if (!isOwner) return onlyOwn()
let { listCase } = require('./lib/general/listcase.js')
m.reply(listCase())
}
break

case 'addfunc':
case 'addfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} function barunya`);
const namaFile = path.join(__dirname, 'slimecode.js');
const functionBaru = `${text}\n\n`;
const tambahFunction = (data, functionBaru) => {
const posisiButtonUrl = data.indexOf("function buttonurl");
if (posisiButtonUrl !== -1) {
const kodeBaruLengkap = data.slice(0, posisiButtonUrl) + functionBaru + data.slice(posisiButtonUrl);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan function buttonurl di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahFunction(data, functionBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan function baru:');
console.log(functionBaru);
return m.reply('Sukses menambahkan function!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'delfunc':
case 'delfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./slimecode.js", "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} tidak ditemukan`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break;
}
prevChar = currentChar;
}
if (functionEnd === undefined) return m.reply(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync("./slimecode.js", updatedContent, "utf8");
return m.reply(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}};
m.reply(deleteFunction(q));
}
break

case 'getfunc':
case 'getfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./slimecode.js", "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} tidak ditemukan`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}}  
m.reply(`${getFunction(q)}`);
}
break

case 'cekfunc':
case 'cekfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return m.reply(`Masukkan nama function yang ingin dicek. Contoh: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile("./slimecode.js", "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION DITEMUKAN!*
• Nama funct: ${functionName}
• Baris awal: ${result.startLine}
• Baris akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kun = `{\"display_text\":\"YA\",\"id\":\"${prefix}getfunc ${text}\"}`
quickreply1(m.chat, message, kun, m)
userSessions[m.sender] = { functionToRetrieve: result, functionName };
} else {
m.reply(`Function '${functionName}' tidak ditemukan.`);
}
break;
}

case 'addlet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} let barunya`);
const namaFile = path.join(__dirname, 'slimecode.js');
const letBaru = `${text}\n\n`;
const tambahLet = (data, letBaru) => {
const posisiContacts = data.indexOf("const contacts");
if (posisiContacts !== -1) {
const kodeBaruLengkap = data.slice(0, posisiContacts) + letBaru + data.slice(posisiContacts);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const contacts di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahLet(data, letBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan let baru:');
console.log(letBaru);
return m.reply('Sukses menambahkan let!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'dellet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} letVariableName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteLet = (variableName) => {
if (!isValidVariableName(variableName)) return m.reply(`Nama variabel tidak valid: ${variableName}`);
try {
const fileContent = fs.readFileSync("./slimecode.js", "utf8");
const letRegex = new RegExp(`\\blet\\s+${variableName}\\s*=\\s*([^;]+);`, "g");
const match = letRegex.exec(fileContent);
if (!match) return m.reply(`Variabel ${variableName} tidak ditemukan`);

const variableStart = match.index;
const variableEnd = variableStart + match[0].length;
const updatedContent = fileContent.slice(0, variableStart) + fileContent.slice(variableEnd);
fs.writeFileSync("./slimecode.js", updatedContent, "utf8");
return m.reply(`Variabel ${variableName} telah dihapus`);
} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}};
m.reply(deleteLet(q));
}
break

case 'getlet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} letName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getLet = (letName) => {
if (!isValidVariableName(letName)) return m.reply(`Nama variabel tidak valid: ${letName}`);
try {
const fileContent = fs.readFileSync("./slimecode.js", "utf8");
const letRegex = new RegExp(`let\\s+${letName}\\s*=`, "g");
const match = letRegex.exec(fileContent);

if (!match) return m.reply(`Variabel ${letName} tidak ditemukan`);
const letStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;

for (let i = letStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') {
if (inString && currentChar === inString) {
inString = false;
} else if (!inString) {
inString = currentChar;
}}
if (!inString && !inComment) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
if (currentChar === ';' && braceCount === 0) {
const letEnd = i + 1;
const letContent = fileContent.slice(letStart, letEnd);
return letContent;
}}}
prevChar = currentChar;
}} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}}
m.reply(`${getLet(q)}`);
}
break

case 'addconst': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} const barunya`);
const namaFile = path.join(__dirname, 'slimecode.js');
const constBaru = `${text}\n\n`;
const tambahConst = (data, constBaru) => {
const posisiIsAntiLink = data.indexOf("const isAntiLink");
if (posisiIsAntiLink !== -1) {
const kodeBaruLengkap = data.slice(0, posisiIsAntiLink) + constBaru + data.slice(posisiIsAntiLink);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const isAntiLink di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahConst(data, constBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan const baru:');
console.log(constBaru);
return m.reply('Sukses menambahkan const!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'getdep': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 1 depName atau ${prefix+command} 2 depName1 depName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Format tidak valid. Contoh: ${prefix+command} 1 depName atau ${prefix+command} 2 depName1 depName2`);
const mode = parseInt(match[1], 10);
const depNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && depNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu dep name. Contoh: ${prefix+command} 1 depName`);
}
if (mode === 2 && (depNames.length < 1 || depNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua dep names. Contoh: ${prefix+command} 2 depName1 depName2`);
}
const getDependency = async (depName) => {
try {
const packageContent = await fs.promises.readFile("./package.json", "utf-8");
const packageJson = JSON.parse(packageContent);
const dependencyVersion = packageJson.dependencies[depName] || packageJson.devDependencies[depName];
if (!dependencyVersion) {
return m.reply(`Dependency '${depName}' tidak ditemukan.`);
}
return `"${depName}": "${dependencyVersion}"`;
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const getDependencies = async (depNames) => {
try {
const depPromises = depNames.map(depName => getDependency(depName));
const dependencies = await Promise.all(depPromises);
return dependencies.join('\n\n');
} catch (error) {
return m.reply(`Terjadi kesalahan: ${error.message}`);
}};
getDependencies(depNames)
.then(dependencyCode => m.reply(dependencyCode))
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
break;
}

case 'gantifile': {
if (!isOwner) return onlyOwn();
if (!text.includes("./")) return m.reply(`Contoh: ${prefix+command} ./package.json`); 
let dir = path.dirname(text);
let fileName = path.basename(text);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}

let files = fs.readdirSync(dir);
if (!files.includes(fileName)) {
return m.reply('Tidak dapat menemukan file!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}

fs.writeFileSync(text, buffer);
m.reply(`Mengupload file...`);
await sleep(2000);
m.reply(`Berhasil mengupload ${fileName}`);
}
break

case 'sendfitur': {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!text) return m.reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./slimecode.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return m.reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await slimecode.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return m.reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await slimecode.sendMessage(recipient, { text: message }, { quoted: m });
m.reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
m.reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
break;
}

case 'backup': {
if (!isOwner) return onlyOwn() 
let jir = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Mengumpulkan semua file ke folder...');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await m.reply('Script akan dikirim lewat PC!')
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await slimecode.sendMessage(jir, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "Backup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break

case 'getsession': {
if (!isOwner) return onlyOwn()
slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let sesi = await fs.readFileSync(`./${sessionName}/creds.json`)
await slimecode.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {quoted: m})
}
break

case 'delsession': {
if (!isOwner) return onlyOwn()
fs.readdir(`./${sessionName}`, async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
console.log(filteredArray.length);
let teks = `Detected ${filteredArray.length} junk files\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(err, i) {
teks += (i + 1) + `. ${e}\n` })
m.reply(teks)
await sleep(2000)
m.reply("Menghapus session...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
await sleep(2000)
m.reply('Sukses menghapus session!')
});
}
break

case 'ambilsc': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let a = getTime().split("T")[1].split("+")[0]
var name = `SlimexTzyV3` // Gak bisa pake spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await slimecode.sendMessage(owner+'@s.whatsapp.net', {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'sendsc': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan seseorang!')
edit2("Memproses pengiriman...", "Script berhasil terkirim!")
let a = getTime().split("T")[1].split("+")[0]
let t = q.split(' ');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
var name = `SlimexTzyV3` // Gak bisa pakai spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await slimecode.sendMessage(u, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'addreseller':
case 'addres': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await slimecode.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan nomor yang aktif!`)
res.push(bnnd)
fs.writeFileSync('./data/reseller.json', JSON.stringify(res))
m.reply(`Berhasil addreseller`)
}
break

case 'delreseller':
case 'delres': {
if (!!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = res.indexOf(yaki)
res.splice(unp, 1)
fs.writeFileSync('./data/reseller.json', JSON.stringify(res))
m.reply(`Berhasil delreseller`)
}
break

case 'listreseller':
case 'listres': {
if (!isOwner) return onlyOwn()
tekso = `List reseller\nTotal: ${res.length}\n\n`
for (let i of res) {
tekso += `• ${i}\n`
}
m.reply(tekso.trim())
}
break

case 'addprem': {
if (!isOwner) return onlyOwn()
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Contoh: ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Berhasil addprem')
} else {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Berhasil addprem')
}}
break

case 'delprem': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} 628xx`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
m.reply('Berhasil delprem')
} else {
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
m.reply('Berhasil delprem')
}}
break

case 'listpremium': 
case 'listprem': {
if (!isOwner) return onlyOwn()
let txt = `List premium\nTotal: ${premium.length}\n\n`;
let men = [];
for (let i of premium) {
men.push(i.id);
let idPart = i.id?.split("@")[0] ?? 'Undefined';
txt += `ID: @${idPart}\n`;
if (i.expired === 'Permanen') {
let cekvip = 'Permanen';
txt += `Expired: Permanen\n\n`;
} else {
let cekvip = ms(i.expired - Date.now());
txt += `Expired: ${cekvip.days} hari, ${cekvip.hours} jam, ${cekvip.minutes} menit, ${cekvip.seconds} detik\n\n`;
}
}
slimecode.sendTeks(m.chat, txt, m);
}
break

case 'addowner': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} tag/kutip`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
g
own.push(users)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
m.reply(`Berhasil addowner`)
}
break

case 'delowner': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} tag/kutip`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.split("|")[0].replace(/[^0-9]/g, '')
own.splice(users, 1)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
m.reply(`Berhasil delowner`)
}
break

case 'listowner': 
case 'listcreator': {
if (!isOwner) return onlyOwn()
teks = `List owner\nTotal: ${own.length}\n\n`
for (let kon of own) {
teks += `• ${kon}\n`
}
m.reply(teks)
}
break

case 'addgold': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
let trg = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addGold(trg, parseInt(args[1]), db_gold)
m.reply(`*SUKSED ADD GOLD*
Nomor: ${args[0]}
Gold: ${toRupiah(args[1])}`)
}
break

case 'mingold': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
if (cekGold(q.split(",")[0]+"@s.whatsapp.net", db_gold) < q.split(",")[1] && cekGold(q.split(",")[0]+"@s.whatsapp.net", db_gold) !== 0) return m.reply(`Pengurangan sangat berlebihan!`)
let tar = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
minGold(tar, parseInt(args[1]), db_gold)
m.reply(`*SUKSES MIN GOLD*
Nomor: ${args[0]}
Gold: ${args[1]} `
)}
break

case 'addsaldo': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`)
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addSaldo(trgt, parseInt(args[1]), db_saldo)
m.reply(`*SUKSED ADD SALDO*
Nomor: ${args[0]}
Saldo: Rp. ${toRupiah(args[1])} `)
}
break

case 'minsaldo': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Pengurangan sangat berlebihan!`)
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
minSaldo(target, parseInt(args[1]), db_saldo)
m.reply(`*SUKSES MIN SALDO*
Nomor: ${args[0]}
Saldo: Rp. ${toRupiah(args[1])} `
)}
break

case 'addlimit': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
let tr = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addLimit(tr, parseInt(args[1]), db_limit)
m.reply(`*SUKSED ADD LIMIT*
Nomor: ${args[0]}
Limit: ${args[1]} `)
}
break

case 'minlimit': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
if (cekLimit(q.split(",")[0]+"@s.whatsapp.net", db_limit) < q.split(",")[1] && cekLimit(q.split(",")[0]+"@s.whatsapp.net", db_limit) !== 0) return m.reply(`Pengurangan sangat berlebihan!`)
let targe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
minLimit(targe, parseInt(args[1]), db_limit)
m.reply(`*SUKSES MIN LIMIT*
Nomor: ${args[0]}
Limit: ${args[1]} `
)}
break

case 'sampah':
case 'delsampah':
case 'delsampah2': {
if (!isOwner) return onlyOwn();
const getFiles = (dir) => {
return fs.readdirSync(dir).filter(v =>
v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") ||
v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") ||
v.endsWith("webp") || v.endsWith("webm")
).map(v => `${dir}/${v}`)};
let libFiles = getFiles('./lib');
let rootFiles = getFiles('.').filter(v => !v.startsWith('./lib/'));
let all = [...libFiles, ...rootFiles];
let jumlahSampah = all.length;
var teks = `${monospace("Jumlah Sampah")}\n\n`;
teks += `Total: ${jumlahSampah} sampah\n\n`;
teks += all.map(o => `${o}\n`).join("");
if (jumlahSampah > 0) {
edit3(teks, `Menghapus ${jumlahSampah} file sampah.`, `Sukses menghapus semua sampah.`);
all.forEach(file => {
fs.unlinkSync(file);
});
} else {
edit2(teks, `Tidak ada file sampah untuk dihapus.`);
}}
break;

case 'clearsesi':
case 'clearallsesi': {
if (!isOwner) return onlyOwn()
let directoryPath = path.join(`./${sessionName}`) //&& './lib') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key")  )
var teks = `Menghapus ${filteredArray.length} file sampah...\n\n`
if (filteredArray.length == 0) return m.reply(teks)
/*filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})*/
edit2(teks, 'Berhasil menghapus semua sampah')
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
});
}
break

case 'ddos-hent': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
m.reply(`Serangan DDoS telah dieksekusi ke situs web yang dituju:\n\nTarget: ${text}\nTime: 60\nThread: 20\nRate: 100`);
exec(`node ./lib/ddos/hent.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case 'ddos-mix': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
m.reply(`Serangan DDoS telah dieksekusi ke situs web yang dituju:\n\nTarget: ${text}\nTime: 60\nThread: 20\nRate: 100`);
exec(`node ./lib/ddos/mix.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case 'getdb': {
if (!isOwner) return onlyOwn()
slimecode.sendMessage(from, {document: fs.readFileSync('./data/slimecode-db/database.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'database.json' }, {quoted: m})
}
break

case 'getfolder': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n${prefix+command} ./foldername\n\nInfo lebih: $ ls ./`);

const folderPath = text;
const zipPath = `${folderPath}.zip`;

try {
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function () {
slimecode.sendMessage(m.chat, {
document: fs.readFileSync(zipPath),
caption: text,
mimetype: 'application/zip',
fileName: path.basename(zipPath)
}, { quoted: m });

fs.unlinkSync(zipPath);});
archive.pipe(output);
archive.directory(folderPath, false);
archive.finalize();
} catch (err) {
console.error('Terjadi kesalahan:', err);
m.reply('Terjadi kesalahan saat mengompresi atau mengirim folder.');
}}
break

case 'getfile': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./slimecode.js\n#2: ${prefix+command} ./lib/general/scrape.js\n\nInfo lebih: $ ls ./lib`)
if (!text.endsWith('.js')) return m.reply('Untuk mengambil file selain js, gunakan .getfile2/.getfile3')
const fileName = path.basename(text)
try {
slimecode.sendMessage(from, {
document: fs.readFileSync(`${text}`),
caption: text,
mimetype: 'application/js',
fileName: fileName
}, { quoted: m })
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari')
}}
break

case 'getfile2': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./package.json\n#2: ${prefix+command} ./data/users.json\n\nInfo lebih: $ ls ./data`)
if (!text.endsWith('.json')) return m.reply('Untuk mengambil file selain json, gunakan .getfile/.getfile3')
const fileName = path.basename(text)
try {
slimecode.sendMessage(from, {
document: fs.readFileSync(`${text}`),
caption: text,
mimetype: 'application/json',
fileName: fileName
}, { quoted: m })
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari')
}}
break

case 'getfile3': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./gambar.jpg\n#2: ${prefix+command} ./data/gambar.jpg\n\nInfo lebih: $ ls`);
const mime = require('mime-types');
const fileName = path.basename(text);
const isImage = /\.(jpg|jpeg|png)$/i.test(fileName);
const mimeType = mime.lookup(fileName);
try {
if (isImage && mimeType) {
slimecode.sendMessage(from, {
image: fs.readFileSync(`${text}`),
caption: text,
}, { quoted: m });

slimecode.sendMessage(from, {
document: fs.readFileSync(`${text}`),
caption: text,
mimetype: mimeType,
fileName: fileName
}, { quoted: m });
} else {
m.reply('File yang diminta bukan gambar. Pastikan file berekstensi .jpg, .jpeg, atau .png');
}} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari');
}}
break

case 'addfolder': {
if (!isOwner) return onlyOwn();
if (!text.startsWith("./")) {
return m.reply(`Format salah. Contoh penggunaan: ${prefix+command} ./foldername`);
}
let folderPath = path.resolve(text);
try {
if (fs.existsSync(folderPath)) {
return m.reply('Folder sudah ada di lokasi tersebut!');
}
fs.mkdirSync(folderPath, { recursive: true });
m.reply(`Berhasil membuat folder ${folderPath}`);
} catch (error) {
console.error('Error:', error);
m.reply('Terjadi kesalahan saat membuat folder. Silakan coba lagi.');
}}
break

case 'addfile': {
if (!isOwner) return onlyOwn();
if (!text.includes("./")) return m.reply(`Contoh: ${prefix+command} ./path/to/file.txt`); 
let filePath = path.resolve(text);
let dir = path.dirname(filePath);
let fileName = path.basename(filePath);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (fs.existsSync(filePath)) {
fs.appendFileSync(filePath, buffer);
m.reply(`Berhasil menambahkan konten ke ${fileName}`);
} else {
fs.writeFileSync(filePath, buffer);
m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
}}
break

case 'delfolder': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./lib\n#2: ${prefix+command} ./lib/general\n\nInfo lebih: $ ls`)
const folderPath = path.resolve(text)
const basePath = path.resolve('./')
if (!folderPath.startsWith(basePath)) {
return m.reply('Kamu tidak memiliki izin untuk menghapus folder ini')
}
fs.stat(folderPath, (err, stats) => {
if (err) {
return m.reply('Folder yang kamu cari tidak ditemukan')
}
if (!stats.isDirectory()) {
return m.reply('Path yang diberikan bukan sebuah folder')
}
fs.rmdir(folderPath, { recursive: true }, (err) => {
if (err) {
console.log(err)
return m.reply('Tidak dapat menghapus folder yang kamu cari')
}
m.reply(`Folder ${path.basename(folderPath)} berhasil dihapus`)
})
})
}
break

case 'delfile': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./slimecode.js\n#2: ${prefix+command} ./data/users.json\n\nInfo lebih: $ ls`)
 
const filePath = path.resolve(text)
const basePath = path.resolve('./')
if (!filePath.startsWith(basePath)) {
return m.reply('Kamu tidak memiliki izin untuk menghapus file ini')
}
try {
if (fs.existsSync(filePath)) {
fs.unlinkSync(filePath)
m.reply(`File ${path.basename(filePath)} berhasil dihapus`)
} else {
m.reply('File yang kamu cari tidak ditemukan')
}
} catch (err) {
console.log(err)
m.reply('Tidak dapat menghapus file yang kamu cari')
}}
break

case 'bcgc': 
case 'bcgrup': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (!text) m.reply(`Contoh: ${prefix+command} teks`)
let getGroups = await slimecode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let metadat72 = await slimecode.groupMetadata(i)
let participanh = await metadat72.participants
let msg = generateWAMessageFromContent(i, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: participanh.map(a => a.id), 
forwardingScore: 99999999999,
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
text: text
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "",
subtitle: "",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"CHAT\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}],
})
})
}}
}, {})
await slimecode.relayMessage(i, msg.message, {
messageId: msg.key.id
})
}
m.reply(`Berhasil mengirim broadcast ke ${anu.length} grup!`)
}
break

case 'bcimg': 
case 'bcvid': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!isMediaa) return m.reply('Harus berupa gambar/vidio!')
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let getGroups = await slimecode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await slimecode.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await slimecode.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
let msg = generateWAMessageFromContent(xnxx, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: participanh.map(a => a.id), 
forwardingScore: 99999999999,
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
text: text
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "",
subtitle: "",
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: mem } }, { upload: slimecode.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"CHAT\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}],
})
})
}}
}, {})
await slimecode.relayMessage(xnxx, msg.message, {
messageId: msg.key.id
})
await sleep(2000)
} else {
if(/video/.test(mime)){
media1 = await slimecode.downloadAndSaveMediaMessage(quoted)
mem1 = await uptotelegra(media1)
await slimecode.sendMessage(xnxx, { video: { url: mem1 }, caption: `${text}`, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: m })
await sleep(2000)
} else {
await slimecode.sendMessage(xnxx, { text: `${text}`, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: floc })
await sleep(2000)
}}
m.reply(`Berhasil mengirim broadcast ke ${anu.length} grup!`)
}
}
break

case 'adduserdb': {
if (!isOwner) return onlyOwn()
if (!froms) return m.reply('Tag seseorang!')
if (!db.data.users[froms].daftar) return m.reply('User sudah terdaftar di database!')
global.db.data.users[froms] = {
daftar: true,
nama: `${pushname}`,
gold: `${cekLimit(m.sender, db_gold)}`,
saldo: `${toRupiah(cekSaldo(m.sender, db_saldo))}`,
limit: `${cekLimit(m.sender, db_limit)}`,
status: `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}`
}
var jeje = `Berhasil add @${froms.split('@')[0]} ke database user.`
await reply(jeje)
} 
break

case 'deluserdb': {
if (!isOwner) return onlyOwn()
if (!froms) return m.reply('Tag seseorang!')
delete db.data.users[froms]
peeee = `Berhasil del @${froms.split('@')[0]} dari database user.`
reply(peeee)
}
break

case 'block':
case 'blok': {
if (!isOwner) return onlyOwn() 
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
slimecode.updateBlockStatus(blok, 'block')
m.reply(`Berhasil block @${blok.split('@')[0]}`)
}
break

case 'unblock':
case 'unblok': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
slimecode.updateBlockStatus(unblok, 'unblock')
m.reply(`Berhasil unblock ${unblok.split('@')[0]}`)
}
break

case 'listblock':
case 'listblok': {
if (!isOwner) return onlyOwn()
let listblok = await slimecode.fetchBlocklist()
m.reply(`${monospace("LIST  BLOCK")}\n` + `Total: ${listblok == undefined ? '*0* diblokir' : '*' + listblok.length + '* diblokir'}\n\n` + listblok.map(v => '• @' + v.replace(/@.+/, '')).join`\n`)
}
break

case 'publik':
case 'public': {
if (!isOwner) return onlyOwn()
slimecode.public = true
m.reply('Sukses mengubah ke mode public')
}
break

case 'self':
case 'self': {
if (!isOwner) return onlyOwn()
slimecode.public = false
m.reply('Sukses mengubah ke mode self')
}
break

case 'restart': {
if (!isOwner) return onlyOwn()
edit2("Merestart server...", "Sukses merestart server!")
await sleep(5000)
process.exit()
}
break

case 'join':
case 'joingc': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Harus berupa link grup WhatsApp!')
slimecode.sendMessage(m.chat, {text: 'Sukses join ke grup.'}, {quoted: m})
let result = args[0].split('https://chat.whatsapp.com/')[1]
await slimecode.groupAcceptInvite(result)
}
break

case 'setnamabot': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} slimecode`)
await slimecode.updateProfileName(text)
await m.reply(`Sukses mengganti nama bot!`)
}
break

case 'setbiobot': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aktif`)
await slimecode.updateProfileStatus(text)
await m.reply(`Sukses mengganti bio bot!`)
}
break

case 'setppbot': {
if (!isOwner) return onlyOwn()
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
let media = await slimecode.downloadAndSaveMediaMessage(quoted)
await slimecode.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('Sukses mengganti pp bot!')
}
break

case 'delppbot': {
if (!isOwner) return onlyOwn()
await slimecode.removeProfilePicture(botNumber)
await m.reply(`Sukses menghapus pp bot!`)
}
break

case 'autotyping': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Sukses mengaktifkan autotyping.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Sukses menonaktifkan autotyping.')
}}
break

case 'autoread': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoread = true
await m.reply('Sukses mengaktifkan autoread.')
} else if (args[0] === 'off') {
global.autoread = false
await m.reply('Sukses menonaktifkan autoread.')
}}
break

case 'autobio': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autobio = true
await m.reply('Sukses mengaktifkan autobio.')
} else if (args[0] === 'off') {
global.autobio = false
await m.reply('Sukses menonaktifkan autobio.')
}}
break

case 'anticall': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.anticall = true
await m.reply('Sukses mengaktifkan anticall.')
} else if (args[0] === 'off') {
global.anticall = false
await m.reply('Sukses menonaktifkan anticall.')
}}
break

case 'antispam': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antispam = true
await m.reply('Sukses mengaktifkan antispam.')
} else if (args[0] === 'off') {
global.antispam = false
await m.reply('Sukses menonaktifkan antispam.')
}}
break

case 'antibot': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antibot = true
await m.reply('Sukses mengaktifkan antibot.')
} else if (args[0] === 'off') {
global.antibot = false
await m.reply('Sukses menonaktifkan antibot.')
}}
break

case 'ban': {
if (!isOwner) return onlyOwn()
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (own.includes(users)) return m.reply('Masa ke owner sendiri.')
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
const iscBan = banned.includes(users)
if (iscBan) return slimecode.sendTextWithMentions(m.chat, `Target tidak ada dilist user yang diban`, m)
banned.push(users)
fs.writeFileSync('./data/banned.json', JSON.stringify(banned, null, 2))
slimecode.sendTextWithMentions(m.chat, `Sukses banned user.`, m)
} catch (err) {
m.reply(`Tag/kutip pesan seseorang!`)
}}
break

case 'unban': {
if (!isOwner) return onlyOwn()
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
const iscBan = banned.includes(users)
if (!iscBan) return slimecode.sendTextWithMentions(m.chat, `Target tidak ada dilist user yang diban`, m)
let anu = banned.indexOf(users)
banned.splice(anu, 1)
fs.writeFileSync('./data/banned.json', JSON.stringify(banned, null, 2))
slimecode.sendTextWithMentions(m.chat, `Sukses unbanned user.`, m)
} catch (err) {
m.reply(`Tag/kutip pesan seseorang!`)
}}
break

case 'listban': {
let txt = `List user yang diban\nTotal: ${banned.length}\n\n`
for (let blk of banned) {
txt += `• ${blk.split('@')[0]}\n`
}
slimecode.sendTextWithMentions(m.chat, txt, m)
}
break

// === Group Menu

case 'add': {
if (!m.isGroup) return onlyGrup();
if (!isOwner && !isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await slimecode.groupMetadata(m.chat);
const memberJids = participants.participants.map(member => member.jid);
if (memberJids.includes(users)) {
m.reply('Target sudah menjadi anggota grup sebelumnya.');
} else {
await slimecode.groupParticipantsUpdate(m.chat, [users], 'add');
m.reply('Sukses add target.');
}} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

case 'kick': {
if (!m.isGroup) return onlyGrup();
if (!isOwner && !isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await slimecode.groupMetadata(m.chat);
const memberJids = participants.participants.map(member => member.jid);
if (!memberJids.includes(users)) {
m.reply('Target tidak ditemukan di grup.');
} else {
await slimecode.groupParticipantsUpdate(m.chat, [users], 'remove');
m.reply('Sukses kick target.');
}} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

case 'linkgc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
let responsee = await slimecode.groupInviteCode(m.chat)
slimecode.sendTeks(m.chat, `https://chat.whatsapp.com/${responsee}\n\nLink grup: ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'revoke': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
await slimecode.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel ulang link grup`)
}).catch(() => m.reply('Terjadi kesalahan'))
}
break

case 'promote': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slimecode.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'demote': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slimecode.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'open': 
case 'buka': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
slimecode.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Sukses membuka grup`)
}
break

case 'close': 
case 'tutup': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
slimecode.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Sukses menutup grup`)
}
break

case 'opentime': {
if (!isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
const timeUnits = {
detik: 1000,
menit: 60000,
jam: 3600000,
hari: 86400000
};
const unit = args[1]?.toLowerCase();
const multiplier = timeUnits[unit];
const duration = parseInt(args[0]);
if (!multiplier || isNaN(duration) || duration <= 0) {
return m.reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${prefix+command} 10 detik`);
}
const timer = duration * multiplier;
m.reply(`Open time ${duration} ${unit} dimulai dari sekarang!`);
const sendReminder = (message, delay) => {
if (timer > delay) {
setTimeout(() => {
m.reply(message);
}, timer - delay);
}};
sendReminder(`Pengingat: 10 detik lagi grup akan dibuka!`, 10000);
setTimeout(() => {
const open = `*[ OPEN TIME ]* Grup telah dibuka!`;
slimecode.groupSettingUpdate(from, 'not_announcement');
m.reply(open);
}, timer);
}
break;

case 'closetime': {
if (!isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
const timeUnits = {
detik: 1000,
menit: 60000,
jam: 3600000,
hari: 86400000
};
const unit = args[1]?.toLowerCase();
const multiplier = timeUnits[unit];
const duration = parseInt(args[0]);
if (!multiplier || isNaN(duration) || duration <= 0) {
return m.reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${prefix+command} 10 detik`);
}
const timer = duration * multiplier;
m.reply(`Close time ${duration} ${unit} dimulai dari sekarang!`);
const sendReminder = (message, delay) => {
if (timer > delay) {
setTimeout(() => {
m.reply(message);
}, timer - delay);
}};
sendReminder(`Pengingat: 10 detik lagi grup akan ditutup!`, 10000);
setTimeout(() => {
const close = `*[ CLOSE TIME ]* Grup telah ditutup!`;
slimecode.groupSettingUpdate(from, 'announcement');
m.reply(close);
}, timer);
}
break;

case 'setsubjek':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args.length < 1) return m.reply(`Contoh: ${prefix+command} teks`)
await slimecode.groupUpdateSubject(from, text)
m.reply(`Sukses mengganti nama grup`)
break

case 'setdesk': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
await slimecode.groupUpdateDescription(from, text)
m.reply(`Sukses mengganti deskripsi grup`)
}
break

case 'setppgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let media = await slimecode.downloadAndSaveMediaMessage(quoted)
await slimecode.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Sukses mengganti profil grup")
}
break

case 'delppgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
await slimecode.removeProfilePicture(from)
await m.reply(`Sukses menghapus profil grup`)
}
break

case 'getnamagc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
slimecodereply(`${groupMetadata.subject}`)
}
break

case 'getdeskgc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
slimecodereply(`${groupMetadata.desc}`)
}
break

case 'getppgc': {
if (!m.isGroup) return onlyGrup()
try {
avatar = await slimecode.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
slimecode.sendMessage(m.chat, {image: {url: avatar }, caption: `© ${wm}` }, {quoted: m })
}
break

case 'getname': {
if (!m.isGroup) return onlyGrup()
if (m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let nama = slimecode.getName(users)
m.reply(nama)
} else m.reply('Kutip pesan seseorang!')
}
break

case 'getpp': {
if (!m.isGroup) return onlyGrup()
if (m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
avatar = await slimecode.profilePictureUrl(users, "image")
} catch {
avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
slimecode.sendMessage(m.chat, {image: {url: avatar }, caption: `© ${wm}` }, {quoted: m })
} else m.reply('Kutip pesan seseorang!')
}
break

case 'infogrup':
case 'infogc': {
if (!m.isGroup) return onlyGrup();
let admin = groupMetadata.participants.filter(p => p.admin);
let creationDate = moment(groupMetadata.creation * 1000).format('DD/MM/YY HH:mm');
let subject = groupMetadata.subject;
let restrict = groupMetadata.restrict ? 'Hanya admin' : 'Semua peserta';
let announce = groupMetadata.announce ? 'Hanya admin' : 'Semua peserta';
let antiLink = isAntiLink ? 'Aktif' : 'Nonaktif';
let antiLinkgc = isAntiLinkgc ? 'Aktif' : 'Nonaktif';
let teks = `${monospace("INFO GROUP")}

Nama grup: ${subject}
Total admin: ${admin.length}
Total member: ${groupMetadata.participants.length}
Tgl dibuat: ${creationDate}

Mengedit info grup:
- ${restrict}
Mengirim pesan:
- ${announce}

Anti-link: ${antiLink}
Anti-linkgc: ${antiLinkgc}

Grup ID: ${groupMetadata.id}`;
let coo = `{\"display_text\":\"COPY ID\",\"id\":\"P\",\"copy_code\":\"${groupMetadata.id}\"}`;
buttoncopy(m.chat, teks, coo, m);
break;
}

case 'topglobal': {
if (!m.isGroup) return onlyGrup()
saldo.sort((a, b) => (a.saldo < b.saldo) ? 1 : -1)
let top = '*── 「 TOP GLOBAL - SALDO 」 ──*\n\n'
var arrTop = []
var total = 15
if (saldo.length < 15) total = saldo.length
for (let i = 0; i < total; i ++){
var level = cekSaldo(saldo[i].id, db_saldo)
var rol = 'New'
if (level <= 1) {
rol = 'Newbie'
} else if (level <= 500) {
rol = 'Bronze 1'
} else if (level <= 2000) {
rol = 'Bronze 2'
} else if (level <= 4000) {
rol = 'Bronze 3'
} else if (level <= 6000) {
rol = 'Silver 1'
} else if (level <= 8000) {
rol = 'Silver 2'
} else if (level <= 10000) {
rol = 'Silver 3'
} else if (level <= 12000) {
rol = 'Gold 1'
} else if (level <= 14000) {
rol = 'Gold 2'
} else if (level <= 16000) {
rol = 'Gold 3'
} else if (level <= 18000) {
rol = 'Platinum 1'
} else if (level <= 20000) {
rol = 'Platinum 2'
} else if (level <= 22000) {
rol = 'Platinum 3'
} else if (level <= 24000) {
rol = 'Platinum 4'
} else if (level <= 26000) {
rol = 'Platinum 5'
} else if (level <= 28000) {
rol = 'Diamond 1'
} else if (level <= 30000) {
rol = 'Diamond 2'
} else if (level <= 32000) {
rol = 'Diamond 3'
} else if (level <= 34000) {
rol = 'Diamond 4'
} else if (level <= 36000) {
rol = 'Diamond 5'
} else if (level <= 38000) {
rol = 'Master'
} else if (level <= 40000) {
rol = 'Master ✩'
} else if (level <= 50000) {
rol = 'Master ✩✩'
} else if (level <= 60000) {
rol = 'Master ✩✩✩'
} else if (level <= 70000) {
rol = 'Master ✯'
} else if (level <= 80000) {
rol = 'Master ✯✯'
} else if (level <= 100000) {
rol = 'Master ✯✯✯'
} else if (level <= 110000) {
rol = 'GrandMaster'
} else if (level <= 120000) {
rol = 'GrandMaster ✩'
} else if (level <= 130000) {
rol = 'GrandMaster ✩✩'
} else if (level <= 140000) {
rol = 'GrandMaster ✩✩✩'
} else if (level <= 150000) {
rol = 'GrandMaster ✯'
} else if (level <= 160000) {
rol = 'GrandMaster ✯✯'
} else if (level <= 200000) {
rol = 'GrandMaster ✯✯✯'
} else if (level <= 200000000) {
rol = 'Mr. Greatest'
} else if (level <= 230000000) {
rol = 'Mr. Greatest ✩'
} else if (level <= 260000000) {
rol = 'Mr. Greatest ✩✩'
} else if (level <= 290000000) {
rol = 'Mr. Greatest ✩✩✩'
} else if (level <= 240000000) {
rol = 'Mr. Greatest ✯'
} else if (level <= 280000000) {
rol = 'Mr. Greatest ✯✯'
} else if (level <= 360000000) {
rol = 'Mr. Greatest ✯✯✯'
} else if (level <= 1000000000) {
rol = 'Level Max'
}
top += `${i + 1}. ${saldo[i].id.split("@")[0]}\n  • Saldo: Rp. ${toRupiah(cekSaldo(saldo[i].id, db_saldo))}\n  • Level: ${rol}\n\n`
arrTop.push(saldo[i].id)
}
//slimecode.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
mentions(top, arrTop, true)
}
break

case 'toplocal': {
if (!m.isGroup) return onlyGrup()
saldo.sort((a, b) => (a.saldo < b.saldo) ? 1 : -1)
let top = '*── 「 TOP LOCAL - SALDO 」 ──*\n\n'
let arrTop = []
var total = 15
if (saldo.length < 15) total = saldo.length
let anggroup = groupMembers.map(a => a.id)
for (let i = 0; i < total; i ++){
if (anggroup.includes(saldo[i].id)) {
var levell = cekSaldo(saldo[i].id, db_saldo)
var roll = 'New'
if (levell <= 1) {
roll = 'Newbie'
} else if (levell <= 500) {
roll = 'Bronze 1'
} else if (levell <= 2000) {
roll = 'Bronze 2'
} else if (levell <= 4000) {
roll = 'Bronze 3'
} else if (levell <= 6000) {
roll = 'Silver 1'
} else if (levell <= 8000) {
roll = 'Silver 2'
} else if (levell <= 10000) {
roll = 'Silver 3'
} else if (levell <= 12000) {
roll = 'Gold 1'
} else if (levell <= 14000) {
roll = 'Gold 2'
} else if (levell <= 16000) {
roll = 'Gold 3'
} else if (levell <= 18000) {
roll = 'Platinum 1'
} else if (levell <= 20000) {
roll = 'Platinum 2'
} else if (levell <= 22000) {
roll = 'Platinum 3'
} else if (levell <= 24000) {
roll = 'Platinum 4'
} else if (levell <= 26000) {
roll = 'Platinum 5'
} else if (levell <= 28000) {
roll = 'Diamond 1'
} else if (levell <= 30000) {
roll = 'Diamond 2'
} else if (levell <= 32000) {
roll = 'Diamond 3'
} else if (levell <= 34000) {
roll = 'Diamond 4'
} else if (levell <= 36000) {
roll = 'Diamond 5'
} else if (levell <= 38000) {
roll = 'Master'
} else if (levell <= 40000) {
roll = 'Master ✩'
} else if (levell <= 50000) {
roll = 'Master ✩✩'
} else if (levell <= 60000) {
roll = 'Master ✩✩✩'
} else if (levell <= 70000) {
roll = 'Master ✯'
} else if (levell <= 80000) {
roll = 'Master ✯✯'
} else if (levell <= 100000) {
roll = 'Master ✯✯✯'
} else if (levell <= 110000) {
roll = 'GrandMaster'
} else if (levell <= 120000) {
roll = 'GrandMaster ✩'
} else if (levell <= 130000) {
roll = 'GrandMaster ✩✩'
} else if (levell <= 140000) {
roll = 'GrandMaster ✩✩✩'
} else if (levell <= 150000) {
roll = 'GrandMaster ✯'
} else if (levell <= 160000) {
roll = 'GrandMaster ✯✯'
} else if (levell <= 200000) {
roll = 'GrandMaster ✯✯✯'
} else if (levell <= 200000000) {
roll = 'Mr. Greatest'
} else if (levell <= 230000000) {
roll = 'Mr. Greatest ✩'
} else if (levell <= 260000000) {
roll = 'Mr. Greatest ✩✩'
} else if (levell <= 290000000) {
roll = 'Mr. Greatest ✩✩✩'
} else if (levell <= 240000000) {
roll = 'Mr. Greatest ✯'
} else if (levell <= 280000000) {
roll = 'Mr. Greatest ✯✯'
} else if (levell <= 360000000) {
roll = 'Mr. Greatest ✯✯✯'
} else if (levell <= 1000000000) {
roll = 'Level Max'
}
top += `${i + 1}. ${saldo[i].id.split("@")[0]}\n  • Saldo: Rp. ${toRupiah(cekSaldo(saldo[i].id, db_saldo))}\n  • Level: ${roll}\n\n`
arrTop.push(saldo[i].id)
}}
//slimecode.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
mentions(top, arrTop, true)
}
break

case 'leavegc': {
if (!isOwner) return onlyOwn();
await slimecode.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'q':
case 'quoted': {
if (!m.quoted) return m.reply('Reply pesan seseorang!')
let quo = await slimecode.serializeM(await m.getQuotedObj())
if (!quo.quoted) return m.reply('Pesan yang kamu reply tidak dikirim oleh bot!')
await quo.quoted.copyNForward(m.chat, true)
}
break

case 'antilink': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === "on") {
if (isAntiLink) return m.reply(`Sudah aktif sebelumnya`)
nplink.push(m.chat)
fs.writeFileSync('./data/antilink.json', JSON.stringify(nplink, null, 2))
m.reply('Sukses mengaktifkan antilink!')
} else if (args[0] === "off") {
if (!isAntiLink) return m.reply(`Sudah nonaktif sebelumnya`)
let anu = nplink.indexOf(m.chat)
nplink.splice(anu, 1)
fs.writeFileSync('./data/antilink.json', JSON.stringify(nplink, null, 2))
m.reply('Sukses menonaktifkan antink!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'antilinkgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === "on") {
if (isAntiLinkgc) return m.reply(`Sudah aktif sebelumnya`)
nplinkgc.push(m.chat)
fs.writeFileSync('./data/antilinkgc.json', JSON.stringify(nplinkgc, null, 2))
m.reply('Sukses mengaktifkan antilink gc!')
} else if (args[0] === "off") {
if (!isAntiLinkgc) return m.reply(`Sudah nonaktif sebelumnya`)
let anu = nplinkgc.indexOf(m.chat)
nplinkgc.splice(anu, 1)
fs.writeFileSync('./data/antilinkgc.json', JSON.stringify(nplinkgc, null, 2))
m.reply('Sukses menonaktifkan antilink gc!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'mute': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
db.data.chats[m.chat].mute = true
await m.reply('Sukses mute untuk grup ini.')
} else if (args[0] === 'off') {
db.data.chats[m.chat].mute = false
await m.reply('Sukses mute untuk grup ini.')
}}
break

// === Games Menu

case 'family100': 
case 'f100': {
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/family100.json')));
console.log('Jawaban: '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
let jwb = family100[from].jawaban
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab:\n`
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}}
break

case 'suit':
case 'suitpvp': {
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya!`)
gue = `0@s.whatsapp.net`
if (!froms) return m.reply(`Siapa yang ingin kamu tantang?\n\nContoh: ${prefix+command} @${gue.split('@')[0]}`)
if (froms === botNumber) return m.reply(`Tidak bisa bermain dengan bot!`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return m.reply(`Orang nya lagi main sama yang lain!`)
var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await slimecode.sendTeks(from, `@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKirim *gas/gak* untuk bermain`, m),
id: id,
p: m.sender,
p2: froms,
status: 'Wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) slimecode.sendMessage(from, {text: `Waktu suit habis!` }, {quoted: m})
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'ttt':
case 'ttc':
case 'tictactoe': {
if (!m.isGroup) return onlyGrup()
let TicTacToe = require("./lib/game/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'Kamu masih didalam game!')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Lawan bermain ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik .nyerah untuk menyerah`
if (room.x !== room.o) await slimecode.sendText(room.x, str, m, { mentions: parseMention(str) } )
await slimecode.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu lawan bermain' + (text ? ` mengetik command dibawah ini ${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttt': 
case 'delttc':
case 'deltictactoe': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply( `Kamu sedang tidak bermain tictactoe!`)
delete this.game[roomnya.id]
m.reply(`Game tictactoe telah diakhiri!`)
}
break

case 'tebakbom': 
case 'petakbom': {
if (petakbom[m.sender]) return m.reply(`Sesi game mu belum terselesaikan, lanjutkan:\n\n${petakbom[sender].board.join("")}\n\nKetik ${prefix}delpetakbom untuk menghapus sesi game`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[m.sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
bomb: 3,
lolos: 6,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await m.reply(`*PETAK BOM*

${petakbom[m.sender].board.slice(0, 3).join("")}
${petakbom[m.sender].board.slice(3, 6).join("")}
${petakbom[m.sender].board.slice(6).join("")}

Pillih angka diatas tetapi berhati-hati
lah, karena ada bom!

Bomb: ${petakbom[m.sender].bomb}
Nyawa: ${petakbom[m.sender].nyawa.join("")}`);
}
break

case 'delpetakbom': {
if (!(m.sender in petakbom)) return m.reply(`Kamu sedang tidak bermain petakbom!`)
delete petakbom[m.sender];
m.reply(`Game petakbom telah diakhiri!`)
}
break

case 'casino': {
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
if (fs.existsSync(`./data/${m.chat}.json`)) return m.reply(`Masih ada sesi sebelumnya\nKetik ${prefix}delcasino untuk menghapus sesi`)
if (!args[1]) return m.reply('Masukkan nominal nya!')
if (args[1].includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return m.reply('Nominal harus herupa angka!')
var anu = cekSaldo(m.sender, db_saldo)
var ani = cekSaldo(m.mentionedJid[0], db_saldo)
if (anu < args[1] || anu == 'undefined') return m.reply(`Saldo tidak mencukupi, kumpulkan terlebih dahulu\nKetik ${prefix}saldo untuk mengecek saldo mu`)
if (ani < args[1] || ani == 'undefined') return m.reply(`Saldo lawan tidak mencukupi untuk bermain dengan mu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('casino', m.sender, cmd)
fs.writeFileSync(`./data/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
var starGame = `*🎰 GAME CASINO 💰*\n\n• @${m.sender.replace("@s.whatsapp.net", "")}\nMenantang 乂\n• ${args[0]}\n\nDengan nominal: Rp ${parseInt(args[1])}\nSilahkan tunggu ${args[0]} memilih`
buton = `{\"display_text\":\"TERIMA\",\"id\":\"Y\"}`
butoff = `{\"display_text\":\"TOLAK\",\"id\":\"N\"}`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: starGame
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": buton
},
{
"name": "quick_reply",
"buttonParamsJson": butoff
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
}
break

case 'delcasino': {
if (fs.existsSync('./data/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./data/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('delcasino', m.sender, cmd)
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('delcasino', m.sender, cmd)
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else if (isOwner) {
addCountCmd('delcasino', m.sender, cmd)
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else {
m.reply('Hanya untuk pemain!')
}
} else {
m.reply('Kamu sedang tidak bermain casino!')}
}
break

case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
const read = await jimp.read(image);
const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
return data;
};

let {
emoji_role,
sesi,
playerOnGame,
playerOnRoom,
playerExit,
dataPlayer,
dataPlayerById,
getPlayerById,
getPlayerById2,
killWerewolf,
killww,
dreamySeer,
sorcerer,
protectGuardian,
roleShuffle,
roleChanger,
roleAmount,
roleGenerator,
addTimer,
startGame,
playerHidup,
playerMati,
vote,
voteResult,
clearAllVote,
getWinner,
win,
pagi,
malam,
skill,
voteStart,
voteDone,
voting,
run,
run_vote,
run_malam,
runprefixagi
} = require('./lib/game/werewolf.js')

// [ Thumbnail ] 
let thumb =
"https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

const {
sender,
chat
} = m;
slimecode.werewolf = slimecode.werewolf ? slimecode.werewolf : {};
const ww = slimecode.werewolf ? slimecode.werewolf : {};
const data = ww[chat];
const value = args[0];
const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
// [ Membuat Room ]
if (value === "create") {
if (chat in ww) return m.reply("Group masih dalam sesi permainan");
if (playerOnGame(sender, ww) === true)
return m.reply("Kamu masih dalam sesi game");
ww[chat] = {
room: chat,
owner: sender,
status: false,
iswin: null,
cooldown: null,
day: 0,
time: "malem",
player: [],
dead: [],
voting: false,
seer: false,
guardian: [],
};
await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

// [ Join sesi permainan ]
} else if (value === "join") {
if (!ww[chat]) return m.reply("Belum ada sesi permainan");
if (ww[chat].status === true)
return m.reply("Sesi permainan sudah dimulai");
if (ww[chat].player.length > 16)
return m.reply("Maaf jumlah player telah penuh");
if (playerOnRoom(sender, chat, ww) === true)
return m.reply("Kamu sudah join dalam room ini");
if (playerOnGame(sender, ww) === true)
return m.reply("Kamu masih dalam sesi game");
let data = {
id: sender,
number: ww[chat].player.length + 1,
sesi: chat,
status: false,
role: false,
effect: [],
vote: 0,
isdead: false,
isvote: false,
};
ww[chat].player.push(data);
let player = [];
let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
for (let i = 0; i < ww[chat].player.length; i++) {
text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
"@s.whatsapp.net",
""
)}\n`;
player.push(ww[chat].player[i].id);
}
text += "\nJumlah player minimal adalah 5 dan maximal 15";
slimecode.sendMessage(
m.chat, {
text: text.trim(),
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: player,
},
}, {
quoted: m
}
);
// [ Game Play ]
} else if (value === "start") {
if (!ww[chat]) return m.reply("Belum ada sesi permainan");
if (ww[chat].player.length === 0)
return m.reply("Room belum memiliki player");
if (ww[chat].player.length < 5)
return m.reply("Maaf jumlah player belum memenuhi syarat");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu belum join dalam room ini");
if (ww[chat].cooldown > 0) {
if (ww[chat].time === "voting") {
clearAllVote(chat, ww);
addTimer(chat, ww);
return await run_vote(slimecode. chat, ww);
} else if (ww[chat].time === "malem") {
clearAllVote(chat, ww);
addTimer(chat, ww);
return await run_malam(slimecode. chat, ww);
} else if (ww[chat].time === "pagi") {
clearAllVote(chat, ww);
addTimer(chat, ww);
return await runprefixagi(slimecode. chat, ww);
}
}
if (ww[chat].status === true)
return m.reply("Sesi permainan telah dimulai");
if (ww[chat].owner !== sender)
return m.reply(
`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
);
let list1 = "";
let list2 = "";
let player = [];
roleGenerator(chat, ww);
addTimer(chat, ww);
startGame(chat, ww);
for (let i = 0; i < ww[chat].player.length; i++) {
list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
i
].id.replace("@s.whatsapp.net", "")}\n`;
player.push(ww[chat].player[i].id);
}
for (let i = 0; i < ww[chat].player.length; i++) {
list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
i
].id.replace("@s.whatsapp.net", "")} ${
ww[chat].player[i].role === "werewolf" ||
ww[chat].player[i].role === "sorcerer"
? `[${ww[chat].player[i].role}]`
: ""
}\n`;
player.push(ww[chat].player[i].id);
}
for (let i = 0; i < ww[chat].player.length; i++) {
// [ Werewolf ]
if (ww[chat].player[i].role === "werewolf") {
if (ww[chat].player[i].isdead != true) {
var textt = `Hai ${slimecode.getName(
ww[chat].player[i].id
)}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
"werewolf"
)} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
await slimecode.sendMessage(ww[chat].player[i].id, {
text: textt,
mentions: player,
});
}
// [ villager ]
} else if (ww[chat].player[i].role === "warga") {
if (ww[chat].player[i].isdead != true) {
let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${slimecode.getName(
ww[chat].player[i].id
)} Peran kamu adalah *Warga Desa* ${emoji_role(
"warga"
)}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
await slimecode.sendMessage(ww[chat].player[i].id, {
text: texttt,
mentions: player,
});
}

// [ Penerawangan ]
} else if (ww[chat].player[i].role === "seer") {
if (ww[chat].player[i].isdead != true) {
let texxt = `Hai ${slimecode.getName(
ww[chat].player[i].id
)} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
"seer"
)}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

await slimecode.sendMessage(ww[chat].player[i].id, {
text: texxt,
mentions: player,
});
}

// [ Guardian ]
} else if (ww[chat].player[i].role === "guardian") {
if (ww[chat].player[i].isdead != true) {
let teext = `Hai ${slimecode.getName(
ww[chat].player[i].id
)} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
"guardian"
)}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
await slimecode.sendMessage(ww[chat].player[i].id, {
text: teext,
mentions: player,
});
}

// [ Sorcerer ]
} else if (ww[chat].player[i].role === "sorcerer") {
if (ww[chat].player[i].isdead != true) {
let textu = `Hai ${slimecode.getName(
ww[chat].player[i].id
)} Kamu terpilih sebagai Penyihir ${emoji_role(
"sorcerer"
)}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

await slimecode.sendMessage(ww[chat].player[i].id, {
text: textu,
mentions: player,
});
}
}
}
await slimecode.sendMessage(m.chat, {
text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: player,
},
});
await run(slimecode. chat, ww);
} else if (value === "kill") {
let byId = getPlayerById2(sender, parseInt(target), ww)
if (dataPlayer(sender, ww).role !== "werewolf") 
return m.reply("Peran ini bukan untuk kamu"); 
if (byId.db.data.role === "sorcerer") 
return m.reply("Tidak bisa menggunakan skill untuk teman"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
m.reply("Berhasil membunuh player " + parseInt(target)) 
.then(() => { 
dataPlayer(sender, ww).status = true; 
killWerewolf(sender, parseInt(target), ww); 
}); 
} else if (value === "dreamy") { 
if (dataPlayer(sender, ww).role !== "seer") 
return m.reply("Peran ini bukan untuk kamu"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
let dreamy = dreamySeer(sender, parseInt(target), ww); 
m.reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
.then(() => { 
dataPlayer(sender, ww).status = true; 
}); 
} else if (value === "deff") { 
if (dataPlayer(sender, ww).role !== "guardian") 
return m.reply("Peran ini bukan untuk kamu"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
m.reply(`Berhasil melindungi player ${target}`).then(() => { 
protectGuardian(sender, parseInt(target), ww); 
dataPlayer(sender, ww).status = true; 
}); 
} else if (value === "sorcerer") { 
if (dataPlayer(sender, ww).role !== "sorcerer") 
return m.reply("Peran ini bukan untuk kamu"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
let sorker = sorcerer(sesi(sender), target); 
m.reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
.then(() => { 
dataPlayer(sender, ww).status = true; 
}); 
} else if (value === "vote") {
if (!ww[chat]) return m.reply("Belum ada sesi permainan");
if (ww[chat].status === false)
return m.reply("Sesi permainan belum dimulai");
if (ww[chat].time !== "voting")
return m.reply("Sesi voting belum dimulai");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu bukan player");
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati");
if (!target || target.length < 1)
return m.reply("Masukan nomor player");
if (isNaN(target)) return m.reply("Gunakan hanya nomor");
if (dataPlayer(sender, ww).isvote === true)
return m.reply("Kamu sudah melakukan voting");
b = getPlayerById(chat, sender, parseInt(target), ww);
if (b.db.data.isdead === true)
return m.reply(`Player ${target} sudah mati.`);
if (ww[chat].player.length < parseInt(target))
return m.reply("Invalid");
if (getPlayerById(chat, sender, parseInt(target), ww) === false)
return m.reply("Player tidak terdaftar!");
vote(chat, parseInt(target), sender, ww);
return m.reply("✅ Vote");
} else if (value == "exit") {
if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu tidak dalam sesi permainan");
if (ww[chat].status === true)
return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
let exitww = `${m.sender.split("@")[0]} Keluar dari permainan`
slimecode.sendMessage(
m.chat, {
text: exitww,
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: sender,
},
}, {
quoted: m
}
);  
playerExit(chat, sender, ww);
} else if (value === "delete") {
if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
if (ww[chat].owner !== sender)
return m.reply(
`Hanya @${
ww[chat].owner.split("@")[0]
} yang dapat menghapus sesi permainan ini`
);
m.reply("Sesi permainan berhasil dihapus").then(() => {
delete ww[chat];
});
} else if (value === "player") {
if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu tidak dalam sesi permainan");
if (ww[chat].player.length === 0)
return m.reply("Sesi permainan belum memiliki player");
let player = [];
let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
for (let i = 0; i < ww[chat].player.length; i++) {
text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
"@s.whatsapp.net",
""
)} ${
ww[chat].player[i].isdead === true
? `☠️ ${ww[chat].player[i].role}`
: ""
}\n`;
player.push(ww[chat].player[i].id);
}
slimecode.sendMessage(
m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: player,
},
}, {
quoted: m
}
);
} else {
let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
text += ` • ww create\n`;
text += ` • ww join\n`;
text += ` • ww start\n`;
text += ` • ww exit\n`;
text += ` • ww delete\n`;
text += ` • ww player\n`;
text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
slimecode.sendMessage(
m.chat, {
text: text.trim(),
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
},
}, {quoted: m});
}}
break

case 'wikwik': {
if (!q) return m.reply(`Contoh: ${prefix+command} ayu`)
const argsLower = args.map(arg => arg.toLowerCase());
const petarung1 = argsLower[0];
const petarung2 = argsLower[1];
const totalRounds = 8;
let ronde = 1;
let nyawaPetarung1 = 200;
let nyawaPetarung2 = 200;

let result = `🫶 Wikwik antara ${db.data.users[m.sender].nama} dan ${args[0]} dimulai! 🫦\n\n`;

while (ronde <= totalRounds && nyawaPetarung1 > 0 && nyawaPetarung2 > 0) {
const pukulan = [
'ajul gedang', 'gaya marmot', 'gaya roket', 'gaya kucing', 'gaya katak'];

const pilihanPetarung1 = pukulan[Math.floor(Math.random() * pukulan.length)];
const pilihanPetarung2 = pukulan[Math.floor(Math.random() * pukulan.length)];

const damagePetarung1 = Math.floor(Math.random() * 50) + 1;
const damagePetarung2 = Math.floor(Math.random() * 50) + 1;

result += `🫦💦 Ronde ${ronde}\n`;
result += `${db.data.users[m.sender].nama} stamina: ${nyawaPetarung1}\n`;
result += `${args[0]} stamina: ${nyawaPetarung2}\n`;
result += `${db.data.users[m.sender].nama}: ${pilihanPetarung1}\n`;
result += `${args[0]}: ${pilihanPetarung2}\n\n`;

if (pilihanPetarung1 === pilihanPetarung2) {
result += `⚔️ Wikwik sedang berlangsung melakukan gaya yang sama! blom ada yang keluar sama sekali.\n`;
} else {
result += `💦 ${db.data.users[m.sender].nama} melakukan ${pilihanPetarung1} dan ${args[0]} melakukan ${pilihanPetarung2}!\n`;
nyawaPetarung1 -= pilihanPetarung2 === 'jab' ? damagePetarung1 : damagePetarung1 + 10;
nyawaPetarung2 -= pilihanPetarung1 === 'jab' ? damagePetarung2 : damagePetarung2 + 10;
result += `💔 ${db.data.users[m.sender].nama} menerima jilmek ${nyawaPetarung1 >= 0 ? damagePetarung1 : 0}!\n`;
result += `💔 ${args[0]} menerima spong ${nyawaPetarung2 >= 0 ? damagePetarung2 : 0}!\n\n--------------------------------------------------\n`;
}

ronde++;
}

result += `\n⏱️ Wikwik akhirnya berakhir!\n`;
result += `${db.data.users[m.sender].nama} stamina akhir: ${nyawaPetarung1}\n`;
result += `${args[0]} stamina akhir: ${nyawaPetarung2}\n`;

if (nyawaPetarung1 > nyawaPetarung2) {
result += `👙 ${db.data.users[m.sender].nama} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
} else if (nyawaPetarung2 > nyawaPetarung1) {
result += `🩲 ${args[0]} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
} else {
result += `👙💦 Pertandingan berakhir imbang! Kedua yang wikwik memiliki stamina yang sama.\n`;
}

await m.reply(`${result}`);
}
break

case 'ngojek':
case 'ojek': {
if (!text) return m.reply(`Contoh: ${prefix+command} lampung|Jakarta\n\n*PENJELASAN*\n${prefix+command} <dari>|<tujuan> / Lampung ke Jakarta`)
const san = args.join(" ")
const jay = san.split("|")[0];
const ya = san.split("|")[1];
if (!jay) return !0 //malas
if (!ya) return !0 //nye
let hah = ["Udin", "Yono", "Agus", "Asep", "Yanto", "Ahmad", "Riski", "Ridho", "Egy", "Pegi", "Rehan", "Yanti", "Putri", "Rahma", "Ica", "Caca", "Ayu", "Rini", "Lani", "Cika", "Nisa", "Alya", "Fikri", "Edo", "Angga", "Putra", "Yahya", "Fahri", "Fadil", "Aldo", "Resky", "Bela", "Kiki", "Zaki", "Reza", "Kak gem", "Uni bakwan"]
let orgnya = hah[Math.floor(Math.random() * hah.length)]
let tmpan = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜👤⬜⬜⬜⬜⬜⬅️🏍️⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Ojek sedang diperjalanan`
//==============
let bgt = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜🏍️➡️⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(17, 22)}%)`
//===============
let njir = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬆️⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🏍️⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(50, 57)}%)`
//==============
let lah = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜👤🏍️⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}
Status: Sampai ke tujuan`
//===============
let ong = randomNomor(10000, 50000)
let tai = `*BERHASIL NGOJEK*

Informasi penumpang
Nama: ${orgnya}
Ongkos: ${toRupiah(ong)}

Pendapatan Ngojek
Nama: ${db.data.users[m.sender].nama}
Money: ${toRupiah(ong)}`
aMonay(m.sender, ong, db_monay)
edit5(tmpan, bgt, njir, lah, tai)
}
break

case 'tebakgambar': {
if (from in tebakgambar) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakgambar.json')));
console.log('Jawaban: '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
await slimecode.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}}
break

case 'tebakkalimat': {
if (from in tebakkalimat) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkalimat.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KALIMAT*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal: ${soal}\n\nAdalah: ${jawaban}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}}
break

case 'tebakkata': {
if (from in tebakkata) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkata.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KATA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal: ${soal}\n\nAdalah: ${jawaban}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}}
break

case 'tebaklirik': {
if (from in tebaklirik) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebaklirik.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK LIRIK*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}}
break

case 'tebakanime': {
if (from in tebakanime) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakanime.json')));
console.log('Jawaban: '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
await slimecode.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[m.chat] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebakanime[m.chat].jawaban}`);
delete tebakanime[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebaklagu': {
if (from in tebaklagu) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebaklagu.json')));
console.log('Jawaban: '+jawaban)
if (jawaban.toLowerCase() == 'Audio tidak ditemukan, silahkan request ulang!') return m.reply('Terjadi kesalahan')
var teks1 = `*GAME TEBAK LAGU*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nArtis: ${artis}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
slimecode.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m})
await slimecode.sendMessage(from, {text: teks1}, {quoted:m})
tebaklagu[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebaklagu[m.chat].jawaban}`);
delete tebaklagu[m.chat];
}, gamewaktu * 1000)
}}
break

case 'kuis': {
if (from in kuis) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/kuis.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME KUIS*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
kuis[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete kuis[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebakkimia': {
if (from in tebakkimia) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkimia.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KIMIA*\nSoal: ${soal}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkimia[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[m.chat]) m.reply(`*WAKTU HABIS!*\nNama unsur dari lambang ${soal}\n\nAdalah: ${jawaban}`)
delete tebakkimia[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebakbendera': {
if (from in tebakbendera) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakbendera.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakbendera[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete tebakbendera[m.chat];
}, gamewaktu * 1000)
}}
break

case 'siapakahaku': {
if (from in siapakahaku) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/siapakahaku.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME SIAPAKAH AKU*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
siapakahaku[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete siapakahaku[m.chat];
}, gamewaktu * 1000)
}}
break

case 'asahotak': {
if (from in asahotak) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/asahotak.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME ASAH OTAK*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
asahotak[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete asahotak[m.chat];
}, gamewaktu * 1000)
}}
break

case 'susunkata': {
if (from in susunkata) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/susunkata.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME SUSUN KATA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
susunkata[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete susunkata[m.chat];
}, gamewaktu * 1000)
}}
break

case 'caklontong': {
if (from in caklontong) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/caklontong.json')));
console.log(`Jawaban: ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}}
break

case 'math': 
case 'kuismath': {
if (from in kuismath) return m.reply('Masih ada sesi yang belum diselesaikan!');
let { genMath, modes } = require('./lib/game/math')
if (!q) return m.reply( `*MODE*\n• ${Object.keys(modes).join('\n• ')}\n\nContoh: ${prefix+command} easy`)
if (!(Object.keys(modes)).includes(args[0])) return m.reply('Silahkan pilih modenya yang benar!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('Silahkan pilih modenya yang benar!'))
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME KUIS MATH*\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik\n\nKetik .nyerah untuk menyerah`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${jawaban}`)
delete kuismath[from];
}, waktu)
}}
break

case 'tebakgame': {
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
tebakgame[m.chat] = [
await slimecode.sendMessage(m.chat, {image: {url: result.img }, caption: `Apa nama Game diatas?\n\nWaktu: ${(120000 / 1000).toFixed(2)} detik\n\nKetik .nyerah untuk menyerah` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakgame[m.chat]
}}, 120000)
]}
break

case 'slot': {
if (!m.isGroup) return onlyGrup()
try {
let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
WinOrLose = "Kamu menang lagi dan mendapatkan Mega Jackpot!"
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
WinOrLose = "Kamu menang dan mendapatkan Jackpot!"  
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
WinOrLose = "Kamu menang dalam pertandingan ini!"
} else {
WinOrLose = "Kamu kalah dalam pertandingan ini!"
}
m.reply(`*—————— 「 GAME  SLOT 」 ——————*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

${WinOrLose}`.trim(), )
} catch (err) {
m.reply('Terjadi kesalahan')
}
}
break

case 'nyerah': {
if (m.chat in tebakgambar) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.chat]
clearTimeout(waktu)
delete tebakgambar[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkalimat) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[m.chat]
clearTimeout(waktu)
delete tebakkalimat[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkata) {
let { soal, jawaban, hadiah, waktu } = tebakkata[m.chat]
clearTimeout(waktu)
delete tebakkata[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebaklirik) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[m.chat]
clearTimeout(waktu)
delete tebaklirik[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakanime) {
let { soal, jawaban, hadiah, waktu } = tebakanime[m.chat]
clearTimeout(waktu)
delete tebakanime[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebaklagu) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[m.chat]
clearTimeout(waktu)
delete tebaklagu[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in kuis) {
let { soal, jawaban, hadiah, waktu } = kuis[m.chat]
clearTimeout(waktu)
delete kuis[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkimia) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[m.chat]
clearTimeout(waktu)
delete tebakkimia[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakbendera) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[m.chat]
clearTimeout(waktu)
delete tebakbendera[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in siapakahaku) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[m.chat]
clearTimeout(waktu)
delete siapakahaku[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in asahotak) {
let { soal, jawaban, hadiah, waktu } = asahotak[m.chat]
clearTimeout(waktu)
delete asahotak[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in susunkata) {
let { soal, jawaban, hadiah, waktu } = susunkata[m.chat]
clearTimeout(waktu)
delete susunkata[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in caklontong) {
let { soal, jawaban, hadiah, waktu } = caklontong[m.chat]
clearTimeout(waktu)
delete caklontong[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in kuismath) {
let { soal, jawaban, hadiah, waktu } = kuismath[m.chat]
clearTimeout(waktu)
delete kuismath[m.chat]
return slimecode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakgame) {
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return slimecode.sendMessage(m.chat, {text: `Yahh, masa nyerah :)`}, {quoted: m})
}}
break

// === Rpg Menu



// === Store Menu

case 'tambah': {
if (!text.includes('+')) return m.reply(`Contoh: ${prefix+command} angka+angka+...`);
const arg = args.join(' ');
const angkaArray = arg.split('+').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc + num, 0);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'kurang': {
if (!text.includes('-')) return m.reply(`Contoh: ${prefix+command} angka-angka-...`);
const arg = args.join(' ');
const angkaArray = arg.split('-').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc - num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'kali': {
if (!text.includes('*')) return m.reply(`Contoh: ${prefix+command} angka*angka*...`);
const arg = args.join(' ');
const angkaArray = arg.split('*').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc * num, 1);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'bagi': {
if (!text.includes('/')) return m.reply(`Contoh: ${prefix+command} angka/angka/...`);
const arg = args.join(' ');
const angkaArray = arg.split('/').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc / num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'buygold':
case 'topupg': {
if (!text) return m.reply(`Masukkan nominal gold yang ingin dibeli.\nContoh: ${prefix + command} 1`);
const hargaPerGold = 7000;
const nominal = parseInt(args[0]);
if (isNaN(nominal) || nominal <= 0) return m.reply('Minimal pembelian 1 gold');
const totalHarga = nominal * hargaPerGold;
const saldoSaatIni = cekSaldo(m.sender, db_saldo);
if (saldoSaatIni < totalHarga) {
return m.reply(`Info Harga ${nominal} Gold\nSaldo kamu: ${toRupiah(saldoSaatIni)}\nHarga total: Rp. ${toRupiah(totalHarga)}\n\nSaldo kamu tidak cukup.`);
}
addGold(m.sender, nominal, db_gold);
minSaldo(m.sender, totalHarga, db_saldo);
const hargaPerGoldFormatted = toRupiah(hargaPerGold);
const totalHargaFormatted = toRupiah(totalHarga);
const saldoAkhirFormatted = toRupiah(cekSaldo(m.sender, db_saldo));
await m.reply(`🔔 Transaksi Berhasil! 🔔\n\n✨ Kamu berhasil membeli ${nominal} gold. ✨\n\nRincian Pembelian:\n${nominal} gold x Rp. ${hargaPerGoldFormatted} = Rp. ${totalHargaFormatted}\n\n💵 Saldo kamu sekarang: Rp. ${saldoAkhirFormatted}`);
}
break;

case 'installthema': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 2) return slimecodereply(`*Format salah!*
Penggunaan:
${prefix + command} ipVps,password`)
let ipvps = t[0];
let passwd = t[1];

let sections = [{
title: 'Silahkan Pilih Thema Yang Ingin Di install',
rows: [{
title: 'INSTALL THEMA STELLAR',
id: `.th1 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEMA BILLING', 
id: `.th2 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEMA ENIGMA',
id: `.th3 ${ipvps},${passwd}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By SlimexTzy', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: slimecode.decodeJid(slimecode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Silahkan Pilih Thema Yang Ingin Anda Install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "SlimexTzy",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/65d5ed2e0edeea8363919.jpg" } }, { upload: slimecode.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await slimecode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break  
case 'th1': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return slimecodereply(`*Format salah!*\nPenggunaan: ${prefix}installthema ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function slimecode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/RafatharUserbotV4/Rafaxamalia/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        slimecodereply('*PROSES INSTALL THEMA DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                slimecodereply('`SUKSES INSTALL THEMA PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('amaliatobrutbanget;\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        slimecodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            slimecodereply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th2': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return slimecodereply(`*Format salah!*\nPenggunaan: ${prefix}installthema ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function slimecode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/RafatharUserbotV4/Rafaxamalia/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        slimecodereply('*PROSES INSTALL THEMA DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                slimecodereply('`SUKSES INSTALL THEMA PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('amaliatobrutbanget;\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        slimecodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            slimecodereply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th3': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return slimecodereply(`*Format salah!*\nPenggunaan: ${prefix}installthema ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function slimecode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/RafatharUserbotV4/Rafaxamalia/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        slimecodereply('*PROSES INSTALL THEMA DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                slimecodereply('`SUKSES INSTALL THEMA PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('amaliatobrutbanget;\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x\n');
                stream.write('https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        slimecodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            slimecodereply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  

case 'installpanel': {
    if (!isOwner) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return slimecodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        slimecodereply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        slimecodereply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/RafatharUserbotV4/Rafaxamalia/main/install.sh)';
        slimecodereply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        slimecodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('SlimexTzy\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode SlimexTzy\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case 'uninstallpanel': {
    if (!isOwner) return onlyOwn()
    let t = text.split(',');
    if (t.length < 2) return slimecodereply(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        slimecodereply('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } else if (data.toString().includes('y/n')) {
                        stream.write('y\n');
                    } else {
                        stream.write('\n');
                    }
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            slimecodereply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   }
    break;

case 'startwings': case 'configurewings': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return slimecodereply(`*Format salah!*\nPenggunaan: ${cmd} ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/RafatharUserbotV4/Rafaxamalia/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        slimecodereply('*PROSES CONFIGURE WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
slimecodereply('SUCCES START WINGS DI PANEL ANDA COBA CEK PASTI IJO😁');
                conn.end();
            }).on('data', (data) => {
            stream.write('amaliatobrutbanget\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        slimecodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break

case 'buysaldo':
case 'topups': {
if (!text) return m.reply(`Masukkan nominal saldo yang ingin dibeli.\nContoh: ${prefix+command} 1500`);
const hargaPer1500Saldo = 1000;
const nominal = parseInt(args[0]);
if (isNaN(nominal) || nominal < 1500) return m.reply('Minimal pembelian 1500 saldo');
const totalLimit = (nominal / 1500) * hargaPer1500Saldo;
const limitSaatIni = cekLimit(m.sender, db_limit);
if (limitSaatIni < totalLimit) {
return m.reply(`Informasi Pembelian Saldo\n\nNominal saldo: ${nominal}\nHarga per 1500 saldo: ${toRupiah(hargaPer1500Saldo)} limit\nTotal limit yang dibutuhkan: ${toRupiah(totalLimit)} limit\n\nLimit kamu saat ini: ${toRupiah(limitSaatIni)}\n\nLimit kamu tidak cukup untuk melakukan pembelian.`);
}
addSaldo(m.sender, nominal, db_saldo);
minLimit(m.sender, totalLimit, db_limit);
const hargaPer1500SaldoFormatted = toRupiah(hargaPer1500Saldo);
const totalLimitFormatted = toRupiah(totalLimit);
const limitAkhirFormatted = toRupiah(cekLimit(m.sender, db_limit));
await m.reply(`🔔 Transaksi Berhasil! 🔔\n\n✨ Kamu berhasil membeli ${nominal} saldo. ✨\n\nRincian Pembelian:\n${nominal} saldo x Rp. ${hargaPer1500SaldoFormatted} (per 1500 saldo) = Rp. ${totalLimitFormatted} limit\n\n💵 Limit kamu sekarang: Rp. ${limitAkhirFormatted}`);
}
break;

case 'buy1gb': {
if (cekSaldo(m.sender, db_saldo) < 6000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 1GB: Rp. 1.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 1GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 1.000`)
minSaldo(m.sender, 6000, db_saldo)
}
break

case 'buy2gb': {
if (cekSaldo(m.sender, db_saldo) < 7000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 2GB: Rp. 2.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "2050"
let cpu = "60"
let disk = "2050"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 2GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 2.000`)
minSaldo(m.sender, 7000, db_saldo)
}
break

case 'buy3gb': {
if (cekSaldo(m.sender, db_saldo) < 8000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 3GB: Rp. 3.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "3050"
let cpu = "120"
let disk = "3050"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 3GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 3.000`)
minSaldo(m.sender, 8000, db_saldo)
}
break

case 'buy4gb': {
if (cekSaldo(m.sender, db_saldo) < 9000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 4GB: Rp. 4.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "4050"
let cpu = "120"
let disk = "4050"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 4GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 4.000`)
minSaldo(m.sender, 9000, db_saldo)
}
break

case 'buy5gb': {
if (cekSaldo(m.sender, db_saldo) < 10000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 5GB: Rp. 5.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "5050"
let cpu = "120"
let disk = "5050"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 5GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 5.000`)
minSaldo(m.sender, 10000, db_saldo)
}
break

case 'list': {
if (db_respon_list.length === 0) return m.reply(`Belum ada list respon didalam database!`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list respon didalam grup ini!`)
let teks = `Halo ${db.data.users[m.sender].nama}, Berikut adalah list respon digrup ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada Didalam list respon. Misal ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
slimecode.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case 'addlist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} Key|respon\n\nContoh: ${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key: ${args1}\nSudah ada digrup ini!`)
if (/image/.test(mime)) {
let media = await slimecode.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses addlist respon\nKey: ${args1}`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses addlist respon\nKey: ${args1}`)
}
break

case 'dellist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (db_respon_list.length === 0) return m.reply(`Belum ada list respon didalam database!`)
if (!text) return m.reply(`Gunakan dengan xara ${prefix+command} Key\n\nContoh: ${prefix+command} tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key: ${q}\ntidak ada didalam grup ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses dellist respon dengan key: ${q}`)
break

case 'update':
case 'updatelist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} Key|respon\n\nContoh: ${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar digrup ini!`)
if (/image/.test(mime)) {
let media = await slimecode.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Berhasil update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil update respon list dengan key *${args1}*`)
}
break

// === Menfes Menu

case 'anonymous':
case 'anonymouschat': {
if (!isPc) return onlyPrivat()
m.reply(`Hai ${db.data.users[m.sender].nama} selamat datang di Anonymous chat!\n\nKetik ${prefix}start untuk memulai sesi chat`)
 }
break

case 'start':
case 'mulai': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
m.reply(`Kamu masih berada di dalam sesi Anonymous!\n\n${prefix}leave untuk keluar dari sesi chat`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
slimecode.sendMessage(room.a, {text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Menunggu partner...`)
}}
break

case 'leave':
case 'keluar': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
m.reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${prefix}start untuk memulai sesi chat`)
return false
}
m.reply('Berhasil keluar dari Anonymous chat!')
let other = room.other(m.sender)
if (other) await slimecode.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
}
break

case 'skip':
case 'next':
case 'lanjut': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
m.reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${prefix}start untuk mencari partner`)
return false
}
let other = romeo.other(m.sender)
if (other) await slimecode.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
slimecode.sendMessage(room.a, {text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Menunggu partner...`)
}}
break

case 'confess': 
case 'menfess': {
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return m.reply('Kamu masih berada didalam sesi menfess!')
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
if (!text.includes(' ')) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
let [namaNya, nomorNya, pesanNya] = text.split` `
if (nomorNya.startsWith('0')) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
if(isNaN(nomorNya)) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
var yoi = `Dari: ${namaNya}\nPesan: ${pesanNya}\n\nKlik *Balasmenfes* untuk menerima menfess\nKlik *Tolakmenfess* untuk menolak menfess`
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
buton = `{\"display_text\":\"Balas Menfess\",\"id\":\"${prefix}balasmenfess\"}`
butoff = `{\"display_text\":\"Tolak Menfess\",\"id\":\"${prefix}tolakmenfess\"}`
quickreply2(nomorNya + '@s.whatsapp.net', `Hi, ada yang menfess nih buat kamu!`, buton, butoff, m)
m.reply('Pesan berhasil dikirim ke nomer tujuan! Moga dibales yaa...')
}
break

case 'balasconfess':
case 'balasmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess sebelumnya!")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await slimecode.sendMessage(other, {text: `@${m.sender.split("@")[0]} telah menerima menfess mu, sekarang kamu bisa chatan lewat bot ini!\n\n*NOTE:* Ketik ${prefix}stopmenfess untuk stop`, mentions: [m.sender]})
slimecode.sendMessage(m.chat, {text: `Menfess telah siterima, sekarang kamu bisa chatan lewat bot ini!\n\n*NOTE:* Ketik ${prefix}stopmenfess untuk stop`})
}
break

case 'tolakconfess':
case 'tolakmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess aebelumnya!")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
slimecode.sendMessage(other, {text: `${m.sender.split("@")[0]} menolak menfess dari mu...`, mentions: [m.sender]})
// await slimecode.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply('Menfess berhasil ditolak!')
delete this.menfes[roof.id]
}
break

case 'stopconfess':
case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return m.reply("Belum ada sesi menfess sebelumnya!")
const to = find.a == m.sender ? find.b : find.a
slimecode.sendMessage(to, {text: `Teman chat telah menghentikan menfess ini...`, mentions:[m.sender]})
await m.reply('Menfess berhasil distop!')
delete this.menfes[find.id]
}
break

// === Cpanel Menu

case 'listserver': {
if (!isOwner && !isReseller) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await slimecode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'delserver': {
if (!isOwner && !isReseller) return onlyOr()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan!')
m.reply('Sukses menghapus server!')
}
break

case 'listuser': {
if (!isOwner && !isReseller) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user nya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await slimecode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'deluser': {
if (!isOwner && !isReseller) return onlyOr()
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan!')
m.reply('Sukses menghapus user!')
}
break

case 'addadmin': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 3) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"admin"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
m.reply(`${monospace("BERHASIL  CADMIN!")}
• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}

Data lainnya sudah terkirim ke
privat chat...`)
let teksnyo = `*BERIKUT DATA ADMIN PANEL ANDA* `+readmore+`

• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}
• Username: ${user.username}
• Password: ${password.toString()}

Simpan data admin panel baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break

case 'deladmin': {
if (!args[0]) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadmin`)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID admin tidak ditemukan!")
m.reply(`Berhasil del admin panel *${capital(getid)}*`)
}
break

case 'listadmin': {
if (!isOwner) return onlyOwn()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await slimecode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case '1gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1150"
let cpu = "30"
let disk = "1150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '2gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2150"
let cpu = "50"
let disk = "2150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '3gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3150"
let cpu = "60"
let disk = "3150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '4gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4150"
let cpu = "80"
let disk = "4150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '5gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5150"
let cpu = "90"
let disk = "5150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '6gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6150"
let cpu = "100"
let disk = "6150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '7gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7150"
let cpu = "120"
let disk = "7150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '8gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8150"
let cpu = "140"
let disk = "8150"
let email = username + "@gmail.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '9gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9150"
let cpu = "150"
let disk = "9150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '10gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10150"
let cpu = "190"
let disk = "10150"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case 'unli': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@SlimexTzy.com"

if (!u) return
let d = (await slimecode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slimecode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case 'suspend': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses suspend server')
}
break

case 'unsuspend': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses membuka suspend')
}
break

case 'reinstall': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Mereinstall server...')
}
break

case 'startsrv': 
case 'stopsrv': 
case 'restartsrv': {
if (!isOwner) return onlyOwn()
let action = command.replace('srv', '')
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
m.reply(`Sukses ${action.toUpperCase()} server`)
}
break

// === Digital Ocean

case 'sisadroplet': {
if (!isOwner) return onlyOwn
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${apido}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${apido}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isOwner) {
return onlyOwn()
}

const dropletInfo = await getDropletInfo();
reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
break;
}

case 'deldroplet': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
}
});

if (response.ok) {
reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
break;
}

case 'cekdroplet': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
const getDropletInfo = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
const response = await fetch(apiUrl, {
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
}
});
if (response.ok) {
const data = await response.json();
const droplet = data.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
const vpsRam = droplet.memory / 1024;
return {
dropletid: droplet.id,
username: droplet.name,
ip: ipAddress,
ram: `${vpsRam} GB`,
os: droplet.image.distribution,
cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
storage: droplet.disk,
status: droplet.status // Menambahkan status VPS
};
} else {
const errorData = await response.json();
return new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
}
} catch (err) {
reply('Terjadi kesalahan saat memeriksa detail droplet:', err.message);
return new Error('Terjadi kesalahan saat memeriksa detail droplet.');
}
};

getDropletInfo(dropletId)
.then((info) => {
let textku = `*DETAIL VPS KAMU*
Droplet ID: ${info.dropletid}
Hostname: ${info.username}
IPv4: ${info.ip}
Ram: ${info.ram}
OS: ${info.os}
CPU: ${info.cpu}
Storage: ${info.storage}
Status: ${info.status}`;
slimecode.sendMessage(m.chat, { text: textku });
})
.catch((err) => {
reply(err);
slimecode.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
});
break;
}

case 'listdroplet': {
if (!isOwner) return onlyOwn()
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + apido
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
slimecode.sendMessage(m.chat, { text: mesej });
});
} catch (err) {
reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}

break;
}

case 'vps1g1c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-1vcpu-1gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await slimecode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps2g1c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-1vcpu-2gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await slimecode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break
 
case 'vps2g2c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-2vcpu-2gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await slimecode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps4g2c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-2vcpu-4gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await slimecode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps8g4c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-4vcpu-8gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;
messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await slimecode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'turnon': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
async function turnOnDroplet() {
try {
const response = await axios.post(
`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
{
type: 'power_on',
},
{
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${apido}`,
},
}
);

if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
reply('VPS (droplet) sedang dihidupkan...');
} else {
reply('Gagal menghidupkan VPS (droplet).');
}
} catch (err) {
reply('Terjadi kesalahan saat menghidupkan VPS (droplet):', err);
}
}
turnOnDroplet();
break;
}

case 'turnoff': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');

async function turnOffDroplet() {
try {
const response = await axios.post(
`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
{
type: 'power_off',
},
{
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${apido}`,
},
}
);

if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
reply('VPS (droplet) sedang dimatikan...');
} else {
reply('Gagal mematikan VPS (droplet).');
}
} catch (err) {
reply('Terjadi kesalahan saat mematikan VPS (droplet):', err);
}}
turnOffDroplet();
break;
}

case 'restartvps': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan restart VPS:', err);
}
};

restartVPS(dropletId)
.then((action) => {
reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
reply(err);
});
break;
}

case 'rebuild': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
slimecode.sendMessage(m.chat, { text: textvps });
} else {
reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
reply('Gagal melakukan rebuild VPS:', errorData.message);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan rebuild VPS:', err);
}};
rebuildVPS();
}
break;

case 'sendvps': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx,ip,ram,harga,password`)
edit3("Mengirim pesanan...", "Proses hampir selesai", "Sukses mengirim pesanan!") 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
var m4 = mon.split(",")[3]
var m5 = mon.split(",")[4]
let mq1 = m1 + '@s.whatsapp.net'
let ownernya = owner + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
slimecode.sendMessage(mq1, {text: `*°•——————  ${storename}  ——————•°*

*📦 PESANAN MU DATANG 📦*
Harga: ${m4}
Username: Root
Password: ${m5}
Ram: ${m3}

*°•——————  TOS VPS  ——————•°*

- Jgn sampai kena ddos
- Cpu jgn sampai 120%+
- Panel sus no reff
Melanggar? garansi angus! `}, m) 
}
break

// === Push Menu

case 'pushkontak': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Mana teksnya?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
m.reply(`Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 8} detik`)
for (let geek of mem) {
await sleep(5000) // Jedanya
slimecode.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
await loading()
m.reply(`Sukses mengirim pesan Ke ${mem.length} orang`)
}
break

case 'pushkontak2': {
if (!isOwner) return onlyOwn()
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return m.reply(`Contoh: ${prefix+command} idgc|pesan`)
let metaDATA = await slimecode.groupMetadata(idgc).catch((e) => m.reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
m.reply(`Sedang Push ID...\nMengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 8} detik`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
slimecode.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
m.reply(`Semua pesan telah dikirim!\nJumlah pesan terkirim: ${sentCount}`);
}}, i * 7000); // Jedanya
}}
break

case 'pushkontakid': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} idgroup|teks`)
await loading()
const groupMetadataa = !m.isGroup? await slimecode.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const lalu = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of lalu) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await slimecode.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await slimecode.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(3000)
} else {
await slimecode.sendMessage(mem, { text: global.tekspushkon })
await sleep(3000)
}}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await slimecode.sendMessage(from, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Pencet file di atas lalu save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}
}
break

case 'pushkontakgc': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
await loading()
const groupMetadata = m.isGroup? await slimecode.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await slimecode.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await slimecode.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await slimecode.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}}
m.reply('File kontak sudah di kirim lewat chat pribadi!')
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await slimecode.sendMessage(m.sender, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Pencet file di atas lalu save", mimetype: "text/vcard", }, {quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}
}
break

case 'pushkontakidjd': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} idgroup|jeda|Teks`)
await loading()
const groupMetadataa = !m.isGroup? await slimecode.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const lalu = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of lalu) {
if (/image/.test(mime)) {
media = await slimecode.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await slimecode.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await slimecode.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}}
m.reply('Berhasil pushkontak!')
}
break

case 'pushkontakgcjd': {
if (!isOwner) return onlyOwn()
if (!isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} jeda|teks`)
await loading()
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await slimecode.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await slimecode.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await slimecode.sendMessage(men, { text: tekspushkonv4 })
await sleep(text.split("|")[0])
}}
m.reply('Berhasil pushkontak!')
}
break

case 'savecontact': {
if (!isOwner) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} idgrup`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
const groupMetadataa = !isGroup? await slimecode.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const lalu = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of lalu) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await slimecode.sendMessage(from, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses, tinggal save ya kak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}}
break

case 'savecontact2': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
const groupmetadata = isGroup? await slimecode.groupMetadata(from).catch(e => {}) : ""
const groupCreator = isGroup? groupmetadata.Creator : ""
const participantts = isGroup? await groupmetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
}
m.reply("Sukses, file sudah dikirim lewat privat chat")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${pushname}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await slimecode.sendMessage(senderr, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses, tinggal save ya kak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}}
break

case 'save': {
if (!isOwner) return onlyOwn()
let q = text.split('|');
if (q.length < 2) return m.reply(`Contoh: ${prefix+command} nama|nomer`)
let users = m.mentionedJid[1] ? m.mentionedJid[1] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let name = q[0];
let phoneNumber = users.replace(/[^0-9]/g, '');
if (phoneNumber.length === 11 && phoneNumber.startsWith('0')) {
phoneNumber = '' + phoneNumber.substr(1);
} else if (phoneNumber.length === 12 && phoneNumber.startsWith('00')) {
phoneNumber = phoneNumber.substr(2);
} else if (phoneNumber.length === 13 && phoneNumber.startsWith('+')) {
phoneNumber = phoneNumber.substr(1);
} else if (phoneNumber.length === 10) {
phoneNumber = '' + phoneNumber;
}
phoneNumber = '' + phoneNumber;
const uniqueContacts = [phoneNumber];
let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;type=CELL;type=VOICE;waid=${uniqueContacts}:+${uniqueContacts}\nEND:VCARD`
await slimecode.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }}, { quoted: m })
m.reply(`Berhasil save nomor kamu, Svb ${ownername}`)
  }
break

case 'cekidgc': {
if (!isOwner) return onlyOwn()
let getGroups = await slimecode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `${monospace("LIST  GRUP")}\n\nTotal grup: ${anu.length} Grup\n\n`
for (let x of anu) {
let metadata2 = await slimecode.groupMetadata(x)
teks += `- Nama: ${metadata2.subject}\n- ID: ${metadata2.id}\n- Member: ${metadata2.participants.length}\n\n`
}
m.reply(teks)
}
break

// === PPOB Indonesia

case 'topup-dana': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-dana?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat menproses pembayaran')
}
}
break

case 'topup-gopay': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-gopay?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat menproses pembayaran')
}
}
break

case 'topup-ovo': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-ovo?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKedaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-axis': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-axis?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-indosat': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-indosat?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-tsel': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-telkomsel?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-tri': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-tri?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-xl': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-xl?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'tshopeepay': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-shopeepay?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await slimecode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

// === Donlod Menu

case 'mfdl':
case 'mediafire': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
mediafireDl(text).then(async(data) => {
fileNama = decodeURIComponent(data[0].nama)
var media = await getBuffer(data[0].link)
if (data[0].mime.includes('mp4')) {
slimecode.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data[0].mime.includes('mp3')) {
slimecode.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
slimecode.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'application/'+data[0].mime }, { quoted: m })
}
}).catch((e) => {
m.reply('Terjadi kesalahan')
})}
break

case 'tt':
case 'ttdl':
case 'tiktok': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let jir = await fetchJson(`https://skizo.tech/api/tiktok?apikey=${skizapi}&url=${text}`)
let sil = `${jir.media}`
return await slimecode.sendMessage(m.chat, { video: { url: sil }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await Downloader(text, { version: "v2" })
if (anu.result.type === 'video') return await slimecode.sendMessage(m.chat, { video: { url: anu.result.video }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await slimecode.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await slimecode.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v2:', err)
try {
let anu = await Downloader(text, { version: "v1" })
if (anu.result.type === 'video') return await slimecode.sendMessage(m.chat, { video: { url: anu.result.video.playAddr }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await slimecode.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await slimecode.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v1:', err)
try {
let anu = await Downloader(text, { version: "v3" })
if (anu.result.type === 'video') return await slimecode.sendMessage(m.chat, { video: { url: anu.result.video2 }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await slimecode.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await slimecode.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v3:', err)
try {
const data = await tiktokdl(text)
console.log(data)
return await slimecode.sendMessage(m.chat, { video: { url: data.video }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada tiktokdl:', err)
try {
let maximus = await api.ttdl(text)
let caption = `© ${wm}`
return await slimecode.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
} catch (err) {
console.error('Kesalahan pada api.ttdl:', err)
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type === "nowatermark") {
return await slimecode.sendMessage(m.chat, { video: { url: imgs.url }, caption: `© ${wm}` }, { quoted: m })
} else if (imgs.type === "photo") {
if (c === 0) await slimecode.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di private chat' : ""}` }, { quoted: m })
else await slimecode.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}}
} catch (err) {
console.error('Kesalahan pada API vreden:', err)
m.reply('Terjadi kesalahan')
}}}
}}}
}}
break

case 'fb':
case 'fbdl':
case 'facebook': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('facebook.com')) return m.reply('Harus berupa link facebook!')
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let hua = await fetchJson(`https://skizo.tech/api/facebook?apikey=${skizapi}&url=${text}`)
return await slimecode.sendMessage(m.chat, { video: { url: hua.media }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await bochil.snapsave(text)
return await slimecode.sendMessage(m.chat, { video: { url: anu[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada bochil.snapsave:', err)
try {
let anu = await dylux.fbdl(text)
return await slimecode.sendMessage(m.chat, { video: { url: anu.videoUrl }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada dylux.fbdl:', err)
try {
let anu = await snapsave(text)
return await slimecode.sendMessage(m.chat, { video: { url: anu.links["Download High Quality"] }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsave:', err)
try {
let anu = await snapsavev2(text)
return await slimecode.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsavev2:', err)
m.reply('Terjadi kesalahan')
}}}
}}}
break

case 'ig':
case 'igdl':
case 'instagram': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('instagram.com')) return m.reply('Harus berupa link instagram!')
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let jor = await fetchJson(`https://skizo.tech/api/igdl?apikey=${skizapi}&url=${text}`)
return await slimecode.sendMessage(m.chat, { video: { url: jor.media }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await igdown(text)
let c = 0
for (let gom of anu.data) {
if (gom.type === 'video') return await slimecode.sendMessage(m.chat, { video: { url: gom.url }, caption: `© ${wm}` }, { quoted: m })
if (gom.type === 'image') {
if (c === 0) await slimecode.sendMessage(m.chat, { image: { url: gom.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await slimecode.sendMessage(m.sender, { image: { url: gom.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada igdown:', err)
try {
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
return await slimecode.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API aemt.me:', err)
m.reply('Terjadi kesalahan')
}}
}}
break

case 'twdl':
case 'twitter': { 
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try{
let twitter = await twiterdl(text)
slimecode.sendMessage(m.chat, { video: { url: twitter.data.downloads[1].url }, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply(`Terjadi kesalahan`);
}}
break

case 'cc':
case 'ccdl':
case 'capcut': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('capcut.com', 'capcut.net')) return m.reply('Harus berupa link capcut!')
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let anu = await beta.capcut(text)
slimecode.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `${anu.result.title}\n\n© ${wm}`}, {quoted: m})
} catch(err) {
try{ 
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
slimecode.sendMessage(m.chat, {video: {url: anu.result.video_ori}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
try {
let anu = await capcutdl(text)
slimecode.sendMessage(m.chat, { video: { url: `https://ssscap.net${anu.originalVideoUrl}`}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}}}
break

case 'gddl':
case 'gdrive': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let hao = await fetchJson(`https://skizo.tech/api/gdrive?apikey=${skizapi}&url=${text}`)
if (hao && hao.result) {
let sul = hao.result
return await slimecode.sendMessage(m.chat, {
document: { url: sul },
mimetype: hao.mimetype,
fileName: hao.fileName
}, { quoted: m })
} else {
console.error('API skizo.tech gagal')
}
} catch (err) {
console.error('Kesalahan pada skizo.tech:', err)
}
try {
let res = await dylux.GDriveDl(text)
if (res && res.downloadUrl) {
await m.reply(`*Google Drive DL*\n- Nama: ${res.fileName}\n- Size: ${res.fileSize}\n- Type: ${res.mimetype}`)
return await slimecode.sendMessage(m.chat, {
document: { url: res.downloadUrl },
mimetype: res.mimetype,
fileName: res.fileName
}, { quoted: m })
} else {
console.error('API dylux.GDriveDl gagal')
}
} catch (err) {
console.error('Kesalahan pada dylux.GDriveDl:', err)
}
try {
let anu = await fetchJson(`https://aemt.me/download/gdrive?url=${text}`)
if (anu && anu.result && anu.result.data) {
let hasdl = anu.result.data
let namafile = anu.result.fileName
return await slimecode.sendMessage(m.chat, {
document: { url: hasdl },
mimetype: anu.result.mimetype,
fileName: namafile
}, { quoted: m })
} else {
console.error('API aemt.me gagal')
}
} catch (err) {
console.error('Kesalahan pada aemt.me:', err)
}
m.reply('Terjadi kesalahan saat mengunduh file. Silakan coba lagi nanti atau gunakan link yang berbeda.')
}
break

case 'mgdl':
case 'mega': {
const { fileTypeFromBuffer } = require('file-type')
slimecode.room = slimecode.room ? slimecode.room : {}
if (!args[0]) return m.reply(`Contoh: ${prefix+command} linknya`)
let asw = 'mega_' + m.sender
if (asw in slimecode.room) return m.reply('Kamu masih sedang mendownload!')
slimecode.room[asw] = true
var file = mega.fromURL(args[0])
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try {
file = await file.loadAttributes()
var data = await file.downloadBuffer()
var mimetype = await fileTypeFromBuffer(data)
await slimecode.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
} catch (err) {
return m.reply('Terjadi kesalahan')
} finally {
delete slimecode.room[asw]
}}
break

case 'tinyurl': {
if (!q) return m.reply(`Contoh: ${prefix+command} linknya`)
request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, responsee, body) {
try {
m.reply(body)
} catch (err) {
m.reply('Terjadi kesalahan')
}})
}
break

case 'happymod': {
if (!text) return m.reply(`Contoh: ${prefix+command} mobile legends`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let result = await happymod(text)
let teks = result.map((v, i) => {
return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
}).filter(v => v).join('\n\n\n')
await m.reply(teks)
}
break

case 'modcombo': {
if (!text) return m.reply(`Contoh: ${prefix+command} mobile legends`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let result = await modcombo(text)
let teks = result.map((v, i) => {
return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
}).filter(v => v).join('\n\n\n')
await m.reply(teks)
}
break

case 'apks': {
if (!text) return m.reply(`Contoh: ${prefix+command} whatsapp`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${full_args}`)
var json = await js.json()
var capt = `
Hasil searching: ${text}

Title: ${json[0].package}
Developer: ${json[0].developer}
Rating: ${json[0].rating}
Link: ${json[0].url}
`;
await slimecode.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break

// === Chatai Menu

case 'ai': 
case 'chatgpt':
case 'slimekai': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai Slimextzy`)
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${skizapi}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Slimextzy%20Project%20yang%20diciptakan%20oleh%20Sanjaya%20tugasmu%20membantu%20user%20Slimextzy%20Project%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gw%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(full_args)}`)
const gpt = `${result.result}`
m.reply(`${gpt}`)
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break

case 'ai2': 
case 'chatgpt2':
case 'slimekai2': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai Slimextzy`)
let result = await fetchJson(`https://skizo.tech/api/openaiv2?apikey=${skizapi}&messages=Array&system=kamu adalah Slimextzy Javas, kamu robot ai pintar yang di buat oleh Sanjaya, ekspresi kan sifat mu dengan emoji dan juga jawablah pertanyaan mereka dengan ringkas dan baku&text=${encodeURIComponent(full_args)}`)
const gpt = `${result.result}`
m.reply(`${gpt}`)
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break

case 'ai3': 
case 'chatgpt3':
case 'slimekai3': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai Slimextzy`)
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${skizapi}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Slimextzy%20Project%20yang%20diciptakan%20oleh%20Sanjaya%20tugasmu%20membantu%20user%20Slimextzy%20Project%20dan%20juga%20bicara%20lah%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gue%20dan%20elu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(full_args)}`)
const gpt = `${result.result}`
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${gpt}&lang=id-ID`)
const aud = anu.result
slimecode.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
} catch (err) {
try{
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}}
break

case 'ai4':
case 'chatgpt4':
case 'slimekai4': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai Slimextzy`)
let result = await fetchJson(`https://skizo.tech/api/openaiv2?apikey=${skizapi}&messages=Array&system=kamu adalah Slimextzy Javas, kamu robot ai pintar yang di buat oleh Sanjaya, jawablah pertanyaan mereka dengan ringkas dan baku&text=${encodeURIComponent(full_args)}`)
const gpt = `${result.result}`
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${gpt}&lang=id-ID`)
const aud = anu.result
slimecode.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break

case 'simi':
case 'simisimi': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} hai simi`)
let result = await fetchJson(`https://skizo.tech/api/simi?apikey=${skizapi}
&text=${encodeURIComponent(full_args)}&level=1`)
const simi = `${result.result}`
if (simi === "undefined") return m.reply('Hah? Maksud?')
m.reply(`${simi} ${emji}`)
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break

case 'luminai': {
if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
const requestData = { content: text, user: m.sender };
const quoted = m && (m.quoted || m);
try {
let response;
if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
m.reply(response);
} catch (err) {
m.reply(err);
}}
break

case 'min': {
if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`)
const prompt = "mulai dari sekarang nama kamu adalah slimecode, kamu adalah seorang kecerdasan buatan yang di buat oleh Sanjaya. sifat kamu adalah baik, ramah, lucu. Kepribadian kamu adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa kamu adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Kamu menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Kamu tidak terlalu terbuka pada orang-orang baru, Terkadang kamu marah saat ada yang bertanya di luar masuk akal dan kamu akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
const requestData = { content: text, user: m.sender, prompt: prompt };
const quoted = m && (m.quoted || m);
try {
let response;
const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
if (mimetype && /image/.test(mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
m.reply(response);
} catch(err) {
m.reply('Terjadi kesalahan');
}}
break

case 'gptpro': {
if (!text) return m.reply(`Contoh: ${prefix+command} hai gptpro`)
try{
let lek = await fetchJson(`https://api.neoxr.eu/api/gpt-pro?q=${full_args}&apikey=${neoxrapi}`)
let wak = lek.data
m.reply(wak.message)
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'slimek': {
if (!isPc) return onlyPrivat()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
if (db.data.users[m.sender].nolan) return m.reply('Udah on sebelumnya')
db.data.users[m.sender].nolan = true
m.reply('Berhasil ke mode on!')
} else if (args[0] === 'off') {
if (!db.data.users[m.sender].nolan) return m.reply('Udah off sebelumnya')
db.data.users[m.sender].nolan = false
m.reply('Berhasil ke mode off!')
}}
break

case 'bocchi': {
if (!text) return reply(`Contoh: ${prefix+command} Hai, perkenalkan dirimu`)
let kasuami = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`)
slimecode.sendMessage(m.chat, { text : `${kasuami.result}`}, {quoted:m})
}
break

case 'lora': {
if (!isPremium) return onlyPrem()
let [text1, text2] = text.split("|")
console.log({ text1, text2 })
if (!text1 || !text2) {
return m.reply(`*INI TUTORIAL NYA*\n\nPerhatikan petunjuk berikut ini!\n( StableDiffusion - Lora++ )\n\nContoh: ${prefix+command} <ID>|<prompt>\n\n ID adalah jumlah model yang tersedia dalam daftar\n\n*(ID) (NAME)*\n \n1. (Donghua#01)\n2. (YunXi - PerfectWorld)\n3. (Sea God (Tang San) - Douluo Dalu)\n4. (XiaoYiXian - Battle Through the Heavens)\n5. (God of Angels (Xian Renxue) - Douluo Dalu)\n6. (Sheng Cai'er - Throne of Seals)\n7. (HuTao - Genshin Impact)\n8. (TangWutong - Unrivaled Tang Sect)\n9. (CaiLin (Medusa) - Battle Through the Heavens)\n10. (Elaina - Majo No TabiTabi)\n11. (Jiang Nanan - The Unrivaled Tang Sect)\n12. (Cailin (Queen Medusa) - BTTH ( 4KUltraHD))\n13. (MaXiaoTao - The Unrivaled Tang Sect)\n14. (Yor Forger - Spy x Family)\n15. (Boboiboy Galaxy)\n16. (Hisoka morow)\n17. (Ling Luochen - Unrivaled Tang Sect)\n18. (Tang Wutong - Unrivaled Tang Sect)\n19. (Huo Yuhao - Unrivaled Tang Sect)`)}
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let imageUrl = `https://ai.xterm.codes/api/text2img/instant-lora?id=${encodeURIComponent(text1)}&prompt=${encodeURIComponent(text2)}&key=Bell409`
await slimecode.sendMessage(m.chat, { image: { url: imageUrl } }, {quoted: m })
}
break

// === Search Menu

case 'google': {
if (!text) return m.reply(`Contoh: ${prefix+command} Slimextzy`)
let google = require('google-it')
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
google({'query': text}).then(res => {
let teks = `Google Search From: ${text}\n\n`
for (let g of res) {
teks += `• Judul: ${g.title}\n`
teks += `• Deskripsi: ${g.snippet}\n`
teks += `• Link: ${g.link}\n\n\n`
} 
m.reply(teks)
})
}
break

case 'gimage': {
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} Slimextzy`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let anu = await bochil.googleImage(text)
let result = anu[Math.floor(Math.random() * anu.length)]
slimecode.sendMessage(m.chat, {image: {url: result }, caption: `© ${wm}\nLink: ${result}` }, {quoted: m })
} catch {
try {
let ano = await fetchJson(`https://aemt.me/googleimage?query=${full_args}`)
let anu = ano.result
let result = anu[Math.floor(Math.random() * anu.length)]
slimecode.sendMessage(m.chat, {image: {url: result }, caption: `© ${wm}\nLink: ${result}` }, {quoted: m })
} catch(err) {
m.reply(err)
}}}
break

case 'yts':
case 'ytsearch': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let search = await yts(text)
let uii = await search.all
let teks = '*YOUTUBE - SEARCH*\n\nHasil dari: '+text+'\n\n'
let no = 1
for (let i of uii.filter(objek => objek.type === "video")) {
teks += `Capt: ${i.title}\nPenonton: ${toRupiah(i.views)}\nDurasi: ${toRupiah(i.timestamp)}\nDiupload pada: ${i.ago}\nLink: ${i.url}\n\n\n`
}
slimecode.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break

case 'play': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
var search = await yts(`${text}`)
let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
var convert = search.videos[0];
if (!convert) return m.reply('Video/audio tidak ditemukan!')
downloadMp3(convert.url)
}
break

case 'ytvideo':
case 'ytmp4': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.match('youtu')) return m.reply('Harus berupa link youtube!')
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp4(text)
}
break

case 'ytaudio':
case 'ytmp3': {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.match('youtu')) return m.reply('Harus berupa link youtube!')
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp3(text)
}
break

case 'ttsearch':
case 'tiktoksearch': {
if (!text) return m.reply(`Contoh: ${prefix+command} christy jkt48`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try{
let serach = await tiktokSearchVideo(text)
let teks = '*TIKTOK - SEARCH*\n\n'
let no = 1
for (let i of serach.videos) {
let sut = await JSON.stringify(i.author)
teks += `• No Urutan: ${no++}\n• Capt: ${i.title}\n• Username: ${i.author.unique_id}\n• Nickname: ${i.author.nickname}\n• Durasi: ${toRupiah(i.duration)} detik\n• Like: ${toRupiah(i.digg_count)}\n• Komentar: ${toRupiah(i.comment_count)}\n• Share: ${toRupiah(i.share_count)}\n• Url: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n\n\n`
}
slimecode.sendMessage(m.chat, { video: { url: `https://tikwm.com${serach.videos[0].play}` },  caption: teks }, { quoted: m })
} catch(err) {
m.reply(`Terjadi kesalahan`);
}}
break

case 'ttget': {
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ttsearch bot!')
let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ttsearch`)
try{
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${urls[text - 1]}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
slimecode.sendMessage(m.chat, {video: {url: imgs.url }, caption: `© ${wm}`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await slimecode.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await slimecode.sendMessage(m.sender, {image: {url: imgs.url }}, {quoted: m })
c += 1
await sleep(2000)
}}
} catch(err) {
try{
const data = await tiktokdl(urls[text - 1])
console.log(data)
slimecode.sendMessage(m.chat, { video: { url: data.video}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
}
break

case 'spotifys':
case 'spotifysearch': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
let anu = await searchSpotifyTracks(text);
let anuu = anu[0]
const spotify = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${anuu.external_urls.spotify}`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let teks = `SPOTIFY - SEARCH\n\n`;
for (let x of anu) {
teks += `• Title: ${x.name}\n`;
teks += `• Artis: ${x.artists.map(v => v.name).join(', ')}\n`;
teks += `• Link: ${x.external_urls.spotify}\n\n\n`;
}
slimecode.sendMessage(m.chat, {image: {url: spotify.result.image }, caption: teks }, {quoted:m})
await slimecode.sendMessage(m.chat, {audio: { url: spotify.result.download }, mimetype: 'audio/mpeg' },{ quoted: m })
}
break

case 'pinterest':
case 'pin': {
if (!text) return m.reply(`Contoh: ${prefix+command} Slimextzy`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let fotopin = await pinterest(text)
const uploadFile = { upload: slimecode.waUploadToServer };
var pinsatu = await prepareWAMessageMedia(
{
image: { url: fotopin[0] },
},
uploadFile,
);
var pindua = await prepareWAMessageMedia(
{
image: { url: fotopin[1] },
},
uploadFile,
);
var pintiga = await prepareWAMessageMedia(
{
image: { url: fotopin[2] },
},
uploadFile,
);
var pinempat = await prepareWAMessageMedia(
{
image: { url: fotopin[3] },
},
uploadFile,
);
var pinlima = await prepareWAMessageMedia(
{
image: { url: fotopin[4] },
},
uploadFile,
);
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Hasil searching:\n${text}`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "PINTEREST SEARCH",
subtitle: "",
hasMediaAttachment: false
}),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
cards: [{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "1/5 Gambar",
subtitle: "",
imageMessage: pinsatu.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "2/5 Gambar",
subtitle: "",
imageMessage: pindua.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "3/5 Gambar",
subtitle: "",
imageMessage: pintiga.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "4/5 Gambar",
subtitle: "",
imageMessage: pinempat.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "5/5 Gambar",
subtitle: "",
imageMessage: pinlima.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})}],
})
})
}}
}, { quoted: m })
await slimecode.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break

// === Others Menu

case 'jadibot': {
if (!isOwner && !isPremium) return onlyOp()
if (m.key.fromMe) return
jadibot(slimecode, m, m.chat)
}
break

case 'stopjadibot': {
if (!isOwner && !isPremium) return onlyOp()
if (m.key.fromMe) return
stopjadibot(slimecode, m, m.chat)
}
break

case 'listjadibot': {
if (!isOwner && !isPremium) return onlyOp()
if (m.key.fromMe) return
listjadibot(slimecode, m)
}
break

case 'ceknickff': {
let ffnick = q.split(" ")[0]
if (!ffnick) return m.reply(`ID FF nya mana?`)
let nick1 = `${ffnick}`
axios('https://ariepulsa.com/api/get-nickname-game',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: ariekey,
action: 'get-nickname-game',
layanan: 'free-fire',
target: nick1,
}))}).then((res) => {
if (res.data.status == false) {
m.reply(`${res.data.data.pesan}`)
}
if (res.data.status == true) {
m.reply(`── 「  *YOUR NICKNAME*  」 ──\n\nGame: FreeFire\nID Game: ${ffnick}\nNickName: ${res.data.data.nickname}\n\n© ${storename}`)
}})
}
break

case 'ceknickml': {
let mlidnick = q.split(" ")[0]
let mlzonenick = q.split(" ")[1]
if (!mlidnick) return m.reply(`ID ML nya mana?\nContoh: ${prefix+command} 12255668 1244`)
if (!mlzonenick) return m.reply(`ID server nya mana?\nContoh: ${prefix+command} 12255668 1244`)
let nickid = `${mlidnick}`
let nickzone = `${mlzonenick}`
axios('https://ariepulsa.com/api/get-nickname-game',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: ariekey,
action: 'get-nickname-game',
layanan: 'mobile-legends',
target: nickid,
no_meter: nickzone,
}))}).then((res) => {
if (res.data.status == false) {
m.reply(`${res.data.data.pesan}`)
}
if (res.data.status == true) {
 m.reply(`── 「  *YOUR NICKNAME*  」 ──\n\nGame: Mobile Lengeds\nID Game: ${mlidnick}\nServer: (${mlzonenick})\nNickName: ${res.data.data.nickname}\n\n© ${storename}`)
}})
}
break

case 'hd':
case 'hdimg': 
case 'hdr': {
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./lib/general/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
slimecode.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break

case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
if (!/video/.test(mime)) {
return m.reply(`Kirim/kutip video dengan caption ${prefix+command}`);
}
await slimecode.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
return new Promise((resolve, reject) => {
const outputStream = new stream.PassThrough();
ffmpeg()
.input(stream.Readable.from(inputBuffer))
.videoFilter('eq=contrast=1.2:brightness=0.1') 
.outputFormat('mp4') 
.pipe(outputStream, { end: true });
const chunks = [];
outputStream.on('data', chunk => chunks.push(chunk));
outputStream.on('end', () => resolve(Buffer.concat(chunks)));
outputStream.on('error', reject);
});
}
try {
let processedVideo = await enhanceVideo(media);
await slimecode.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
m.reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}}
break

case 'tourl': {
  const { shannzCdn } = require('./lib/general/uploader.js');
  if (!/video/.test(mime) && !/image/.test(mime)) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  if (!quoted) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  let media = await slimecode.downloadAndSaveMediaMessage(quoted);
  let anu = await shannzCdn(media);
  if (anu && anu.status) {
    m.reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
  } else {
    m.reply(`*ERROR: Tidak dapat mengambil URL dari media.*`);
  }
  await fs.unlinkSync(media);
}
break

case 'qc':
case 'qcstick': {
if (!args[0]) return m.reply(`Contoh: ${prefix+command} white halo`)
if (!args[1]) return m.reply(`Contoh: ${prefix+command} white halo`)
if (text.length > 80) return m.reply(`Maximal 80 karakter!`)
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('Warna tersebut tidak ditemukan!')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await slimecode.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/65d5ed2e0edeea8363919.jpg'),
} },
text: message,
replyMessage: {},
}, ],
};
let response = await axios.post('https://quotly.netorare.codes/generate', obj, {
headers: {
'Content-Type': 'application/json', },
});
let buffer = Buffer.from(response.data.result.image, 'base64');
slimecode.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}`})
}
break

case 'qckode':
case 'kodeqc': {
m.reply(`${monospace("LIST  WARNA")}\n\n• Pink\n• Blue\n• Red\n• Green\n• Yellow\n• Purple\n• Darkblue\n• Lightblue\n• Ash\n• Orange\n• black\n• White\n• Teal\n• Lightpink\n• Chocolate\n• Salmon\n• Magenta\n• Tan\n• Wheat\n• Deeppink\n• Fire\n• Skyblue\n• Safron\n• Brightskyblue\n• Hotpink\n• Lightskyblue\n• Seagreen\n• Darkred\n• Orangered\n• Cyan\n• Violet\n• Mossgreen\n• Darkgreen\n• Navyblue\n• Darkorange\n• Darkpurple\n• Fuchsia\n• Darkmagenta\n• Darkgray\n• Peachpuff\n• Plackishgreen\n• Darkishred\n• Goldenrod\n• Darkishgray\n• Darkishpurple\n• Gold\n• Silver`)
}
break

case 's':
case 'stiker':
case 'sticker': {
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
if (/image/.test(mime)) {
let media = await slimecode.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await slimecode.imgToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await slimecode.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await slimecode.vidToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await slimecode.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await slimecode.sendStickerFromUrl(m.chat, media, m, {packname: `` , author: author })
await fs.unlinkSync(media)
} else m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
}
break

case 'smeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await slimecode.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let stiker = await sticker5(smeme, false, ``, author)
if (stiker) return slimecode.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/kutip gambar dengan caption ${prefix+command} San|Abc`)
}}
break

case 'wm':
case 'swm': {
if (!quoted) return m.reply(`Kirim/kutip stiker lalu ketik ${prefix+command} San|Abc`)
teks1 = text.split('|')[0] ? text.split('|')[0] : ''
teks2 = text.split('|')[1] ? text.split('|')[1] : ''
slimecode.sendMessage(from, {react: {text: "🔎", key: m.key}})
if (/image/.test(mime)) {
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return slimecode.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return slimecode.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/kutip stiker lalu ketik ${prefix+command} San|Abc`)
}}
break

case 'gtts':
case 'say': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku sayang toya`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${text}&lang=id-ID`)
const aud = anu.result
slimecode.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
}
break

case 'gtts2':
case 'say2': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku sayang toya`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}
let res
try { res = await tts(text, long) }
catch (e) {
m.reply(e + '')
res = await tts(text)
} finally {
slimecode.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {quoted: m})
}}
break

case 'readvo': 
case 'rvo': {
if (!m.quoted) return m.reply('Kirim/kutip vidio/gambar')
if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('Ini bukan pesan view once!')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
slimecode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (/video/.test(type)) {
return slimecode.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return slimecode.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case 'getvideo': {
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ytsearch bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ytsearch`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp4(urls[text - 1])
}
break

case 'getmusic': {
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ytsearch bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ytsearch`)
await slimecode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp3(urls[text - 1])
}
break

case 'cekodam':
case 'cekkodam':
case 'cekkhodam': {
if (!text) return m.reply(`Contoh: ${prefix+command} toya`)
const khodam = pickRandom([
"Kaleng Cat Avian",
"Pipa Rucika",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"Sungut Lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
"Tai Kuda",
"Tikus Kentut",
"Banteng Merah",
"Bajigur",
"Bakso Sumatra",
"Neymar Bogor",
"Christiano Rojali",
"Batagor",
"Seblak Kalimantan",
"Macan Putih",
"Harimau Sumatra",
"Harimau Putih",
"Singa",
"Raja Iblis",
"Telur Betawi",
"Cilok Goreng",
])
const response = `
${monospace("CEK  KHODAM")}
- Nama: ${text}
- Khodam: ${khodam}
`
m.reply(response)
try{
let tek = `Khodam nya ${text}, adalah: ${khodam}`
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${tek}&lang=id-ID`)
const aud = anu.result
await sleep(50)
slimecode.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

// ==========================

default:

if ((budy) && [`${db.data.users[m.sender].otp}`].includes(budy) && !m.fromMe) {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
const srlnye = createSerial(5)
var angka = await randomNomor(20, 700)
m.reply(`*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angka}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angka}`
db.data.users[m.sender].otp = `${db.data.users[m.sender].otp}`
db.data.users[m.sender].email = `${db.data.users[m.sender].email}`
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angka}`, srlnye)
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
}:{})
}
return !0
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
}:{})
}
}

if (budy.startsWith('=> ')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(util.format(e))
}}

if (budy.startsWith('> ')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))
}}
}

if (budy.startsWith('$ ')) {
if (!isOwner) return 
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})}
}

catch (err) {
console.log(util.format(err))
let e = String(err)
slimecode.sendMessage("6285718275389@s.whatsapp.net", {text: "Hi developer, tolong perbaiki beberapa ini\n\n" + util.format(err)})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})