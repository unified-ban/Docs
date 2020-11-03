---
id: captcha
title: Captcha
---

We offer an integrated human verification system as a defense and prevention system for userbots.

Once active, when a new user joins the group, they are shown with a challenge to complete in order to prove they are 
human and not userbots.

The Captcha is integrated into the group's Welcome message, therefore once activated, the Welcome feature is also 
enabled. For better integration you can configure the [Welcome message](/docs/welcome).

## Syntax
The Captcha can only be enabled through the bot [configuration menu](/docs/config), then sending the `/config` 
command and enabling the Captcha feature.

## Reverse
Just type `/config` again and disable the Captcha feature.

## For developers
This command is defined in the file `/Bot/Command/Captcha.cs`.