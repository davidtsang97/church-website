"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  UserGroupIcon,
  PlayIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                    伯明翰神召會仁愛福音教會
                  </span>
                  <span className="text-3xl font-medium text-gray-600 tracking-wide hover:text-blue-600 transition-colors duration-300">
                    伯明翰堂
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/join/birmingham/"
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              聯絡我們
            </Link>
            {/* <Link
              href="/events"
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              近期活動
            </Link> */}
            {/* <Link
              href="/sermons"
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
            >
              <PlayIcon className="h-5 w-5 mr-2" />
              最新講道
            </Link> */}
            <Link
              href="/about"
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300"
            >
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              關於我們
            </Link>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/join/birmingham"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <UserGroupIcon className="h-5 w-5 inline-block mr-2" />
                聯絡我們
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <InformationCircleIcon className="h-5 w-5 inline-block mr-2" />
                關於我們
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
