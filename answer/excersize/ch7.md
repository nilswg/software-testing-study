# Ch7 Quiz

# 7.1 Quiz

## Q1

N:{ 1,2,3,4,5,6,7,8,9,10 }
N0:{ 1,2,3 }
Nf:{ 8,9,10 }
E:
( 1,4 )
( 1,5 )
( 2,5 )
( 3,6 )
( 3,7 )
( 4,8 )
( 5,8 )
( 5,9 )
( 6,2 )
( 6,10 )
( 7,10 )
( 9,6 )

## Q2

並非起始於 N0 中的一個節點且終止於 Nf 中的一個節點
如:[ 5,9,6,10 ]

## Q3

| N0  | Nf  | Path                                      |
| --- | --- | ----------------------------------------- |
| 1   | 8   | [ 1,4,8 ], [ 1,5,8 ],[ 1,5,9,6,2,5,8 ]    |
| 1   | 9   | [ 1,5,9 ], [ 1,5,9,6,2,5,9]               |
| 1   | 10  | [ 1,5,9,6,10 ], [ 1,5,9,6,2,5,9,6,10 ]    |
| 2   | 8   | [ 2,5,8 ], [ 2,5,9,6,2,5,8 ]              |
| 2   | 9   | [ 2,5,9 ], [ 2,5,9,6,2,5,9]               |
| 2   | 10  | [ 2,5,9,6,10 ], [ 2,5,9,6,2,5,9,6,10 ]    |
| 3   | 8   | [ 3,6,2,5,8 ], [ 3,6,2,5,9,6,2,5,8 ]      |
| 3   | 9   | [ 3,6,2,5,9 ], [ 3,6,2,5,9,6,2,5,9 ]      |
| 3   | 10  | [ 3,6,10 ], [ 3,7,10 ], [ 3,6,2,5,9,6,10] |

## Q4

a=0, b=1: [ 1,2,4,3 ] 訪問 ( 2,4 )

# 7.2.2 Quiz

## Q3

同之前的章節，Tweak 中的測試用例可能超出 Cweak 且也超出 Cstorng。
見 7.2.2.Q3.png

## Q5

-   a.見 7.2.2.Q5.png
-   b.

    | start edge | Path                |
    | ---------- | ------------------- |
    | ( 1,2 )    | ( 1,2,3 ),( 1,2,4 ) |
    | ( 1,7 )    | N/A                 |
    | ( 2,3 )    | ( 2,3,2 )           |
    | ( 2,4 )    | ( 2,4,5 ),( 2,4,6 ) |
    | ( 3,2 )    | ( 3,2,3 ),( 3,2,4 ) |
    | ( 4,5 )    | ( 4,5,6 )           |
    | ( 4,6 )    | ( 4,6,1 )           |
    | ( 5,6 )    | ( 5,6,1 )           |
    | ( 6,1 )    | ( 6,1,2 ),( 6,1,7 ) |

