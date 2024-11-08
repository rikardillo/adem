import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils";
import ContentContainer from "./ContentContainer";
import { motion } from "framer-motion";

const sectionVariants = cva("relative flex w-full py-20 justify-center", {
  variants: {
    variant: {
      default: "bg-white text-adem-primary-900",
      blue: "bg-gradient-to-r from-adem-primary-900 to-adem-primary-700 text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const SectionContainer = ({
  as: Component = "section",
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={cn(sectionVariants({ variant, className }))}
      layout
    >
      <ContentContainer>{children}</ContentContainer>
    </Component>
  );
};

export default SectionContainer;
