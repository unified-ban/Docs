---
id: safegroups
title: Safe groups
---

Safe groups can be used to allow users to cite usernames of external groups, bypassing spam filters.

## Permissions
All administrators in you group and unified/ban operators can perform this command.

## Syntax
```
/addsafe {username}
```

Where 
- `{username}` is the group (or channel) public username we want to mark as safe

## Examples
We want to allow users to write the username `@unifiedban_news` in chat:

```
/addsafe @unifiedban_news
```

## Reverse
The `/remsafe` command can be used to remove an username from the safe list:

```
/remsafe {username}
```

> Caution, this command will be replaced by `/removesafe` in future versions
> [Issue #62](https://github.com/unified-ban/Terminal/issues/62).

## List all safe groups
For better management, the list of safe groups is only available through the Dashboard.

Choose your group in the Groups page, then click on the **SafeGroups** Tab.

## For developers
This command is defined in the file `/Bot/Command/AddSafeGroup.cs`.