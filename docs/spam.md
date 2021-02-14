---
id: spam
title: Anti Spam
---
You can enable this feature from [bot configuration command](config).

Antispam is divided into two categories:
- spam link
- spam name

## Spam Link

If enabled, the bot will check if links sent in chat are telegram group/channel/invite links and it will delete them.
If a group or channel was previously added to [Safe Groups](safegroups) the bot will not delete it.

## Spam Name

Spam name control consists in the same operation performed by Spam Link, but the bot will check if users names contains telegram links or usernames of channels/groups.


## Global Whitelist
The following Channels and Groups are in global whitelist:
- https://t.me/unifiedban_group
- https://t.me/unifiedban_news
- https://t.me/unifiedban_bot
- https://t.me/unifiedbanBeta_bot
- https://t.me/joinchat/B35YY0QbLfd034CFnvCtCA // Support chat of the TelegramBots library
- https://t.me/dotnetgram // .NET global discussion and support chat

## For developers

This function is defined in the file `/Bot/`.