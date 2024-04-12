# Ch8 Quiz

# 8.1 Quiz

## Q1

-   f <= g
-   X > 0
-   M
-   e < d+c

## Q2

-   G
-   m > a
-   s <= o + n
-   U

## Q4

(a)

| 子題                                      | 答案    |
| ----------------------------------------- | ------- |
| i. p = a ∧ (¬b ∨ c)                       | a b c   |
| ii. p = a ∨ (b ∧ c)                       | a b c   |
| iii. p = a ∧ b                            | a b     |
| iv. p = a → (b → c)                       | a b c   |
| v. p = a ⊕ b                              | a b     |
| vi. p = a ↔ (b ∧ c)                       | a b c   |
| vii. p = (a ∨ b) ∧ (c ∨ d)                | a b c d |
| viii. p = (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c) | a b c   |
| ix. p = a ∨ b ∨ (c ∧ d)                   | a b c d |
| x. p = (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)        | a b c   |

(b)

| 子題                                                                     | 答案                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| i. p = a ∧ (¬b ∨ c)                                                      | pa = true ∧ (¬b ∨ c) ⊕ false ∧ (¬b ∨ c) = (¬b ∨ c) ⊕ false = ¬b ∨ c                                                                                                                                                                                                                   |
|                                                                          | pb = a ∧ (false ∨ c) ⊕ a ∧ (true ∨ c) = a ∧ c ⊕ a ∧ true = a ∧ ¬c                                                                                                                                                                                                                     |
|                                                                          | pc = a ∧ (¬b ∨ true) ⊕ a ∧ (¬b ∨ false) = a ∧ true ⊕ a ∧ ¬b = a ∧ b                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| ii. p = a ∨ (b ∧ c)                                                      | pa = true ∨ (b ∧ c) ⊕ false ∨ (b ∧ c) = true ⊕ ¬(b ∧ c) = ¬b ∨ ¬c                                                                                                                                                                                                                     |
|                                                                          | pb = a ∨ (true ∧ c) ⊕ a ∨ (false ∧ c) = a ∨ c ⊕ a ∨ false = ¬a ∧ c                                                                                                                                                                                                                    |
|                                                                          | pc = a ∨ (b ∧ true) ⊕ a ∨ (b ∧ false) = a ∨ b ⊕ a ∨ false = ¬a ∧ b                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| iii. p = a ∧ b                                                           | pa = true ∧ b ⊕ false ∧ b = b ⊕ false = b                                                                                                                                                                                                                                             |
|                                                                          | pb = a ∧ true ⊕ a ∧ false = a ⊕ false = a                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| iv. p = a → (b → c)                                                      | pa = true → (b → c) ⊕ false → (b → c) = true → (b → c) ⊕ true = ¬(b → c) = b ∧ ¬c                                                                                                                                                                                                     |
| 只有 T→F => F                                                            | pb = a → (true → c) ⊕ a → (false → c) = a ∧ (true → c) ⊕ true = a ∧ ¬c                                                                                                                                                                                                                |
| [若 P 則 Q 的真假表](https://highscope.ch.ntu.edu.tw/wordpress/?p=32474) | pc = a → (b → true) ⊕ a → (b → false) = true ⊕ a ∧ ¬(b → false) = a ∧ b                                                                                                                                                                                                               |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| v. p = a ⊕ b                                                             | pa = (true ⊕ b) ⊕ (false ⊕ b) = ¬b ⊕ b = true                                                                                                                                                                                                                                         |
|                                                                          | pb = (a ⊕ true) ⊕ (a ⊕ false) = ¬a ⊕ a = true                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| vi. p = a ↔ (b ∧ c)                                                      | pa = true ↔ (b ∧ c) ⊕ false ↔ (b ∧ c) = b ∧ c ⊕ ¬(b ∧ c) = true                                                                                                                                                                                                                       |
| 兩項等價，另一項取任意值，此項皆可決定                                   | pb = a ↔ (true ∧ c) ⊕ a ↔ (false ∧ c) = a ↔ c ⊕ a ↔ false = c                                                                                                                                                                                                                         |
|                                                                          | pc = a ↔ (b ∧ true) ⊕ a ↔ (b ∧ false) = a ↔ c ⊕ a ↔ false = b                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| vii. p = (a ∨ b) ∧ (c ∨ d)                                               | pa = (true ∨ b) ∧ (c ∨ d) ⊕ (false ∨ b) ∧ (c ∨ d) = true ∧ (c ∨ d) ⊕ b ∧ (c ∨ d) = ¬b ∧ (c ∨ d)                                                                                                                                                                                       |
|                                                                          | pb = (a ∨ true) ∧ (c ∨ d) ⊕ (a ∨ false) ∧ (c ∨ d) = true ∧ (c ∨ d) ⊕ a ∧ (c ∨ d) = ¬a ∧ (c ∨ d)                                                                                                                                                                                       |
|                                                                          | pc = (a ∨ b) ∧ (true ∨ d) ⊕ (a ∨ b) ∧ (false ∨ d) = (a ∨ b) ∧ true ⊕ (a ∨ b) ∧ d = (a ∨ b) ∧ ¬d                                                                                                                                                                                       |
|                                                                          | pd = (a ∨ b) ∧ (c ∨ true) ⊕ (a ∨ b) ∧ (c ∨ false) = (a ∨ b) ∧ true ⊕ (a ∨ b) ∧ c = (a ∨ b) ∧ ¬c                                                                                                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| viii. p = (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)                                | pa = (¬true ∧ ¬b) ∨ (true ∧ ¬c) ∨ (¬true ∧ c) ⊕ (¬false ∧ ¬b) ∨ (false ∧ ¬c) ∨ (¬false ∧ c)                                                                                                                                                                                           |
|                                                                          | = (false ∧ ¬b) ∨ (true ∧ ¬c) ∨ (false ∧ c) ⊕ (true ∧ ¬b) ∨ (false ∧ ¬c) ∨ (true ∧ c)                                                                                                                                                                                                  |
|                                                                          | = false ∨ ¬c ∨ false ⊕ ¬b ∨ false ∨ c = ¬c ⊕ ¬b ∨ c = ( ¬c ∧ ¬(¬b ∨ c) ) ∨ ( ¬(¬c) ∧ (¬b ∨ c)) = ( ¬c ∧ b ∧ ¬c ) ∨ ( c ∧ (¬b ∨ c)) = (¬c ∧ b) ∨ ( c ∧ ¬b) ∨ ( c ∧ c ) = (¬c ∧ b) ∨ ( c ∧ ¬b) ∨ c = ((¬false ∧ b) ∨ ( false ∧ ¬b)) ∨ c = ( true ∧ b ) ∨ c = b ∨ c                      |
|                                                                          | pb = (¬a ∧ ¬true) ∨ (a ∧ ¬c) ∨ (¬a ∧ c) ⊕ (¬a ∧ ¬false) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)                                                                                                                                                                                                         |
|                                                                          | = ((¬a ∧ false) ∨ (a ⊕ c)) ⊕ ((¬a ∧ true) ∨ (a ⊕ c)) = (false ∨ (a ⊕ c)) ⊕ (¬a ∨ (a ⊕ c)) = (a ⊕ c) ⊕ (¬a ∨ (a ⊕ c)) = (¬(a ⊕ c) ∧ (¬a ∨ (a ⊕ c))) ∨ ((a ⊕ c) ∧ ¬(¬a ∨ (a ⊕ c))) = (¬(a ⊕ c) ∧ ¬a ∨ false) ∨ ((a ⊕ c) ∧ a ∧ ¬(a ⊕ c)) = (¬(a ⊕ c) ∧ ¬a) ∨ (false ∧ a) = ¬(a ⊕ c) ∧ ¬a |
|                                                                          | = ¬((¬a ∧ c) ∨ (a ∧ ¬c)) ∧ ¬a = (a ∨ ¬c) ∧ (¬a ∨ c) ∧ ¬a = (a ∨ ¬c) ∧ ¬a = (false ∨ ¬c ∧ ¬a) = ¬a ∧ ¬c                                                                                                                                                                                |
|                                                                          | pc = (¬a ∧ ¬b) ∨ (a ∧ ¬true) ∨ (¬a ∧ true) ⊕ (¬a ∧ ¬b) ∨ (a ∧ ¬false) ∨ (¬a ∧ false) = (¬a ∧ ¬b) ∨ false ∨ (¬a ∧ true) ⊕ (¬a ∧ ¬b) ∨ (a ∧ true) ∨ false = (¬a ∧ ¬b) ∨ ¬a ⊕ (¬a ∧ ¬b) ∨ a = ¬a ⊕ (a ∨ ¬a) ∧ (a ∨ ¬b) = ¬a ⊕ true ∧ (a ∨ ¬b) = ¬a ⊕ a ∨ ¬b                              |
|                                                                          | = a ∨ b                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| ix. p = a ∨ b ∨ (c ∧ d)                                                  | pa = true ∨ b ∨ (c ∧ d) ⊕ false ∨ b ∨ (c ∧ d) = true ⊕ b ∨ (c ∧ d) = ¬(b ∨ (c ∧ d)) = ¬b ∧ ¬(c ∧ d) = ¬b ∧ (¬c ∨ ¬d )                                                                                                                                                                 |
|                                                                          | pb = a ∨ true ∨ (c ∧ d) ⊕ a ∨ false ∨ (c ∧ d) = true ⊕ a ∨ (c ∧ d) = ¬(a ∨ (c ∧ d)) = ¬a ∧ ¬(c ∧ d) = ¬a ∧ (¬c ∨ ¬d )                                                                                                                                                                 |
|                                                                          | pc = a ∨ b ∨ (true ∧ d) ⊕ a ∨ b ∨ (false ∧ d) = a ∨ b ∨ d ⊕ a ∨ b = ¬(a ∧ b) ∧ d = ¬a ∧ ¬b ∧ d                                                                                                                                                                                        |
|                                                                          | pd = a ∨ b ∨ (c ∧ true) ⊕ a ∨ b ∨ (c ∧ false) = a ∨ b ∨ c ⊕ a ∨ b = ¬(a ∧ b) ∧ c = ¬a ∧ ¬b ∧ c                                                                                                                                                                                        |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------                                                                                                                                                                                                    |
| x. p = (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)                                       | pa = (true ∧ b) ∨ (b ∧ c) ∨ (true ∧ c) ⊕ (false ∧ b) ∨ (b ∧ c) ∨ (false ∧ c) = b ∨ (b ∧ c) ∨ c ⊕ false ∨ (b ∧ c) ∨ false = b ∨ c ⊕ b ∧ c                                                                                                                                              |
|                                                                          | = b 與 c 之中要各有一個 true 與 false => (b ∧ ¬c) ∨ (¬b ∧ c)                                                                                                                                                                                                                          |
|                                                                          | pb = (a ∧ true) ∨ (true ∧ c) ∨ (a ∧ c) ⊕ (a ∧ false) ∨ (false ∧ c) ∨ (a ∧ c) = a ∨ c ⊕ a ∧ c                                                                                                                                                                                          |
|                                                                          | => a 與 c 之中要各有一個 true 與 false => (a ∧ ¬c) ∨ (¬a ∧ c)                                                                                                                                                                                                                         |
|                                                                          | pc = (a ∧ b) ∨ (b ∧ true) ∨ (a ∧ true) ⊕ (a ∧ b) ∨ (b ∧ false) ∨ (a ∧ false) = a ∧ b ∨ b ∨ a ⊕ a ∧ b = a ∨ b ⊕ a ∧ b                                                                                                                                                                  |
|                                                                          | => a 與 b 之中要各有一個 true 與 false => (a ∧ ¬b) ∨ (¬a ∧ b)                                                                                                                                                                                                                         |

