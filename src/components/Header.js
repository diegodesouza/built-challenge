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
import { useStore } from '../stores/BlogStore';
import { useNavigate } from 'react-router-dom';

const Header = ({ heading = 'My Blog' }) => {
    const store = useStore();
    const navigate = useNavigate();
    const { generateSampleData, handleChange } = store;
    const handleCreatePost = () => {
        handleChange('post', {});
        handleChange('editing', false);
        navigate('/posts/create');
    };
    return (
        <Navbar>
            <NavbarBrand href='/'>{heading}</NavbarBrand>
            <Nav pills>
                <NavItem>
                    <NavLink onClick={generateSampleData}>Generate Sample Data</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handleCreatePost}>Create Post</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default observer(Header);