-   c. 沒有涵蓋到 ( 3,2,3 ) 與 ( 6,1,2 )
-   d. 此測試路徑無直接遊歷此簡單路徑。此路徑順路遊歷(4,6,1,2,4)離開又回來。
-   e. 節點覆蓋測試需求: { 1,2,3,4,5,6,7 }。邊覆蓋測試需求:見上表 start edge 欄位的所有邊。主路徑覆蓋測試需求:

    | Length | no  | Path                     | 主路徑 |
    | ------ | --- | ------------------------ | ------ |
    | 0      | 1   | [ 1 ]                    |        |
    | 0      | 2   | [ 2 ]                    |        |
    | 0      | 3   | [ 3 ]                    |        |
    | 0      | 4   | [ 4 ]                    |        |
    | 0      | 5   | [ 5 ]                    |        |
    | 0      | 6   | [ 6 ]                    |        |
    | 0      | 7   | [ 7 ]!                   | N      |
    | ------ | --- | ------------------------ | ------ |
    | 1      | 8   | [ 1,2 ]                  |        |
    | 1      | 9   | [ 1,7 ]!                 | N      |
    | 1      | 10  | [ 2,3 ]                  |        |
    | 1      | 11  | [ 2,4 ]                  |        |
    | 1      | 12  | [ 3,2 ]                  |        |
    | 1      | 13  | [ 4,5 ]                  |        |
    | 1      | 14  | [ 4,6 ]                  |        |
    | 1      | 15  | [ 5,6 ]                  |        |
    | 1      | 16  | [ 6,1 ]                  |        |
    | ------ | --- | ------------------------ | ------ |
    | 2      | 17  | [ 1,2,3 ]!即將自環       | N      |
    | 2      | 18  | [ 1,2,4 ]                |        |
    | 2      | 19  | [ 2,3,2 ]\*              | Y      |
    | 2      | 20  | [ 2,4,5 ]                |        |
    | 2      | 21  | [ 2,4,6 ]                |        |
    | 2      | 22  | [ 3,2,3 ]\*              | Y      |
    | 2      | 23  | [ 3,2,4 ]                |        |
    | 2      | 24  | [ 4,5,6 ]                |        |
    | 2      | 25  | [ 4,6,1 ]                |        |
    | 2      | 26  | [ 5,6,1 ]                |        |
    | 2      | 27  | [ 6,1,2 ]                |        |
    | 2      | 28  | [ 6,1,7 ]!               | N      |
    | ------ | --- | ------------------------ | ------ |
    | 3      | 30  | [ 1,2,4,5 ]              |        |
    | 3      | 31  | [ 1,2,4,6 ]              |        |
    | 3      | 32  | [ 2,4,5,6 ]              |        |
    | 3      | 33  | [ 2,4,6,1 ]              |        |
    | 3      | 34  | [ 3,2,4,5 ]              |        |
    | 3      | 35  | [ 3,2,4,6 ]              |        |
    | 3      | 36  | [ 4,5,6,1 ]              |        |
    | 3      | 37  | [ 4,6,1,2 ]              |        |
    | 3      | 38  | [ 4,6,1,7 ]!             | N      |
    | 3      | 39  | [ 5,6,1,2 ]              |        |
    | 3      | 40  | [ 5,6,1,7 ]!             | N      |
    | 3      | 41  | [ 6,1,2,3 ]!即將自環     | N      |
    | 3      | 42  | [ 6,1,2,4 ]              |        |
    | ------ | --- | ------------------------ | ------ |
    | 4      | 43  | [ 1,2,4,5,6 ]            |        |
    | 4      | 44  | [ 1,2,4,6,1 ]\*          | Y      |
    | 4      | 45  | [ 2,4,5,6,1 ]            |        |
    | 4      | 46  | [ 2,4,6,1,2 ]\*          | Y      |
    | 4      | 47  | [ 2,4,6,1,7 ]!           | N      |
    | 4      | 48  | [ 3,2,4,5,6 ]            |        |
    | 4      | 49  | [ 3,2,4,6,1 ]            |        |
    | 4      | 50  | [ 4,5,6,1,2 ]            |        |
    | 4      | 51  | [ 4,5,6,1,7 ]!           | N      |
    | 4      | 52  | [ 4,6,1,2,3 ]!即將自環   | Y      |
    | 4      | 53  | [ 4,6,1,2,4 ]\*          | Y      |
    | 4      | 54  | [ 5,6,1,2,3 ]!即將自環   | N      |
    | 4      | 55  | [ 5,6,1,2,4 ]            |        |
    | 4      | 56  | [ 6,1,2,4,5 ]            |        |
    | 4      | 57  | [ 6,1,2,4,6 ]\*          | Y      |
    | ------ | --- | ------------------------ | ------ |
    | 5      | 58  | [ 1,2,4,5,6,1 ]\*        | Y      |
    | 5      | 59  | [ 2,4,5,6,1,2 ]\*        | Y      |
    | 5      | 60  | [ 2,4,5,6,1,7 ]!         | N      |
    | 5      | 61  | [ 3,2,4,5,6,1 ]          |        |
    | 5      | 62  | [ 3,2,4,6,1,2 ]非簡單    |        |
    | 5      | 63  | [ 3,2,4,6,1,7 ]!         | Y      |
    | 5      | 64  | [ 4,5,6,1,2,3 ]!即將自環 | Y      |
    | 5      | 65  | [ 4,5,6,1,2,4 ]\*        | Y      |
    | 5      | 66  | [ 5,6,1,2,4,5 ]\*        | Y      |
    | 5      | 67  | [ 5,6,1,2,4,6 ]非簡單    |        |
    | 5      | 68  | [ 6,1,2,4,5,6 ]\*        | Y      |
    | ------ | --- | ------------------------ | ------ |
    | 6      | 69  | [ 3,2,4,5,6,1,7 ]!       | Y      |

    主路徑需求有 15 個需求:
    [ 2,3,2 ]\*
    [ 3,2,3 ]\*
    [ 1,2,4,6,1 ]\*
    [ 2,4,6,1,2 ]\*
    [ 4,6,1,2,3 ]!
    [ 4,6,1,2,4 ]\*
    [ 1,2,4,5,6,1 ]\*
    [ 2,4,5,6,1,2 ]\*
    [ 3,2,4,6,1,7 ]!
    [ 6,1,2,4,6 ]\*
    [ 4,5,6,1,2,3 ]!
    [ 4,5,6,1,2,4 ]\*
    [ 5,6,1,2,4,5 ]\*
    [ 6,1,2,4,5,6 ]\*
    [ 3,2,4,5,6,1,7 ]!