(C)

-   i:a ∧ (¬b ∨ c)

| Row# | a   | b   | c   | P   | Pa  | Pb  | Pc  |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   |     | T   |
| 2    | T   | T   | F   | F   |     | T   | T   |
| 3    | T   | F   | T   | T   | T   |     |     |
| 4    | T   | F   | F   | T   | T   | T   |     |
| 5    | F   | T   | T   | F   | T   |     |     |
| 6    | F   | T   | F   | F   |     |     |     |
| 7    | F   | F   | T   | F   | T   |     |     |
| 8    | F   | F   | F   | F   | T   |     |     |

-   ii:a ∨ (b ∧ c)

| Row# | a   | b   | c   | P   | Pa  | Pb  | Pc  |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   |     |     |     |
| 2    | T   | T   | F   | T   | T   |     |     |
| 3    | T   | F   | T   | T   | T   |     |     |
| 4    | T   | F   | F   | T   | T   |     |     |
| 5    | F   | T   | T   | T   |     | T   | T   |
| 6    | F   | T   | F   | F   | T   |     | T   |
| 7    | F   | F   | T   | F   | T   | T   |     |
| 8    | F   | F   | F   | F   | T   |     |     |

-   iii:a ∧ b

| Row# | a   | b   | P   | Pa  | Pb  |
| ---- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   |
| 2    | T   | F   | F   |     | T   |
| 3    | F   | T   | F   | T   |     |
| 4    | F   | F   | F   |     |     |

-   iv:a → (b → c)

| Row# | a   | b   | c   | P   | Pa  | Pb  | Pc  |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   |     |     | T   |
| 2    | T   | T   | F   | F   | T   | T   | T   |
| 3    | T   | F   | T   | T   |     |     |     |
| 4    | T   | F   | F   | T   |     | T   |     |
| 5    | F   | T   | T   | T   |     |     |     |
| 6    | F   | T   | F   | T   | T   |     |     |
| 7    | F   | F   | T   | T   |     |     |     |
| 8    | F   | F   | F   | T   |     |     |     |

-   v:a ⊕ b

| Row# | a   | b   | P   | Pa  | Pb  |
| ---- | --- | --- | --- | --- | --- |
| 1    | T   | T   | F   | T   | T   |
| 2    | T   | F   | T   | T   | T   |
| 3    | F   | T   | T   | T   | T   |
| 4    | F   | F   | F   | T   | T   |

-   vi:a ↔ (b ∧ c)

| Row# | a   | b   | c   | P   | Pa  | Pb  | Pc  |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   | T   | T   |
| 2    | T   | T   | F   | F   | T   |     | T   |
| 3    | T   | F   | T   | F   | T   | T   |     |
| 4    | T   | F   | F   | F   | T   |     |     |
| 5    | F   | T   | T   | F   | T   | T   | T   |
| 6    | F   | T   | F   | T   | T   |     | T   |
| 7    | F   | F   | T   | T   | T   | T   |     |
| 8    | F   | F   | F   | T   | T   |     |     |

-   vii:(a ∨ b) ∧ (c ∨ d)

| Row# | a   | b   | c   | d   | P   | Pa  | Pb  | Pc  | Pd  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   |     |     |     |     |
| 2    | T   | T   | T   | F   | T   |     |     | T   |     |
| 3    | T   | T   | F   | T   | T   |     |     |     | T   |
| 4    | T   | T   | F   | F   | F   |     |     | T   | T   |
| 5    | T   | F   | T   | T   | T   | T   |     |     |     |
| 6    | T   | F   | T   | F   | T   | T   |     | T   |     |
| 7    | T   | F   | F   | T   | T   | T   |     |     | T   |
| 8    | T   | F   | F   | F   | F   |     |     | T   | T   |
| 9    | F   | T   | T   | T   | T   |     | T   |     |     |
| 10   | F   | T   | T   | F   | T   |     | T   | T   |     |
| 11   | F   | T   | F   | T   | T   |     | T   |     | T   |
| 12   | F   | T   | F   | F   | F   |     |     | T   | T   |
| 13   | F   | F   | T   | T   | F   | T   | T   |     |     |
| 14   | F   | F   | T   | F   | F   | T   | T   |     |     |
| 15   | F   | F   | F   | T   | F   | T   | T   |     |     |
| 16   | F   | F   | F   | F   | F   |     |     |     |     |

-   viii: (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)

| Row# | a   | b   | c   | P   | Pa  | Pb  | Pc  |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | F   | T   |     | T   |
| 2    | T   | T   | F   | T   | T   |     | T   |
| 3    | T   | F   | T   | F   | T   |     | T   |
| 4    | T   | F   | F   | T   |     |     | T   |
| 5    | F   | T   | T   | T   | T   |     | T   |
| 6    | F   | T   | F   | F   | T   | T   | T   |
| 7    | F   | F   | T   | T   | T   |     |     |
| 8    | F   | F   | F   | T   |     | T   |     |

