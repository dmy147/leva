import { styled } from '../../styles'

export const RangeGrid = styled('div', {
  variants: {
    hasRange: {
      true: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gridColumnGap: '$colGap',
        alignItems: 'center',
      },
    },
  },
})