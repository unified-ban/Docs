---
id: config
title: Config
---
Type `/config` to enter all the **bot settings**. The bot will return an interactive control keyboard GUI as shown below.

![](../static/img/keyboard-config.svg)

In this menu you can activate or deactivate the bot features just by clicking on the respective button:
- if the feature is activated it will show "✅" next to the function name
- if the feature is disabled it will show "❌" next to the function name

## Permissions

All administrators in your group and unified/ban operators can perform this command.


## Buttons

Here is the list of buttons available in this menu:
- [Instructions](unifiedban.solutions) (it will just link you the official site of the bot)
- [Dashboard](dashboard)
- [Welcome Message](welcome)
- [Captcha](captcha)
- [Language](language)
- [BadWord Filter](badwords)
- [Non Latin Filter](nonlatin)
- [Flood Control](flood)
- [Spam Name Control](spam)
- [Scam Filter](scamfilter)
- [Safe Group Control](spam)
- [Blacklist](blacklist)
- [Gate](gate)
- [RTL Name Filter](rtlname)
- [Gate Schedule](gateschedule)
- [Spam Action Limit Time](salt)
- [Ask for Support](support)

## For developers

This command is defined in the file `/Bot/Command/Config.cs`.