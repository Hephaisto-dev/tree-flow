import './App.css';

import {useForm} from "react-hook-form"
import {useState} from 'react';

import {
    Button,
    ChakraProvider,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    ListItem,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    OrderedList,
    Select,
    Table,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react"

import {DatePicker} from '@orange_digital/chakra-datepicker';

const SERVER = "http://127.0.0.1:5000"


const NavBar = () => {
    return (
        <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme="blue">
                MenuItem
            </MenuButton>
            <MenuList minWidth="240px">
                <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                    <MenuItemOption value="asc">Ascending</MenuItemOption>
                    <MenuItemOption value="desc">Descending</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider/>
                <MenuOptionGroup title="Country" type="checkbox">
                    <MenuItemOption value="email">Email</MenuItemOption>
                    <MenuItemOption value="phone">Phone</MenuItemOption>
                    <MenuItemOption value="country">Country</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}

const PredicateForm = () => {
    const [data, setData] = useState({hits: []});
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = values => {
        console.log(values);
        if (values.temperature == 10)
            fetch(SERVER + '/research1')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData({hits: data})
                })
                .catch(console.error);
        else {
            fetch(SERVER + '/research2')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData({hits: data})
                })
                .catch(console.error);
        }
        console.error("error");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl id="temperature">
                    <FormLabel>Temp??rature</FormLabel>
                    <FormHelperText>Choisir la temp??rature</FormHelperText>
                    <Input type="text" {...register("temperature", {required: true})}/>

                </FormControl>
                <br/>
                <FormControl id="humidity">
                    <FormLabel>Humidit??</FormLabel>
                    <FormHelperText>Choisir le niveau d'humidit??</FormHelperText>
                    <Select {...register("humidity")} placeholder="Niveau d'humidit??">

                        <option value="1">Sec</option>
                        <option value="2">Peu humide</option>
                        <option value="3">Humide</option>
                        <option value="4">Tr??s humide</option>
                    </Select>
                </FormControl>
                <br/>
                <FormControl id="luminosity">
                    <FormLabel>Luminosit??</FormLabel>
                    <FormHelperText>Choisir le niveau de luminosit??</FormHelperText>
                    <Select {...register("luminosity")} placeholder="Niveau de luminosit??">
                        <option value="1">Pas de lumi??re</option>
                        <option value="2">Un peu de lumi??re</option>
                        <option value="3">Lumineux</option>
                        <option value="4">Tr??s lumineux</option>
                    </Select>
                </FormControl>

                <br/>
                <FormControl id="Date">
                    <FormLabel>Date de plantation</FormLabel>
                    <FormHelperText>Date de mise en terre</FormHelperText>
                    <DatePicker initialValue={new Date()}/>
                </FormControl>


                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Trouver les plantes compatible
                </Button>
          <br />
          <br />
          <br />
           {data && data.hits?.length != 0 ?
                <Table variant="simple">
                    <TableCaption>R??sultat de la recherche de plantes</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Plantes disponibles</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.hits.map(item => (
                            <Tr>
                                <Td>{item}</Td>

                            </Tr>

                        ))}
                    </Tbody>

            </Table>
             : <></>
 }

            </form>
        </div>

    );

};

function App() {
    return (
        <div className="App" style={{
            padding: 50,
            textAlign: 'unset'
        }}>
            <ChakraProvider>
                <PredicateForm/>
            </ChakraProvider>
        </div>
    );
}

export default App;
