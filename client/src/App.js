import './App.css';

import {useForm} from "react-hook-form"

import {
    Button,
    ChakraProvider,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
  MenuOptionGroup,
    Select
} from "@chakra-ui/react"

import { DatePicker } from '@orange_digital/chakra-datepicker';


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

    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="temperature">
          <FormLabel>Temperature</FormLabel>
           <FormHelperText>The temperature</FormHelperText>
                <Input type="text" {...register("temperature", {required: true})}/>

        </FormControl>
        <br/>
        <FormControl id="humidity">
                                <FormLabel>Humidity</FormLabel>
        <FormHelperText>Select  the humidity level</FormHelperText>
          <Select {...register("humidity")} placeholder="Select Humidity">
            
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">Hight</option>
                  <option value="4">Very higth</option>
                </Select>
        </FormControl>
<br/>
        <FormControl id="luminosity">
                                <FormLabel>Luminosity</FormLabel>
        <FormHelperText>Select the luminosity level</FormHelperText>
                <Select {...register("luminosity")} placeholder="Select luminosity">
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">Hight</option>
                  <option value="4">Very higth</option>
                </Select>
        </FormControl>

        <br />
        <FormControl id="Date">
                                <FormLabel>Date</FormLabel>
        <FormHelperText>Date to start </FormHelperText>
                 <DatePicker initialValue={new Date()} />
        </FormControl>
           

            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
            >
                Submit
            </Button>

        </form>

    );

};

function App() {
    return (
      <div className="App" style={{
        padding: 50,
        textAlign: 'unset'
        }}>
            <ChakraProvider>
                <NavBar/>
                <PredicateForm/>
            </ChakraProvider>
        </div>
    );
}

export default App;
