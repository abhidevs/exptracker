import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'
import App from './App'
import { Provider } from './context/context'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="fdd4dbf6-9a8a-4570-9680-f055ae1efeb8" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)