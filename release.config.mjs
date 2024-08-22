import { yikoyu } from '@yikoyu/semantic-release-config'

export default yikoyu({
  branches: [
    'master',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  plugins: {
    npm: {
      npmPublish: false
    }
  }
})
