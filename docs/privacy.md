---
id: privacy
title: Privacy
---

From the beginning, we have made privacy our strength. All our services respect the user's privacy.

We do not make useless promises, we bring you the facts. The unified/ban 
[source code](https://github.com/unified-ban/Terminal) is public, you can view it, ask questions and understand how 
we treat your data.

## Data management
From the first version, we design each release to use as little user data as possible:

- we do not store any sensitive data in our databases
- we rely exclusively on the `user_id` of a user (without any relationship it is impossible to understand who this 
data belongs to)
- we don't save any messages from your groups (because they are not essential to the functioning of a management bot 
like ours or a competitor)
- we have been requested over and over again to allow the use of the username in the commands (ex. 
`/ban username`, `/kick username`), we have studied and applied a solution respectful of privacy: we created a volatile 
username cache. With every processed message we fill the temporary cache with the tuple `user_id - username`. The 
commands that accept the username as argument are checking in this cache if the user is known and if not then you 
have an error message. At each shutdown or reboot the cache is lost and is never saved on file, database or any 
external service.
- the login in the dashboard is managed by Telegram servers, each session is maintained through a real-time 
recalculation process using the key provided at login
- we provide you with anonymous statistics of your group, based on the actions of the bot, without collecting user 
data, these data are available through the dashboard, in your personal group page
- once the bot is removed via the `/leave` command or via dashboard, all your group data ~is permanently removed~ from 
our databases
- we preserve the privacy of our operators, indicating only their `user_id` in the logs and only when strictly necessary
- all bot logs are public and can be viewed in real time via the dedicated [Telegram channel](https://t.me/unifiedban_logs)

We want to be **transparent**, we offer these services to make Telegram a safe place. These are not just promises 
but **real facts**.

## Do you still have doubts?
We are available on the official [public group](https://t.me/unifiedban_group) for more information or 
by [e-mail](mailto:amministrazione@linuxhub.it).