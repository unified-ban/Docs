---
id: pin
title: Pin
---

The Pin command allows you to pin a message in your Telegram group.

## Permissions

All administrators in your group and unified/ban operators can perform this command.

## Syntax

```
/pin
```

The Pin command doesn't have any kind of parameter or value. You can use it only as a reply to another message, 
wrote in the group by you, a bot or a member. You can't write a message as the command value and directly pin it 
using the command.

## Examples

I did an important announcement in the group with a message. It can be whatever you want, a text message, a photo or 
a video. To pin it, simply use the "Reply" function and write:

```
/pin
```

Yes, it's this easy.

## For developers

This command is defined in the file `/Bot/Command/Pin.cs`.
