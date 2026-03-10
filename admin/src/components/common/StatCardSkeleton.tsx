function StatCardSkeleton() {
  return (
    <div className="border bg-surface rounded-xl shadow border-border px-4 p-6 flex flex-col animate-pulse">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="h-3 w-24 bg-border rounded-md mb-3" />
          <div className="h-7 w-32 bg-border rounded-md" />
        </div>
        <div className="size-10 rounded-sm bg-border" />
      </div>
      <div className="mt-4 h-3 w-16 bg-border rounded-sm" />
    </div>
  );
}

export default StatCardSkeleton;
