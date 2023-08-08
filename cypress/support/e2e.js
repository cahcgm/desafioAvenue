import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()
import '@frsource/cypress-plugin-visual-regression-diff'
import 'cypress-plugin-api'
import 'cypress-axe'
import './api_commands'
import './ui_commands'