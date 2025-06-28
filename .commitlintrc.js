import { RuleConfigSeverity } from '@commitlint/types'

export default {
  extends: [],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'test']
    ],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 72]
  }
}
