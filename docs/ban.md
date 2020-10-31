---
id: ban
title: Ban
---

The Ban command is used to remove an user permanently from your group. If you ban someone, the user cannot re-enter in the group, even if the username changes.

## Permissions
All administrators in your group and unified/ban operators can use this command.

## Syntax
You can use /ban in two ways. One permits you to ban a user when replying to a message:

```
/ban (in reply to a message)
```

or, if the user is in unified/ban's cache, you can insert a username as the command value:

```
/ban @username
```

If you have the correct permissions as administrator, the user will be banned correctly.

## For developers
This command is defined in the file `/Bot/Command/Ban.cs`.
