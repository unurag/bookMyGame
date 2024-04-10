import React from "react";
import { Flex, Text, Icon } from '@chakra-ui/react'
import Logo from "./Logo";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import UserMenu from "./userMenu";



export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <Flex w='100%' bg='#0e073a' h='4rem' align='center' px={4}>
            {/* <Icon as={BiMenu} w={8} h={8} ml={2} mr={3} cursor='pointer' color='white' onClick={onOpen} ref={btnRef} />
            <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Logo hig='2.3rem'/> </DrawerHeader>
          <DrawerBody>
            <UserMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
            <Logo hig="2.3rem"/>


            <Flex w='100%' align='center' justify='flex-end'>
                {/* div for location */}
                <Flex border="1px solid #31c0f0" borderRadius='100px' px='15px' py='8px' align='center' bg='#102842'>
                    <Icon as={CiLocationOn} w={5} h={5} color='white' />

                    <Text fontSize='14px' fontWeight='700' color='#ffffff'>Uttrakhand</Text>

                    <Icon as={MdKeyboardArrowDown} w={6} h={7} color='white' />
                </Flex>

                {/* div for profile */}
                <Flex cursor='pointer' border='1px solid rgba(255, 255, 255, 0.3)' borderRadius='100px' w='45px' h='43px' mx={2} align='center' justify='center'>
                    <Icon as={AiOutlineUser} w={5} h={5} color='white' />
                </Flex>
            </Flex>
        </Flex>
    )
}