-   ix:a ∨ b ∨ (c ∧ d)

| Row# | a   | b   | c   | d   | P   | Pa  | Pb  | Pc  | Pd  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   |     |     |     |     |
| 2    | T   | T   | T   | F   | T   |     |     |     |     |
| 3    | T   | T   | F   | T   | T   |     |     |     |     |
| 4    | T   | T   | F   | F   | T   |     |     |     |     |
| 5    | T   | F   | T   | T   | T   |     |     |     |     |
| 6    | T   | F   | T   | F   | T   | T   |     |     |     |
| 7    | T   | F   | F   | T   | T   | T   |     |     |     |
| 8    | T   | F   | F   | F   | T   | T   |     |     |     |
| 9    | F   | T   | T   | T   | T   |     |     |     |     |
| 10   | F   | T   | T   | F   | T   |     | T   |     |     |
| 11   | F   | T   | F   | T   | T   |     | T   |     |     |
| 12   | F   | T   | F   | F   | T   |     | T   |     |     |
| 13   | F   | F   | T   | T   | T   |     |     | T   | T   |
| 14   | F   | F   | T   | F   | F   | T   | T   |     | T   |
| 15   | F   | F   | F   | T   | F   | T   | T   | T   |     |
| 16   | F   | F   | F   | F   | F   | T   | T   |     |     |

-   x: (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)

| Row# | a   | b   | c   | P   | Pa  | Pb  | Pc  |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   |     |     |     |
| 2    | T   | T   | F   | T   | T   | T   |     |
| 3    | T   | F   | T   | T   | T   |     | T   |
| 4    | T   | F   | F   | F   |     | T   | T   |
| 5    | F   | T   | T   | T   |     | T   | T   |
| 6    | F   | T   | F   | F   | T   |     | T   |
| 7    | F   | F   | T   | F   | T   | T   |     |
| 8    | F   | F   | F   | F   |     |     |     |

(d) GACC

-   i:a ∧ (¬b ∨ c)
    pa=({1,3,4},{ 5,7,8});pb=(2,4);pc=(1,2)
-   ii:a ∨ (b ∧ c):
    pa=({2,3,4},{6,7,8});pb=(5,7);pc=(5,6)
-   iii:a ∧ b
    pa=(1,3);pb=(1,2)
-   iv:a → (b → c)
    pa=(2,6);pb=(2,4);pc=(1,2)
-   v:a ⊕ b
    pa=({1,2},{3,4});pb=({1,2},{3,4})
-   vi:a ↔ (b ∧ c)
    pa=({1,2,3,4},{5,6,7,8});pb=({1,5},{3,7});pc=({1,5},{2,6})
-   vii:(a ∨ b) ∧ (c ∨ d)
    pa=({5,6,7},{13,14,15});pb=({9,10,11},{13,14,15});pc=({ 2,6,10 },{ 4,8,12 });pd=({3,7,11},{4,8,12})
-   viii: (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)
    pa=({1,2,3},{5,6,7});pb=(6,8);pc=({1,3,5},{2,4,6})
-   ix:a ∨ b ∨ (c ∧ d)
    pa=({ 6,7,8},{14,15,16});pb=({10,11,12},{14,15,16});pc=(13,15);pd=(13,14)
-   x: (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)
    pa=({ 2,3},{ 6,7 });pb=({2,5},{4,7});pc=({3,5},{4,6})

(e) CACC

-   i:a ∧ (¬b ∨ c)
    pa=({1,3,4},{ 5,7,8});pb=(4,2);pc=(1,2) (same as GACC)
-   ii:a ∨ (b ∧ c):
    pa=({2,3,4},{6,7,8});pb=(5,7);pc=(5,6) (same as GACC)
-   iii:a ∧ b
    pa=(1,3);pb=(1,2) (same as GACC)
-   iv:a → (b → c)
    pa=(2,6);pb=(2,4);pc=(1,2) (same as GACC)
-   v:a ⊕ b
    pa=(1,3) or (2,4);pb=(1,2) or (3,4)
-   vi:a ↔ (b ∧ c)
    pa=(1,5) or ({2,3,4},{6,7,8});pb=(1,3) or (5,7);pc=(1,2) or (5,6)
-   vii:(a ∨ b) ∧ (c ∨ d)
    pa=({5,6,7},{13,14,15});pb=({9,10,11},{13,14,15});pc=({ 2,6,10 },{ 4,8,12 });pd=({3,7,11},{4,8,12}) (same as GACC)
-   viii: (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)
    pa=({5,7},{1,3}) or (2,6);pb=(6,8);pc=({2,4},{1,3}) or (5,6)
-   ix:a ∨ b ∨ (c ∧ d)
    pa=({ 6,7,8},{14,15,16});pb=({10,11,12},{14,15,16});pc=(13,15);pd=(13,14) (same as GACC)
-   x: (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)
    pa=({ 2,3},{ 6,7 });pb=({2,5},{4,7});pc=({3,5},{4,6}) (same as GACC)

(f) RACC

-   i:a ∧ (¬b ∨ c)
    pa=(1,5) or (3,7) or (4,8);pb=(4,2);pc=(1,2)
-   ii:a ∨ (b ∧ c):
    pa=(2,6) or (3,7) or (4,8);pb=(5,7);pc=(5,6)
-   iii:a ∧ b
    pa=(1,3);pb=(1,2) (same as CACC)
-   iv:a → (b → c)
    pa=(2,6);pb=(2,4);pc=(1,2) (same as CACC)
-   v:a ⊕ b
    pa=(1,3) or (2,4);pb=(1,2) or (3,4) (same as CACC)
-   vi:a ↔ (b ∧ c)
    pa=(1,5) or (2,6) or (3,7) or (4,8);pb=(1,3) or (5,7);pc=(1,2) or (5,6)
-   vii:(a ∨ b) ∧ (c ∨ d)
    pa=(5,13) or (6,14) or (7,15);pb=(9,13) or (10,14) or (11,15);pc=(2,4) or (6,8) or (10,12);pd=(3,4) or (7,8) or (11,12)
-   viii: (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)
    pa=(1,5) or (3,7) or (2,6);pb=(6,8);pc=(1,2) or (3,4) or (5,6)
-   ix:a ∨ b ∨ (c ∧ d)
    pa=(6,14) or (7,15) or (8,16);pb=(10,14) or (11,15) or (12,16);pc=(13,15);pd=(13,14)
-   x: (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)
    pa=(2,6) or (3,7);pb=(2,4) or (5,7);pc=(3,4) or (5,6)

(g) GICC

-   i:a ∧ (¬b ∨ c)
    pa: p=true => n/a; p=false => (2,6)
    pb: p=true => (1,3); p=false => ({5,6},{7,8})
    pc: p=true => ((3,4)); p=false => ({5,7},{6,8})
-   ii:a ∨ (b ∧ c)
    pa: p=true => (1,5); p=false => n/a
    pb: p=true => ({1,2},{3,4}); p=false => (6,8)
    pc: p=true => ({1,3},{2,4}); p=false => (7,8)
-   iii:a ∧ b
    pa: p=true => n/a; p=false => (2,4)
    pb: p=true => n/a; p=false => (3,4)
-   iv:a → (b → c)
    pa: p=true => ({1,3,4},{5,7,8}); p=false => n/a
    pb: p=true => ({1,5,6},{3,7,8}); p=false => n/a
    pc: p=true => ({3,5,7},{4,6,8}); p=false => n/a
-   v:a ⊕ b
    pa: p=true => n/a; p=false => n/a
    pb: p=true => n/a; p=false => n/a
-   vi:a ↔ (b ∧ c)
    pa: p=true => n/a; p=false => n/a
    pb: p=true => (6,8); p=false => (2,4)
    pc: p=true => (7,8); p=false => (3,4)
-   vii:(a ∨ b) ∧ (c ∨ d)
    pa: p=true => ({1,2,3},{9,10,11}); p=false => ({4,8},{12,16})
    pb: p=true => ({1,2,3},{5,6,7}); p=false => ((4,12),(8,16))
    pc: p=true => ({1,5,9},{3,7,11}); p=false => ({13,14},{15,16})
    pc: p=true => ({1,5,9},{2,6,10}); p=false => ({13,15},{14,16})
