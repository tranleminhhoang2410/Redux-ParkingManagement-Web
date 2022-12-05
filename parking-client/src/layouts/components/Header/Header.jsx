import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faUser, faRightFromBracket, faKey, faXmark } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Modal from 'react-modal';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import LogIn from '~/auth/LogIn';
import SignUp from '~/auth/SignUp';

const cx = classNames.bind(styles);

const Header = () => {
    const isLoggedIn = false;
    const [isOpenModal, setIsOpenModal] = useState(false);

    //UI Tabs

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    //Custom Style for Modal
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },

        content: {
            width: '25%',
            maxWidth: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
        },

        closeBtn: {
            position: 'absolute',
            right: '4px',
            top: '4px',
            backgroundColor: 'transparent',
            zIndex: 1,
        },
    };

    //Modal
    const openModal = () => {
        setIsOpenModal(true);
        toggleTab(1);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    //User menu
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faKey} />,
            title: 'Change Password',
            to: '/password/change',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
        },
    ];

    //Icon Beside Login Button
    const socialIcons = [
        {
            name: faFacebookSquare,
            color: '#3B5998',
        },
        {
            name: faTwitterSquare,
            color: '#55ACEE',
        },
        {
            name: faInstagramSquare,
            color: '#C536A4',
        },
    ];

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('logo-and-nav')}>
                    <div className={cx('logo')}>
                        <img alt="logo" className={cx('logo-img')} src={require('~/assets/images/logo.png')} />
                    </div>
                    <nav className={cx('nav-link')}>
                        <NavLink
                            className={cx('nav-link-item')}
                            end
                            style={({ isActive }) =>
                                isActive
                                    ? { color: 'var(--primary-color)', borderBottom: '2px solid var(--primary-color)' }
                                    : {}
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={cx('nav-link-item')}
                            to="/about"
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: 'var(--primary-color)',
                                          borderBottom: '2px solid var(--primary-color)',
                                      }
                                    : {}
                            }
                        >
                            About Us
                        </NavLink>
                    </nav>
                </div>
                <div className={cx('social-and-login')}>
                    <nav className={cx('nav-social')}>
                        {socialIcons.map((socialIcon, index) => {
                            return (
                                <NavLink key={index} to="/" className={cx('social-link')}>
                                    <FontAwesomeIcon
                                        icon={socialIcon.name}
                                        className={cx('social-icon')}
                                        style={{ color: socialIcon.color }}
                                    />
                                </NavLink>
                            );
                        })}
                    </nav>
                    {isLoggedIn ? (
                        <Menu items={userMenu}>
                            <div className={cx('login-action')}>
                                <span className={cx('username-txt')}>Username</span>
                                <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                            </div>
                        </Menu>
                    ) : (
                        <Button className={cx('login-btn')} primary onClick={openModal}>
                            Log in
                        </Button>
                    )}
                </div>
            </div>
            {/* Modal */}

            <div className={cx('modal')}>
                <Modal
                    ariaHideApp={false}
                    isOpen={isOpenModal}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                >
                    <Button className={cx('close-btn')} onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} className={cx('close-btn-content')} />
                    </Button>
                    {/* UI Tabs */}
                    <div className={cx('tab-title')}>
                        <Button
                            className={toggleState === 1 ? cx('tabs', 'active-tabs') : cx('tabs')}
                            onClick={() => toggleTab(1)}
                        >
                            Log in
                        </Button>
                        <Button
                            className={toggleState === 2 ? cx('tabs', 'active-tabs') : cx('tabs')}
                            onClick={() => toggleTab(2)}
                        >
                            Sign up
                        </Button>
                    </div>
                    <div className={cx('tab-content')}>
                        {/* Login Form */}
                        <div className={toggleState === 1 ? cx('content', 'active-content') : cx('content')}>
                            <LogIn />
                        </div>

                        {/* Signup Form */}
                        <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
                            <SignUp />
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default Header;