-   f.[ 1,2,3,2,4,5,6,1,7 ]，沒有經過 ( 4,6 )
-   g.{ [ 1,2,3,2,4,5,6,1,7 ] 與 [ 1,2,4,6,1,7 ]},不滿足主路徑測試需求 [ 3,2,3 ]\*

## Q6

-   a.節點覆蓋需求{ 1,2,3,4,5,6,7,8,9,10 }。邊覆蓋需求:

    | start | Path             |
    | ----- | ---------------- |
    | 1     | ( 1,4 ),( 1,5 )  |
    | 2     | ( 2,5 )          |
    | 3     | ( 3,6 ),( 3,7 )  |
    | 4     | ( 4,8)           |
    | 5     | ( 5,8 ),( 5,9 )  |
    | 6     | ( 6,2 ),( 6,10 ) |
    | 7     | ( 7,10 )         |
    | 8     | X                |
    | 9     | ( 9,6 )          |
    | 10    | X                |

    主路徑覆蓋需求:

    | Length | Path                       | 主路徑 |
    | ------ | -------------------------- | ------ |
    | 0      | [ 1 ]                      |        |
    |        | [ 2 ]                      |        |
    |        | [ 3 ]                      |        |
    |        | [ 4 ]                      |        |
    |        | [ 5 ]                      |        |
    |        | [ 6 ]                      |        |
    |        | [ 7 ]                      |        |
    |        | [ 8 ]!                     | N      |
    |        | [ 9 ]                      |        |
    |        | [ 10 ]!                    | N      |
    | ------ | -------                    | ------ |
    | 1      | [ 1,4 ]                    |        |
    |        | [ 1,5 ]                    |        |
    |        | [ 2,5 ]                    |        |
    |        | [ 3,6 ]                    |        |
    |        | [ 3,7 ]                    |        |
    |        | [ 4,8 ]!                   | N      |
    |        | [ 5,8 ]!                   | N      |
    |        | [ 5,9 ]                    |        |
    |        | [ 6,2 ]                    |        |
    |        | [ 6,10 ]!                  | N      |
    |        | [ 7,10 ]!                  | N      |
    |        | [ 9,6 ]                    |        |
    | ------ | -------                    | ------ |
    | 2      | [ 1,4,8 ]!                 | Y      |
    |        | [ 1,5,8 ]!                 | Y      |
    |        | [ 1,5,9 ]                  |        |
    |        | [ 2,5,8 ]!                 | N      |
    |        | [ 2,5,9 ]                  |        |
    |        | [ 3,6,2 ]                  |        |
    |        | [ 3,6,10 ]!                | Y      |
    |        | [ 3,7,10 ]!                | Y      |
    |        | [ 5,9,6 ]                  |        |
    |        | [ 6,2,5 ]                  |        |
    |        | [ 9,6,2 ]                  |        |
    |        | [ 9,6,10 ]!                | N      |
    | ------ | -------                    | ------ |
    | 3      | [ 1,5,9,6 ]                |        |
    |        | [ 2,5,9,6 ]                |        |
    |        | [ 3,6,2,5 ]                |        |
    |        | [ 5,9,6,2 ]                | N      |
    |        | [ 5,9,6,10 ]!              | N      |
    |        | [ 6,2,5,8 ]!               | N      |
    |        | [ 6,2,5,9 ]                |        |
    |        | [ 9,6,2,5 ]                |        |
    | ------ | -------                    | ------ |
    | 4      | [ 1,5,9,6,2 ]!即將便非簡單 | Y      |
    |        | [ 1,5,9,6,10 ]!            | Y      |
    |        | [ 2,5,9,6,2 ]\*            | Y      |
    |        | [ 2,5,9,6,10 ]!            | Y      |
    |        | [ 3,6,2,5,8 ]!             | Y      |
    |        | [ 3,6,2,5,9 ]!             | Y      |
    |        | [ 5,9,6,2,5 ]\*            | Y      |
    |        | [ 6,2,5,9,6 ]\*            | Y      |
    |        | [ 9,6,2,5,8 ]!             | Y      |
    |        | [ 9,6,2,5,9 ]\*            | Y      |

    主路徑需求:

    [ 1,4,8 ]!
    [ 1,5,8 ]!
    [ 3,6,10 ]!
    [ 3,7,10 ]!
    [ 1,5,9,6,2 ]!
    [ 1,5,9,6,10 ]!
    [ 2,5,9,6,2 ]\*
    [ 2,5,9,6,10 ]!
    [ 3,6,2,5,8 ]!
    [ 3,6,2,5,9 ]!
    [ 5,9,6,2,5 ]\*
    [ 6,2,5,9,6 ]\*
    [ 9,6,2,5,8 ]!
    [ 9,6,2,5,9 ]\*

