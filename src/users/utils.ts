import * as bcrypt from 'bcrypt';

export async function isPasswordMatch(
  password,
  hashedPassword,
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
