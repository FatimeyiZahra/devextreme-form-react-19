export const handleKeyPress = (
  e: React.KeyboardEvent<HTMLInputElement>,
  type: "letters" | "numbers" | "alphanumeric" | "specificNumbers" | "float",
  allowedNumbers?: number[],
  allowedSymbols?: string[] 
) => {
  let pattern;

  if (e.key === "Enter") {
    return;
  }

  switch (type) {
    case "letters":
      pattern = /^[a-zA-Z]$/;
      break;
    case "numbers":
      pattern = /^[0-9]$/;
      break;
    case "alphanumeric":
      pattern = /^[a-zA-Z0-9]$/;
      break;
    case "specificNumbers":
      if ((allowedNumbers && allowedNumbers.length > 0) || (allowedSymbols && allowedSymbols.length > 0)) {
        const allowedNumberChars = allowedNumbers?.join("") ?? "";
        const allowedSymbolChars = allowedSymbols?.map((s) => `\\${s}`).join("") ?? "";
        pattern = new RegExp(`^[${allowedNumberChars}${allowedSymbolChars}]$`);
      } else {
        return;
      }
      break;
    case "float":
      pattern = /^[0-9.]$/;
      if (e.key === "." && e.currentTarget.value.includes(".")) {
        e.preventDefault();
        return;
      }
      break;
    default:
      return;
  }

  if (!pattern.test(e.key)) {
    e.preventDefault();
  }
};
