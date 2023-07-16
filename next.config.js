/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

// let baseUrl = 'https://development.com'

// if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
//   baseUrl = 'https://production.com'
// }

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['test.cdn.rasta.app'],
  },
  env: {
    BASE_URL: 'https://client.api.uacademy.uz/students',
  },
  
  ezforms:{
    config:{
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: 'Your Key',
          minimumScore: 0.5
        }
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: 'Your Email'
          }
        },
        {
          provider: 'twilio',
          enabled: true,
          config: {
            accountSid: '',
            authToken: '',
            from: '',
          }
        }
      ]
    }
}
  
})

module.exports = nextConfig
