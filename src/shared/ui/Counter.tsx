"use client";
import Input from "@shared/ui/input/Input";
import Button from "@shared/ui/Button";
import { useEffect, useState } from "react";

interface CounterProps {
  capacity?: number;
  onCountChange?: (value: number) => void;
}

function Counter({ capacity, onCountChange }: CounterProps) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onCountChange?.(count);
  }, [count, onCountChange]);

  return (
    <div className="counter">
      <div className="flex flex-col gap-2">
        <div className="counter flex items-center border [&>*]:bg-neutral-100/80">
          <Button
            theme="none"
            size="none"
            onClick={() => setCount((prev) => (prev > 1 ? --prev : prev))}
            className="dec md:size-8 size-[5vw] grid cursor-pointer place-items-center border-r text-[3vw] transition-all hover:bg-neutral-100 md:text-base select-none active:scale-90"
          >
            -
          </Button>
          <Input
            className="count h-[5vw] w-[8vw] text-center text-[3vw] border border-black outline-none md:h-8 md:w-12 md:text-base rounded-none"
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <Button
            theme="none"
            size="none"
            className="inc md:size-8 size-[5vw] grid cursor-pointer place-items-center border-l text-[3vw] transition-all hover:bg-neutral-100 md:text-base select-none active:scale-90"
            onClick={(e) => {
              e.preventDefault();
              setCount((prev) => {
                if (capacity) return prev < capacity ? prev + 1 : prev;
                return ++prev;
              });
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
