const postFixEvaluation = (arr: (string | number | null | undefined)[]) => {
  let stack = []
  for (const ele of arr) {
    // @ts-ignore
    if (isNaN(ele)) {
      let y = stack.pop()
      let x = stack.pop()
      const result = eval(x + ele + y)
      stack.push(result)
    } else {
      // @ts-ignore
      stack.push(parseFloat(ele))
    }
  }
  return stack[0]
}

export default postFixEvaluation
