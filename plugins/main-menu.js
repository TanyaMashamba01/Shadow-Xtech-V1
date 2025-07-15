const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    alias: ["allmenu", "fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╔═.✵.═══════════════.✵.═╗
║  ✨ 𝕾𝖍𝖆𝖉𝖔𝖜 𝖃𝖙𝖊𝖈𝖍 - 𝕮𝖔𝖒𝖒𝖆𝖓𝖉 𝕸𝖊𝖓𝖚 ✨
╚═.✵.═══════════════.✵.═╝

╭─┈❖ _*ᏴϴͲ ՏͲᎪͲႮՏ*_ ❖┈─╮
│  👑 *Owner* : ${config.OWNER_NAME}
│  ⚙️ *Prefix* : [${config.PREFIX}]
│  🌐 *Platform* : Heroku
│  📦 *Version* : ${config.version}
│  ⏱️ *Uptime* : ${runtime(process.uptime())}
│  🎲 *Mode* : ${config.MODE}
│  🎀 *Developer*: Black-Tappy
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*📥 ᎠϴᏔΝᏞϴᎪᎠՏ*_ ❖┈─╮
│  • facebook, mediafire, tiktok
│  • twitter, insta, apk, img
│  • tt2, pins, fb2, pinterest
│  • spotify, play, song, audio, video
│  • ytmp3, ytmp4, darama
│  • gdrive, ssweb, tiks
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*👥 ᏀᎡϴႮᏢ ᎷᎪΝᎪᏀᎬᎷᎬΝͲ*_ ❖┈─╮
│  • grouplink
│  • kickall, kickall2, kickall3
│  • add, remove, kick
│  • promote, demote, dismiss, revoke
│  • setgoodbye, setwelcome, delete
│  • getpic, ginfo, disappear [on/off/duration]
│  • allreq, updategname, updategdesc
│  • joinrequests, senddm, nikal
│  • mute, unmute, lockgc, unlockgc
│  • invite
│  • tag, hidetag, tagall, tagadmins
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*🎭 ᎡᎬᎪᏟͲᏆϴΝՏ*_ ❖┈─╮
│  • bully @tag, cuddle @tag, cry @tag, hug @tag
│  • awoo @tag, kiss @tag, lick @tag, pat @tag
│  • smug @tag, bonk @tag, yeet @tag, blush @tag
│  • smile @tag, wave @tag, highfive @tag, handhold @tag
│  • nom @tag, bite @tag, glomp @tag, slap @tag
│  • kill @tag, happy @tag, wink @tag, poke @tag
│  • dance @tag, cringe @tag
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*🎨 ᏞϴᏀϴ ᏟᎡᎬᎪͲᏆϴΝ*_ ❖┈─╮
│  • neonlight, blackpink, dragonball, 3dcomic
│  • america, naruto, sadgirl, clouds, futuristic
│  • 3dpaper, eraser, sunset, leaf, galaxy
│  • sans, boom, hacker, devilwings, nigeria
│  • bulb, angelwings, zodiac, luxury, paint
│  • frozen, castle, tatoo, valorant, bear
│  • typography, birthday
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*👑 ϴᏔΝᎬᎡ ᏟϴᎷᎷᎪΝᎠՏ*_ ❖┈─╮
│  • owner, menu, menu2, allmenu
│  • vv, listcmd, repo
│  • block, unblock, fullpp, setpp
│  • restart, shutdown, updatecmd
│  • alive, ping, gjid, jid
│  • bible, biblelist /blist
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*😂 FႮΝ & ᏀᎪᎷᎬՏ*_ ❖┈─╮
│  • shapar, rate, insult, hack, ship
│  • character, pickup, joke
│  • hrt, hpy, syd, anger, shy, kiss
│  • mon, cunfuzed
│  • setpp, hand, nikal, hold, hug
│  • hifi, poke
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*🔄 ᏟϴΝᏙᎬᎡՏᏆϴΝ ͲϴϴᏞՏ*_ ❖┈─╮
│  • sticker, sticker2, emojimix
│  • fancy, take, tomp3, tts, trt
│  • base64, unbase64, binary, dbinary
│  • tinyurl, urldecode, urlencode, url
│  • repeat, ask, readmore, help, support
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*🤖ᎪᏆ ᎷᎬΝႮ*_ ❖┈─╮
│  • ai, gpt3, gpt2, gptmini, gpt
│  • meta, blackbox, luma, dj
│  • malvin, malvinai
│  • gpt4, bing, imagine, imagine2, copilot
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*⚡ ႮͲᏆᏞᏆͲᏆᎬՏ*_ ❖┈─╮
│  • ping, speed, live, alive
│  • runtime, uptime, repo
│  • owner, menu, menu2, restart
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*🌸ᎪΝᏆᎷᎬ*_ ❖┈─╮
│  • fack, truth, dare
│  • dog, awoo, garl, waifu
│  • neko, megnumin, maid, loli
│  • animenews, foxgirl, naruto
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

╭─┈❖ _*ℹ️ ϴͲᎻᎬᎡ ᏟϴᎷᎷᎪΝᎠՏ*_ ❖┈─╮
│  • timenow, date, count, calculate, countx
│  • flip, coinflip, rcolor, roll
│  • fact, cpp, rw, pair, pair2
│  • fancy, logo
│  • define, news, movie, weather
│  • srepo, insult, save, wikipedia
│  • gpass, githubstalk
│  • yts, ytv ,yts
╰─┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈─╯
༻─────────────────────༺

${config.DESCRIPTION}`;

        await conn.sendMessage(from, { image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/3hrxbh.jpg' }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363369453603973@newsletter', newsletterName: config.BOT_NAME, serverMessageId: 143 } } }, { quoted: mek } );
        // Send audio
        await conn.sendMessage(from, { audio: { url: 'https://files.catbox.moe/ddmjyy.mp3' }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
