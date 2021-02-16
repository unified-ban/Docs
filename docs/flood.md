---
id: flood
title: Flood Control
---

You can enable this feature from [bot configuration command](config). 

It checks if a user send more messages in **less than 3 seconds** from the previous one.
If enabled, a flood point is added to the user.
The user will be **muted for 5 minutes** and his [Trust Factor](trust) decreased by one on reaching 5 flood points.

## For developers

This function is defined in the file `/Bot/`.