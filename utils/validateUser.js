function validateUser(user) {
  if (!user) return false;
  if (typeof user.name !== 'string' || user.name.trim() === '') return false;
  if (typeof user.email !== 'string' || !user.email.includes('@')) return false;
  if (typeof user.age !== 'number' || user.age < 0) return false;
  return true;
}

module.exports = validateUser;