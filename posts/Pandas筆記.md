# Pandas筆記

### 讀csv檔
```
pd.read_csv('filename')
```


### 取某個or某些row
```
row = df.iloc[0]
rows = df.iloc[0:20] #0~19
```
### 結合兩個dataframe
```
df_concated = pd.concat([df1,df2])
```

### 其他常用
```
df.info() #各column資訊，如count, dtype等等
df = df[df.smth == smth] #根據某種條件篩選row
df.dtypes
df.shape
df2 = df.copy() #複製一個
df2 = df.select_dtypes(include = '留著的', exclude = '丟掉的')
len(df.index)

```