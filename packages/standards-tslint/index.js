module.exports = {
  extends: [
    'tslint:recommended',
  ],
  'rules': {
    'object-literal-sort-keys': false,
    'quotemark': [true, 'single', 'avoid-escape'],
    'semicolon': [true, 'never'],
    'member-ordering': [true, {order: 'fields-first'}],
    'no-bitwise': true,
  },
}
