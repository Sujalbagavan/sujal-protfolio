
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MockupCardProps {
  type: "mobile" | "laptop" | "desktop";
  image: string;
  title: string;
  description: string;
}

export const MockupCard = ({ type, image, title, description }: MockupCardProps) => {
  const DeviceFrame = () => {
    switch (type) {
      case "mobile":
        return (
          <div className="relative mx-auto w-[220px] h-[440px]">
            <div className="absolute inset-0 rounded-[38px] border-4 border-foreground/10 bg-foreground/5 shadow-xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 bg-foreground/10 rounded-t-[34px]" />
              <div className="absolute top-1.5 inset-x-0 flex justify-center">
                <div className="w-16 h-2 bg-foreground/20 rounded-full" />
              </div>
              <div className="absolute top-8 bottom-2 inset-x-2 rounded-2xl overflow-hidden shadow-inner">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        );
      case "laptop":
        return (
          <div className="relative mx-auto w-[320px] h-[200px]">
            <div className="absolute inset-0 rounded-t-lg border-4 border-foreground/10 bg-foreground/5 shadow-xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-foreground/10 rounded-t-md" />
              <div className="absolute top-4 bottom-2 inset-x-2 rounded-md overflow-hidden shadow-inner">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-4 -mb-2 bg-foreground/10 rounded-b-md transform skew-x-2 z-0" />
          </div>
        );
      default:
        return (
          <div className="relative mx-auto w-[300px] h-[260px]">
            <div className="absolute top-0 inset-x-0 h-[200px] rounded-lg border-4 border-foreground/10 bg-foreground/5 shadow-xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-foreground/10 rounded-t-md" />
              <div className="absolute top-4 bottom-2 inset-x-2 rounded-md overflow-hidden shadow-inner">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 w-12 h-20 -ml-6 bg-foreground/10 rounded-md" />
            <div className="absolute bottom-0 left-1/2 w-40 h-4 -ml-20 bg-foreground/10 rounded-md" />
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center max-w-sm mx-auto"
    >
      <div className="mb-6">
        <DeviceFrame />
      </div>
      <div className="text-center w-full px-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};
