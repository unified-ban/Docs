---
id: check
title: Check
---

The Check command is used to, literally, check if unified/ban is configured as it should be and has the correct permissions.

## Permissions

All administrators in your group and unified/ban operators can perform this command.

## Syntax

```
/check
```

If unified/ban is an administrator and has all the permissions it needs, you should see a message like the following:

```bash
I have following permissions:
Can delete messages: True
Can ban users: True

Result:
My permissions are configured correctly! 👍🏼
```

Else, you will see this, or something similar:

```bash
I have following permissions:
Can delete messages: False
Can ban users: False

Result:
My permissions are not configured correctly! ‼️
```

## For developers

This command is defined in the file `/Bot/Command/Check.cs`.
