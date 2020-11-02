---
id: blacklist
title: Blacklist
---

The Blacklist is the main functionality of our bot and is at the core of all our services.

All users recognized as dangerous are entered (after a careful diagnosis) in this list. When this happens, he is no 
longer able to join (or remain) in groups where there is unified/ban.

## Check logs

All users included in this list are reported in real time in our Telegram 
[Logs Channel](https://t.me/unifiedban_logs). Also you can see the list of the last 100 entries (with date, 
[user_id](/docs/privacy) and reason) on our [website](https://unifiedban.solutions/Logs).

## Terminology

**We are explicitly against all forms of racism**.  On this basis, we disagree with those peaople who see (and 
search for) racism everywhere and (for now) we do not intend to change our internal terminology (blacklist, 
whitelist).

We have deployed all of our resources to real causes and we are ready to do it again and again.

## Remove yourself from the list

Once on this list it is difficult to get out. In any case, we offer everyone the opportunity to explain their 
version of events.

To request removal from the blacklist, you must contact a system administrator through one of the following channels:

- [E-mail support](mailto:amministrazione@linuxhub.it) (preferred method)
- [Telegram Support](https://t.me/unifiedban_group) (the conversation will be private)

Repositories Issues **are not a valid support channel**.

Public discussions and/or on channels not mentioned above will be ignored.

## The blacklist command

### Permissions

Only unified/ban operators can use this command.

### Syntax

You can use `/bb` in two ways. Using the `user_id`:

```bash
/bb {user_id}
```

or replyng to a message:

```bash
/bb (in reply to a message)
```

By adding a new user to the blacklist, the bot will ask for one of the following reasons:

- spam
- scam
- harrassment
- other

choosing the **other** reason, the bot will request more details.

### Reverse

The process can be reversed (only after a careful diagnosis of the case), using the `/white` command in the same 
two ways. Using the `user_id`:

```bash
/white {user_id}
```

or replyng to a message:

```bash
/white (in reply to a message)
```

### For developers

This command is defined in the file `/Bot/Command/Blacklist.cs`.