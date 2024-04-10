import React from "react";
import { Flex, Text, SimpleGrid, Box, Heading } from '@chakra-ui/react'

const Tab = () => {

    const tabs = [
        {name: "Almora Stadium", url: "https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", desc: "Established in the year 2018, Almora Stadium in Khatyari,Almora listed under Stadiums in Almora"},
        {name: "Haridwar Stadium", url: "https://images.pexels.com/photos/2966245/pexels-photo-2966245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {name: "Naintal Stadium", url: "https://firebasestorage.googleapis.com/v0/b/rayneeapp.appspot.com/o/cdn%2Fimgslider%2Fimg1.jpg?alt=media", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {name: "Ransi Stadium", url: "https://firebasestorage.googleapis.com/v0/b/rayneeapp.appspot.com/o/cdn%2Fimgslider%2Fimg2.jpg?alt=media", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {name: "Srikot Stadium", url: "https://firebasestorage.googleapis.com/v0/b/rayneeapp.appspot.com/o/cdn%2Fimgslider%2Fimg2.jpg?alt=media", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {name: "Stevenson Stadium", url: "https://firebasestorage.googleapis.com/v0/b/rayneeapp.appspot.com/o/cdn%2Fimgslider%2Fimg4.jpg?alt=media", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},

    ]
    return(
        <Flex w='100%' direction='column' bg='white'>
            <Flex w='100%' h='70px' bg='#f1683a' my={3} justify='center' align='center'>
                <Text fontSize='24px' fontWeight='800'>STADIUMS IN UTTRAKHAND</Text>
            </Flex>

            <SimpleGrid columns={3} spacing={10} mx={10}>
                {tabs.map(res => 
            <Box w='100%' h={['15rem', '20rem', '30rem', '30rem']} cursor='pointer'>
                
                        <Box w='100%' h='60%' bgImage={res.url} bgSize='cover' bgRepeat='no-repeat' borderTopRadius='6px'></Box>

                        <Flex justify='center' align='center' h='30%' w='100%' op bg='#eee' _hover={{ bg: '#d6d6d6'}} textAlign='center' borderBottomRadius='6px'>
                        <Box>
                            <Heading color='#202226' fontWeight={'700'} fontSize={['lg', '22px']}>
                                {res.name}
                            </Heading> 
                            <Text color='#45474d' fontSize={['10px','13px']} textAlign='left' fontWeight={'600'} mt={[1, 2, 4]} mx={5} noOfLines={2}>
                        {res.desc}
                            </Text>
                        </Box>
                        </Flex>
            
                    </Box>
                    )}
            </SimpleGrid>

        </Flex>
    )
}

export default Tab