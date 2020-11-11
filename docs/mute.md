---
id: mute
title: Mute and Unmute
---

The Mute command is used mute restrict an user in your group. When a user is restricted, he cannot read or write 
messages.

> Unlike the ban, a limited user can remain in the group.

There is an opened Issue ([#63](https://github.com/unified-ban/Terminal/issues/63)) with a request to provide a time 
frame as a command parameter.

## Permissions

All administrators in your group and unified/ban operators can use this command.

## Syntax

You can use `/mute` in two ways. One permits you to restrict an user when replying to a message:

```bash
/mute (in reply to a message)
```

or, if the user is in unified/ban's cache, you can insert a username as the command value:

```bash
/mute @username
```

If you have the correct permissions as administrator, the user will be restricted.

## For developers

This command is defined in the file `/Bot/Command/Mute.cs`.

## Reverse

To reverse the operation you can use the `/unmute` command in the same way. Replyng to a message:

```bash
/unmute (in reply to a message)
```

or, if the user is in unified/ban's cache, you can insert a username as the command value:

```bash
/mute @username
```

## For developers

This command is defined in the file `/Bot/Command/UnMute.cs`.