-   b.{ [ 1,4,8 ],[ 1,5,8 ],[ 1,4,8 ],[ 2,5,9 ],[ 3,6,10 ],[ 3,7,10 ] }
-   c.{ [ 1,4,8 ],[ 1,5,8 ],[ 1,4,8 ],[ 2,5,9 ],[ 3,6,10 ],[ 3,7,10 ],[ 2,5,9,6,2,5,9 ] }，不滿足 [ 1,5,9,6,2 ]!

## Q7

-   a.
    [ 1,2,3,1 ] - 不是測試路徑，並非結束在 3
    [ 2,3,1,3 ] - 不是測試路徑，並非起始在 1
    [ 1,2,3,2,3 ] - 不是測試路徑，不存在( 3,2 )的邊

    只有 [ 1,3,1,2,3 ] 和 [ 1,2,3,1,2,1,3 ] 是測試路徑

-   b.

    | start edge | Path                |
    | ---------- | ------------------- |
    | ( 1,2 )    | ( 1,2,1 ),( 1,2,3 ) |
    | ( 1,3 )    | ( 1,3,1)            |
    | ( 2,1 )    | ( 2,1,2 ),( 2,1,3 ) |
    | ( 2,3 )    | ( 2,3,1 )           |
    | ( 3,1 )    | ( 3,1,2 ),( 3,1,3 ) |

-   c. 不滿足對邊 ( 2,1,2 ) 與 ( 3,1,3 )

    | 對邊      | 滿足 P2 | 滿足 P3 |
    | --------- | ------- | ------- |
    | ( 1,2,1 ) |         | V       |
    | ( 1,2,3 ) | V       | V       |
    | ( 1,3,1 ) | V       |         |
    | ( 2,1,2 ) |         |         |
    | ( 2,1,3 ) |         | V       |
    | ( 2,3,1 ) |         | V       |
    | ( 3,1,2 ) | V       | V       |
    | ( 3,1,3 ) |         |         |

-   d.P2 不直接遊歷[ 3,1,3 ]，也不路遊歷，其為繞路,另外 P3 不直接遊歷，但順路[ 1,2,1 ]

# 7.2.3 Quiz

## Q1.

-   a. 見 7.2.3.Q1.圖 1.png / 7.2.3.Q1.圖 2.png / 7.2.3.Q1.圖 3.png / 7.2.3.Q1.圖 4.png
-   b. 不重複定義的簡單路徑

    -   圖 1:

        -   du(1,6,x) = { [ 1,2,3,5,6 ] }
        -   du(1,8,x) = { [ 1,2,8 ]}
        -   du(4,6,x) = { [ 4,3,5,6 ]}
        -   du(4,8,x) = { [ 4,3,5,6,7,2,8 ],[ 4,3,5,7,2,8 ]}

    -   圖 2:

        -   du(1,3,x) = { [ 1,2,3 ] }
        -   du(1,6,x) = { [ 1,2,6 ]}
        -   du(3,3,x) = { [ 3,5,2,3 ],[ 3,4,5,2,3 ]}
        -   du(3,6,x) = { [ 3,5,2,6 ],[ 3,4,5,2,6 ]}

    -   圖 3:

        -   du(1,3,x) = { [ 1,2,3 ] }
        -   du(1,5,x) = { [ 1,2,3,5 ]}
        -   du(1,6,x) = { [ 1,2,6 ]}
        -   du(4,3,x) = { [ 4,5,2,3 ]}
        -   du(4,5,x) = { [ 4,5 ]}
        -   du(4,6,x) = { [ 4,5,2,6 ]}

    -   圖 4:

        -   du(1,5,x) = { [ 1,2,3,5 ],[ 1,2,3,4,5 ] }
        -   du(1,6,x) = { [ 1,2,6 ]}
        -   du(5,5,x) = { [ 5,2,3,5], [ 5,2,3,4,5 ] }
        -   du(5,6,x) = { [ 5,2,6 ]}

