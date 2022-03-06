import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'wpeilfkl',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skpi1cdx3GpDEgrBI1rA62TmqCS6Cb7OK5iFBlhbcyBG9zVRajVmQJioO6ZMZTAVdoBryzhHtxTkFsVD8XYaxMyRo7Gspdg9iLcMT1IpycepX7NghgPAZfDLAxKDY2OCC3uOf7CIJ81vja5Cj5REF1gnRAsYD7YPKPwu3avqP6S23DB7bkkZ',
  useCdn: false,
})
