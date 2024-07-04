import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DogIcon,
  LogOutIcon,
  PlayIcon,
  SettingsIcon,
  SwordIcon,
  TrainTrackIcon,
  UserIcon,
} from "@/components/ui/icons";
import Link from "next/link";

export default function PokeAppLayout({ children }) {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-red-400 text-white shadow-md">
        <div className="flex items-center gap-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <PlayIcon className="w-6 h-6" />
            <span className="text-lg font-bold">PokéApp</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 hover:underline"
              prefetch={false}
            >
              <DogIcon className="w-5 h-5" />
              <span>Pokédex</span>
            </Link>
            <Link
              href="/pokemon/app/list"
              className="flex items-center gap-2 hover:underline"
              prefetch={false}
            >
              <TrainTrackIcon className="w-5 h-5" />
              <span>Trainer Card</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 hover:underline"
              prefetch={false}
            >
              <SwordIcon className="w-5 h-5" />
              <span>Battle</span>
            </Link>
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1609372332255-611485350f25?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <AvatarFallback>PT</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <UserIcon className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <SettingsIcon className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/pokemon"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <LogOutIcon className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      {children}
    </>
  );
}
