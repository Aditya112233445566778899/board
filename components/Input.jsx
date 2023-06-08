import cx from "classnames";
import Image from "next/image";

function Input({
  labelClassName,
  className,
  wrapperClassName,
  labelText,
  iconName,
  ...restProps
}) {
  return (
    <div>
      {labelText && <p className={labelClassName}>{labelText}</p>}
      <div
        className={cx(
          "flex items-center px-4 rounded-[10px]",
          wrapperClassName
        )}
      >
        <input
          className={cx(
            "placeholder:text-placeholderColor outline-none",
            className
          )}
          {...restProps}
        />
        {iconName && (
          <Image
            src={"assets/icons/" + iconName}
            width={12}
            height={12}
            alt="icon"
          />
        )}
      </div>
    </div>
  );
}

export default Input;
