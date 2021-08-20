import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'
import App from './App'
import { Provider } from './context/context'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_APP_ID} language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)