-   c.

    -   圖 1:

        | 路徑                                             | 直接                          | 順路                                          |
        | ------------------------------------------------ | ----------------------------- | --------------------------------------------- |
        | t1 = [1, 2, 8]                                   | [ 1,2,8 ]                     |                                               |
        | t2 = [1, 2, 3, 5, 7, 2, 8]                       |                               | [ 1,2,8 ]                                     |
        | t3 = [1, 2, 3, 5, 6, 7, 2, 8]                    | [ 1,2,3,5,6 ]                 | [ 1,2,8 ]                                     |
        | t4 = [1, 2, 3, 4*, 3, 5, 7, 2, 8]                | [ 4,3,5,7,2,8 ]               |                                               |
        | t5 = [1, 2, 3, 4*, 3, 4*, 3, 5, 6, 7, 2, 8]      | [ 4,3,5,6 ],[ 4,3,5,6,7,2,8 ] |                                               |
        | t6 = [1, 2, 3, 4*, 3, 5, 7, 2, 3, 5, 6, 7, 2, 8] |                               | [ 4,3,5,6 ],[ 4,3,5,6,7,2,8 ],[ 4,3,5,7,2,8 ] |

    -   圖 2:

        | 路徑                                  | 直接                                | 順路 |
        | ------------------------------------- | ----------------------------------- | ---- |
        | t1 = [1, 2, 6]                        | [ 1,2,6 ]                           |      |
        | t2 = [1, 2, 3*, 4, 5, 2, 3*, 5, 2, 6] | [ 1,2,3 ],[ 3,4,5,2,3 ],[ 3,5,2,6 ] |      |
        | t3 = [1, 2, 3*, 5, 2, 3*, 4, 5, 2, 6] | [ 1,2,3 ],[ 3,5,2,3 ],[ 3,4,5,2,6 ] |      |
        | t4 = [1, 2, 3*, 5, 2, 6]              | [ 1,2,3 ],[ 3,5,2,6 ]               |      |

    -   圖 3:

        | 路徑                        | 直接                          | 順路      |
        | --------------------------- | ----------------------------- | --------- |
        | t1 = [1, 2, 3, 5, 2, 6]     | [ 1,2,3 ],[ 1,2,3,5 ]         | [ 1,2,6 ] |
        | t2 = [1, 2, 3, 4*, 5, 2, 6] | [ 1,2,3 ],[ 4,5 ],[ 4,5,2,6 ] |           |

    -   圖 4:

        | 路徑                                  | 直接                                | 順路 |
        | ------------------------------------- | ----------------------------------- | ---- |
        | t1 = [1, 2, 6]                        | [ 1,2,6 ]                           |      |
        | t2 = [1, 2, 3, 4, 5*, 2, 3, 5*, 2, 6] | [ 1,2,3,4,5 ],[ 5,2,3,5],[ 5,2,6 ]  |      |
        | t3 = [1, 2, 3, 5*, 2, 3, 4, 5*, 2, 6] | [ 1,2,3,5 ],[ 5,2,3,4,5 ],[ 5,2,6 ] |      |

-   d.只要定義的節點包含在其中一個 du-pair 中即可

    -   圖 1: { t1 + t4 }
    -   圖 2: { t2 } or { t3 } or { t4 }
    -   圖 3: { t2 }
    -   圖 4: { t2 } or { t3 }

-   e.每個 du-pair 都要出現

    -   圖 1: { t1 + t3 + t5 }
    -   圖 2: { t1 + t2 } or { t1 + t3 }
    -   圖 3: { t1 + t2 + [ 1,2,6 ] + [ 1,2,3,4,5,2,3,5,2,6 ] }
    -   圖 4: { t1 + t2 } or { t1 + t3 }

-   f.

    -   圖 1: { t1 + t3 + t4 + t5 }
    -   圖 2: { t1 + t2 + t3 }
    -   圖 3: { t1 + t2 + [ 1,2,6 ] + [ 1,2,3,4,5,2,3,5,2,6 ] }
    -   圖 4: { t1 + t2 + t3 }

# 7.3 Quiz

## Q1.

-   a.見 7.3.Q1.png
-   b.node 1 and node 2 and node 3
-   c.node 2 and node 3 and node 7
-   d.無，因為必定會經過 node 2 or node 3，這兩個節點都有 w 的定義，會造成重複定義，故無 du(1,7,w)。
-   e.

    | 定義使用對 | Path                    |
    | ---------- | ----------------------- |
    | du(1,2,w)  | ( 1,2 )                 |
    | du(1,3,w)  | ( 1,3 )                 |
    | du(2,7,w)  | ( 2,4,5,7 ),( 2,4,6,7 ) |
    | du(3,7,w)  | ( 3,4,5,7 ),( 3,4,6,7 ) |
    | du(5,7,x)  | ( 5,7 )                 |
    | du(6,7,x)  | ( 6,7 )                 |

## Q4.

定義節點:2*、10
使用節點與邊：5*、10、(3,4)、(3,11)、(4,5)、(4,10)、(7,8)、(7,9)
Prefix:(3,4) / 5 / (7,8)

