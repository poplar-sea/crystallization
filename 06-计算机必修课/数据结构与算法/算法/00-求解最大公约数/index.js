// 自然语言描述：计算两个非负整数p和q的最大公约数；若q是0，则最大公约数为p，否则，将p除以q得到余数r，p和q的最大公约数即为q和r的最大公约数。

// 欧几里得算法
function gcd(p, q) {
  if (q === 0) {
    return p
  }
  var r = p % q;
  return gcd(q, r)
}

console.log(gcd(6, 8))