import { ForwardedRef, MutableRefObject, RefCallback } from "react";

type TypeOfRefs<T> =
  | MutableRefObject<T | null>
  | RefCallback<T>
  | ForwardedRef<T>;

export function refs<T extends Element | null>(
  ...refs: TypeOfRefs<T>[]
): (node: T) => void {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      switch (typeof ref) {
        case "object":
          ref.current = node;
          break;
        case "function":
          ref(node);
          break;
      }
    });
  };
}
