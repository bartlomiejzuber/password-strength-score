import { passwordStrength } from './passwordStrength';

describe('passwordStrength', () => {
  test('returns 0 for none password passed', () => {
    expect(passwordStrength()).toBe(0);
  });

  test('returns 1 for password with lowercase only', () => {
    const password = 'abc';
    expect(passwordStrength(password)).toBe(1);
  });

  test('returns 1 for password with numbers only', () => {
    const password = '123';
    expect(passwordStrength(password)).toBe(1);
  });

  test('returns 1 for password with uppercase only', () => {
    const password = 'UASD';
    expect(passwordStrength(password)).toBe(1);
  });

  test('returns 1 for password with alphanumerics only', () => {
    const password = '!@#';
    expect(passwordStrength(password)).toBe(1);
  });

  test('returns 2 for long lowercase password', () => {
    const password = 'abcdef';
    expect(passwordStrength(password)).toBe(2);
  });

  test('returns 3 for long lowercase password', () => {
    const password = 'abcdefghijka';
    expect(passwordStrength(password)).toBe(3);
  });

  test('returns 4 for long lowercase password with numbers', () => {
    const password = 'abcdefghijka123';
    expect(passwordStrength(password)).toBe(4);
  });

  test('returns 5 for long mixed case password with numbers', () => {
    const password = 'abcdeQWEghijka123';
    expect(passwordStrength(password)).toBe(5);
  });

  test('returns 6 for long mixed case password with numbers and alphanumerics', () => {
    const password = 'abcdeQWEghijka123!@@@';
    expect(passwordStrength(password)).toBe(6);
  });

  test('returns 5 for long mixed case password with numbers and alphanumerics for disabled lowercase score', () => {
    const password = 'abcdeQWEghijka123!@@@';
    expect(passwordStrength(password, { withoutLowercase: true })).toBe(5);
  });

  test('returns 2 for long custom password length', () => {
    const password = '1234567891011';
    expect(passwordStrength(password, { isLong: 12, isVeryLong: 20 })).toBe(2);
  });

  test('returns 3 for very long custom password length', () => {
    const password = '12345678910112312312311232321';
    expect(passwordStrength(password, { isLong: 12, isVeryLong: 20 })).toBe(3);
  });
});
