---
id: alias
title: Alias
---

Our bot integrates an Invite system, useful for making the group accessible 
from the outside while keeping it private.

By creating a new alias from the Dashboard, you will be provided with your 
personal entermy.group link. You will need to pass this link to the users you 
want to invite to the group.

This link refers to a Telegram's invite link, generated every 10 minutes by the bot.

## Permissions
All administrators in your group and unified/ban operators can perform this command.

## Create new alias
To create your alias, you need to log into the Dashboard and set your alias in 
the Preferences tab.

By typing `/alias` in the group, the bot will return your personal 
entermy.group link.

## Syntax
```bash
/alias
```

## For developers
This command is defined in the file `/Bot/Command/Alias.cs`.
