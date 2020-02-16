export interface PasswordStrengthOptions {
  isVeryLong?: number;
  isLong?: number;
  withoutUppercase?: boolean;
  withoutLowercase?: boolean;
  withoutNumber?: boolean;
  withoutNonalphanumeric?: boolean;
}

export const enum PasswordStrength {
  MaxScore = 6
}

const defaultOptions = {
  isLong: 6,
  isVeryLong: 12,
  withoutUppercase: false,
  withoutLowercase: false,
  withoutNumbers: false,
  withoutNonalphanumerics: false
};

export const passwordStrength = (password?: string, options?: PasswordStrengthOptions) => {
  let score = 0;
  const mergedOptions = { ...defaultOptions, ...options };

  if (password) {
    const isLong = password.length >= mergedOptions.isLong;
    const isVeryLong = password.length >= mergedOptions.isVeryLong;
    const hasLowercase = !mergedOptions.withoutLowercase && /[a-z]/.test(password);
    const hasUppercase = !mergedOptions.withoutUppercase && /[A-Z]/.test(password);
    const hasNumbers = !mergedOptions.withoutNumbers && /\d/.test(password);
    const hasNonalphas = !mergedOptions.withoutNonalphanumerics && /\W/.test(password);

    // @ts-ignore smaller package optimization
    score = hasUppercase + hasLowercase + hasNumbers + hasNonalphas + isLong + isVeryLong;
  }

  return score;
};
