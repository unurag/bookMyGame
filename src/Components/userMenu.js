import React from 'react'
import {Divider, Flex, Icon, Text} from '@chakra-ui/react'
import { MdSportsVolleyball, MdOutlineContactSupport } from "react-icons/md";
import { BiHomeCircle, BiBookBookmark, BiSolidOffer } from 'react-icons/bi'

const UserMenu = () => {
    return (
        <>
        <Divider />
            <Flex my={3} align={'center'} _hover={{color: 'yellow.400'}} cursor='pointer'>
                <Icon as={BiHomeCircle} w={7} h={7} cursor='pointer'/>
                <Text fontWeight='600' fontSize='15px' mx={2}>HOME</Text>
            </Flex>

        <Divider />
            <Flex my={3} align={'center'} _hover={{color: 'yellow.400'}} cursor='pointer'>
                <Icon as={BiBookBookmark} w={7} h={7} cursor='pointer'/>
                <Text fontWeight='600' fontSize='15px' mx={2}>BOOK GAME</Text>
            </Flex>

        <Divider />
        <a href='https://forms.gle/1kwF2RnFT5P8CdHv7' target='_blank' rel='noreferrer'>
            <Flex my={3} _hover={{color: 'yellow.400'}} cursor='pointer'>
                <Icon as={MdSportsVolleyball} w={6} h={6} cursor='pointer'/>
                <Text fontWeight='600' fontSize='15px' mx={2}>TOURNAMENTS</Text>
            </Flex>
        </a>
        
        <Divider />
        <a href='https://instagram.com/braveclashgaming' target='_blank' rel='noreferrer'>
            <Flex my={3} _hover={{color: 'yellow.400'}} cursor='pointer'>
                <Icon as={BiSolidOffer} w={6} h={6} cursor='pointer'/>
                <Text fontWeight='600' fontSize='md' mx={2}>COACHING OFFERS</Text>
            </Flex>
        </a>

        <Divider />
        <a href='https://discord.gg/Qf6Dr9TuHP' target='_blank' rel='noreferrer'>
            <Flex my={3} _hover={{color: 'yellow.400'}} cursor='pointer'>
                <Icon as={MdOutlineContactSupport} w={6} h={6} cursor='pointer'/>
                <Text fontWeight='600' fontSize='15px' mx={2}>CONTACT US</Text>
            </Flex>
        </a>
        </>
    )
}

export default UserMenu
