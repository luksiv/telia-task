import Loader from "./Loader.tsx";

export default function EmptyLoadingState() {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-24 text-purple-200">
      <Loader />
    </div>
  );
}
