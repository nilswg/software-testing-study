# Ch1 Quiz

## Q1

從 Beizer 的第二級 (測試是為了發現錯誤) 提升到第四級 (測試是一種提高軟體品質的思維表現)，可以做的事情如：
-   為測試制定測試計劃，並執行不同類型的測試，像是單元測試、集成測試和系統測試。
-   讓測試人員能參與開發過程，像是結隊開發(pair-programming)，一人負責開發，另一人適時提出建議，這能提升程式碼品質。
-   建立測試文化，鼓勵開發人員積極參與測試，提供測試反饋並獲得相應的獎勵。
-   培訓開發人員和測試人員，以確保他們具備測試和品質保證方面的專業知識和技能。
-   收集和分析測試結果利於後續改進測試流程。

---

## Q2 

-   想像一下，您正在玩的遊戲突然崩潰了，您在屏幕上看到一條錯誤消息，就是錯誤（fault）。
    基於這些代碼或設計上的缺陷或錯誤，導致軟件的運行失敗（failure）的情況。
-   也能使用 RIPR 模型來說明，代碼出錯的位置為錯誤（fault），而失敗（failure）為因此導致後續的其中一種異常情況。

---

## Q3

-   風險為可能發生的負面情況，除程式本身邏輯上的錯誤，也可能是流程本身設計不合理，
    安全漏洞、運行環境與外部因素（如硬體限制、網路協議等）有關。
-   因此通過測試，就能讓軟件系統發布給用戶之前，識別並解決軟件中的潛在風險。
-   當然我們無法排除所有風險，只是將風險降至可接受的水平。

---

## Q4 (實作 Union)

- (a) [quiz4_a.ts](chapters/ch1/src/quiz4_a.ts)  

- (b) 可能的問題和不明確之處：
    - 不知道函式具體用途，從說明得知 a, b 僅會返回其一。
    - 對於兩個輸入型態未知，應該要更具體給定可能的型態。
    - 當 a, b 皆為空陣列時，應該也要能返回空陣列
    - 根據函式名稱，應該要返回 a 與 b 形成的聯集，要能去除重覆

- (c) 暴露錯誤的測試案例：
    - 應該任 a 或 b 為空陣列時，都能返回其一。
    - 應明確指定 a 與 b 的陣列中元素型態，這裡假定這是數值。
    - 空值輸入的測試案例，當 a, b 皆為空陣列時，返回空陣列作為答案。
    - 測試給定元素 a 與 b 中包含重覆的數值，應能被剔除後正確返回。
    - [quiz4.test.ts](chapters/ch1/__tests__/quiz4.test.ts)

- (d) [quiz4_d.ts](chapters/ch1/src/quiz4_d.ts) 


---


## Q5 (故障程式修復)

<br>

### 作答要求
  - (a) 描述問題與修正方法
  - (b) 給出一個測試案例不會執行到故障
  - (c) 給出一個測試用例，有執行到故障卻不會產生錯誤狀態
  - (d) 給出一個測試用例，有產生錯誤狀態但沒有造成失敗
  - (e) 給出題目給的測試案例，給出完整的錯誤狀態
  - (f) 實作修改後的程式方法

<br>

### findLast()

```java
public int findLast (int[] x, int y)
{
    for (int i=x.length-1; i > 0; i--) // 👈 err
    {
        if (x[i] == y)
        {
            return i;
        }
    }
    return -1;
}
// test: x = [2, 3, 5]; y = 2; Expected = 0
```

- (a) 沒有正確執行到 i = 0
- (b) 否，為 for 迴圈條件，一定會被執行
- (c) 是，x = [1, 2]; y = 2; 只要 y !== x[0]，可避免錯誤狀態。  
- (d) 是，x = [0, 1, 2], y = 3 ; 只要 y 無對應 x[i] 返回-1，無法發現此錯誤。
- (e) 
    - 輸入: x=[ 1, 2, 3 ], y = 2
    - 輸出: -1
    - 期待: 0
    - 初始錯誤狀態:  i=1 時結束迴圈，結果返回 -1
    - [quiz5.test.ts](chapters/ch1/__tests__/quiz5.test.ts)

