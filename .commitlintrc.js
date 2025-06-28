export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [0, 'always', ['feat', 'fix', 'docs', 'refactor', 'test']],
    'header-max-length': [2, 'always', 72]
  }
}
