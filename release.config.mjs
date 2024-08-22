import { yikoyu } from '@yikoyu/semantic-release-config'

// export default yikoyu({
//   branches: [
//     'master',
//     { name: 'beta', prerelease: true },
//     { name: 'alpha', prerelease: true }
//   ],
//   plugins: {
//     npm: {
//       npmPublish: false
//     }
//   }
// })
export default {
  branches: [
    'master',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { breaking: true, release: 'major' },
          { revert: true, release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'revert', release: 'patch' }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features', hidden: false },
            { type: 'fix', section: 'Bug Fixes', hidden: false },
            { type: 'perf', section: 'Performance', hidden: false },
            { type: 'refactor', section: 'Refactor', hidden: false },
            { type: 'test', section: 'Tests', hidden: false },
            { type: 'revert', section: 'Revert', hidden: false },
            { type: 'docs', section: 'Docs', hidden: true },
            { type: 'style', section: 'Styles', hidden: true },
            { type: 'build', section: 'Build', hidden: true },
            { type: 'ci', section: 'CI/CD', hidden: true }
          ]
        }
      }
    ],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    '@semantic-release/github',
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
  ]
}
