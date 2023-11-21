export function setRootVariable(
  property: string,
  value: string | null,
  priority?: string,
) {
  // 获取根元素
  let root = document.documentElement

  // 设置 CSS 变量
  root.style.setProperty(property, value, priority)
}
