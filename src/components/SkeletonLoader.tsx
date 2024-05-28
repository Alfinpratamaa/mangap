import { ComponentPropsWithRef } from "react";

// React 18 example
// Use the div element props
type DivProps = ComponentPropsWithRef<"div">;

// Define the component. this is basically a div wrapper with a pulse animation for the skeleton loading
const SkeletonLoader: React.FC<DivProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={["animate-pulse", className].join(" ")} {...props}>
            {children}
        </div>
    );
};
export default SkeletonLoader; 