# Ch3 Quiz

## Q1

讓測試人員減少重複性與機械化的工作內容，避免耗費大量時間用於測試任務，
也能有效避免人為錯誤，提升程式碼品質。然而，使用自動化也有其限制，如無
法自動化生成測試用例，或是難以確保驗證覆蓋率完整等。

---

## Q2

物件導向的程式設計思維，我們經常在一個類中封裝多個屬性與操作該屬性的方
法，因此，類中屬性經常由多個操作行為共享，因此相同數量的操作，可能因執
行的順序性產出差異性的結果。而類的繼承更是容易隱藏這些屬性與其操作間的
細節，導致更難預期其執行結果，對於設計測試案例帶來阻礙。

---

## Q3

[quiz3.ts](chapters/ch3/src/quiz3.ts)  
[quiz3.test.ts](chapters/ch3/__tests__/quiz3.test.ts)

---

## Q4

此題修改為 TS 版本來作答，並且根據題目要求，增加 disableNullCheck 
當 disableNullCheck 設置為 true 時，會自動跳過該錯誤判斷，導致誤判發生

[quiz4.ts](chapters/ch3/src/quiz4.ts)  
[quiz4.test.ts](chapters/ch3/__tests__/quiz4.test.ts)


移除掉 if (result == null) throw new NullPointerException ("Min.min"); 會導致失敗

---

## Q5

以下JUnit測試方法的sort()方法存在非語法性缺陷。使用RIPR模型找到缺陷並描述它。

```java
@Test
public void testSort()
{
	names.add ("Laura");
	names.add ("Han");
	names.add ("Alex");
	names.add ("Ashley");
	names.sort();
	assertTrue("Sort method", names.getFirst().equals("Alex"));
}
```

在 RIPR 模型中，輸入的測試用值可使其符合可達性(R)、沒有正確排序影響程序，
導致錯誤狀態(I)，但是僅檢驗 names 陣列(P)中第一個值，導致只要故障不出現在
陣列第一位，就無法揭示錯誤(R)。

## Q6

(c) 無法避免傳播，沒有測試案例。
	不能，無法避免傳播。如輸入 primes.computePrimes(10), 會跳過 19、29 
    造成錯誤狀態。且該錯誤狀態會立即被保存下來，必定傳播。 

原 PrimeNumbers 程式碼重新為 TS 版本，請見
[quiz6.ts](chapters/ch3/src/quiz6.ts)

根據題目要求，以測試案例回答 (a、b、d、e)，請見
[quiz6.test.ts](chapters/ch3/__tests__/quiz6.test.ts)
