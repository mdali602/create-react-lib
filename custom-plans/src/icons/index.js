import React from 'react'

export const PopularIcon = () => (
  <svg
    width='131'
    height='46'
    viewBox='0 0 131 46'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_25_4082)'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.05859 2C4.05859 9.3147 9.98833 15.2444 17.303 15.2444H27.0638C35.0797 15.2444 42.2974 20.0983 45.3207 27.5222C48.344 34.9461 55.5616 39.8 63.5775 39.8H126.208V11.3829V11C126.208 6.02944 122.179 2 117.208 2H4.05859Z'
        fill='#F43F5E'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_25_4082'
        x='0.0585938'
        y='0'
        width='130.149'
        height='45.8'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='2' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0327524 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_25_4082'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_25_4082'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

export const InfoIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 9.4V7M7 4.6H7.006M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z'
      stroke='#94A3B8'
      stroke-width='1.3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)

export const CheckedIcon = ({ width = '20', height = '21' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 10.8C0 5.27714 4.47715 0.799988 10 0.799988C15.5228 0.799988 20 5.27714 20 10.8C20 16.3228 15.5228 20.8 10 20.8C4.47715 20.8 0 16.3228 0 10.8Z'
      fill='#DCFCE7'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M14.2473 6.95837L8.28066 12.7167L6.69733 11.025C6.40566 10.75 5.94733 10.7334 5.614 10.9667C5.289 11.2084 5.19733 11.6334 5.39733 11.975L7.27233 15.025C7.45566 15.3084 7.77233 15.4834 8.13066 15.4834C8.47233 15.4834 8.79733 15.3084 8.98066 15.025C9.28066 14.6334 15.0057 7.80837 15.0057 7.80837C15.7557 7.04171 14.8473 6.36671 14.2473 6.95004V6.95837Z'
      fill='#00B256'
    />
  </svg>
)

export const UncheckedIcon = ({ width = '20', height = '21' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 10.8C0 5.27714 4.47715 0.799988 10 0.799988C15.5228 0.799988 20 5.27714 20 10.8C20 16.3228 15.5228 20.8 10 20.8C4.47715 20.8 0 16.3228 0 10.8Z'
      fill='#FFE4E6'
    />
  </svg>
)
