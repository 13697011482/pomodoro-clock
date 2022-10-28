/*
 * @FilePath: react-app-env.d.ts
 * @Author: chentianyao
 * @Date: 2022-10-28 15:12:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-28 15:43:42
 * Copyright: 2022 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}