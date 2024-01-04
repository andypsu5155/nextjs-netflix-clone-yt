"use client";

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { signOut } from 'next-auth/react'


export default function UserNav() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className='relative h-10 w-10 rounded-sm'>
                <Avatar className='h-10 w-10 rounded-sm'>
                    <AvatarImage 
                        src="https://svnqceuwkwieeinnnzdl.supabase.co/storage/v1/object/public/user%20image/avatar.png"
                    />
                    <AvatarFallback className="rounded-sm">Andy</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-56' align="end" forceMount>
            <DropdownMenuLabel>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>Andy</p>
                    <p className='text-xs leading-none text-muted-foreground'>asdfvasdfv@email.com</p>
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => signOut()}>
                Sign Out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
