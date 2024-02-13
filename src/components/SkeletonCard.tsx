import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonCard() {
  return (
    <Skeleton className="w-[180px] h-[260px]">
      <div className="w-full pt-1">
        <Skeleton className="w-[25px] h-[25px] rounded-full ml-auto mr-2" />
      </div>
      <div className="flex justify-center align-middle">
        <Skeleton className="w-[150px] h-[150px] rounded-full"/>
      </div>
      <div className="flex gap-3 justify-center h-[100px]">
        <Skeleton className="w-[70px] h-[35px] mt-auto mb-6"/>
        <Skeleton className="w-[70px] h-[35px] mt-auto mb-6"/>
      </div>
    </Skeleton>
  );
}
