export function maskString(str: string, before = 8, after = 4) {
  if (str.length <= before + after) {
    return str; // 字符串长度小于等于12，无需遮蔽
  }

  const prefix = str.substring(0, before); // 获取前8个字符
  const suffix = str.substring(str.length - after); // 获取后4个字符
  const masked = "***"; // 3个星号

  return prefix + masked + suffix; // 拼接结果
}
