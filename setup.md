---
id: setup
title: First setup
---

There are a few steps required to start using the Telegram bot and they are all listed below.

## Administration
First of all, add the official [@unifiedban_bot](https://t.me/unifiedban_bot) as administrator in the group where 
you want to set it up.

In Telegram for **Android** or **iOS**, enter your group from the chat list, then tap the group name on top of 
screen, next press the `edit button` and move to the `Administrators` section, here just press on 
`Add administrator` and add our bot with these permissions:

- **Delete messages**
- **Block members**
- Change group info *(optional)*
- Pin messages *(optional)*

no other permissions are required.

In Telegram for **Linux/Windows/MacOS**, enter your group from the chat list, then click on `three dots` on the right 
and select `Manage group`, here click on `Administrators` section and `Add administrator`, here choose our bot and set 
it up with the same permissions mentioned above.

### Permissions check
To verify that you have configured the essential permissions correctly, type `/check` in your group chat, the bot will 
reply with a [verification message](/docs/check).

## Configuration
The simplest way to configure the bot is via the [interactive configuration menu](/docs/config).

In your group chat, type `/config` and the bot will return an interactive control keyboard with all the bot settings.

In the index of this documentation you can access the **Features** category for the specific documentation of each 
feature/voice of the configuration menu.