- (f) [quiz5.ts](chapters/ch1/src/quiz5.ts)

<br>

### lastZero.

```java
public static int lastZero (int[] x)
{
    for (int i = 0; i < x.length; i++) // 👈 err
    {
        if (x[i] == 0)
        {
            return i;
        }
    }
    return -1;
}
// test: x = [0, 1, 0]; Expected = 2 
```
- (a) 迴圈執行順序錯誤，i 應始於 x.length-1，終於 0 
- (b) 否，為 for 迴圈條件，一定會被執行
- (c) 是，x = [], 陣列中沒有 0，可避免錯誤狀態。  
- (d) 是，x = [0], 最後 0 位置恰好為首位，無法發現此錯誤。
- (e)
    - 輸入: x=[ 0, 1, 0 ]
    - 輸出: 0
    - 期待: 2
    - 初始錯誤狀態: i =0 時，便返回結果 0
    - [quiz5.test.ts](chapters/ch1/__tests__/quiz5.test.ts)

- (f) [quiz5.ts](chapters/ch1/src/quiz5.ts) 

<br>

### countPositive.

```java
public int countPositive (int[] x)
{
    int count = 0;
    for (int i = 0; i < x.length; i++) 
    {
        if (x[i] >= 0) // 👈 err
        {
            count ++;
        }
    }
    return count;
}
// test: x = [-4, 2, 0, 2]; Expected = 2
```

- (a) 正整數的判斷錯誤，0 非正整數
- (b) 是，x 帶空陣列，可避免進入迴圈，避免執行 (a) 的錯誤
- (c) 是，x 為空陣列，可避免錯誤狀態。
- (d) 是，x 中不存在 0，無法發現此錯誤。
- (e) 
    - 輸入: x=[ -4, 2, 0, 2]
    - 輸出: 3
    - 期待: 2
    - 初始錯誤狀態: i=2, count=1 時，將 0 判斷為 true。
    - [quiz5.test.ts](chapters/ch1/__tests__/quiz5.test.ts)

- (f) [quiz5.ts](chapters/ch1/src/quiz5.ts)

<br>

### oddOrPos.

```java
public static int oddOrPos(int[] x)
{
    int count = 0;
    for (int i = 0; i < x.length; i++) 
    {
        if (x[i]%2 == 1 || x[i] > 0) // 👈 err
        {
            count ++;
        }
    }
    return count;   
}
// test: x = [-3, -2, 0, 1, 4]; Expected = 3
```

- (a) -3 沒有被判定為有效計數，因為負的奇數 %2 會是 -1。
- (b) 是，x 帶空陣列，可避免進入迴圈，避免執行 (a) 的錯誤
- (c) 是，x 中只有正數，可避免錯誤狀態。
- (d) 是，x 不存在負的奇數，無法發現此錯誤。
- (e) 
    - 輸入: x=[ -3, -2, 0, 1, 4]
    - 輸出: 2
    - 期待: 3
    - 初始錯誤狀態: i=0, count=0 時，執行 -3 % 2 為 -1，沒有執行 count++。
    - [quiz5.test.ts](chapters/ch1/__tests__/quiz5.test.ts)

- (f) [quiz5.ts](chapters/ch1/src/quiz5.ts)

---

## Q6

-   以 (a) 回答。
    
    level2，在個人工作經驗中的某公司擔任開發人員，發現 QA 和 RD 之間存
    在一種相互制衡的關係。某次專案中，QA 向我傾訴，讓我了解到 QA 會面臨績效壓力，
    被告知應盡可能發現開發人員在軟件中的缺陷，並以發現的數量作為績效評估依據。
