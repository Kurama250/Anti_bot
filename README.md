<h1 align="center">Anti Bot Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

<p align="center">
  <img src="https://img.shields.io/github/stars/Kurama250/Anti_bot">
  <img src="https://img.shields.io/github/license/Kurama250/Anti_bot">
  <img src="https://img.shields.io/github/repo-size/Kurama250/Anti_bot">
  <img src="https://img.shields.io/badge/stability-stable-green">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/module-name">
  <img src="https://img.shields.io/npm/v/fs?label=fs">
  <img src="https://img.shields.io/npm/v/discord.js@13?label=discord.js@13">
  <img src="https://img.shields.io/npm/v/@discordjs/rest?label=@discordjs/rest">
  <img src="https://img.shields.io/npm/v/@discordjs/builders?label=@discordjs/builders">
</p>

# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Anti_bot/main/setup.sh)
```
<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Anti_bot.git
cd Anti_bot/
npm install i
npm install pm2 -g
```
## 2 - on Terminal

```shell script
nano config/config.json
```

- And you also change this line :

```json
  "token": "YOUR_TOKEN",
  "antiBotEnabled": true,
  "whitelist": [
    "DISCORD_ID_01",
    "DISCORD_ID_02"
  ]
```

- After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start index.js
```
- Demo : 

![alt text](https://github.com/Kurama250/Anti_bot/blob/main/anti.png?raw=true)

<h3 align="center"><strong>Support on Discord :</strong> <a href="https://discord.gg/6aebQGdDxB">Discord</a></3>
<h3 align="center">If you like this repository don't hesitate to give it a star ⭐ !</h3>
<h1 align="center">Then it's the end you have started the bot have fun !</h1>
