---
id: gate
title: Gate and Night scheduling
---

The Gate command is used temporary close, and then reopen, your group in order to raise a protective barrier.
When the Gate is closed no one, without admin privileges, is allowed to send content to the group.

## Permissions
All administrators in your group and unified/ban operators can use this command.

## Syntax
You can use `/gate` followed by the *open* or *close* to change its status:

```bash
/gate open
```
to allow everyone to send content

```bash
/gate close
```

to close the group.

## For developers
/gate is defined in the file `/Bot/Command/Gate.cs`.
