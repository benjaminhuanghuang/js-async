## async-awit [ES 2017]
```
   const response = await fetch(url);

   return response
```
await keyword 接受一个promise, 把promise resolve的结果赋给 "=" 左边的变量
如果promise reject, await 会 throw exception


async funciton 会返回一个promise, 因此async funciton can be used in promise chain
