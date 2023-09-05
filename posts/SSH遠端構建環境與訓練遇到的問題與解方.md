#### 1. 安裝 cuda 問題:
cuda 安裝後nvcc --version可以正常跑，但nvidia-smi卻顯示錯誤，安裝時沒有把過去的安裝包或檔案清乾淨。
1. 先把cuda的檔案經乾淨
```
sudo apt-get --purge remove "*cublas*" "cuda*" "nsight*" 
sudo apt-get --purge remove "*nvidia*"
sudo rm -rf /usr/local/cuda*
```
2. 從官網取得安裝指令(依版本會有些許不同)
```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/3bf863cc.pub
sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/ /"
sudo apt-get update
sudo apt-get -y install cuda
```

#### 2. 快速取得 requirements.txt
使用 pipreqs 快速從本地project中取得 requirements.txt 以在遠端建立環境。
```
pip install pipreqs
```
在含有全部 source code 的資料夾中輸入指令即可。
```
pipreqs . --force
```


3. 加進path
```
echo 'export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}' >> ~/.bashrc
source ~/.bashrc
```

#### 3. 使用Jupyter Notebook
要從vscode編輯ipynb檔案，要先安裝Jupyter notebook
```
pip3 install jupyter #待確認
```
若要從瀏覽器執行，開啟server後即可從localhost連線
```
python3 -m notebook
```

#### 4. 關閉 vscode 持續執行 script
Training所需時間較長，想關閉ssh連線但不停止運行時使用。
##### nohup 
output can be found in nohup.out
```
nohup [your command] &
```
##### tmux
Type tmux to open a new bash and run your script
```
tmux
```
After that, press **ctrl+B** and **D** to go back to the  terminal.
If you want to check the output or terminate the process or something, use
```
tmux attach
```
to go back to the tmux bash.

#### 5. 執行中的程式莫名中斷
使用nohup確認程式正常執行後關閉vscode，過一陣子卻發現process中斷了，nohup.out沒有顯示錯誤訊息，或者使用tmux時出現killed，可使用以下指令尋找錯誤原因。
```
egrep -i 'killed process' /var/log/syslog
```
雖然沒有cuda out of memory，或許是用量過於緊繃(?)，出現out of memory，減小batchsize後即可。

![](https://hackmd.io/_uploads/H1ljvUx6sn.png)


reference:
* https://stackoverflow.com/questions/56431461/how-to-remove-cuda-completely-from-ubuntu
* https://developer.nvidia.com/cuda-11-7-0-download-archive?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=20.04&target_type=deb_network
* https://linux.how2shout.com/how-to-install-cuda-on-ubuntu-20-04-lts-linux/




