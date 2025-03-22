"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  UserGroupIcon,
  PlayIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative w-12 h-12 mr-3 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/images/logo.png"
                    alt="教会标志"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    神召會仁愛福音教會
                  </span>
                  <span className="text-sm text-gray-500">英國伯明翰</span>
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link
                href="/join/birmingham"
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
              >
                <UserGroupIcon className="h-5 w-5 mr-2" />
                加入我們
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                近期活動
              </Link>
              <Link
                href="/sermons"
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
              >
                <PlayIcon className="h-5 w-5 mr-2" />
                最新講道
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
              >
                <InformationCircleIcon className="h-5 w-5 mr-2" />
                關於我們
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
