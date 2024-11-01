import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logs } from "lucide-react";

const Header = () => {
  return (
    <header className="max-w-screen-2xl max-auto bg-white shadow-lg">
      <div className="bg-red-500 h-6 w-full "></div>

      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-semibold font-serif">👩‍🍳Cookieen</h1>

        <ul className="hidden md:block">
          <li className="space-x-5">
            <Link
              href="/"
              className="px-2 text-black font-semibold hover:text-gray-500"
            >
              Home
            </Link>
            <Link
              href="./recipes"
              className="px-2 text-black font-semibold hover:text-gray-500"
            >
              Recipes
            </Link>
            <Link
              href="./about"
              className="px-2 text-black font-semibold hover:text-gray-500"
            >
              About
            </Link>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Logs />
          </SheetTrigger>
          <SheetContent>
            <ul>
              <li className=" mt-4 text-black font-semibold hover:text-gray-500">
                <Link href="/">Home</Link>
              </li>
              <li className=" mt-4 text-black font-semibold hover:text-gray-500">
                <Link href="./recipes">Recipes</Link>
              </li>
              <li className=" mt-4 text-black font-semibold hover:text-gray-500">
                <Link href="./about">About</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
