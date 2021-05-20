import { themes } from '@storybook/theming'

// These globals prevent errors from Gatsby
global.__BASE_PATH__ = ''
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ''
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
}
