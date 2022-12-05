import classNames from 'classnames/bind';
import styles from '~/auth/Auth.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const SignUp = () => {
    return (
        <form id="signup-form" className={cx('main-form')}>
            <div className={cx('input-group')}>
                <label htmlFor="username" className={cx('input-label')}>
                    Username
                </label>
                <input type="text" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="full-name" className={cx('input-label')}>
                    Full name
                </label>
                <input type="text" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="email" className={cx('input-label')}>
                    Email
                </label>
                <input type="email" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="username" className={cx('input-label')}>
                    Phone
                </label>
                <input type="tel" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="password" className={cx('input-label')}>
                    Password
                </label>
                <input type="password" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="confirm" className={cx('input-label')}>
                    Confirm Password
                </label>
                <input type="password" className={cx('input-text')} />
            </div>
            <Button className={cx('action-btn')} primary type="submit">
                Sign up
            </Button>
        </form>
    );
};

export default SignUp;
