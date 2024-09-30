import tseslint from 'typescript-eslint';

export default tseslint.config(
  // ... the rest of your config ...
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);