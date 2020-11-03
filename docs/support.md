---
id: support
title: Support
---

We offer an integrated support system, you can contact our operators at any time by invoking the `/call` command.

## Permissions
All administrators in your group and unified/ban operators can perform this command.

## Syntax
Just type the `/call` command to warn the operators:

```bash
/call
```

If yours is a **public** group, a direct link will be provided to operators to allow them to join the group and 
provide support.

If it is a **private** group, you will be advised to join our public [Support Group](https://t.me/unifiedban_group) 
in order to receive support.

## Use cases
Our operators are voluntary, so we ask you to use this command only when strictly necessary. Use cases can be:

- support with the bot configuration
- bot malfunction (if possible use the `/feedback` command or send a [new report](docs/bug))
- reporting of dangerous users

## For developers
This command is defined in the file `/Bot/Command/Call.cs`.

## Support sessions
Our operators can use support sessions to communicate through the bot.

> When a session is active, every message sent by our operators is removed and replicated by the bot.

### Permissions
Only unified/ban operators can perform this command.

### Syntax
To start a support session you need to enter the desired chat and run the `/startsupport` command:

```bash
/startsupport
```

### Reverse
Once the support session has ended, it can be interrupted with the `/endsupport` command:

```bash
/endsupport
```

> During the support session, no data is saved, in respect of user privacy.

### For developers

This command is defined in the file `/Bot/Command/StartSupport.cs`.
