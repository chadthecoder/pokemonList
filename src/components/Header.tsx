'use client'

import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from "react";
import Button from './Button';
import { getRandomPokemonNum, getRandomPokemonPage, getCurPokemonNum, getPrevPokemon, getNextPokemon } from '@/lib/pokemonAPI';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import path from 'path';

//import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import '../css/Header.css'
//import { useLinkClickHandler } from 'react-router-dom';

//figure out loop render in tsx/react?

/*function renderStuff(names)
{
  for(let i = 0; i < names.length; i++)
        {
          let test = names[i].split('.');
          if(test.length == 2 )
          {
            return (<Nav.Item><Nav.Link href={test[1]}>{test[2]}</Nav.Link></Nav.Item>);
          }
          else
          {
      
          }
        }
}*/

export default function Header() { //Header(props: string)
 
  const [randPokemon, setRandPokemon] = useState('')
  let isNotHome = false
  
  const pathname = usePathname()
  if(pathname!="/") isNotHome = true

        return  (
            <nav className='flex flex-row'>
              <p>Post: {pathname}</p>
              <Button linkRef='/' textData='Home'/>
              <Button linkRef={randPokemon}
                      onClick={() =>
                      {
                        setRandPokemon(getRandomPokemonNum(1,151).toString())
                      }}
                      textData='Random Pokemon'/>
              { isNotHome ? <Button linkRef={getPrevPokemon(getCurPokemonNum(pathname))} textData='Previous Pokemon'/> : <></>} 
              { isNotHome ? <Button linkRef={getNextPokemon(getCurPokemonNum(pathname))} textData='Next Pokemon'/> : <></>} 
          </nav>
    );
  }