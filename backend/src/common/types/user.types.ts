export const UserStatus = {
  blocked: 'blocked',
  unconfirmed: 'unconfirmed',
  confirmed: 'confirmed',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const UserRole = {
  admin: 'admin',
  user: 'user',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