-   viii: (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)
    pa: p=true => (4,8); p=false => n/a
    pb: p=true => ({2,5},{4,7}); p=false => (1,3)
    pc: p=true => (7,8); p=false => n/a
-   ix:a ∨ b ∨ (c ∧ d)
    pa: p=true => ({1,2,3,4,5},{9,10,11,12,13}); p=false => n/a
    pb: p=true => ({1,2,3,4,9},{5,6,7,8,13}); p=false => n/a
    pc: p=true => ({1,2,5,6,9,10},{3,4,7,8,11,12}); p=false => (14,16)
    pd: p=true => ({1,3,5,7,9,11},{2,4,6,8,10,12}); p=false => (15,16)
-   x: (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)
    pa: p=true => (1,5); p=false => (4,8)
    pb: p=true => (1,3); p=false => (6,8)
    pc: p=true => (1,2); p=false => (7,8)

(h) RICC

-   i:a ∧ (¬b ∨ c)
    pa: p=true => n/a; p=false => (2,6)
    pb: p=true => (1,3); p=false => (5,7) or (6,8)
    pc: p=true => (3,4); p=false => (5,6) or (7,8)
-   ii:a ∨ (b ∧ c)
    pa: p=true => (1,5); p=false => n/a (same as GICC)
    pb: p=true => (1,3) or (2,4); p=false => (6,8)
    pc: p=true => (1,2) or (3,4); p=false => (7,8)
-   iii:a ∧ b
    pa: p=true => n/a; p=false => (2,4) (same as GICC)
    pb: p=true => n/a; p=false => (3,4) (same as GICC)
-   iv:a → (b → c)
    pa: p=true => (1,5) or (3,7) or (4,8); p=false => n/a
    pb: p=true => (1,3) or (5,7) or (6,8); p=false => n/a
    pc: p=true => (3,4) or (5,6) or (7,8); p=false => n/a
-   v:a ⊕ b
    pa: p=true => n/a; p=false => n/a (same as GICC)
    pb: p=true => n/a; p=false => n/a (same as GICC)
-   vi:a ↔ (b ∧ c)
    pa: p=true => n/a; p=false => n/a
    pb: p=true => (6,8); p=false => (2,4) (same as GICC)
    pc: p=true => (7,8); p=false => (3,4) (same as GICC)
-   vii:(a ∨ b) ∧ (c ∨ d)
    pa: p=true => (1,9) or (2,10) or (3,11); p=false => (4,12) or (8,16)
    pb: p=true => (1,5) or (2,6) or (3,7); p=false => (4,8) or (12,16)
    pc: p=true => (1,3) or (5,7) or (9,11); p=false =>(13,15) or (14,16)
    pc: p=true => (1,2) or (5,6) or (9,10); p=false => (13,14) or (15,16)
-   viii: (¬a ∧ ¬b) ∨ (a ∧ ¬c) ∨ (¬a ∧ c)
    pa: p=true => (4,8); p=false => n/a (same as GICC)
    pb: p=true => (2,4) or (5,7); p=false => (1,3)
    pc: p=true => (7,8); p=false => n/a (same as GICC)
-   ix:a ∨ b ∨ (c ∧ d)
    pa: p=true => (1,9) or (2,10) or (3,11) or (4,12) or (5,13); p=false => n/a
    pb: p=true => (1,5) or (2,6) or (3,7) or (4,8) or (9,13); p=false => n/a
    pc: p=true => (1,3) or (2,4) or (5,7) or (6,8) or (9,11) or (10,12); p=false => (14,16)
    pd: p=true => (1,2) or (3,4) or (5,6) or (7,8) or (9,10) or (11,12); p=false => (15,16)
-   x: (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)
    pa: p=true => (1,5); p=false => (4,8) (same as GICC)
    pb: p=true => (1,3); p=false => (6,8) (same as GICC)
    pc: p=true => (1,2); p=false => (7,8) (same as GICC)

## Q5

因為 GACC 只要求主子句要有取值真與假的兩個 TR，並沒有限定主子句取值不同時，謂詞也要不同，且其他子句
的取值也可以變換。故當 a=T,b=F 與 a=F,b=T 時，p=a ⊕ b 時謂詞皆為 T

# 8.2 Quiz

## Q1

(a)

-   i:

    -   f:

        | c/ab | 00  | 01  | 11  | 10  |
        | ---- | --- | --- | --- | --- |
        | 0    |     | 1   | 1   |     |
        | 1    |     |     |     |     |

    -   !f:

        | c/ab | 00  | 01  | 11  | 10  |
        | ---- | --- | --- | --- | --- |
        | 0    | 1   |     |     | 1   |
        | 1    | 1   | 1   | 1   | 1   |

-   ii:

    -   f:

        | cd/ab | 00  | 01  | 11  | 10  |
        | ----- | --- | --- | --- | --- |
        | 00    | 1   |     |     |     |
        | 01    |     |     |     |     |
        | 11    |     |     | 1   |     |
        | 10    |     |     |     |     |

    -   !f:

        | cd/ab | 00  | 01  | 11  | 10  |
        | ----- | --- | --- | --- | --- |
        | 00    |     | 1   | 1   | 1   |
        | 01    | 1   | 1   | 1   | 1   |
        | 11    | 1   | 1   |     | 1   |
        | 10    | 1   | 1   | 1   | 1   |

-   iii:

    -   f:

        | c/ab | 00  | 01  | 11  | 10  |
        | ---- | --- | --- | --- | --- |
        | 0    |     |     | 1   |     |
        | 1    | 1   |     | 1   | 1   |

    -   !f:

        | c/ab | 00  | 01  | 11  | 10  |
        | ---- | --- | --- | --- | --- |
        | 0    | 1   | 1   |     | 1   |
        | 1    |     | 1   |     |     |

-   iv:

    -   f:

        | cd/ab | 00  | 01  | 11  | 10  |
        | ----- | --- | --- | --- | --- |
        | 00    | 1   | 1   |     |     |
        | 01    | 1   | 1   | 1   | 1   |
        | 11    |     | 1   | 1   |     |
        | 10    |     |     |     |     |

    -   !f:

        | cd/ab | 00  | 01  | 11  | 10  |
        | ----- | --- | --- | --- | --- |
        | 00    |     |     | 1   | 1   |
        | 01    |     |     |     |     |
        | 11    | 1   |     |     | 1   |
        | 10    | 1   | 1   | 1   | 1   |

(b)

-   i:
    -   f: b!c
    -   !f: !a!b + a!b + bc => 考慮 !a!b + a!b 兩項 a 可為任意，故只要 !b 就可取代， bc 可以改為 c 取代 => !b + c
-   ii:
    -   f: abcd + !a!b!c!d
    -   !f: !ab + c!d + a!c + !bd (另一解)
-   iii:
    -   f: ab + !bc
    -   !f: !ab + !b!c
-   iv:
    -   f: !a!c + !cd + bd
    -   !f: a!d + !bc + c!d

(c)IC

-   i:

    | 蘊含項 / 代數 | a   | b   | c   |     |
    | ------------- | --- | --- | --- | --- |
    | b!c           |     | T   | F   | ?TF |
    | !b            |     | F   |     | ?F? |
    | c             |     |     | T   | ??T |

    => { TTF, FFT}

-   ii:

    | 蘊含項 / 代數 | a   | b   | c   | d   |      |
    | ------------- | --- | --- | --- | --- | ---- |
    | abcd          | T   | T   | T   | T   | TTTT |
    | !a!b!c!d      | F   | F   | F   | F   | FFFF |
    | !ab           | F   | T   |     |     | FT?? |
    | c!d           |     |     | T   | F   | ??TF |
    | a!c           | T   |     | F   |     | T?F? |
    | !bd           |     | F   |     | T   | ?F?T |

    => { TTTT, FFFF, FTTF,TFFT} (另一解)