-   A:du(2, 5, iSub)\*
-   B:du(2, 10, iSub)\*
-   C:du(2, (3,4), iSub)\*
-   D:du(2, (3,11), iSub)\*
-   E:du(2, (4,5), iSub)\*
-   F:du(2, (4,10), iSub)\*
-   G:du(2, (7,8), iSub)\*
-   H:du(2, (7,9), iSub)\*
-   I:du(10, 5, iSub)\*
-   J:du(10, 10, iSub)\*
-   K:du(10, (3,4), iSub)\*
-   L:du(10, (3,11), iSub)\*
-   M:du(10, (4,5), iSub)\*
-   N:du(10, (4,10), iSub)
-   O:du(10, (7,8), iSub)\*
-   P:du(10, (7,9), iSub)\*

| 編號 | 輸入 3 參數   | Test Path                                        | 不重複定義 直接遊歷 du-path |
| ---- | ------------- | ------------------------------------------------ | --------------------------- |
| t1   | (ab, ab, 0)   | [1, 2, 3, 4, 5, 6, 7, 9, 6, 10, 3, 11]           | ABCEHL(必要 H)              |
| t2   | (ab, a, 0)    | [1, 2, 3, 4, 5, 6, 10, 3, 11]                    | ABCEL                       |
| t3   | (ab, ac, –1)  | [1, 2, 3, 4, 5, 6, 7, 8, 10, 3, 11]              | ABCEGL(必要 G)              |
| t4   | (ab, c, -1)   | [1, 2, 3, 4, 10, 3, 4, 10, 3, 11]                | BCFJKLN(必要 N)             |
| t5   | (a, bc, -1)   | [1, 2, 3, 11]                                    | D(必要 D)                   |
| t6   | (abc, bc, 1)  | [1, 2, 3, 4, 10, 3, 4, 5, 6, 7, 9, 6, 10, 3, 11] | BCFIJKLMP(必要 P)           |
| t7   | (ab, b, 1)    | [1, 2, 3, 4, 10, 3, 4, 5, 6, 10, 3, 11]          | BCFIJKLM                    |
| t8   | (abc, ba, -1) | [1, 2, 3, 4, 10, 3, 4, 5, 6, 7, 8, 10, 3, 11]    | BCFIJKLMO(必要 O)           |
| t4   | (ab, c, -1)   | [1, 2, 3, 4, 10, 3, 4, 10, 3, 11]                | 同上                        |
| t2   | (ab, a, 0)    | [1, 2, 3, 4, 5, 6, 10, 3, 11]                    | 同上                        |

-   a. { t4 }, 因為 t4 可以符合 du(2,iSub)與 du(10,iSub)
-   b. { t1 + t3 + t4 + t5 + t6 + t8}
-   c. { t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8} (需考慮所有岔路)

## Q5.

t1: subject = “brown owl” pattern = “wl” expected output = 7
t2: subject = “brown fox” pattern = “dog” expected output = -1
t3: subject = “fox” pattern = “brown” expected output = -1

-   a.

    -   t1: [1, 2, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 4, 5, 6, 7, 8, 10, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 4, 5, 6, 7, 9, 6, 10, 3, 11]

        [1, 2, (b→)3, 4, 10, (r→)3, 4, 10, (o→)3, 4, 10, (w→)3, 4, 5, 6, 7, 8, 10, (n→)3, 4, 10, (' '→)3, 4, 10, (o→)3, 4, 10, (w→)3, 4, 5, (L for loop→)6, 7, 9, 6, 10, 3, 11]

    -   t2: [1, 2, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 4, 10, 3, 11]

        [1, 2, (b→)3, 4, 10, (r→)3, 4, 10, (o→)3, 4, 10, (w→)3, 4, 10, (n→)3, 4, 10, (' '→)3, 4, 10, (f→)3, 4, 10, 3, 11]

    -   t3. [1, 2, 3, 11]

