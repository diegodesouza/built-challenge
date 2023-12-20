import React from 'react';
import { observer } from 'mobx-react-lite';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { useStore } from '../stores/BlogStore';
import { useNavigate } from 'react-router-dom';
import { ArrowClockwise, FilePlus } from 'react-bootstrap-icons';

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
            <Nav pills fill>
                <NavItem>
                    <Button color="link" onClick={generateSampleData}
                             aria-label="Generate Sample Data"
                    >
                        <div className="links">
                            <ArrowClockwise size={25} />
                        </div>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button color="link" onClick={handleCreatePost} aria-label="Create Post">
                        <div className="links">
                            <FilePlus  size={25} />
                        </div>
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default observer(Header);
