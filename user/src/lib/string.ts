export function isUrl(url: string): boolean {
  return (
    url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
    ) !== null
  );
}

export const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  /* eslint-disable */
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
    /* eslint-enable */
});

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const unitPrices: { value: number, text: any }[] = [
  {
    value: 15,
    text: '15 tokens'
  },
  {
    value: 20,
    text: '20 tokens'
  },
  {
    value: 25,
    text: '25 tokens'
  },
  {
    value: 30,
    text: '30 tokens'
  },
  {
    value: 35,
    text: '35 tokens'
  },
  {
    value: 40,
    text: '40 tokens'
  },
  {
    value: 45,
    text: '45 tokens'
  },
  {
    value: 50,
    text: '50 tokens'
  }
];
