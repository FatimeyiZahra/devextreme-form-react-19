import type { ComponentType, FC } from "react";

interface WrapperProps {
  isOpen: boolean; // Define the 'open' prop with the correct type
}
const PopUpWrapper = <T extends object>(WrappedComponent: ComponentType<T>) => {
  const Wrapper: FC<WrapperProps & T> = (props) => {
    const { isOpen } = props;
    // Render WrappedComponent only if 'open' is truthy
    return isOpen ? <WrappedComponent {...props} /> : null;
  };
  return Wrapper;
};

export default PopUpWrapper;
