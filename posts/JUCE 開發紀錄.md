# JUCE 開發紀錄

### 準備 Projucer 開發環境
```
git clone https://github.com/juce-framework/JUCE.git
```
前往 JUCE\extras\Projucer\Builds 並根據開發環境建置
(我是選擇 VisualStudio2019 並建置 Projucer.sln)

### Source Code 功能

PluginProcessor.h: 音訊處理功能設計
```
prepareToPlay() #call by host when about to call playback
processBlock() #is called whenever hit play
```

PluginEditor.h: GUI設計

