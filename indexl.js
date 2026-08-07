const express = require("express");
const axios = require("axios");

const app = express();

// ==UserScript==
// @name         API
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  API Huh?
// @author       API
// @match        *://rekonise.com/*
// @match        *://auth.platorelay.com/*
// @match        *://auth.platoboost.app/*
// @match        *://auth.platoboost.me/*
// @match        *://go.linkify.ru/*
// @match        *://paste-drop.com/*
// @match        *://pastefy.app/*
// @match        *://scriptpastebins.com/*
// @match        *://pastebin.com/*
// @match        *://loot-link.com/*
// @match        *://loot-links.com/*
// @match        *://lootlink.org/*
// @match        *://lootlinks.co/*
// @match        *://lootdest.info/*
// @match        *://lootdest.org/*
// @match        *://lootdest.com/*
// @match        *://links-loot.com/*
// @match        *://linksloot.net/*
// @match        *://links.lootlabs.gg/*
// @match        *://link-unlock.com/*
// @match        *://boost.ink/*
// @match        *://mboost.me/*
// @match        *://linkvertise.com/*/*
// @match        *://direct-link.net/*/*
// @match        *://link-hub.net/*/*
// @match        *://link-target.net/*/*
// @match        *://link-center.net/*/*
// @match        *://link-to.net/*/*
// @match        *://neoxsoftworks.eu/*
// @match        *://robloxscripts.gg/*
// @match        *://socialwolvez.com/*
// @match        *://sub2get.com/*
// @match        *://sub2unlock.com/*
// @match        *://sub2unlocksl.com/*
// @match        *://trigonevo.com/auth/android*
// @match        *://ntt-hub.xyz/key/main?hwid=*
// @match        *://ntt-hub.xyz/key/ntt-hub?hwid=*
// @match        *://ldnesfspublic.org/*
// @match        *://blog.tapvietcode.com/*
// @match        *://link4sub.com/*
// @match        *://linkunlocker.com/*
// @match        *://rentry.co/*
// @match        *://scriptblox.club/*
// @match        *://scriptix.live/*
// @match        *://linkzy.space/*
// @match        *://sub4unlock.com/*
// @match        *://sub4unlock.pro/*
// @match        *://sub4unlock.co/*
// @match        *://subnise.com/*
// @icon         https://i.ibb.co/GfnCW8X1/download.png
// @require      https://github.com/ron12373/userscript/raw/main/mommy.js
// @grant        none
// ==/UserScript==

// 🌐 หน้าเว็บ Kuo Bypass + Tampermonkey Script (ไม่แก้โค้ด Tampermonkey)
app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kuo Bypass - Free Key Bypass</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: #e94560;
    font-family: 'Segoe UI', system-ui, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.container { width: 100%; max-width: 600px; text-align: center; }
