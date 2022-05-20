import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'abraham',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();

console.log(rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkrole', rta2);

export const checkRolev2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta3 = checkRolev2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkrolev2', rta3);

export const checkRolev3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta4 = checkRolev3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkrolev3', rta4);
