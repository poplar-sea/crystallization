package main

import "fmt"

// 自然语言描述：计算两个非负整数p和q的最大公约数；若q是0，则最大公约数为p，否则，将p除以q得到余数r，p和q的最大公约数即为q和r的最大公约数。

// 欧几里得算法
func gcd(p int, q int) int {
	if q == 0 {
		return p
	}
	r := p % q
	return gcd(q, r)
}

func main() {
	fmt.Println(gcd(6, 8))
}
