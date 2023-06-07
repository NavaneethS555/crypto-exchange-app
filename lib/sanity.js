import sanityClient from '@sanity/client'
export const client = sanityClient({
  projectId: '34ir344g',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skiTDXIl52Ia2HKKJz15xC0Tnd0POnqvJYGy5iX7C5ZgTBgI3jaOsrMmz2NhOaBgZeOfszoEbKu2TuSXDf1N2xtfWYK1hkGy1h4D0nUxmqnLQPVijM3aWbFJcqEVinpF0XHgqjpzsBrtXAjzi3bIKELESEof2rZuAwBXZ6MbrJQZQqA9pieB',
  useCdn: false, // `false` if you want to ensure fresh data
})