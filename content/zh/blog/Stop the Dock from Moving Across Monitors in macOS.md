---
title: 让你的 Dock 别再满屏乱跑（macOS 多显示器指南）
tags:
  - osx
  - docklock
  - dockguard
  - dock
  - multidisplay
date: 2025-05-11
---

# 🏃‍♂️💨 跑酷的 Dock，快回来！

在 macOS 多显示器环境下，你的 Dock 总是"左蹦右跳"，像个调皮的孩子？别担心，这里有几招（带点幽默）帮你把 Dock 留在你想要的地方。

---

## 1. 用钱收服它 💸

"有钱能使鬼推磨！"买个 [DockLock](https://docklockpro.com/)，Dock 乖乖只待在一个屏幕上。（钱包瘦了，心情稳了。）

---

## 2. 把 Dock 赶到角落 ↔️

Dock 在底部时最爱乱跑。把它挪到左边或右边，跳跃欲望立刻下降。

```shell
$ defaults write com.apple.dock orientation left   # 也可以用 right 或 bottom
$ killall Dock
```
*左侧 Dock，刚开始很别扭，但慢慢你会习惯的（大概...）*

---

## 3. 用 [DockGuard.spoon](https://github.com/ohyoungpark/DockGuard.spoon) 自己看管 🕵️‍♂️

"自己的 Dock 自己守！"用 Hammerspoon 盯着 Dock，随时喊"禁止越狱！"（需要一点点代码能力和耐心）

---

## 4. 让 Dock 隐身 🫥

"拦不住你，那就让你消失！"把 Dock 设为自动隐藏，并把延迟调到天荒地老，Dock 基本成了传说。

```shell
# 自动隐藏 Dock
$ defaults write com.apple.dock autohide -bool true

# Dock 出现的延迟（秒，1000=16分40秒）
$ defaults write com.apple.dock autohide-delay -float 1000

# 出现动画也调慢点
$ defaults write com.apple.dock autohide-time-modifier -float 5

# 重启 Dock
$ killall Dock
```
*现在 Dock 已经成了都市传说。（想找回来就把设置改回去）*

---

## 5. 干脆放弃吧 😇

也许 Dock 爱跳是它的天性。"Dock 啊，你想去哪就去哪吧..."放下执念，内心平静。

---

**祝你的 Dock 永远安分！（也希望有一天 Apple 能修好这个问题...）**