-   b.

    -   t1:

        -   du(10, iSub):
            -   直接遊歷:[10, 3, 4, 5, 6, 7, 9]、[10, 3, 4, 5, 6, 7, 8, 10]、[10, 3, 4, 10]、［10, 3, 11］
            -   順路遊歷:[10, 3, 4, 5, 6, 10]
        -   du(2, isPat):
            -   直接遊歷:[2, 3, 4]
            -   順路遊歷:X
            -   沒有直接與順路:[2, 3, 11]
        -   du(5, isPat):
            -   直接遊歷:Ｘ
            -   順路遊歷:[5, 6, 10, 3, 11]
        -   du(8, isPat):
            -   直接遊歷:[8, 10, 3, 4]
            -   順路遊歷:X
            -   沒有直接與順路:[8, 10, 3, 11]

    -   t2:

        -   du(10, iSub):
            -   直接遊歷:[10, 3, 4, 10]、[10, 3, 11]
            -   順路遊歷:Ｘ
        -   du(2, isPat):
            -   直接遊歷:[2, 3, 4]
            -   順路遊歷:[2, 3, 11]
        -   du(5, isPat):
            -   直接遊歷:Ｘ(路徑中無 node 5)
            -   順路遊歷:Ｘ(路徑中無 node 5)
        -   du(8, isPat):
            -   直接遊歷:Ｘ(路徑中無 node 8)
            -   順路遊歷:Ｘ(路徑中無 node 8)

    -   t3:
        -   du(10, iSub):
            -   直接遊歷:Ｘ(路徑中無 node 10)
            -   順路遊歷:Ｘ(路徑中無 node 10)
        -   du(2, isPat):
            -   直接遊歷:[2, 3, 11]
            -   順路遊歷:Ｘ
        -   du(5, isPat):
            -   直接遊歷:Ｘ(路徑中無 node 5)
            -   順路遊歷:Ｘ(路徑中無 node 5)
        -   du(8, isPat):
            -   直接遊歷:Ｘ(路徑中無 node 8)
            -   順路遊歷:Ｘ(路徑中無 node 8)

-   c. 因為 isPat 在 node5 被設定為 true 後，沒有進到 node8 去改為 false 時，下一次 while 迴圈將會跳出 (在 node3 一定會前往 node11 而非 node4)

-   d. 就是順路遊歷的 3 個路徑，補上三個測試用例來直接遊歷
    t4: subject = “ab” pattern = “b” expected output = 1 : iSub[10, 3, 4, 5, 6, 10]、isPat[5, 6, 10, 3, 11]
    t5: subject = “ab” pattern = “a” expected output = 0 : isPat[5, 6, 10, 3, 11]
    t6: subject = “ab” pattern = “ac” expected output = -1 : : isPat[8, 10, 3, 11]

-   e. all-def:{ t1 + t4 },t1 缺少 du(5,isPat) 從 t4 或 t5 補
-   f. all-use:{ t1 + t3 + t4 + t6 },t1 缺少:

    -   [10, 3, 4, 5, 6, 10]: 從 t4 補
    -   [2, 3, 11]: 從 t3 補
    -   [5, 6, 10, 3, 11] 已從 t4 補
    -   缺少 [8, 10, 3, 11] 從 t6 補

-   g.一樣，all-use 的最小測試需求已經涵蓋所有 du paths

# 7.4

## Q1.

-   a.見 7.4.Q1-changeTime.png 與 7.4.Q1-doTransition.png

-   b.

    -   1. call Time.constructor(): watch = new Time();
    -   2. call Time.constructor(): stopwatch = new Time();
    -   3. call Time.constructor(): 64 alarm = new Time();
    -   4. call Time.toString() X3: return ("watch is: " + watch + "\n" + "stopwatch is: " + stopwatch + "\n" + "alarm is: " + alarm);
    -   5. call Time.changeTime() X3: ex:watch.changeTime (button);

