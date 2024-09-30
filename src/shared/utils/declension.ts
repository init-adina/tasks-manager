interface DeclensionProps {
  count: number;
  one: string;
  few: string;
  many: string;
}

export function declension({ few, many, count, one }: DeclensionProps): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return one; // 1 товар
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return few; // 2, 3, 4 товара
  } else {
    return many; // 5, 6, ..., 100 товаров
  }
}
