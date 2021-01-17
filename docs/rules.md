---
id: rules
title: Rules
---


The bot can show a rules to be followed in the group to every new user who joins your group.


## Permissions
All administrators in your group and unified/ban operators can perform this command.

## Syntax
```bash
/setrules {text}
```

where:
- `{text}` is the message we want to show to the new user. This field supports **HTML** with `\n` as line break. 

Some variables can be used in `{text}` to obtain dynamic messages:
- `{{from_username}}` the username of the new user
- `{{from_first_name}}` the first name of the new user
- `{{from_last_name}}` the last name (if set) of the new user
- `{{chat_title}}` the name of your group

## Examples
We want to mention the set of rules expected to be followed by every member of the group:

```bash
/setrules Hi, {{from_username}}! The following are set of set of rules that are expected to be followed by every member of the  {{chat_title}} group!


