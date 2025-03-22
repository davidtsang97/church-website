"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarIcon,
  UserGroupIcon,
  PlayIcon,
  InformationCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-gray-800 hover:text-gray-600"
              >
                神召會仁愛福音教會
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="relative flex items-center">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex items-center text-gray-900 hover:text-gray-500"
                >
                  <UserGroupIcon className="h-5 w-5 mr-1" />
                  加入我們
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/join/birmingham"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      英國伯明翰分部
                    </Link>
                    <Link
                      href="/join/online"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      線上分部
                    </Link>
                    <Link
                      href="/join/hongkong"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      香港分部
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/events"
                className="inline-flex items-center text-gray-900 hover:text-gray-500"
              >
                <CalendarIcon className="h-5 w-5 mr-1" />
                近期活動
              </Link>
              <Link
                href="/sermons"
                className="inline-flex items-center text-gray-900 hover:text-gray-500"
              >
                <PlayIcon className="h-5 w-5 mr-1" />
                最新講道
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center text-gray-900 hover:text-gray-500"
              >
                <InformationCircleIcon className="h-5 w-5 mr-1" />
                關於我們
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
