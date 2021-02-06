---
id: ban
title: Ban
---

The Ban command is used to remove an user permanently from your group. If you ban someone, the user cannot re-enter 
in the group, even if the username changes.

## Permissions
All administrators in your group and unified/ban operators can use this command.

## Syntax
You can use `/ban` in two macro ways. One permits you to ban a user when replying to a message:

```bash
/ban (in reply to a message)
```

or providing a reference: if the user is in [unified/ban's cache](https://docs.unifiedban.solutions/docs/privacy) , you can insert a username as the command value:

```bash
/ban @username
```

if you know the user's telegram_id:

```bash
/ban telegram_id
```

If you have the correct permissions as administrator, the user will be banned correctly.

### Trust Factor
Every ban affects the banned user's Trust Factor by removing 5 Trust Points.

## Reverse
If you want to unban an user for some reason, you can use the command `/unban` with the same syntax of the `/ban` 
command.

## For developers
/ban is defined in the file `/Bot/Command/Ban.cs`, and /unban is defined in the file `/Bot/Command/Unban.cs`.
