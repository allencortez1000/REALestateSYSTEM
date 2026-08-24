const CUSTOMER_AUTH_KEY = 'amicaCustomerSignedIn';
const ADMIN_AUTH_KEY = 'amicaAdminSignedIn';

type MockRole = 'customer' | 'admin';

function getKey(role: MockRole) {
  return role === 'admin' ? ADMIN_AUTH_KEY : CUSTOMER_AUTH_KEY;
}

export function signInMockUser(role: MockRole) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(getKey(role), 'true');
}

export function signOutMockUser(role: MockRole) {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(getKey(role));
}

export function isMockUserSignedIn(role: MockRole) {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(getKey(role)) === 'true';
}

export function signOutAllMockUsers() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(CUSTOMER_AUTH_KEY);
  window.localStorage.removeItem(ADMIN_AUTH_KEY);
}

export { ADMIN_AUTH_KEY, CUSTOMER_AUTH_KEY };
