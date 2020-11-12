---
id: rtlname
title: RTL Name filter
---

The RTL Name filter is a unified/ban filter that automatically deletes a message from a user that has a name written using an RTL language (es. arabic).

## Permissions

All administrators in your group and unified/ban operators can configurate this filter.

## Examples

If the filter is activated and someone with a name or surname written in a RTL langague, the bot will delete the message.

For example, if an user called "مرحبا" writes a simple message, even in a non RTL language, the bot will delete it. 

## For developers

This command is defined in the file `/Filters/RTLNameFilter.cs`.
