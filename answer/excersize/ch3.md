# Ch3 Quiz

## Q1 為什麼自動化測試案例?有哪些侷限?

(a) 1.可以避免單調乏味的工作 2.解放測試工程師，使他們可以集中在核心任務 3.不用重複/額外的操作，測試案例可以重複執行 4.減少疏忽造成的錯誤 5.消除測試者能力的落差導致的測試品質差異

(b) 1.跟軟體的可測性很有關係，可測性不佳(可觀察性與可控性)時，測試品質難以提升，甚至故障很從精心設計的測試案例中容易逃脫。 2.無法評估不預期的輸出(根本沒想到過的) 3.無法做出決策(學生手冊)

## Q2 繼承結構如何影響可控性和可視性

繼承結構可以很好的提取重複的部分，程式可能會變得比較理想。但在過於龐大、複雜的繼承結構中，程式將變成非常難以維護和測試。結構中各層的互動(執行路徑等)與狀態(內部變數等)將被關在裡面，看不到也控制不了。

## Q3

[quiz3.js](chapters/ch3/src/quiz3.js)
[quiz3.test.js](chapters/ch3/__tests__/quiz3.test.js)

## Q4

是，會失敗(改寫 JS 之後)
[quiz4.js](chapters/ch3/src/quiz4.js)
[quiz4.test.js](chapters/ch3/__tests__/quiz4.test.js)

## Q5

應該檢查整個 list 的內容
因為測試不可能完整，就算目前測試看起來方法都可以正常運作，但若是存在故障，在特定輸入下，執行到該故障(R 可達性)，但卻沒有很好的 sorting，而造成錯誤狀態(I 感染)，且最後排序出來的 list 其實是錯的(P:傳播到輸出)，但最後卻只有檢驗第一個項目是否正確，將無法接露出這個失敗(R)。

## Q6

[quiz6.js 的下方回答](chapters/ch3/src/quiz6.js)

## Q7