-   iii:

    | 蘊含項 / 代數 | a   | b   | c   |     |
    | ------------- | --- | --- | --- | --- |
    | ab            | T   | T   |     | TT? |
    | !bc           |     | F   | T   | ?FT |
    | !ab           | F   | T   |     | FT? |
    | !b!c          |     | F   | F   | ?FF |

    => { TTT,FFF, TFT, FTT }

-   iv:

    | 蘊含項 / 代數 | a   | b   | c   | d   |     |
    | ------------- | --- | --- | --- | --- | --- |
    | !a!c          | F   |     | F   |     |     |
    | !cd           |     |     | F   | T   |     |
    | bd            |     | T   |     | T   |     |
    | a!d           | T   |     |     | F   |     |
    | !bc           |     | F   | T   |     |     |
    | c!d           |     |     | T   | F   |     |

    => { FTFT, TFTF }

(d) MUTP

-   i: b!c=>{ xTF }
-   ii: abcd + !a!b!c!d => { TTTT,FFFF }
-   iii: ab + !bc => { TTT,TTF, TFT,FFT }
-   iv: !a!c + !cd + bd => { FFFF,FTFF; TFFT; FTTT,TTTT }
    ※ FFFT FTFT TTFT 不是唯一真值點

(e) CUTPNFP

-   i: b!c=>{ xTF } + { xTT, xFF }
    -   NFP b: xTT => xTT
    -   NFP c: xFF => xFF
-   ii: abcd + !a!b!c!d => { TTTT,FFFF } + { FTTT, TFTT, TTFT, TTTF, TFFF, FTFF, FFTF, FFFT }
    -   NFP a: FTTT / TFFF
    -   NFP b: TFTT / FTFF
    -   NFP c: TTFT / FFTF
    -   NFP d: TTTF / FFFT
-   iii: ab + !bc => { TTF, FFT} + {TTF, FFT, FTT, FFF}
    -   NFP a: FTx => FTF FTT
    -   NFP b: TFF / FTT => TFF / FTT
    -   NFP c: FFF => FFF
-   iv: !a!c + !cd + bd => { FFFF, TFFT, TTTT } + {TTFF + FFTT}
    -   NFP a: TxFx => TTFF TFFF
    -   NFP b: xFxT => FFTT TFTT
    -   NFP c: FxTx / xxTT => FFTT FTTF FFTF / FFTT TFTT
    -   NFP d: xxFF / xTxF => TTFF TFFF / TTFF FTTF TTTF

(f) MNFP

-   i: b!c=> { xTT, xFF }
    -   for b:xTT
    -   for c:xFF
-   ii: abcd + !a!b!c!d => { FTTT, TFTT, TTFT, TTTF, TFFF, FTFF, FFTF, FFFT }
    -   for a: FTTT / TFFF
    -   for b: TFTT / FTFF
    -   for c: TTFT / FFTF
    -   for d: TTTF / FFFT
-   iii: ab + !bc => { TFF,FTT }
    -   for a: FTF FTT
    -   for b: TFF / FTT
    -   for c: TFF FFF
-   iv: !a!c + !cd + bd => { TTFF, TFFF, FFTT, TFTT, FTTF }
    -   for a: TTFF TFFF
    -   for b: FFTT TFTT
    -   for c: FFTT FTTF / FFTT TFTT
    -   for d: TTFF TFFF / TTFF FTTF

(g) MUMCUT

-   i: b!c=>{ xTF } + { xTT, xFF } + { xTT, xFF } = { xTF, xTT, xFF }
-   ii:abcd + !a!b!c!d => { TTTT,FFFF } + { FTTT, TFTT, TTFT, TTTF, TFFF, FTFF, FFTF, FFFT } = { TTTT,FFFF, FTTT, TFTT, TTFT, TTTF, TFFF, FTFF, FFTF, FFFT }
-   iii: ab + !bc => { TTT,TTF, TFT,FFT } + { TFF,FTT } + { TFF,FTT } = { TTT, TTF, TFT, FFT, TFF, FTT }
-   iv: !a!c + !cd + bd => { FFFF,FTFF,FTTT,TFFT,TTTT } + {TTFF + FFTT} + { TTFF, TFFF, FFTT, TFTT, FTTF } = { FFFF, FTFF, FTTT, TFFT, TTTT, TTFF, FFTT, TFFF, TFTT, FTTF }

# 8.3 Quiz

## Q1 謂詞覆蓋

謂詞: P = ( a | (b & c)) & d
子句:

-   a. curTemp < dTemp - thresholdDiff
-   b. Override
-   c. curTemp < overTemp - thresholdDiff
-   d. timeSinceLastRun > minLag

| 測試案例(P) | abcd | dTemp(by Setting) | currTemp | thresholdDiff | override(by setOverride) | overTemp | minLag | TimeSinceLastRun |
| ----------- | ---- | ----------------- | -------- | ------------- | ------------------------ | -------- | ------ | ---------------- |
| T           | TTTT | 69                | 63       | 5             | true                     | 70       | 10     | 12               |
| F           | FFFF | 69                | 65       | 5             | false                    | 69       | 15     | 12               |

## Q2 子句覆蓋

| 測試案例(P) | abcd | dTemp(by Setting) | currTemp | thresholdDiff | override(by setOverride) | overTemp | minLag | TimeSinceLastRun |
| ----------- | ---- | ----------------- | -------- | ------------- | ------------------------ | -------- | ------ | ---------------- |
| T           | TTTT | 69                | 63       | 5             | true                     | 70       | 10     | 12               |
| F           | FFFF | 69                | 65       | 5             | false                    | 69       | 15     | 12               |
| T           | FTTT | 69                | 63       | 5             | true                     | 70       | 10     | 12               |
| F           | FTFT | 69                | 65       | 5             | true                     | 60       | 15     | 12               |
| F           | TTTF | 69                | 63       | 5             | true                     | 70       | 15     | 12               |

## Q3 RACC

pa = (!b | !c) & d
pb = !a & c & d
pc = !a & b & d
pd = a | (b & c)

真值表

| Row# | a   | b   | c   | d   | P   | Pa  | Pb  | Pc  | Pd  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   |     |     |     | T   |
| 2    | T   | T   | T   |     |     |     |     |     | T   |
| 3    | T   | T   |     | T   | T   | T   |     |     | T   |
| 4    | T   | T   |     |     |     |     |     |     | T   |
| 5    | T   |     | T   | T   | T   | T   |     |     | T   |
| 6    | T   |     | T   |     |     |     |     |     | T   |
| 7    | T   |     |     | T   | T   | T   |     |     | T   |
| 8    | T   |     |     |     |     |     |     |     | T   |
| 9    |     | T   | T   | T   | T   |     | T   | T   | T   |
| 10   |     | T   | T   |     |     |     |     |     | T   |
| 11   |     | T   |     | T   |     | T   |     | T   |     |
| 12   |     | T   |     |     |     |     |     |     |     |
| 13   |     |     | T   | T   |     | T   | T   |     |     |
| 14   |     |     | T   |     |     |     |     |     |     |
| 15   |     |     |     | T   |     | T   |     |     |     |
| 16   |     |     |     |     |     |     |     |     |     |

-   pa: Txxx, Fxxx => (3,11), (5,13), (7,15) => (3,11)
-   pb: FTxx, FFxx => (9,13) => (9,13)
-   pc: FTTx, FTFx => (9,11) => (9,11)
-   pd: (T)T,(T)F => (1,2), (3,4), (5,6), (7,8), (9,10)=> (3,4)

TR : { TTFT, TTFF, FTTT, FTFT, FFTT }

-   a. curTemp < dTemp - thresholdDiff
-   b. Override
-   c. curTemp < overTemp - thresholdDiff
-   d. timeSinceLastRun > minLag

| abcd | dTemp(by Setting) | currTemp | thresholdDiff | override(by setOverride) | overTemp | minLag | TimeSinceLastRun |
| ---- | ----------------- | -------- | ------------- | ------------------------ | -------- | ------ | ---------------- |
| TTFT | 69                | 63       | 5             | true                     | 65       | 10     | 12               |
| TTFF | 69                | 63       | 5             | true                     | 65       | 15     | 12               |
| FTTT | 69                | 64       | 5             | true                     | 70       | 10     | 12               |
| FTFT | 69                | 64       | 5             | true                     | 64       | 10     | 12               |
| FFTT | 69                | 64       | 5             | false                    | 70       | 10     | 12               |

