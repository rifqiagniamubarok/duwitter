'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Settings, ArrowRightFromLine, Gauge, CreditCard, BanknoteArrowUp, BanknoteArrowDown, CircleChevronRight, LogOut } from 'lucide-react';
import { Avatar, Button, Divider, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';

import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface Menu {
  title: string;
  icon: React.ElementType;
  href: string;
  iconClass?: string;
}

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menus: Menu[] = [
    { title: 'Dashboard', icon: Gauge, href: '/dashboard', iconClass: 'text-yellow-500' },
    { title: 'Account', icon: CreditCard, href: '/account', iconClass: 'text-sky-500' },
    { title: 'Income', icon: BanknoteArrowUp, href: '/income', iconClass: 'text-green-500' },
    { title: 'Expense', icon: BanknoteArrowDown, href: '/expense', iconClass: 'text-red-500' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex h-screen">
      <motion.div
        className="bg-[#fafafa] dark:bg-[#18181b] text-black flex flex-col justify-between  shadow-lg border-r-2 border-gray-300 dark:border-gray-600"
        initial={{ width: isExpanded ? 220 : 60 }}
        animate={{ width: isExpanded ? 220 : 60 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col">
          <div className="mt-4 mx-2">
            <div className={clsx('flex items-center h-10  rounded-sm  transition-all ', isExpanded ? 'pl-2 justify-start w-full' : 'justify-start pl-2 min-w-10')}>
              <Image src={'/duwitter-logo.svg'} height={24} width={24} alt="logo" />
              <motion.span
                className="overflow-hidden whitespace-nowrap text-lg font-semibold text-primary"
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  maxWidth: isExpanded ? 200 : 0,
                  marginLeft: isExpanded ? 16 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                Duwitter
              </motion.span>
            </div>
          </div>
          {/* <div className="my-2 px-2">
            <Divider />
          </div> */}
          <div className="flex items-center justify-between my-2">
            <div className="flex-1 mx-2">
              <Divider className=" bg-gray-500" />
            </div>
            <div className="">
              <button
                onClick={toggleSidebar}
                className="flex justify-center items-center h-6 aspect-square rounded-none   text-black dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 bg-white dark:bg-[#18181b]  rounded-l-full border-l border-gray-600 dark:border-gray-400 hover:border-gray-300 transition-all duration-300"
              >
                <motion.div initial={{ rotate: isExpanded ? 0 : 180 }} animate={{ rotate: !isExpanded ? 0 : 180 }} transition={{ duration: 0.5 }}>
                  <CircleChevronRight size={16} />
                </motion.div>
              </button>
            </div>
          </div>
          {/* <div className="my-2 px-2">
            <Divider />
          </div> */}
          <div className="flex flex-col gap-0.5 mx-2">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className={clsx(
                  'flex items-center h-10   rounded-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all ',
                  isExpanded ? 'pl-2.5 justify-start w-full' : 'justify-start pl-2.5 w-10',
                  isActive(menu.href) ? 'bg-gray-100 dark:bg-gray-100 border-2' : ''
                )}
              >
                {/* ICON: tetap ukuran fix */}
                <menu.icon className={clsx('w-4 h-4 shrink-0 min-w-4', menu?.iconClass)} />

                {/* LABEL: animasi masuk/keluar */}
                <motion.span
                  className="overflow-hidden whitespace-nowrap text-sm text-black dark:text-white"
                  initial={false}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    maxWidth: isExpanded ? 200 : 0,
                    marginLeft: isExpanded ? 16 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {menu.title}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-4">
          <div className="my-2 px-2">
            <Divider />
          </div>
          <div className="mx-2">
            <Popover placement="right">
              <PopoverTrigger>
                <div
                  className={clsx(
                    'flex items-center h-10   rounded-lg hover:border dark:hover:border-none hover:bg-gray-50 dark:hover:bg-gray-600 transition-all cursor-pointer',
                    isExpanded ? 'pl-0.5 justify-start w-full' : 'justify-start pl-0.5 min-w-10'
                  )}
                >
                  <Avatar radius="sm" name="Jan" className="h-9 w-9 aspect-square shrink-0 min-w-9 text-slate-500" />
                  <motion.span
                    className="overflow-hidden whitespace-nowrap text-sm text-black dark:text-white"
                    initial={false}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      maxWidth: isExpanded ? 200 : 0,
                      marginLeft: isExpanded ? 16 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="truncate w-full font-semibold leading-none">Jan Rusman</p>
                    <p className="truncate w-full leading-none text-xs mt-1">janerusman@gmail.com</p>
                  </motion.span>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="">
                    <p className="truncate w-full font-semibold leading-none">Jan Rusman</p>
                    <p className="truncate w-full leading-none text-xs mt-1">janerusman@gmail.com</p>
                  </div>
                  <Divider className="my-2" />

                  <div className="mt-4">
                    <Button color="danger" variant="faded" fullWidth size="sm">
                      <LogOut size={16} />
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
