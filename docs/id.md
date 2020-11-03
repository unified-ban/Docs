```yaml
id: id
title: Id
```

The Id command is used to check if a user is a certified unified/ban operator. As an operator he can perform 
maintenance and give support.

> **Warning**: always use this command if someone says it's a unified/ban operator. Trusting him without checking can 
> create serious damage to your group.

## Permissions

All administrators in your group and unified/ban operators can perform this command.

## Syntax

```bash
/id (in reply to a message)
```

If, when replying to a message, the command sends this message:

```bash
@username is a certified unified/ban operator. 👌🏼

As an operator he can perform maintenance and support.
```

everything is OK, the user is an operator. If not, the bot will say that the user is not an operator, prompting you 
to use the `/report` command if needed.

```bash
@username is not a certified unified/ban operator. ⚠️

Feel free to /report if necessary!
```

## For developers

This command is defined in the file `/Bot/Command/Id.cs`.
