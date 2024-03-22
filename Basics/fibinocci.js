a=0
b=1

let n=10

console.log(a)
console.log(b)

for(i=0;i<n;i++){
  temp=a+b
  console.log(temp)
  a=b
  b=temp
}