---
id: badwords
title: Bad Words
---

The Bad words filter allows you to censor one or more words in a Telegram group.

## Permissions
All administrators in your group and unified/ban operators can perform this command.

## Syntax
```bash
/bad {record_name} {words space separated}
```

Where 
- `{record_name}` is the name of the rule (not the word to be censored)
- `{words space separated}` are one or more words to be censored. Be careful, adding more than one word in the same 
rule, to block a message this must contain all the words we have entered.

> Caution, this command will be replaced by `/addbad` in future versions
> [Issue #62](https://github.com/unified-ban/Terminal/issues/61).

## Examples
We need to block the `foo` word. We can do this like that:

```bash
/bad my_foo_rule foo
```

Now, instead, we want to block the words `foo` & `bar`:

```bash
/bad my_foo_bar_rule foo,bar
```

## Reverse
To remove a rule from the Bad words filter, you need to use the `/unbad` command:

```bash
/unbad {record_name}
```

where `{record_name}` is the name of the rule we want to remove.

> Caution, this command will be replaced by `/removebad` in future versions
> [Issue #62](https://github.com/unified-ban/Terminal/issues/61).

## List all bad words
For better management, the list of bad words is only available through the Dashboard.

Choose your group in the Groups page, then click on the **Badwords** Tab.

## For developers
This command is defined in the file `/Bot/Command/AddBadWord.cs`.
