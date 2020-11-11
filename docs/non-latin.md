---
id: non_latin
title: Non-Latin Filter
---

The Non-Latin filter is a unified/ban filter that automatically deletes a message written with a non-latin (es. russian) character.

## Permissions

All administrators in your group and unified/ban operators can configurate this command.

## Examples

If the filter is activated and someone sends a message written in a non-latin language, the bot will delete the message.

Let's say someone writes "Hello" in arabic:

```
مرحبا
```

the bot will see it and it'll be deleted.

## For developers

This filter is defined in the file `/Filters/NonLatinFilter.cs`.
