---
id: rm
title: Delete
---

The rm command is used to delete a specific message in your group. You can use it to delete a certain number of 
messages in one run, too.

## Permissions

All administrators in your group and unified/ban operators can use this command.

## Syntax

You can delete a message by replying to it with:

```bash
/rm
```

If you want to delete the latest messages sent in your group, you can do it by specifying  the number of messages 
that need to be deleted. If you want to delete the five latest messages, you can use `/rm` like this:

```bash
/rm 5
```

## For developers

This command is defined in the file `/Bot/Command/Rm.cs`.