-   c. X

    | 耦合定義                                              | 耦合使用                                                 |
    | ----------------------------------------------------- | -------------------------------------------------------- |
    | (Wath, mode, #12)                                     | (Wath.doTransition, mode, #1 of Wath.doTransition)       |
    |                                                       |                                                          |
    | (Wath.constructor, watch, #1 of Wath.constructor)     | (Wath.toString, watch, #1 of Wath.toString)              |
    |                                                       | (Wath.doTransition, watch, #7 of Wath.doTransition)      |
    |                                                       |                                                          |
    | (Wath.constructor, stopwatch, #2 of Wath.constructor) | (Wath.toString, stopwatch, #2 of Wath.toString)          |
    |                                                       | (Wath.doTransition, stopwatch, #13 of Wath.doTransition) |
    |                                                       |                                                          |
    | (Wath.constructor, alarm, #3 of Wath.constructor)     | (Wath.toString, alarm, #3 of Wath.toString)              |
    |                                                       | (Wath.doTransition, alarm, #19 of Wath.doTransition)     |
    |                                                       |                                                          |

-   d. X

## Q2.

-   a. 見 7.4.Q3.png

-   b.
    -   t1: [ f1,f3,f5,f6 ]:[ B,E,G ]
    -   t2: [ f1,f3,f4,f6 ]:[ B,D,F ]
    -   t3: [ f1,f2 ]:[ A ]
    -   t4: [ f1,f3,f4,f6 ]:[ B,D,F ]
    -   t5: [ f1,f2,f3,f4,f6 ]:[ A,C,D,F ]
-   c. { t1 + t5}
-   d. 總共有 A:( f1,f2 )、B:( f1,f3 )、C:( f2,f3 )、D:( f3,f4 )、E:( f3,f5 )、F:( f4,f6 )、G:( f5,f6 ):只要 { t1 + t5}就可以達成邊覆蓋
-   e.

    主路徑覆蓋需求:

    | Length | Path                | 主路徑 |
    | ------ | ------------------- | ------ |
    | 0      | [ f1 ]              |        |
    |        | [ f2 ]              |        |
    |        | [ f3 ]              |        |
    |        | [ f4 ]              |        |
    |        | [ f5 ]              |        |
    |        | [ f6 ]!             | N      |
    | 1      | [ f1,f2 ]           |        |
    |        | [ f1,f3 ]           |        |
    |        | [ f2,f3 ]           |        |
    |        | [ f3,f4 ]           |        |
    |        | [ f3,f5 ]           |        |
    |        | [ f4,f6 ]!          | N      |
    |        | [ f5,f6 ]!          | N      |
    | 2      | [ f1,f2,f3 ]        |        |
    |        | [ f1,f3,f4 ]        |        |
    |        | [ f1,f3,f5 ]        |        |
    |        | [ f2,f3,f4 ]        |        |
    |        | [ f2,f3,f5 ]        |        |
    |        | [ f3,f4,f6 ]!       | N      |
    |        | [ f3,f5,f6 ]!       | N      |
    | 3      | [ f1,f2,f3,f4 ]     |        |
    |        | [ f1,f2,f3,f5 ]     |        |
    |        | [ f1,f3,f4,f6 ]!    | Y:P1   |
    |        | [ f1,f3,f5,f6 ]!    | Y:P2   |
    |        | [ f2,f3,f4,f6 ]!    | N      |
    |        | [ f2,f3,f5,f6 ]!    | N      |
    | 4      | [ f1,f2,f3,f4,f6 ]! | Y:P3   |
    |        | [ f1,f2,f3,f5,f6 ]! | Y:P4   |

    -   t1: [ f1,f3,f5,f6 ]:P2
    -   t2: [ f1,f3,f4,f6 ]:P1
    -   t3: [ f1,f2 ]:X
    -   t4: [ f1,f3,f4,f6 ]:P1
    -   t5: [ f1,f2,f3,f4,f6 ]:P3

    ※ P4 沒有被遊歷

## Q4.

-   a. call takeOut() at trash() # 12
-   b.

    -   最後定義

        -   (trash(),m,5)
        -   (trash(),m,7)
        -   (trash(),n,9)
        -   (trash(),n,11)
        -   (takeOut(),e,21)
        -   (takeOut(),e,23)

    -   首次使用

        -   (takeOut(),a,19)
        -   (takeOut(),b,21)
        -   (takeOut(),b,23)
        -   (trash(),o,13)

    -   配對 (takeOut()的變數 d 與兩函數的耦合無關)
        -   A: (trash(),m,5) - (takeOut(),a,19)
        -   B: (trash(),m,7) - (takeOut(),a,19)
        -   C: (trash(),n,9) - (takeOut(),b,21)
        -   D: (trash(),n,9) - (takeOut(),b,23)
        -   E: (trash(),n,11) - (takeOut(),b,21)
        -   F: (trash(),n,11) - (takeOut(),b,23)
        -   G: (takeOut(),e,21) - (trash(),o,13)
        -   H: (takeOut(),e,23) - (trash(),o,13)

-   c.

    -   A: x <= 0 (x <= 0 不會進入 #7) [測試值: x = 0]
    -   B: x > 0 [測試值: x = 1]
    -   C: x > 5, a > 0 then m > 0 then x > 0,故 x > 5 [測試值: x = 6]
    -   D: x > 5, a <= 0 then m <= 0 then x <= 0,故不可行
    -   E: x <= 5, [測試值: x = 1]
    -   F: x <= 5, a > 0 then m > 0 then x > 0,故 5 >= x > 0 [測試值: x = 1]
    -   G: a > 0 then m > 0 then x > 0 [測試值: x = 1]
    -   H: a <= 0 then m <= 0 then x <= 0 [測試值: x = 0]

    ※ x > 0 與 x <= 5 合併為一個測試需求
    TR: { x <= 0, 0 < x <= 5, x > 5 }, x = { 0,1,6 }

# 7.5

## Q2.

-   a: 4 種:

    1. (wake, low)
    2. (wake , high)
    3. (sleep, low)
    4. (sleep, high)

-   b: 見 7.5.Q1.png
-   c: [ up(), up(), advance(), up(), advance(), down(), down(), advance(), down(), up(), down(), advance() ]