# Q6

P = x < y & x + y == 10
a: x < y
b:x + y == 10

P = a & b
pa = b
pb = a

| Row# | a   | b   | P   | Pa  | Pb  |
| ---- | --- | --- | --- | --- | --- |
| 1    | T   | T   | T   | T   | T   |
| 2    | T   |     |     |     | T   |
| 3    |     | T   |     | T   |     |
| 4    |     |     |     |     |     |

![](assets/20230725_133535_image.png)

(a) RACC

-   pa:(1,3) => { TT, FT }
-   pb:(1,2) => { TT, TF }

TR: { TT,TF,FT }

| ab  | x   | y   |
| --- | --- | --- |
| TT  | 4   | 6   |
| TF  | 4   | 7   |
| FT  | 5   | 5   |

(b) RICC

-   pa:(2,4) => { TF, FF }
-   pb:(3,4) => { FT, FF }

TR: { TF,FT,FF }

| ab  | x   | y   |
| --- | --- | --- |
| TF  | 4   | 7   |
| FT  | 5   | 5   |
| FF  | 6   | 5   |

# 8.5 Quiz

## Q1 謂詞覆蓋

令子句

|       | a                  | b           | c              | d           | e          | f      | g        | h     |
| ----- | ------------------ | ----------- | -------------- | ----------- | ---------- | ------ | -------- | ----- |
| 子句  | Button1 or Button2 | Gear = Park | ignition = off | sideMirrors | seatBottom | lumbar | seatBack | Reset |
| True  | Button2            | T           | ignition = off | T           | T          | T      | T        | T     |
| False | Button1            | F           | ignition = on  | F           | F          | F      | F        | F     |

| 代號,Transition | Predicate     | Test Case   | P   | Expected Output<br />(Post-state) |
| --------------- | ------------- | ----------- | --- | --------------------------------- |
| a.1 -> 2        | a ∧ (b ∨ c )  | a ∧ b       | T   | 2                                 |
|                 |               | !a ∧ b      | F   | 1                                 |
| b.1 -> 3        | d ∧ !c        | d ∧ !c      | T   | 3                                 |
|                 |               | d ∧ c       | F   | 1                                 |
| c.1 -> 3        | e ∧ !c        | e ∧ !c      | T   | 3                                 |
|                 |               | e ∧ c       | F   | 1                                 |
| d.1 -> 3        | f ∧ !c        | f ∧ !c      | T   | 3                                 |
|                 |               | f ∧ c       | F   | 1                                 |
| e.1 -> 3        | g ∧ !c        | g ∧ !c      | T   | 3                                 |
|                 |               | g ∧ c       | F   | 1                                 |
| f.2 -> 1        | !a ∧ (b ∨ c ) | !a ∧ b      | T   | 1                                 |
|                 |               | a ∧ b       | F   | 2                                 |
| g.2 -> 3        | d ∧ !c        | d ∧ !c      | T   | 3                                 |
|                 |               | d ∧ c       | F   | 2                                 |
| h.2 -> 3        | e ∧ !c        | e ∧ !c      | T   | 3                                 |
|                 |               | e ∧ c       | F   | 2                                 |
| i.2 -> 3        | f ∧ !c        | f ∧ !c      | T   | 3                                 |
|                 |               | f ∧ c       | F   | 2                                 |
| j.2 -> 3        | g ∧ !c        | g ∧ !c      | T   | 3                                 |
|                 |               | g ∧ c       | F   | 2                                 |
| k.3 -> 1        | !a ∧ (b ∨ c ) | !a ∧ b      | T   | 1                                 |
|                 |               | a ∧ b       | F   | 2                                 |
| l.3 -> 2        | a ∧ (b ∨ c )  | a ∧ b       | T   | 2                                 |
|                 |               | !a ∧ b      | F   | 1                                 |
| m.3 -> 4        | h ∧ !a ∧ !c   | h ∧ !a ∧ !c | T   | 4                                 |
|                 |               | h ∧ !a ∧ c  | F   | 3                                 |
| n.3 -> 5        | h ∧ a ∧ !c    | h ∧ a ∧ !c  | F   | 5                                 |
|                 |               | h ∧ a ∧ c   | F   | 3                                 |
| o.4 -> 1        | c             | c           | T   | 1                                 |
|                 |               | !c          | F   | 4                                 |
| p.4 -> 3        | d ∧ !c        | d ∧ !c      | T   | 3                                 |
|                 |               | d ∧ c       | F   | 1                                 |
| q.4 -> 3        | e ∧ !c        | e ∧ !c      | T   | 3                                 |
|                 |               | e ∧ c       | F   | 1                                 |
| r.4 -> 3        | f ∧ !c        | f ∧ !c      | T   | 3                                 |
|                 |               | f ∧ c       | F   | 1                                 |
| s.4 -> 3        | g ∧ !c        | g ∧ !c      | T   | 3                                 |
|                 |               | g ∧ c       | F   | 1                                 |
| t.5 -> 2        | c             | c           | T   | 2                                 |
|                 |               | !c          | F   | 5                                 |
| u.5 -> 3        | d ∧ !c        | d ∧ !c      | T   | 3                                 |
|                 |               | d ∧ c       | F   | 2                                 |
| v.5 -> 3        | e ∧ !c        | e ∧ !c      | T   | 3                                 |
|                 |               | e ∧ c       | F   | 2                                 |
| w.5 -> 3        | f ∧ !c        | f ∧ !c      | T   | 3                                 |
|                 |               | f ∧ c       | F   | 2                                 |
| x.5 -> 3        | g ∧ !c        | g ∧ !c      | T   | 3                                 |
|                 |               | g ∧ c       | F   | 2                                 |

## Q2 CACC

|       | a                  | b           | c              | d           | e          | f      | g        | h     |
| ----- | ------------------ | ----------- | -------------- | ----------- | ---------- | ------ | -------- | ----- |
| 子句  | Button1 or Button2 | Gear = Park | ignition = off | sideMirrors | seatBottom | lumbar | seatBack | Reset |
| True  | Button2            | T           | ignition = off | T           | T          | T      | T        | T     |
| False | Button1            | F           | ignition = on  | F           | F          | F      | F        | F     |

