---
title: Keep Your Dock from Jumping Across Monitors on macOS
tags:
  - osx
  - docklock
  - dockguard
  - dock
  - multidisplay
date: 2025-05-11
---

# 🏃‍♂️💨 Catch That Runaway Dock!

Does your Dock keep leaping from one monitor to another in your macOS multi-display setup? Tired of chasing it around like a cat after a laser pointer? Here are some real-world (and slightly tongue-in-cheek) ways to keep your Dock where it belongs.

---

## 1. Tame It with Money 💸

"Money solves everything!" Buy [DockLock](https://docklockpro.com/) and force your Dock to stay put on one screen. (Your wallet gets lighter, but your mind gets calmer.)

---

## 2. Corner the Dock ↔️

When the Dock is at the bottom, it gets extra jumpy. Move it to the left or right and its urge to wander drops dramatically.

```shell
$ defaults write com.apple.dock orientation left   # right, bottom also possible
$ killall Dock
```
*Left-side Dock: weird at first, but you'll get used to it. (Probably...)*

---

## 3. DIY Dock Guarding with [DockGuard.spoon](https://github.com/ohyoungpark/DockGuard.spoon) 🕵️‍♂️

"If you want it done right, do it yourself!" Use Hammerspoon to keep an eye on your Dock and shout "No escaping!" (Some coding skills and patience required.)

---

## 4. Make the Dock Disappear 🫥

"If I can't stop it from jumping, I'll just make it vanish!" Set the Dock to auto-hide and crank up the delay so high, it's basically a legend.

```shell
# Auto-hide the Dock
$ defaults write com.apple.dock autohide -bool true

# Set a huge delay before the Dock appears (in seconds, e.g., 1000 = 16 minutes 40 seconds)
$ defaults write com.apple.dock autohide-delay -float 1000

# Make the animation super slow
$ defaults write com.apple.dock autohide-time-modifier -float 5

# Restart the Dock
$ killall Dock
```
*Now your Dock is a myth. (To bring it back, just reset these settings!)*

---

## 5. Just Give Up 😇

Maybe the Dock's wanderlust is just its destiny. "Go where you want, Dock..." Find your inner peace and let it be.

---

**May your Dock be ever stable! (And may Apple someday fix this for real...)**