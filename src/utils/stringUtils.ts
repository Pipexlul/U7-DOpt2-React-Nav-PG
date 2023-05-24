const getFirstValidPathCharIndex = (str: string): number | null => {
  const regex = /[a-zA-Z0-9]/;
  const result = str.search(regex);

  return result === -1 ? null : result;
};

export { getFirstValidPathCharIndex };
