---
title: macOSでDockがモニター間を飛び回るのを止める方法
tags:
  - osx
  - docklock
  - dockguard
  - dock
  - multidisplay
date: 2025-05-11
---

# 🏃‍♂️💨 逃げるDockを捕まえろ！

macOSのマルチディスプレイ環境でDockが「こっちの画面、あっちの画面」と勝手に移動してイライラしたことありませんか？
「私のDockは私の画面にだけいてほしい！」そんなあなたに贈る、ちょっとユーモアを交えた対策集です。

---

## 1. お金で解決 💸

「金で解決できるなら安いもんだ！」
[DockLock](https://docklockpro.com/)を購入して、Dockを強制的に一つの画面に縛り付けましょう。
（財布は軽く、心は穏やかに…）

---

## 2. Dockを端っこに追いやる ↔️

Dockが下にあるとジャンプ力がアップします。
左か右に移動させると、ジャンプしたい気持ちがグッと減ります。

```shell
$ defaults write com.apple.dock orientation left   # rightやbottomもOK
$ killall Dock
```
*左Dock、最初は違和感あるけど、そのうち慣れる…かも？*

---

## 3. [DockGuard.spoon](https://github.com/ohyoungpark/DockGuard.spoon)で自作ガード 🕵️‍♂️

「自分のDockは自分で守る！」
HammerspoonでDockを監視して「脱走禁止！」と叫びましょう。
（ちょっとしたコーディング力と根気が必要です）

---

## 4. Dockを隠遁させる 🫥

「ジャンプするDockを見るくらいなら、いっそ消えてもらおう！」
Dockを自動非表示＋超長いディレイに設定すれば、Dockはほぼ伝説の存在に。

```shell
# Dockを自動非表示
$ defaults write com.apple.dock autohide -bool true

# Dockが現れるまでのディレイ（秒、1000=16分40秒）
$ defaults write com.apple.dock autohide-delay -float 1000

# アニメーションも超スローに
$ defaults write com.apple.dock autohide-time-modifier -float 5

# Dockを再起動
$ killall Dock
```
*これでDockは伝説に…（戻したいときは、下記のコマンドを実行してください）*

```shell
$ defaults write com.apple.dock autohide -bool false
$ defaults remove com.apple.dock autohide-delay
$ defaults remove com.apple.dock autohide-time-modifier
$ killall Dock
```

---

## 5. もう諦める 😇

DockがジャンプするのはmacOSの宿命かも。
「Dockよ、好きなところへ行きなさい…」
心の平穏を見つけましょう。

---

**あなたのDockが今日も平和でありますように！
（そしていつかAppleがこの問題を直してくれますように…）**