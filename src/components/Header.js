import React from 'react';
import { observer } from 'mobx-react-lite';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Navigate } from 'react-router-dom';

const Header = ({ heading = 'My Blog', generateSampleData, createPost }) => {
    const goHome = () => {
        Navigate('/');
    };
    return (
        <Navbar>
            <NavbarBrand href='/'>{heading}</NavbarBrand>
            <Nav pills>
                <NavItem>
                    <NavLink onClick={generateSampleData}>Generate Sample Data</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={createPost}>Create Post</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default observer(Header);
