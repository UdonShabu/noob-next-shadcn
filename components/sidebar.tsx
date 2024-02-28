import UserItem from "./user-item";

export default function Sidebar() {
  return (
    <div className="flex flex-col min-w-[300px] min-h-screen border-r gap-4">
      <div>
        <UserItem />
      </div>
      <div className="grow ">
        {/* Create this UI https://youtu.be/mju7e6Cf6Nk?t=478 */}
      </div>
      <div>Setting</div>
    </div>
  );
}
