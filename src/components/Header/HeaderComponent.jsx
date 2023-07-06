import { HeaderDarkButton } from "./HeaderDarkButton";
import { NotifyComponent } from "./Notify/NotifyComponent";
import { HeaderSearch } from "./HeaderSearch";
import { UserComponent } from "./User/UserComponent";

export const HeaderComponent = () => {
  return (
    <div className="px-4 dark:bg-gray-700 flex bg-white h-full items-center justify-between">
      <div>
        <HeaderSearch />
      </div>
      <div className="flex">
        <div className="pr-2">
          <HeaderDarkButton />
        </div>
        <div>
          <NotifyComponent />
        </div>
        <div className="pl-5">
          <UserComponent/>
        </div>
      </div>
    </div>
  );
};
