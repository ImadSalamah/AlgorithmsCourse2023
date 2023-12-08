function recursiveFactorial(n) {
     if (n === 0 || n === 1) 
     { return 1;} 
      else 
      { return n * recursiveFactorial(n - 1);}}

   // updated function of recursiveFactorial
   function recursiveFactorialBigInt(n) {
    if ( n === 1)
     {  return BigInt(1);}
       else
        {return BigInt(n) * recursiveFactorialBigInt(n - 1);} }

  function iterativeFactorial(n) {
     let result = 1;
      for (let i = 2; i <= n; i++) { result *= i; }
      return result;}

  // updated function of iterativeFactorial
 function iterativeFactorialBigInt(n) {
    let result = BigInt(1);
    for (let i = 2n; i <= BigInt(n); i++) {
      result *= i;
    }
    return result;}
  
  const testCases = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,10000];
  const executionTimes = [];
  
  for (const testCase of testCases) {
    const start = performance.now();
     //recursiveFactorialBigInt(testCase);
    //recursiveFactorial(testCase); 
    /* I switch between them using comments */ 
    // iterativeFactorial(testCase);
    iterativeFactorialBigInt(testCase);
    const end = performance.now();
    const executionTime = end - start;
    executionTimes.push({ n: testCase, time: executionTime });
  }
  executionTimes.forEach(({ n, time }) => {
    console.log(`n = ${n}, Execution Time: ${time.toFixed(4)} ms`);  });
  