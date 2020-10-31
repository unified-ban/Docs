---
id: ban
title: Ban
---

The Ban command is used to block an user from your group. 

When a user is blocked, he cannot read or reply to messages.

## Permissions

All administrators in your group and unified/ban operators can use this command.

## Syntax

You can use `/ban` in two ways. One permits you to block an user when replying to a message:

```
/ban (in reply to a message)
```

or, if the user is in unified/ban's cache, you can insert his username as the command value:

```
/ban @username
```

## Reverse
The process can be reversed using the `/unban` command. This supports the same parameters:

```
/ban (in reply to a message)
```

or passing an username if in unified/ban's cache:

```
/ban @username
```

## For developers

This command is defined in the file `/Bot/Command/Ban.cs`.
