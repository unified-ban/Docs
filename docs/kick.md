---
id: kick
title: Kick
---

The Kick command is used to remove an user from your group. Since it's not a ban, the user can enter the group again every time.

## Permissions

All administrators in your group and unified/ban operators can use this command.

## Syntax

You can use `/kick` in two ways. One permits you to kick a user when replying to a message:

```bash
/kick (in reply to a message)
```

or, if the user is in unified/ban's cache, you can insert a username as the command value:

```bash
/kick @username
```

If you have the correct permissions as administrator, the user will be kicked out of your group correctly.

## For developers

This command is defined in the file `/Bot/Command/Kick.cs`.
