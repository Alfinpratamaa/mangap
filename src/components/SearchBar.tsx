import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
    return (
        <div className={` relative flex sm:justify-center sm:mx-auto  md:flex  items-center space-x-2  dark:text-secondary-foreground text-primary`}>
            <Input type="manga" placeholder="search manga" className=" rounded-xl h-10 md:w-[240px] w-[200px] dark:bg-primary/5 px-4 dark:text-secondary-foreground text-primary p-2" />
            <Button type="submit" variant="ghost" className='absolute bg-transparent hover:bg-transparent -end-2 top-[4px]'>
                <BiSearch className=" bg-transparent dark:bg-transparent  text-primary dark:text-secondary-foreground text-xl" />
            </Button>
        </div>
    )
}

export default SearchBar