import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const Login = () => {
    return (
        <form id="login-form" className={cx('main-form')}>
            <div className={cx('input-group')}>
                <label htmlFor="username" className={cx('input-label')}>
                    Username
                </label>
                <input type="text" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="password" className={cx('input-label')}>
                    Password
                </label>
                <input type="password" className={cx('input-text')} />
            </div>
            <div className={cx('remember-and-forgot')}>
                <div className={cx('remember')}>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember" className={cx('checkbox-label')}>
                        Remember me
                    </label>
                </div>
                <div className={cx('forgot')}>
                    <NavLink to="/password/forgot" className={cx('forgot-link')}>
                        Forgot password?
                    </NavLink>
                </div>
            </div>
            <Button className={cx('action-btn')} primary type="submit">
                Log in
            </Button>
        </form>
    );
};

export default Login;
