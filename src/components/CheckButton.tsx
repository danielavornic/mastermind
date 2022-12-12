import cn from "classnames";
import { useGameContext } from "hooks";

interface CheckButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

export const CheckButton = ({
  isDisabled = true,
  ...props
}: CheckButtonProps) => {
  const { updateHistory } = useGameContext();

  return (
    <button
      className={cn("btn btn-sm", { "btn-disabled": isDisabled })}
      onClick={() => updateHistory()}
      {...props}
    >
      Check
    </button>
  );
};
