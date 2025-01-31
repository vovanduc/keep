// copied from https://github.com/TanStack/table/blob/main/examples/react/row-selection/src/main.tsx#L338

import { useEffect, useRef, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  indeterminate?: boolean;
}

export default function AlertTableCheckbox({
  indeterminate,
  className = "",
  ...rest
}: Props) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [indeterminate, rest.checked]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