.logo { 
    font-size: 3em; 
    font-weight: 800; 
    margin-bottom: 10px; 
    background: linear-gradient(90deg, #e94560, #ff6b6b); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
}
.subtitle { color: #a0a0a0; font-size: 1.1em; margin-bottom: 40px; }
.input-box { 
    background: rgba(255,255,255,0.05); 
    border: 2px solid rgba(233, 69, 96, 0.3); 
    border-radius: 16px; 
    padding: 8px; 
    display: flex; 
    gap: 8px; 
    margin-bottom: 20px; 
}
.input-box:focus-within { 
    border-color: #e94560; 
    box-shadow: 0 0 20px rgba(233, 69, 96, 0.2); 
}
input { 
    flex: 1; 
    background: transparent; 
    border: none; 
    color: white; 
    padding: 12px 16px; 
    font-size: 16px; 
    outline: none; 
}
input::placeholder { color: #666; }
.bypass-btn { 
    background: linear-gradient(135deg, #e94560, #c73e54); 
    color: white; 
    border: none; 
    padding: 12px 32px; 
    border-radius: 12px; 
    font-size: 16px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: all 0.3s;
    white-space: nowrap;
}
.bypass-btn:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 8px 25px rgba(233, 69, 96, 0.4); 
}
.bypass-btn:disabled { 
    opacity: 0.6; 
    cursor: not-allowed; 
    transform: none; 
}
#status { margin: 20px 0; font-size: 16px; min-height: 24px; }
.result-box { 
    display: none; 
    background: rgba(0,0,0,0.3); 
    border: 1px solid rgba(233, 69, 96, 0.3); 
    border-radius: 16px; 
    padding: 24px; 
    margin-top: 20px; 
    animation: fadeIn 0.5s;
}
.result-key { 
    background: rgba(233, 69, 96, 0.1); 
    border: 1px solid rgba(233, 69, 96, 0.2); 
    border-radius: 12px; 
    padding: 16px; 
    font-family: 'Courier New', monospace; 
    font-size: 18px; 
    color: #e94560; 
    word-break: break-all; 
    margin-bottom: 16px; 
}
.copy-btn { 
    background: rgba(255,255,255,0.1); 
    color: white; 
    border: 1px solid rgba(255,255,255,0.2); 
    padding: 10px 24px; 
    border-radius: 10px; 
    cursor: pointer; 
    font-size: 14px;
    transition: all 0.3s;
}
.copy-btn:hover { 
    background: rgba(255,255,255,0.2); 
}
.features { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 12px; 
    margin-top: 40px; 
}
.feature { 
    background: rgba(255,255,255,0.03); 
    border: 1px solid rgba(255,255,255,0.05); 
    border-radius: 12px; 
    padding: 16px; 
    text-align: left; 
}
.feature-icon { font-size: 24px; margin-bottom: 8px; }
.feature-title { color: white; font-weight: 600; margin-bottom: 4px; font-size: 14px; }
.feature-desc { color: #888; font-size: 12px; }
.footer { margin-top: 40px; color: #666; font-size: 12px; }
.error { color: #ff6b6b; }
.success { color: #51cf66; }
.loading { color: #ffd43b; }
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
</head>
<body>
<div class="container">
    <div class="logo">⚡ KUO BYPASS</div>
    <p class="subtitle">Paste a supported URL and get your key in seconds</p>
    
    <div class="input-box">
        <input id="url" placeholder="Paste your Platoboost / Linkvertise URL here..." autocomplete="off">
        <button class="bypass-btn" id="bypassBtn" onclick="bypass()">Bypass</button>
    </div>
    
    <p id="status"></p>
    
    <div class="result-box" id="resultBox">
        <div class="result-key" id="resultKey"></div>
        <button class="copy-btn" onclick="copyKey()">📋 Copy Key</button>
    </div>
    
    <div class="features">
        <div class="feature">
            <div class="feature-icon">🚀</div>
            <div class="feature-title">Fast</div>
            <div class="feature-desc">Results in 1-60 seconds</div>
        </div>
        <div class="feature">
            <div class="feature-icon">🔒</div>
            <div class="feature-title">Safe</div>
            <div class="feature-desc">No install required</div>
        </div>
        <div class="feature">
            <div class="feature-icon">🌐</div>
            <div class="feature-title">50+ Sites</div>
            <div class="feature-desc">All popular shorteners</div>
        </div>
        <div class="feature">
            <div class="feature-icon">♾️</div>
            <div class="feature-title">Unlimited</div>
            <div class="feature-desc">Free daily use</div>
        </div>
    </div>
    
    <div class="footer">
        Kuo Bypass | Made with ❤️
    </div>
</div>

<script>
let currentKey = "";

async function bypass() {
    const url = document.getElementById("url").value.trim();
    const status = document.getElementById("status");
    const btn = document.getElementById("bypassBtn");
    
    if (!url) {
        status.innerHTML = "<span class='error'>❌ Please enter a URL</span>";
        return;
    }
    
    status.innerHTML = "<span class='loading'>⏳ Bypassing... (this may take 10-30 seconds)</span>";
    document.getElementById("resultBox").style.display = "none";
    btn.disabled = true;
    
    try {
        const res = await fetch("/api/getkey?url=" + encodeURIComponent(url));
        const data = await res.json();
        
        if (data.key) {
            currentKey = data.key;
            document.getElementById("resultKey").textContent = data.key;
            document.getElementById("resultBox").style.display = "block";
            status.innerHTML = "<span class='success'>✅ Bypass successful!</span>";
        } else {
            status.innerHTML = "<span class='error'>❌ " + (data.error || "Failed to bypass") + "</span>";
        }
    } catch (err) {
        status.innerHTML = "<span class='error'>❌ Connection failed</span>";
    } finally {
        btn.disabled = false;
    }
}

function copyKey() {
    if (!currentKey) return;
    navigator.clipboard.writeText(currentKey).then(() => {
        alert("✅ Key copied to clipboard!");
    }).catch(() => {
        const t = document.createElement("textarea");
        t.value = currentKey;
        document.body.appendChild(t);
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
        alert("✅ Key copied to clipboard!");
    });
}

document.getElementById("url").addEventListener("keypress", function(e) {
    if (e.key === "Enter") bypass();
});
</script>

<script src="https://github.com/ron12373/userscript/raw/main/mommy.js"></script>
<script>
(function () {
    'use strict';

    const params = new URLSearchParams(location.search);
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    if (params.get("hash")) {
        try {
            const decoded = atob(params.get("hash"));
            if (decoded.startsWith("http://") || decoded.startsWith("https://")) {
                location.replace(decoded);
                return;
            }
        } catch (e) {}
    }

    const redirectDomains = ["linkvertise.com", "direct-link.net", "link-hub.net", "link-target.net", "link-center.net", "link-to.net"];
    function shouldRedirect() { return redirectDomains.some(d => location.hostname.includes(d)); }

    const style = document.createElement("style");
    style.innerHTML = `
        #cmd-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); z-index: 2147483647;
            font-family: 'Consolas', 'Lucida Console', monospace;
            display: flex; align-items: center; justify-content: center;
        }
        #cmd-window {
            width: 700px; height: 400px; background: #0c0c0c;
            border: 1px solid #777; box-shadow: 0 15px 40px rgba(0,0,0,0.9);
            display: flex; flex-direction: column; border-radius: 4px; overflow: hidden;
        }
        #cmd-header {
            background: #ffffff; color: #000; padding: 0 0 0 10px; font-size: 12px;
            display: flex; justify-content: space-between; align-items: center;
            height: 28px; border-bottom: 1px solid #555; user-select: none;
        }
        .header-title { display: flex; align-items: center; gap: 8px; }
        .header-icon { width: 16px; height: 16px; }
        .header-controls { display: flex; height: 100%; }
        .control-btn { width: 45px; text-align: center; line-height: 28px; font-size: 14px; transition: 0.1s; cursor: pointer; }
        .control-btn:hover { background: #e5e5e5; }
        .btn-close:hover { background: #e81123 !important; color: #fff; }
        #cmd-body { padding: 12px; flex-grow: 1; overflow-y: auto; line-height: 1.4; font-size: 14px; color: #cccccc; }
        .cmd-line { margin-bottom: 4px; word-break: break-all; }
        .cmd-prompt { color: #ffffff; margin-right: 5px; }
        .cmd-text-cyan { color: #00ffff; }
        .cmd-text-red { color: #ff5555; }
        .cmd-text-green { color: #00ff00; }
        .cmd-text-yellow { color: #ffff00; }
        #ts-iframe-container { margin: 10px 0; border: 1px solid #333; padding: 10px; background: #1a1a1a; width: fit-content; }
        #ts-iframe { width: 300px; height: 75px; border: none; filter: invert(0.9); }
        .copy-btn { display: inline-block; margin-top: 10px; padding: 5px 10px; background: #333; color: #00ff00; border: 1px solid #555; cursor: pointer; font-size: 12px; transition: 0.2s; }
        .copy-btn:hover { background: #444; border-color: #00ff00; }
        .copy-btn:active { background: #222; }
        .loading-text::after { content: ''; animation: dots 1.5s steps(4, end) infinite; }
        @keyframes dots { 0%,20%{content:''} 40%{content:'.'} 60%{content:'..'} 80%{content:'...'} }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0c0c0c; }
        ::-webkit-scrollbar-thumb { background: #333; }
        .hidden { display: none !important; }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = "cmd-overlay";
    overlay.innerHTML = `
        <div id="cmd-window">
            <div id="cmd-header">
                <div class="header-title">
                    <img class="header-icon" src="https://i.ibb.co/GfnCW8X1/download.png">
                    <span>C:\\Windows\\system32\\cmd.exe - baconbypass.exe</span>
                </div>
                <div class="header-controls">
                    <div class="control-btn">─</div>
                    <div class="control-btn">❏</div>
                    <div id="close-cmd" class="control-btn btn-close">✕</div>
                </div>
            </div>
            <div id="cmd-body">
                <div class="cmd-line">Microsoft Windows [Version 10.0.19045.4291]</div>
                <div class="cmd-line">(c) Microsoft Corporation. All rights reserved.</div>
                <br>
                <div class="cmd-line"><span class="cmd-prompt">C:\\Users\\Bacon></span>baconbypass.exe --target=${location.hostname}</div>
                <div id="cmd-log">
                    <div class="cmd-line">[*] Initializing...</div>
                </div>
                <div id="ts-iframe-container" class="hidden">
                    <iframe id="ts-iframe" src="https://userscript.baconbypass.online/load-cf" scrolling="no"></iframe>
                </div>
                <div id="cmd-status" class="hidden">
    <div id="status-text" class="cmd-line cmd-text-cyan loading-text">[*] Fetching Bacon Bypass Bot</div>
</div>
                <div id="cmd-result" class="cmd-line hidden"></div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("close-cmd").onclick = () => { overlay.remove(); };

    const logBox = document.getElementById("cmd-log");
    const statusBox = document.getElementById("cmd-status");
    const iframeContainer = document.getElementById("ts-iframe-container");
    const resultBox = document.getElementById("cmd-result");

    function addLog(text, colorClass = "") {
        const div = document.createElement("div");
        div.className = "cmd-line " + colorClass;
        div.innerHTML = `<span class="cmd-prompt">[*]</span> ${text}`;
        logBox.appendChild(div);
        document.getElementById("cmd-body").scrollTop = 9999;
    }

    async function getVerifyToken() {
        try {
            const res = await fetch("https://userscript.baconbypass.online/verify");
            const data = await res.json();
            if (!data.s || !data.p) throw new Error();
            return await new Promise((resolve, reject) => {
                if (typeof window.ppp !== 'function') return reject(new Error("lib not ready"));
                window.ppp(data.p, async (result) => {
                    try {
                        const encoded = btoa(result);
                        const vRes = await fetch("https://userscript.baconbypass.online/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ session: data.s, result: encoded })
                        });
                        const vData = await vRes.json();
                        if (vData.status === "success" && vData.token2) resolve(vData.token2);
                        else reject(new Error("verification failed"));
                    } catch (e) { reject(e); }
                });
            });
        } catch (e) {
            return null;
        }
    }

    async function runBypass(cfToken) {
        iframeContainer.classList.add("hidden");
        statusBox.classList.remove("hidden");

        const statusText = document.getElementById("status-text");

        try {
            statusText.innerText = "[*] Verifying security challenge";
            statusText.className = "cmd-line cmd-text-yellow loading-text";

            const token2 = await getVerifyToken();

            if (!token2) {
                resultBox.classList.remove("hidden");
                resultBox.className = "cmd-line cmd-text-red";
                resultBox.innerHTML = `<br>[SYSTEM ERROR] Challenge failed. Please try again.`;
                statusBox.classList.add("hidden");
                return;
            }

            addLog("Challenge Passed Successfully!", "cmd-text-green");

            statusText.innerText = "[*] Fetching Bacon Bypass Bot";
            statusText.className = "cmd-line cmd-text-cyan loading-text";

            const response = await fetch("https://userscript.baconbypass.online/adlink", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: location.href, token: cfToken, token2 })
            });

            const data = await response.json();

            if (data.status === "success") {
                const result = data.result;

                addLog("Done!", "cmd-text-green");
                statusBox.classList.add("hidden");

                if (result.startsWith("http") && shouldRedirect()) {
                    location.href = "https://linkvertise.com/access/1229176/kiciahook-kiciahook?hash=" + btoa(result);
                    return;
                }

                if (result.startsWith("http")) {
                    location.href = result;
                    return;
                }

                resultBox.classList.remove("hidden");
                resultBox.innerHTML = `
                <br><span class="cmd-text-cyan">>> DATA RETRIEVED:</span><br>
                <span id="raw-data" style="color:#fff;background:#222;padding:2px 5px;">${result}</span><br>
                <div id="copy-trigger" class="copy-btn">Click to Copy</div>
            `;
                document.getElementById("copy-trigger").onclick = function () {
                    navigator.clipboard.writeText(result).then(() => {
                        this.innerText = "COPIED!";
                        this.style.color = "#fff";
                        setTimeout(() => { this.innerText = "Click to Copy"; this.style.color = "#00ff00"; }, 2000);
                    });
                };
            } else {
                throw new Error(data.message || "Bypass Failed");
            }
        } catch (e) {
            statusBox.classList.add("hidden");
            resultBox.classList.remove("hidden");
            resultBox.className = "cmd-line cmd-text-red";
            resultBox.innerHTML = `<br>[SYSTEM ERROR] ${e.message}`;
        }
    }

    async function init() {
        addLog("Challenge required. Complete verification below.", "cmd-text-yellow");
        iframeContainer.classList.remove("hidden");
    }

    init();

    window.addEventListener("message", async (e) => {
        if (e.data && (e.data.type === "CF_SOLVED" || e.data.type === "TURNSTILE_SOLVED")) {
            await runBypass(e.data.token);
        }
    });
})();
</script>
</body>
</html>
    `);
});

// 🔑 API - Kuo Bypass
app.get("/api/getkey", async (req, res) => {
    const url = req.query.url;
    if (!url) return res.json({ error: "No URL" });

    try {
        const urlObj = new URL(url);
        const d = urlObj.searchParams.get("d");
        
        if (!d) return res.json({ error: "Invalid URL" });

        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Content-Type": "application/json",
            "Accept": "application/json"
        };

        // ดึงคีย์จากหน้าเว็บโดยตรง
        const pageResp = await axios.get(url, {
            headers: { "User-Agent": headers["User-Agent"] },
            timeout: 15000,
            validateStatus: () => true
        });
        
        const html = pageResp.data;
        const match = html.match(/\bFREE_[a-f0-9]{32}\b/i);
        if (match) return res.json({ key: match[0] });

        return res.json({ 
            error: "ไม่พบคีย์",
            debug: "ลิงก์อาจหมดอายุหรือต้องผ่าน captcha ก่อน"
        });

    } catch (error) {
        res.json({ error: "โหลดไม่ได้", detail: error.message });
    }
});
