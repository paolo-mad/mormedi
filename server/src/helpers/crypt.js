import { hashSync, compareSync } from 'bcrypt';

const cryptPassword = (password) => {
    return hashSync(password, 10);
}

const comparePassword = (password, hash) => {
    return compareSync(password, hash);
}

export { cryptPassword, comparePassword };