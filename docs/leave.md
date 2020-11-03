---
id: leave
title: Leave
---

The Leave command is used to remove the bot from a chat.

## Permissions

Only unified/ban operators can use this command.

## Syntax

Just type `/leave` in the group chat:

```bash
/leave
```

the bot will ask for confirmation of the operation. If confirmed, the bot will leave the chat. If not, it will 
delete the message and stay in chat.

## For developers

This command is defined in the file `/Bot/Command/Leave.cs`.
