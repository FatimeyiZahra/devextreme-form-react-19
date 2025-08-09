export function getNestedValue(obj: any, path: string): string {
  if (obj === null || Object.keys(obj).length === 0) {
    return '';
  }
  const pathList = path.split('.');
  if (pathList.length === 1) {
    // eslint-disable-next-line no-unused-expressions
    const pathItem = obj[pathList[0]];
    return typeof pathItem === 'object' && 'message' in pathItem
      ? pathItem['message']
      : pathItem;
  }
  const result = pathList.reduce((acc, part) => acc && (acc as any)[part], obj);
  return (
    typeof result === 'object' && result !== null && 'message' in result
      ? result['message']
      : result
  ) as string;
}
