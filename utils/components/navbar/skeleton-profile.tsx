import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-9 w-9 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
    </div>
  );
};
