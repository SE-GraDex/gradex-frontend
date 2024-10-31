import type { ThemeConfig } from 'antd'

export const themes: ThemeConfig = {
  token: {
    colorPrimary: '##30E06C',
    colorInfo: '##30E06C',
    colorTextBase: '#000000',
    colorError: '#ff503e',
    colorWarning: '#ffc041',
    colorSuccess: '#77de44',
    fontSize: 16,
    fontFamily: 'IBM Plex Sans Thai',
  },
  components: {
    Checkbox: {
      colorPrimary: '#77de44',
      colorBgContainerDisabled: '#77de44',
      colorPrimaryBg: '#77de44',
      colorPrimaryHover: '#77de44',
    },
  },
}
