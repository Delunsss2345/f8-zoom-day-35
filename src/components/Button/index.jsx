import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({
  children,
  primary,
  bordered,
  rounded,
  size = "medium",
  href,
  onClick,
  disabled,
  loading,
  className,
  ...passThrough
}) => {
  const Component = href ? "a" : "button";
  const classNames = clsx(
    styles.btn,
    {
      [styles[`btn-primary`]]: primary,
      [styles[`btn-${size}`]]: size,
      [styles["btn-bordered"]]: bordered,
      [styles["btn-rounded"]]: rounded,
      [styles["btn-loading"]]: loading,
      [styles["disabled"]]: disabled,
    },
    className
  );

  return (
    <Component
      disabled={(disabled && Component === "button") || null}
      href={disabled && Component === "a" ? "#!" : href}
      onClick={onClick}
      className={classNames}
      {...passThrough}
    >
      {loading ? <span>{children}</span> : children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
