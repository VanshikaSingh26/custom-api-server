const validateUser = require('../../utils/validateUser');

describe('validateUser', () => {
  it('should return true for valid user', () => {
    const user = { name: 'Alice', email: 'alice@example.com', age: 25 };
    expect(validateUser(user)).toBe(true);
  });

  it('should return false for missing name', () => {
    const user = { email: 'alice@example.com', age: 25 };
    expect(validateUser(user)).toBe(false);
  });

  it('should return false for invalid email', () => {
    const user = { name: 'Alice', email: 'aliceexample.com', age: 25 };
    expect(validateUser(user)).toBe(false);
  });

  it('should return false for negative age', () => {
    const user = { name: 'Alice', email: 'alice@example.com', age: -5 };
    expect(validateUser(user)).toBe(false);
  });

  it('should return false for missing user object', () => {
    expect(validateUser()).toBe(false);
  });
});