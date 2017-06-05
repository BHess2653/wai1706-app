export function rando(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}
export function randomColor(){
  const color = [
    '#a84ed6',
    '#eeb002',
    '#ef352c',
    '#003cce',
    '#00b890'
  ]

  return `${rando(color)}`
}
