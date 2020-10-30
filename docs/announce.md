```yaml
id: announce
title: Announce
```

Our bot integrates an announcement system, useful for communicating important notices to the members of your group.

New announcements are automatically pinned in the chat, alerting all your members.

## Permissions
All administrators in your group and unified/ban operators can perform this command.

## Syntax
```
/announce {text}
```

where:
- `{text}` is the content of the announce. This field supports **HTML**, see 
[here](https://core.telegram.org/api/entities) for a list of all supported tags.

## Example
For some strange reason, we want to warn users that `The bread is baked`:

```
/announce The bread is baked
```

By sending the command, the bot creates the announce and pin it in chat.

## For developers
This command is defined in the file `/Bot/Command/Announce.cs`.
