module.exports = {
    preset: 'ts-jest',
    transform: {
        './__tests__/*.test.tsx?$': 'ts-jest',
        './__tests__/*.test.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
};
