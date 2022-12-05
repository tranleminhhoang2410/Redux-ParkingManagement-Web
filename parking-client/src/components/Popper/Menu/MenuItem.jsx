import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={classes}
            leftIcon={data.icon}
            to={data.to}
            onClick={data.title !== 'Log out' ? onClick : data.logout}
        >
            {data.title}
        </Button>
    );
};

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
