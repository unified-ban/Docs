---
id: notes
title: Notes
---

Notes can be used to store big texts, links and other stuff in simple hashtag. Then just type the hashtag to print 
the content inside it.

## Permissions
All administrators in you group and unified/ban operators can perform this command.

## Syntax
```
/addnote {hashtag} {text}
```

Where 
- `{hashtag}` it is the hashtag that must be called to print the content
- `{text}` the note body (text, links …). New lines are allowed.

We can store multiple notes in one hashtag, just use the same hashtag with different contents.

> In v2 we used the `/setnote` command, in the current version this has been kept as an alias to te new command. 
> We discourage using it as it will be removed in future versions.

## Examples
We want to store the phrase `I'm a good boy` in a note with the `#goodboy` hashtag:

```
/addnote #goodboy I'm a good boy
```

Now we want to store another note in the same hashtag:

```
/addnote #goodboy You are a good boy
```

By sending the hashtag as a message, the bot will return both notes.

## Reverse
To remove a specific note, you need to use the `/removenote` replying to a note:

```
/removenote
```

the bot will automatically recognize the unique id of the note and will proceed removing.

> Caution, only the note in response will be removed, not all those with the same hashtag.

## List all notes
In the current version is not possible to print a list with all notes. There is an issue opened to implement this 
feature [Issue #53](https://github.com/unified-ban/Terminal/issues/53).

## For developers
This command is defined in the file `/Bot/Command/AddNote.cs`.