---
id: status
title: Status
---

The Status command is normally used by operators to check the status and load of the bot.

## Permissions

Only unified/ban operators can use this command.

## Syntax

Just type `/status` in a chat:

```bash
/status
```

the bot will return an output with the following details:

- running bot version
- instance start datetime
- RAM usage
- CPU usage
- database status
- environment (production/beta)
- messages managed from start instance
- blacklist counter

## For developers

This command is defined in the file `/Bot/Command/Status.cs`.
