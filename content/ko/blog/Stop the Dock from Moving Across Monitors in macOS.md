---
title: macOS에서 Dock 이동을 막고 한 화면에 고정하기
tags:
  - osx
  - docklock
  - dockguard
  - dock
  - multidisplay
date: 2025-05-11
---

# 🏃‍♂️💨 도망치는 Dock, 잡아라!

macOS 멀티 모니터 환경에서 Dock이 자꾸 "이 화면 저 화면"으로 도망가나요?
내 Dock은 내 화면에만!
이제 더 이상 Dock의 자유분방한 영혼에 휘둘리지 마세요.

---

## 1. 돈으로 Dock을 길들인다 💸

"돈이면 다 돼!"
[DockLock](https://docklockpro.com/)을 구매해서 Dock을 강제로 한 화면에 묶어두세요.
(지갑은 가볍고, 마음은 평온해집니다.)

---

## 2. Dock을 구석으로 몰아넣기 ↔️

Dock이 아래에 있으면 점프력이 상승합니다.
왼쪽이나 오른쪽으로 보내면 "점프 본능"이 약해집니다.

```shell
$ defaults write com.apple.dock orientation left   # right, bottom도 가능
$ killall Dock
```
*왼쪽 Dock, 처음엔 어색하지만 곧 적응됩니다. (아마도...)*

---

## 3. [DockGuard.spoon](https://github.com/ohyoungpark/DockGuard.spoon)로 직접 감시하기 🕵️‍♂️

"내 Dock은 내가 지킨다!"
Hammerspoon으로 Dock을 감시해서
"이탈 금지!"를 외쳐보세요.
(단, 약간의 코딩력과 인내심 필요)

---

## 4. Dock을 은둔시켜버리기 🫥

"점프하는 Dock 볼 바엔 차라리 안 본다!"
Dock을 자동 숨김 + 딜레이를 극단적으로 주면
Dock이 사실상 증발합니다.

```shell
# Dock 자동 숨김
$ defaults write com.apple.dock autohide -bool true

# Dock이 나타나는 딜레이 (초 단위, 16분 40초)
$ defaults write com.apple.dock autohide-delay -float 1000

# Dock이 나타나는 애니메이션 시간도 최대한 느리게
$ defaults write com.apple.dock autohide-time-modifier -float 5

# Dock 재시작
$ killall Dock
```
*이제 Dock은 전설 속으로... (다시 보고 싶으면 설정을 되돌리세요)*

---

## 5. 그냥 포기한다 😇

Dock이 점프하는 건 macOS의 숙명!
"Dock아, 네가 가고 싶은 곳으로 가렴..."
마음의 평화를 찾으세요.

---

**여러분의 Dock, 오늘도 평안하시길!
(그리고 언젠가 애플이 이 문제를 고쳐주길...)**