| 代號,Transition | Predicate     | Test Case    | P   | Expected Output<br />(Post-state) |
| --------------- | ------------- | ------------ | --- | --------------------------------- |
| a.1 -> 2        | a ∧ (b ∨ c )  | a ∧ b        | T   | 2                                 |
|                 | pa = b ∨ c    | !a ∧ b       | F   | 1                                 |
|                 | pb = a ∧ !c   | a ∧ b ∧ !c   | T   | 2                                 |
|                 |               | a ∧ !b ∧ !c  | F   | 1                                 |
|                 | pc = a ∧ !b   | a ∧ !b ∧ c   | T   | 2                                 |
|                 |               | a ∧ !b ∧ !c  | F   | 1                                 |
| b.1 -> 3        | d ∧ !c        | d ∧ !c       | T   | 3                                 |
|                 | pd = !c       | d ∧ c        | F   | 1                                 |
|                 | pc = d        | !d ∧ c       | F   | 1                                 |
| c.1 -> 3        | e ∧ !c        | e ∧ !c       | T   | 3                                 |
|                 | pe = !c       | e ∧ c        | F   | 1                                 |
|                 | pc = e        | !e ∧ c       | F   | 1                                 |
| d.1 -> 3        | f ∧ !c        | f ∧ !c       | T   | 3                                 |
|                 | pf = !c       | f ∧ c        | F   | 1                                 |
|                 | pc = e        | !f ∧ c       | F   | 1                                 |
| e.1 -> 3        | g ∧ !c        | g ∧ !c       | T   | 3                                 |
|                 | pg = !c       | g ∧ c        | F   | 1                                 |
|                 | pc = e        | !g ∧ c       | F   | 1                                 |
| f.2 -> 1        | !a ∧ (b ∨ c ) | !a ∧ b       | T   | 1                                 |
|                 |               | a ∧ b        | F   | 2                                 |
|                 | pb = !a ∧ !c  | !a ∧ b ∧ !c  | T   | 1                                 |
|                 |               | !a ∧ !b ∧ !c | F   | 2                                 |
|                 | pb = !a ∧ !b  | !a ∧ !b ∧ c  | T   | 1                                 |
|                 |               | !a ∧ !b ∧ !c | F   | 2                                 |
| g.2 -> 3        | d ∧ !c        | d ∧ !c       | T   | 3                                 |
|                 | pd = !c       | d ∧ c        | F   | 2                                 |
|                 | pc = d        | !d ∧ c       | F   | 2                                 |
| h.2 -> 3        | e ∧ !c        | e ∧ !c       | T   | 3                                 |
|                 | pe = !c       | e ∧ c        | F   | 2                                 |
|                 | pc = e        | !e ∧ c       | F   | 2                                 |
| i.2 -> 3        | f ∧ !c        | f ∧ !c       | T   | 3                                 |
|                 | pf = !c       | f ∧ c        | F   | 2                                 |
|                 | pc = e        | !f ∧ c       | F   | 2                                 |
| j.2 -> 3        | g ∧ !c        | g ∧ !c       | T   | 3                                 |
|                 | pg = !c       | g ∧ c        | F   | 2                                 |
|                 | pc = e        | !g ∧ c       | F   | 2                                 |
| k.3 -> 1        | !a ∧ (b ∨ c ) | !a ∧ b       | T   | 1                                 |
|                 | pa= b ∨ c     | a ∧ b        | F   | 2                                 |
|                 | pb = !a ∧ !c  | !a ∧ b ∧ !c  | T   | 1                                 |
|                 |               | !a ∧ !b ∧ !c | F   | 2                                 |
|                 | pc = !a ∧ !b  | !a ∧ !b ∧ c  | T   | 1                                 |
|                 |               | !a ∧ !b ∧ !c | F   | 2                                 |
| l.3 -> 2        | a ∧ (b ∨ c )  | a ∧ b        | T   | 2                                 |
|                 | pa= b ∨ c     | !a ∧ b       | F   | 1                                 |
|                 | pb = !a ∧ !c  | a ∧ b ∧ !c   | T   | 2                                 |
|                 |               | a ∧ !b ∧ !c  | F   | 1                                 |
|                 | pc = !a ∧ !b  | a ∧ !b ∧ c   | T   | 2                                 |
|                 |               | a ∧ !b ∧ !c  | F   | 1                                 |
| m.3 -> 4        | h ∧ !a ∧ !c   | h ∧ a ∧ c    | T   | 4                                 |
|                 | ph = a ∧ c    | !h ∧ a ∧ c   | F   | 3                                 |
|                 | pa = h ∧ c    | h ∧ !a ∧ c   | T   | 4                                 |
|                 |               | h ∧ a ∧ c    | F   | 3                                 |
|                 | pc = h ∧ a    | h ∧ a ∧ !c   | T   | 4                                 |
|                 |               | h ∧ a ∧ c    | F   | 3                                 |
| n.3 -> 5        | h ∧ a ∧ !c    | !h ∧ !a ∧ c  | F   | 5                                 |
|                 | ph = !a ∧ c   | !h ∧ !a ∧ c  | F   | 3                                 |
|                 | pa = h ∧ c    | h ∧ a ∧ c    | T   | 5                                 |
|                 |               | h ∧ !a ∧ c   | F   | 3                                 |
|                 | pc = h ∧ !a   | h ∧ !a ∧ !c  | T   | 5                                 |
|                 |               | h ∧ !a ∧ c   | F   | 3                                 |
| o.4 -> 1        | c             | c            | T   | 1                                 |
|                 |               | !c           | F   | 4                                 |
| p.4 -> 3        | d ∧ !c        | d ∧ !c       | T   | 3                                 |
|                 | pd=!c         | !d ∧ !c      | F   | 1                                 |
|                 | pc=d          | d ∧ c        | F   | 1                                 |
| q.4 -> 3        | e ∧ !c        | e ∧ !c       | T   | 3                                 |
|                 | pe=!c         | !e ∧ !c      | F   | 1                                 |
|                 | pc=e          | e ∧ c        | F   | 1                                 |
| r.4 -> 3        | f ∧ !c        | f ∧ !c       | T   | 3                                 |
|                 | pf=!c         | !f ∧ !c      | F   | 1                                 |
|                 | pc=f          | f ∧ c        | F   | 1                                 |
| s.4 -> 3        | g ∧ !c        | g ∧ !c       | T   | 3                                 |
|                 | pg=!c         | !g ∧ !c      | F   | 1                                 |
|                 | pc=g          | g ∧ c        | F   | 1                                 |
| t.5 -> 2        | c             | c            | T   | 2                                 |
|                 |               | !c           | F   | 5                                 |
| u.5 -> 3        | d ∧ !c        | d ∧ !c       | T   | 3                                 |
|                 | pd=!c         | !d ∧ !c      | F   | 2                                 |
|                 | pc=d          | d ∧ c        | F   | 2                                 |
| v.5 -> 3        | e ∧ !c        | e ∧ !c       | T   | 3                                 |
|                 | pe=!c         | !e ∧ !c      | F   | 2                                 |
|                 | pc=e          | e ∧ c        | F   | 2                                 |
| w.5 -> 3        | f ∧ !c        | f ∧ !c       | T   | 3                                 |
|                 | pf=!c         | !f ∧ !c      | F   | 2                                 |
|                 | pc=f          | f ∧ c        | F   | 2                                 |
| x.5 -> 3        | g ∧ !c        | g ∧ !c       | T   | 3                                 |
|                 | pg=!c         | !g ∧ !c      | F   | 2                                 |
|                 | pc=g          | g ∧ c        | F   | 2                                 |

## Q3 GICC

|       | a                  | b           | c              | d           | e          | f      | g        | h     |
| ----- | ------------------ | ----------- | -------------- | ----------- | ---------- | ------ | -------- | ----- |
| 子句  | Button1 or Button2 | Gear = Park | ignition = off | sideMirrors | seatBottom | lumbar | seatBack | Reset |
| True  | Button2            | T           | ignition = off | T           | T          | T      | T        | T     |
| False | Button1            | F           | ignition = on  | F           | F          | F      | F        | F     |

