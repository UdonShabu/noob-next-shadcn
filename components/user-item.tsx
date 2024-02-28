export default function UserItem() {
  return (
    <div className="mx-auto w-[90%] border rounded-md p-4 mt-4 flex  gap-x-3">
      <div className="min-w-12 min-h-12 rounded-full bg-emerald-500 flex justify-center items-center text-white">
        <p>OL</p>
      </div>
      <div>
        <p className="font-bold">Olive</p>
        <p className="text-neutral-500">codewithme@gmail.com</p>
      </div>
    </div>
  );
}
