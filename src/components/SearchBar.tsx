import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
    return (
        <div className={` relative flex sm:justify-center sm:mx-auto  md:flex  items-center space-x-2  dark:text-secondary-foreground text-primary`}>
            <Input type="manga" placeholder="search manga" className=" rounded-xl h-12 w-full dark:bg-primary/5 dark:text-secondary-foreground text-primary p-2" />
            <Button type="submit" className='absolute bg-transparent hover:bg-transparent -end-1 top-[7px]'>
                <BiSearch className=" bg-transparent text-primary dark:text-secondary-foreground text-xl" />
            </Button>
        </div>
    )
}

export default SearchBar