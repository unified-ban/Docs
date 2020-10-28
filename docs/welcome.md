---
id: welcome
title: Welcome
---

The bot can show a welcome message to every new user who joins your group.

The welcome message can integrate an interactive keyboard with customizable buttons.

## Permissions
All administrators in you group and unified/ban operators can perform this command.

## Syntax
```
/setwelcome {text}
```

where:
- `{text}` is the message we want to show to the new user. This field supports **HTML** with `\n` as line break. 

Some variables can be used in `{text}` to obtain dynamic messages:
- `{{from_username}}` the username of the new user
- `{{from_first_name}}` the first name of the new user
- `{{from_last_name}}` the last name (if set) of the new user
- `{{chat_title}}` the name of your group

## Examples
We want to just say hello to the new user:

```
/setwelcome Hi, {{from_username}}! Welcome to {{chat_title}}!
```

## Reverse
To disable the welcome message, type `/config` in your group and disable the `WelcomeMessage` option. The same 
operation can be performed from the [Dashboard](https://unifiedban.solutions).

## For developers
This command is defined in the file `/Bot/Command/SetWelcome.cs`.

## Welcome buttons
We can add custom buttons to the welcome message. This via the `/addwelcomebutton` command.

### Syntax
``
/addwelcomebutton {button_name} {button_link}
``

where:
- `{button_name}` is the text displayed on button
- `{button_link}` is the link where the button points to

### Examples
We want to display a button that point to out Network channel:

```
/addwelcomebutton Network https://t.me/unifiednet
```

### Reverse
To remove a button from the welcome message, just use the `/removewelcomebutton`:

```
/removewelcomebutton {button_name}
```

### List all buttons
We can use the `/welcomebuttons` ti display a list with all buttons:

```
/welcomebuttons
```

## For developers
This command is defined in the file `/Bot/Command/AddWelcomeButton.cs`.