| 代號,Transition | Predicate               | Test Case    | P   | Expected Output<br />(Post-state) |
| --------------- | ----------------------- | ------------ | --- | --------------------------------- |
| a.1 -> 2        | a ∧ (b ∨ c )            | a ∧ !b ∧ !c  | T   | 2                                 |
|                 | for a:(no feasible,xFF) | !a ∧ !b ∧ !c | F   | 1                                 |
|                 | for b:(TxT,FxT)         | a ∧ b ∧ c    | T   | 2                                 |
|                 |                         | a ∧ !b ∧ c   | F   | 1                                 |
|                 |                         | !a ∧ b ∧ c   | F   | 1                                 |
|                 |                         | !a ∧ !b ∧ c  | F   | 1                                 |
|                 | for c:(TTx,FTx)         | a ∧ b ∧ c    | T   | 2                                 |
|                 |                         | a ∧ b ∧ !c   | F   | 1                                 |
|                 |                         | !a ∧ b ∧ c   | F   | 1                                 |
|                 |                         | !a ∧ b ∧ !c  | F   | 1                                 |
| b.1 -> 3        | d ∧ !c                  | d ∧ c        | T   | 3                                 |
|                 | for d:(xF,no feasible)  | !d ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | d ∧ c        | F   | 1                                 |
|                 |                         | d ∧ !c       | T   | 3                                 |
| c.1 -> 3        | e ∧ !c                  | e ∧ !c       | T   | 3                                 |
|                 | for e:(xF,no feasible)  | !e ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | e ∧ c        | F   | 1                                 |
|                 |                         | e ∧ !c       | T   | 3                                 |
| d.1 -> 3        | f ∧ !c                  | f ∧ !c       | T   | 3                                 |
|                 | for f:(xF,no feasible)  | !f ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | f ∧ c        | F   | 1                                 |
|                 |                         | f ∧ !c       | T   | 3                                 |
| e.1 -> 3        | g ∧ !c                  | g ∧ !c       | T   | 3                                 |
|                 | for g:(xF,no feasible)  | !g ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | g ∧ c        | F   | 1                                 |
|                 |                         | g ∧ !c       | T   | 3                                 |
| f.2 -> 1        | !a ∧ (b ∨ c )           | !a ∧ b       | T   | 1                                 |
|                 | for a:(no feasible,xFF) | a ∧ !b ∧ !c  | F   | 2                                 |
|                 | for b:(TxT,FxT)         | !a ∧ b ∧ c   | T   | 1                                 |
|                 |                         | !a ∧ !b ∧ c  | F   | 2                                 |
|                 |                         | a ∧ b ∧ c    | F   | 2                                 |
|                 |                         | a ∧ !b ∧ c   | F   | 2                                 |
|                 | for c:(TTx,FTx)         | !a ∧ b ∧ c   | T   | 1                                 |
|                 |                         | !a ∧ b ∧ !c  | F   | 2                                 |
|                 |                         | a ∧ b ∧ c    | F   | 2                                 |
|                 |                         | a ∧ b ∧ !c   | F   | 2                                 |
| g.2 -> 3        | d ∧ !c                  | d ∧ !c       | T   | 3                                 |
|                 | for d:(xF,no feasible)  | !d ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | d ∧ c        | F   | 2                                 |
|                 |                         | d ∧ !c       | T   | 3                                 |
| h.2 -> 3        | e ∧ !c                  | e ∧ !c       | T   | 3                                 |
|                 | for e:(xF,no feasible)  | !e ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | e ∧ c        | F   | 2                                 |
|                 |                         | e ∧ !c       | T   | 3                                 |
| i.2 -> 3        | f ∧ !c                  | f ∧ !c       | T   | 3                                 |
|                 | for f:(xF,no feasible)  | !f ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | f ∧ c        | F   | 2                                 |
|                 |                         | f ∧ !c       | T   | 3                                 |
| j.2 -> 3        | g ∧ !c                  | g ∧ !c       | T   | 3                                 |
|                 | for g:(xF,no feasible)  | !g ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | g ∧ c        | F   | 2                                 |
|                 |                         | g ∧ !c       | T   | 3                                 |
| k.3 -> 1        | !a ∧ (b ∨ c )           | !a ∧ b       | T   | 1                                 |
|                 | for a:(no feasible,xFF) | a ∧ !b ∧ !c  | F   | 2                                 |
|                 | for b:(TxT,FxT)         | !a ∧ b ∧ c   | T   | 1                                 |
|                 |                         | !a ∧ !b ∧ c  | F   | 2                                 |
|                 |                         | a ∧ b ∧ c    | F   | 2                                 |
|                 |                         | a ∧ !b ∧ c   | F   | 2                                 |
|                 | for c:(TTx,FTx)         | !a ∧ b ∧ c   | T   | 1                                 |
|                 |                         | !a ∧ b ∧ !c  | F   | 2                                 |
|                 |                         | a ∧ b ∧ c    | F   | 2                                 |
|                 |                         | a ∧ b ∧ !c   | F   | 2                                 |
| l.3 -> 2        | a ∧ (b ∨ c )            | a ∧ b        | T   | 2                                 |
|                 | for a:(no feasible,xFF) | !a ∧ !b ∧ !c | F   | 1                                 |
|                 | for b:(TxT,FxT)         | a ∧ b ∧ c    | T   | 2                                 |
|                 |                         | a ∧ !b ∧ c   | F   | 1                                 |
|                 |                         | !a ∧ b ∧ c   | F   | 1                                 |
|                 |                         | !a ∧ !b ∧ c  | F   | 1                                 |
|                 | for c:(TTx,FTx)         | a ∧ b ∧ c    | T   | 2                                 |
|                 |                         | a ∧ b ∧ !c   | F   | 1                                 |
|                 |                         | !a ∧ b ∧ c   | F   | 1                                 |
|                 |                         | !a ∧ b ∧ !c  | F   | 1                                 |
| m.3 -> 4        | h ∧ !a ∧ !c             | h ∧ !a ∧ !c  | T   | 4                                 |
|                 | for h:(no feasible,xTT) | !h ∧ !a ∧ !c | F   | 3                                 |
|                 | for a:(no feasible,TxT) | h ∧ !a ∧ !c  | T   | 4                                 |
|                 |                         | h ∧ a ∧ !c   | F   | 3                                 |
|                 | for c:(no feasible,TTx) | h ∧ !a ∧ !c  | T   | 4                                 |
|                 |                         | h ∧ !a ∧ c   | F   | 3                                 |
| n.3 -> 5        | h ∧ a ∧ !c              | h ∧ a ∧ !c   | F   | 5                                 |
|                 | for h:(no feasible,xTT) | !h ∧ a ∧ !c  | F   | 3                                 |
|                 | for a:(no feasible,TxT) | h ∧ a ∧ !c   | T   | 5                                 |
|                 |                         | h ∧ !a ∧ !c  | F   | 3                                 |
|                 | for c:(no feasible,TTx) | h ∧ a ∧ !c   | T   | 5                                 |
|                 |                         | h ∧ a ∧ c    | F   | 3                                 |
| o.4 -> 1        | c                       | c            | T   | 1                                 |
|                 |                         | !c           | F   | 4                                 |
| p.4 -> 3        | d ∧ !c                  | d ∧ !c       | T   | 3                                 |
|                 | for d:(xF,no feasible)  | !d ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | d ∧ c        | F   | 1                                 |
|                 |                         | d ∧ !c       | T   | 3                                 |
| q.4 -> 3        | e ∧ !c                  | e ∧ !c       | T   | 3                                 |
|                 | for e:(xF,no feasible)  | !e ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | e ∧ c        | F   | 1                                 |
|                 |                         | e ∧ !c       | T   | 3                                 |
| r.4 -> 3        | f ∧ !c                  | f ∧ !c       | T   | 3                                 |
|                 | for f:(xF,no feasible)  | !f ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | f ∧ c        | F   | 1                                 |
|                 |                         | f ∧ !c       | T   | 3                                 |
| s.4 -> 3        | g ∧ !c                  | g ∧ !c       | T   | 3                                 |
|                 | for g:(xF,no feasible)  | !g ∧ c       | F   | 1                                 |
|                 | for c:(Tx,no feasible)  | g ∧ c        | F   | 1                                 |
|                 |                         | g ∧ !c       | T   | 3                                 |
| t.5 -> 2        | c                       | c            | T   | 2                                 |
|                 |                         | !c           | F   | 5                                 |
| u.5 -> 3        | d ∧ !c                  | d ∧ !c       | T   | 3                                 |
|                 | for d:(xF,no feasible)  | !d ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | d ∧ c        | F   | 2                                 |
|                 |                         | d ∧ !c       | T   | 3                                 |
| v.5 -> 3        | e ∧ !c                  | e ∧ !c       | T   | 3                                 |
|                 | for e:(xF,no feasible)  | !e ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | e ∧ c        | F   | 2                                 |
|                 |                         | e ∧ !c       | T   | 3                                 |
| w.5 -> 3        | f ∧ !c                  | f ∧ !c       | T   | 3                                 |
|                 | for f:(xF,no feasible)  | !f ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | f ∧ c        | F   | 2                                 |
|                 |                         | f ∧ !c       | T   | 3                                 |
| x.5 -> 3        | g ∧ !c                  | g ∧ !c       | T   | 3                                 |
|                 | for g:(xF,no feasible)  | !g ∧ c       | F   | 2                                 |
|                 | for c:(Tx,no feasible)  | g ∧ c        | F   | 2                                 |
|                 |                         | g ∧ !c       | T   | 3                                 |

## Q5

(a) 見 ch8.8.5Q5.png

(b)

-   空閒狀態指向本身的條件:!(a ∨ b) = !a ∧ !b
-   激活狀態指向本身的條件:!(a ∧ b) ∧ !(!b) = !(a ∧ b) ∧ b = !a ∧ b
-   冷卻狀態指向本身的條件: !a

(c) CACC for 激活

-   激活->空閒:a ∧ b
    pa = b => { TT, FT }
    pb = a => { TT, TF }

    TR(ab) = { TT,FT,TF }

-   激活->冷卻:!b
    pb = { xT,xF }

    TR(ab) = { TT,FF }

-   激活->激活:!a ∧ b
    pa = b => { FT, TT }
    pb = !a => { FT, FF }

    TR(ab) = { TT,FT,FF }
